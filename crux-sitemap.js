// Copyright 2020 Google LLC.
// SPDX-License-Identifier: Apache-2.0

const SITEMAPS = [
  'https://www.netcentric.biz/sitemap.xml'
];
const URLS = [
  'https://www.netcentric.biz/'
];
const ORIGINS = [
  'https://www.netcentric.biz/'
];
const FORM_FACTORS = [
  'DESKTOP',
  'PHONE',
  'ALL_FORM_FACTORS'
];

const CrUXApiUtil = {};
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
  FORM_FACTORS.forEach(function(formFactor) {    
    ORIGINS.forEach(function(origin) {
      getCrUXData('origin', origin, formFactor, 'Origin');
    });
    URLS.forEach(function(url) {
      getCrUXData('url', url, formFactor, 'Page (URL)');
      Utilities.sleep(250)
    });
    SITEMAPS.forEach(function(sitemap){

      getXMLSitemapObject(sitemap, function(sitemapObject) {
          var sitemapUrls = [];    
          var urls = sitemapObject.getElementsByTagName('url');
            
          for (var i = 0; i < urls.length; i++) {
              var urlElement = urls[i];

              var loc = urlElement.getElementsByTagName('loc')[0].textContent;
              var changefreq = urlElement.getElementsByTagName('changefreq')[0].textContent;
              var priority = urlElement.getElementsByTagName('priority')[0].textContent;

              sitemapUrls.push(loc);
          }
      });

      sitemapUrls.forEach(function(url){
        getCrUXData('url', url, formFactor, 'Page (Sitemap)');
        Utilities.sleep(250)
      });      
    });
  });
}

function getXMLSitemapObject(sitemapFile, callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if ((this.readyState === 4) && (this.status === 200)) {
            var sitemapContent = this.responseText;
            var sitemapObject = parseXMLSitemap(sitemapContent);
            callback(sitemapObject);
        }
    };
    xhttp.open('GET', sitemapFile, true);
    xhttp.send();
}

function parseXMLSitemap(sitemapContent) {
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(sitemapContent, 'text/xml');
    return xmlDoc;
}

function getCrUXData(key, value, formFactor, source) {
  const response = callAPI({
    [key]: value,
    formFactor
  });
  
  if (!response) {
    return;
  }
  
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
    Utilities.formatDate(new Date(), 'GMT+2', 'yyyy-MM-dd hh:mm'),
    ...args
  ]);
}
