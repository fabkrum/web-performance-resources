# Get CrUX data for a page step by step

## Problem to solve

Google is calculating the Core Web Vitals search ranking boost based on CrUX Data:

1. If a single page has enough traffic the page Core Web Vitals are used. **But which of your pages have enough traffic? If you follow the steps of this document you will know the answer soon.**
2. If the page has not enough data Google is grouping similar page together (see [Google Search Console](https://search.google.com/search-console))
3. If the page group has not enough data Google aggregates the data for whole site (see [Page Speed Insights](https://developers.google.com/speed/pagespeed/insights/))


## Generate your free CruX API Key

### Open the website

[Generate your free API Key](https://goo.gle/crux-api-key)

### Click on the "Get a Key" button

![CleanShot 2021-05-23 at 19 01 38](https://user-images.githubusercontent.com/21277749/119269781-bef65e80-bbf9-11eb-9d8d-1ef6b43d2fb4.png)

### Create a new projet

![CleanShot 2021-05-23 at 19 02 17](https://user-images.githubusercontent.com/21277749/119269829-f95ffb80-bbf9-11eb-947c-1a9bec214d11.png)

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

![CleanShot 2021-05-23 at 18 59 49](https://user-images.githubusercontent.com/21277749/119270615-dc2d2c00-bbfd-11eb-997c-6b6d6b6643c3.png)

### Open the project properties: File → Project properties

![CleanShot 2021-05-23 at 19 00 22](https://user-images.githubusercontent.com/21277749/119270674-27dfd580-bbfe-11eb-94ea-1e5d8c45ab2b.png)

### Create a new key/value pair for your API Key

Key name: CRUX_API_KEY (copy & paste)
Value: The API key you created before

![CleanShot 2021-05-23 at 19 01 07](https://user-images.githubusercontent.com/21277749/119270755-77be9c80-bbfe-11eb-9093-d4f608a0c315.png)


## Get a list of all page URLs

For the next step you need a list of the URLs of all pages of your website.
For most pages a manual approach would take for ever. Therefore we automate it.

### Find your sitemap.xml

* Most websites have a sitemap.xml in their root directory. Try to open the sitemap.xml in your browser `https://site-domain.com/sitemap.xml`
* If you are not lucky you might find them linked in the robots.txt file: `https://site-domain.com/robots.txt`
* If you are not lucky, you have to add the URLs manually or craete a sitemap.xml first.


### Extract the URLs from your sitemap.xml

#### Open the sitemap.xml in your browser `https://site-domain.com/sitemap.xml`

![CleanShot 2021-05-23 at 18 33 29](https://user-images.githubusercontent.com/21277749/119269027-e3503c00-bbf5-11eb-85aa-3e40f2255197.png)

#### Open your Chrome Developer Tools (⌥ + ⌘ + i) and open the "Console"

#### Copy & Paste the following script in your console and hit enter

```

```

## Add URLs to the script

### Paste the URLs in the 


## Change configuration (optional)


## Run the script

Depending on your configuration and the number of pages your site have this can take some time.

In the script log you see 

Most likely most of you pages (95%) will throw an error. This means there are not in the CrUX database and Google has not enough data to calulate a page Core Web Vital. Google will take a Page Group or the Origin Core Web Vitals instead.

Pages with enough data will be added to Google Sheet.
With the


### Color legend

#### URL/Origin (B):
* Green: All Core Web Vitals are good
* Yellow: At least one Core Vital needs improvement
* Red: At least one Core Web Vital is poor

#### P75 LCP (G)
* Green: < 2,500
* Yellow: In between
* Red: > 4,500

#### P75 FID (K)
* Green: < 100
* Yellow: In between
* Red: > 300

#### P75 CLS (O)
* Green: < 0.1
* Yellow: In between
* Red: > 0.25

Blue: Biggest segment for the metric


## Thanks to
* Rick Visconi for the original script and his great work on the CrUX data
* Barry Polland for his improvements and supporting me when I got stuck

