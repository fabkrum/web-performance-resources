# How to get your page Core Web Vitals from the CrUX API

## Problem to solve

Google is calculating the search ranking boost based on CrUX data in the following order.
If there is not enough data available, the Core Web Vitals of the next bigger group is used to calculate the ranking boost:

1. Page – **The big question is: Which of your pages have enough CrUX data?**
2. Page Group (see [Google Search Console](https://search.google.com/search-console))
3. Origin = all pages of the website aggregated (see [Page Speed Insights](https://developers.google.com/speed/pagespeed/insights/))

**If you follow all steps (~15 minutes), you will be ready to generate a Google Sheet with the CrUX data for your page:**

![image](https://user-images.githubusercontent.com/21277749/119415571-2abbf280-bcf2-11eb-9489-bad8851e805e.png)


## CrUX API - What data do I get?

* You get the 75 percentile of the last 28 days for each Core Web Vital.
* The CrUX API is updated daily between 8 am and 10 am (GMT).

More info:
* [Core Web Vitals - The final Countdown](https://www.netcentric.biz/insights/2021/05/core-web-vitals.html) by Fabian Krumbholz
* [Ask Me Anything - Core Web Vitals, Google I/O 05/2021](https://github.com/fabkrum/web-performance-resources/blob/master/googleio-core-web-vitals-ama.md)
* [An In-Depth Guide To Measuring Core Web Vitals](https://www.smashingmagazine.com/2021/04/complete-guide-measure-core-web-vitals/) by Barry Pollard
* [Everything you need to know about Core Web Vitals](https://github.com/fabkrum/web-performance-resources/blob/master/web-perf-resource-list.md#core-web-vitals) (Articles, Videos, Tools)
* [Chrome User Experience Report (CrUX)](https://developers.google.com/web/tools/chrome-user-experience-report)


## Limitations

The script will stop latest after 30 minutes. You will see the following error message in the execution log: "Exceeded maximum execution time"
If you see this error message, you can change the script run mode. Set the globalContinue variable to true `var globalContinue = true;`.
In this mode the script will check the URL in the last row of your Google Sheet and continues automatically with the next URL.
To check on URL takes ~700ms. When you start the script you will see an info with the number of URL which will be checked and the time approximately needed.

Google Sheets have a limitation of 5.000.000 cells, which translates to ~ 235.000 rows.
Usually only 5-10% of your pages have enough traffic for the CrUX data set. Therefore this solution should also work for very big pages.


## Generate your free CrUX API Key

To be able to use the CrUX API, you have to generate a key first:

### Open the website

[Generate your free API Key](https://goo.gle/crux-api-key)

### Click on the "Get a Key" button

![CleanShot 2021-05-23 at 19 01 38](https://user-images.githubusercontent.com/21277749/119269781-bef65e80-bbf9-11eb-9d8d-1ef6b43d2fb4.png)

### Create a new project

![CleanShot 2021-05-23 at 19 02 17](https://user-images.githubusercontent.com/21277749/119272572-d5ef7d80-bc06-11eb-8439-4247e41127dd.png)

### Name your project

![CleanShot 2021-05-23 at 19 02 33](https://user-images.githubusercontent.com/21277749/119269860-1c8aab00-bbfa-11eb-92b9-1685da0676d6.png)

### Copy your API Key

![CleanShot 2021-05-23 at 19 02 55](https://user-images.githubusercontent.com/21277749/119269939-7e4b1500-bbfa-11eb-83a0-f8cf5272fd8a.png)


## Prepare Google Sheet

### Open the Google Sheet Template

Open the [Google Sheet Template](https://docs.google.com/spreadsheets/d/12ufFf92pErPu5jy_vQmLLCkqjse7Sj894Radw6CTxcw/edit?usp=sharing) in your browser.

### Make a copy of the Google Sheet to get access to it: File → Make a copy

![CleanShot 2021-05-23 at 18 44 56](https://user-images.githubusercontent.com/21277749/119269373-ac7b2580-bbf7-11eb-8930-6e11b4681847.png)

### Open the Script Editor: Tools → Script Editor

![CleanShot 2021-05-23 at 18 59 28](https://user-images.githubusercontent.com/21277749/119270427-f286b800-bbfc-11eb-935c-78823f9c1b75.png)

### Open the script in the legacy editor to be able to set your API Key

Close the survey popup.

![CleanShot 2021-05-23 at 18 59 49](https://user-images.githubusercontent.com/21277749/119270615-dc2d2c00-bbfd-11eb-997c-6b6d6b6643c3.png)

### Open the project properties: File → Project properties

![CleanShot 2021-05-23 at 19 00 22](https://user-images.githubusercontent.com/21277749/119270674-27dfd580-bbfe-11eb-94ea-1e5d8c45ab2b.png)

### Create a new key/value pair for your API Key

Key name: CRUX_API_KEY (copy & paste)
Value: The API key you created before

![CleanShot 2021-05-23 at 19 01 07](https://user-images.githubusercontent.com/21277749/119270755-77be9c80-bbfe-11eb-9093-d4f608a0c315.png)


### Switch back to the new editor

![CleanShot 2021-05-24 at 14 55 13](https://user-images.githubusercontent.com/21277749/119350916-2cf56100-bca0-11eb-9691-49a5e0b04651.png)


![image](https://user-images.githubusercontent.com/21277749/119411155-3d322e00-bcea-11eb-93c5-dac234de2b7e.png)


## Run Modes

The script has two run modes:
* `var globalContinue = false` (default): The script starts fresh from the beginning.
* `var globalContinue = true`: The script checks the last row of your Google Sheet and continues with the next URL. You can use this mode if the script stopped for any reasons and you want to continue.


```
// RUN MODE
// true = script continues with the last url in the Google Sheet
// false = script starts fresh from the beginning
var globalContinue = false;
```

You can also manually set the start point (instead of the last row) where the script should continue.
As this might be not an often used feature I added it in the "DO NOT CHANGE" area of the code.

```
// If you don't want the script to continue with the last row URL,
// you can define the start point manually by setting all values.

// Origin, Page (URL), Page (Sitemap)
START_CONDITION.TYPE = '';
// URL which exists in any Sitemap
START_CONDITION.URL = '';
// PHONE, DESKTOP, ALL_FORM_FACTORS
START_CONDITION.FORM_FACTOR = '';
```

## Add URLs

### There are two ways to add your page URLs:
* Add one or multiple sitemaps (recommended)
* Add URLs manually

You can use both methods at the same time.

### Use the right format:
* If you don't want to add data, just leave it as it is: `const URLS = [];`.
* All URLs have to be surrounded by single quotes `'https://www.your-domain.com/'`
* If you want to add multiple URLs, add a comma at the end of the line `'https://www.your-domain.com/blog',`
* Don't add a comma after the last URL


### Add Sitemap(s) - optional

* Most websites have a sitemap.xml in their root directory. Try to open the sitemap.xml in your browser `https://site-domain.com/sitemap.xml`
* If you are not lucky, you might find their location in the robots.txt file: `https://site-domain.com/robots.txt`
![image](https://user-images.githubusercontent.com/21277749/119967745-faec4380-bfac-11eb-8025-95dd2572a54d.png)
* If you are still not lucky, add the URLs manually or create a sitemap.xml first.

Larger sites often use a sitemapindex.xml which links to multiple sitemap.xml files.
If the script detects index pages it collects the urls of all linked sitemaps.

In the Google Sheet "Type" column, sitemap entries are named: "Page (Sitemap)".

```
const SITEMAPS = [
  'https://www.netcentric.biz/sitemapindex.xml',
  'https://www.netcentric.biz/sitemap.xml'
];
```

### Add URL(s) - optional

Here you can add one more URLs manually.

```
const URLS = [
  'https://www.netcentric.biz/',
  'https://www.netcentric.biz/career',
  'https://www.netcentric.biz/blog'
];
```

In the Google Sheet "Type" column, sitemap entries are named: "Page (URL)".


## Add Origin(s) - optional

The origin aggregates the Core Web Vitals from all pages of your site.
In the Google Sheet "Type" column, sitemap entries are named: "Origin".

```
const ORIGINS = [
  'https://www.netcentric.biz/'
];
```

## Configure the form factors (optional)

For each form factor, the script has to check all sitemaps, URLs, and origins.

```
const FORM_FACTORS = [
  'DESKTOP',
  'PHONE',
  'ALL_FORM_FACTORS'
];
```

To speed up the process, you might only want to check the mobile data:

```
const FORM_FACTORS = [
  'PHONE'
];
```

## Configure timezone and formats (optional)

You can easily change the timezone and the format for the date and time.
The script is using the simple date format ([Simple Date Format Documentation](https://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html)).

Default (Europe, Berlin):

```
const TIMEZONE = 'GMT+2';
const DATEFORMAT = 'yyyy-MM-dd';
const TIMEFORMAT = 'HH:mm:ss';
```

## Run the script

**Warning:** Depending on your configuration and the number of pages your site has, this can take some time (250ms per URL).

![CleanShot 2021-05-24 at 15 08 21](https://user-images.githubusercontent.com/21277749/119352796-69c25780-bca2-11eb-9691-179506409ee5.png)

If you see the following Popup, please click on "Review permissions" and login. with your Google credentials.

![CleanShot 2021-05-24 at 17 16 56](https://user-images.githubusercontent.com/21277749/119371275-8b2d3e80-bcb6-11eb-99ae-396df3175080.png)


* In the "Execution log" below the script, you can follow what the script is doing.
* Don't get nervous if you see a lot of error messages. These are your pages with not enough CrUX data (most likely, only 5% of your pages will have CrUX data)
* The script adds all pages with enough data to the Google Sheet.
* If you see the message "Execution completed", the script has finished, and the Google Sheet is ready.
* If you get the "Exceeded maximum execution time" error message you can change the run mode `var globalContinue = true;` and start the script again.


![CleanShot 2021-05-24 at 15 08 33](https://user-images.githubusercontent.com/21277749/119353300-008f1400-bca3-11eb-8f07-4b2f9f4315c7.png)


## Check the Google Sheet

![image](https://user-images.githubusercontent.com/21277749/119415571-2abbf280-bcf2-11eb-9489-bad8851e805e.png)

### Legend

#### Metric Headlines:
* Green: The average of the metric is good
* Yellow: The average of the metric needs improvement
* Red: The average of the metric is poor

#### URL/Origin (B):
* Green: All Core Web Vitals are good
* Yellow: At least one Core Vital needs improvement
* Red: At least one Core Web Vital is poor

#### P75 FCP (G)
* Green: <= 2,000
* Yellow: In between
* Red: > 4,000

#### P75 LCP (G)
* Green: <= 2,500
* Yellow: In between
* Red: > 4,000

#### P75 FID (K)
* Green: <= 100
* Yellow: In between
* Red: > 300

#### P75 CLS (O)
* Green: <= 0.1
* Yellow: In between
* Red: > 0.25

Blue: Biggest segment for the metric

## Thanks to
* [Rick Viscomi](https://twitter.com/rick_viscomi) for the original script and feedback
* [Barry Pollard](https://twitter.com/tunetheweb) for helping me to figure this all out
