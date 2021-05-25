// Copyright 2020 Google LLC.
// SPDX-License-Identifier: Apache-2.0

/** 
 * ====================================================================================================================================
 * CONFIGURATION
 * ====================================================================================================================================
 * */

// RUN MODE
// true = script continues with the last url in the Google Sheet
// false = script starts fresh from the beginning
var globalContinue = false;

const SITEMAPS = [
  
];
const URLS = [

];
const ORIGINS = [
  
];
const FORM_FACTORS = [
  'DESKTOP',
  'PHONE',
  'ALL_FORM_FACTORS'
];

// Format: https://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html
const TIMEZONE = 'GMT+2';
const DATEFORMAT = 'yyyy-MM-dd';
const TIMEFORMAT = 'HH:mm:ss';

/** 
 * ====================================================================================================================================
 * DO NOT CHANGE ANYTHING BELOW
 * ====================================================================================================================================
 * */ 

// Global variables
var globalCounterChecked = 0;
var globalCounterAdded = 0;
var globalActive = true;

const CrUXApiUtil = {};
const START_CONDITION = {};

// If you don't want the script to continue with the last row URL,
// you can define the start point manually by setting all values.
START_CONDITION.TYPE = '';
START_CONDITION.URL = '';
START_CONDITION.FORM_FACTOR = '';

// Get your CrUX API key at https://goo.gle/crux-api-key.
// Set your CrUX API key at File > Project properties > Script properties (You have to use the legacy editor - link in top right corner)
CrUXApiUtil.API_KEY = PropertiesService.getScriptProperties().getProperty('CRUX_API_KEY');
CrUXApiUtil.API_ENDPOINT = `https://chromeuxreport.googleapis.com/v1/records:queryRecord?key=${CrUXApiUtil.API_KEY}`;
CrUXApiUtil.query = function (requestBody) {
  if (!CrUXApiUtil.API_KEY) {
    throw 'Script property `CRUX_API_KEY` not set. Get a key at https://goo.gle/crux-api-key.';
  }
  let response 
  
  try {
    response = UrlFetchApp.fetch(CrUXApiUtil.API_ENDPOINT, {
      method: 'POST',
      payload: requestBody
    })
    response = JSON.parse(response.getContentText());
    if (response.error) {
      throw `Error: ${response.error.message} ${JSON.stringify(requestBody, null, 2)}`;
    }
  } catch (NOT_FOUND) {
      console.error('Url not found:', requestBody.url || requestBody.origin);
  }
  return response;
};

function monitor() {
  if (globalContinue === true) {
    Logger.warning('RUN MODE: The script continues where it stopped last time');
    setStartCondition();
    globalActive = false;    
  } else {
    Logger.warning('RUN MODE: The script starts fresh');
  }

  FORM_FACTORS.forEach(function(formFactor) {
    ORIGINS.forEach(function(origin) {
      checkStartCondition('origin', origin, formFactor, 'Origin');      
    });
    URLS.forEach(function(url) {
      checkStartCondition('url', url, formFactor, 'Page (URL)');      
    });
    SITEMAPS.forEach(function(sitemap){            
        var xml = getSitemap(sitemap);
        var urls = getSitemapUrls(xml);
    
        urls.forEach(function(url){
            checkStartCondition('url', url, formFactor, 'Page (Sitemap)');            
        });
    });
  });
}

function setStartCondition() {
  
  if (START_CONDITION.hasOwnProperty('TYPE') && START_CONDITION.TYPE
      && START_CONDITION.hasOwnProperty('URL') && START_CONDITION.URL
      && START_CONDITION.hasOwnProperty('FORM_FACTOR') && START_CONDITION.FORM_FACTOR) {
    Logger.warning('Start Condition (Set by user): URL: ' + START_CONDITION.URL + ' / Type: ' + START_CONDITION.TYPE + ' / Form Factor: '+ START_CONDITION.FORM_FACTOR);  
  } else {
    var values = getLastEntry();

    START_CONDITION.TYPE = values[0][0];
    START_CONDITION.URL = values[0][1];
    START_CONDITION.FORM_FACTOR = values[0][2];

    Logger.warning('Start Condition (Last Row): URL: ' + START_CONDITION.URL + ' / Type: ' + START_CONDITION.TYPE + ' / Form Factor: '+ START_CONDITION.FORM_FACTOR);
  }
}

function getLastEntry() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var lastRow = sheet.getLastRow();
  var data = sheet.getRange(lastRow, 3, 1, 3).getValues();

  return data;
}

function checkStartCondition(source, url, formFactor, type) {

  if (globalActive === true) {
    getCrUXData(source, url, formFactor, type);
    globalCounterChecked++;
    let percentAdded = Math.round((globalCounterAdded * 100 / globalCounterChecked) * 100) / 100;
    Logger.info(globalCounterAdded + '/' + globalCounterChecked + ' (' + percentAdded + '%) / ' + type + ' / ' + formFactor + ' / ' + url);
    Utilities.sleep(250);    
  }

  if (globalActive === false) {      
      if (url === START_CONDITION.URL
            && formFactor === START_CONDITION.FORM_FACTOR
            && type === START_CONDITION.TYPE) {
        globalActive = true;
        Logger.warning('The start condition has occurred. The script continues now with the new URLs.');
      } 
  }

  return;
}

function getSitemap(sitemap) {
  var xml = UrlFetchApp.fetch(sitemap).getContentText();
  
  return xml;
}

function getSitemapUrls(xml) {  
  var urls = [];
  var document = XmlService.parse(xml);
  var root = document.getRootElement();
  var sitemaps = XmlService.getNamespace('http://www.sitemaps.org/schemas/sitemap/0.9');
  var entries = root.getChildren('url', sitemaps);

  for (var i = 0; i < entries.length; i++) {    
    urls.push(entries[i].getChild('loc', sitemaps).getText());
  }

  return urls;
}

function getCrUXData(key, value, formFactor, source) {
  const response = callAPI({
    [key]: value,
    formFactor
  });

  if (!response) {     
    return;
  }
  
  globalCounterAdded++;

  const fcp = getMetricData(response.record.metrics.first_contentful_paint);
  const lcp = getMetricData(response.record.metrics.largest_contentful_paint);
  const fid = getMetricData(response.record.metrics.first_input_delay);
  const cls = getMetricData(response.record.metrics.cumulative_layout_shift);
  addRow(source, value, formFactor,
         fcp.good, fcp.ni, fcp.poor, fcp.p75,
         lcp.good, lcp.ni, lcp.poor, lcp.p75,
         fid.good, fid.ni, fid.poor, fid.p75,
         cls.good, cls.ni, cls.poor, cls.p75);
}

function callAPI(request) {
  try {
    return CrUXApiUtil.query(request);
  } catch (error) {
    console.error(error);
  }
}

function getMetricData(metric) {
  if (!metric) {
    return {};
  }
  
  return {
    good: metric.histogram[0].density,
    ni: metric.histogram[1].density,
    poor: metric.histogram[2].density,
    p75: metric.percentiles.p75
  };
}

function addRow(...args) {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getActiveSheet();
  sheet.appendRow([
    Utilities.formatDate(new Date(), TIMEZONE, DATEFORMAT),
    Utilities.formatDate(new Date(), TIMEZONE, TIMEFORMAT),
    ...args
  ]);
}
