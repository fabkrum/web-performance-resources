# Web Performance Resources

> This is a list of sources I personally found useful to learn about web performance.
> I keep this list up to date and add new great resources often.
> If you know great resources which aren’t covered here please create a pull request.

## Table of Contents

* [Stay up to date](#stay-up-to-date)
    + [Community & Social Media](#community--social-media)
    + [Newsletter](#newsletter)
    + [Blogs](#blogs)
    + [Web Performance Meetups](#web-performance-meetups)
    + [Conferences](#conferences)
    + [Podcasts](#podcasts)
    + [Video Formats](#video-formats)
* [Core Web Vitals](#core-web-vitals)
* [Articles](#articles)
    + [General](#general)
    + [SEO & Marketing](#seo-and-marketing)
    + [Network and Caching](#network-and-caching)
    + [Image and Video Optimization](#image-and-video-optimization)
    + [Web Fonts](#web-fonts)
    + [Measure Performance](#measure-performance)
    + [Third-Party Services](#third-party-services)
    + [Optimise the Critical Render Path](#optimise-the-critical-render-path)
    + [Javascript and Render Performance](#javascript-and-render-performance)
    + [Perceived performance](#perceived-performance)
    + [Tooling Articles](#tooling-articles)
* [Online courses](#online-courses)
    + [Free Web Courses](#free-web-courses)
    + [Free Video Courses](#free-video-courses)
    + [Paid Video Courses](#paid-video-courses)
* [Videos](#videos)
    + [A crash course on web performance](#a-crash-course-on-web-performance)
    + [Business](#business)
    + [Third-Party Services](#third-party-services-1)
    + [The Psychology of Performance](#the-psychology-of-performance)
    + [Network and Caching](#network-and-caching)
    + [Measure](#measure)
    + [Tooling](#tooling)
    + [Image and Video](#image-and-video)
    + [Development](#development)
    + [Meta](#meta)
    + [Twitch](#twitch)
* [Books](#books)
* [Tools](#tools)
    + [Free tools and services](#free-tools-and-services)
        + [Webpagetest](#webpagetest)
        + [Lighthouse & CrUX & Core Web Vitals](#lighthouse--crux--core-web-vitals)
        + [Images](#images)
        + [Thirdparty](#thirdparty)
        + [Development Tools](#development-tools)
        + [Network Tools](#network-tools)
        + [Fonts](#fonts)
        + [Browser Extensions](#browser-extensions)
        + [Other Tools](#other-tools)
    + [Paid tools and services](#paid-tools-and-services)
* [Open Source Projects](#open-source-projects)
* [Studies](#studies)
* [Case studies](#case-studies)
* [Open data sources](#open-data-sources)
* [W3C Standards](#w3c-standards)
* [Build a fast blog with Eleventy](#11ty)
* [Checklists](#checklists)

## Legend

ℹ️  = Official sources (most often Google announcements)

🚀  = Must read articles

📚  = Resources I use regulary

🎥  = Video


## Stay up to date


### Community & Social Media

* This [Web Performance Twitter-List](https://twitter.com/fabkru/lists/web-performance) makes it easy for you to follow all the web performance authors, speakers, and evangelists at once - 📚

* Twitter: [#webperf](https://twitter.com/search?q=%23webperf), [#perfmatters](https://twitter.com/search?q=%23perfmatters)

* [Web performance Slack channel ](https://webperformance.slack.com/) - 📚
Slack channel which is focusing on web performance with more than 1.400 members

* [WebPerf Working Group Meetings](https://www.youtube.com/playlist?list=PL5b8e1JT2i4a3PqaF4a6tVfqZela-pSky), Understand what topics are discussed and be prepared for what is coming in the future


### Newsletter

* [Perf.email by Calibre](https://calibreapp.com/newsletter), The newsletter contains mainly web performance articles which are not directly connected with their product. Therefore I can recommend to follow it.

* [Webpagetest.org Newsletter](https://blog.webpagetest.org/newsletter/), Weekly Newsletter with Webpagetest.org updates and articles

* [Web performance newsletter](https://marcradziwill.com/newsletter/) weekly web performance newsletter by [Marc Radziwill](https://marcradziwill.com/)

* [WPRocket](https://wp-rocket.me/newsletter/)

* [Smashing Magazine Newsletter](https://www.smashingmagazine.com/the-smashing-newsletter/)
This is not a Web Performance only Newsletter

* [Maximiliano Firtman's Newsletter](https://firt.dev/newsletter/)

* [Dev Tips](https://umaar.com/dev-tips/), Umar Hansa, weekly
Great resource to learn the newest Chrome Dev Tools tips and tricks


### Blogs

* [WebPageTest Blog](https://blog.webpagetest.org/)

* [Calibre Blog](https://calibreapp.com/blog)

* [RUMVision](https://www.rumvision.com/blog/)

* [Harry Roberts](https://csswizardry.com/archive/)

* [Andy Davies](https://andydavies.me/)

* [Matt Hobbs](https://nooshu.github.io/blog/)

* [Simon Hearne](https://simonhearne.com/)

* [Barry Pollard](https://www.tunetheweb.com/blog/)

* [Addy Osmani](https://medium.com/@addyosmani)

* [3Perf](https://3perf.com/content)

* [Marc Radziwill](https://marcradziwill.com/blog/)

* [Paul Calvano](https://paulcalvano.com/writing/)

* [Planet Performance](http://www.perfplanet.com/)
Overview of performance related blogs

* [Medium articles about web performance](https://medium.com/tag/web-performance/latest)

* [The speed of thought - Posts from the Performance Team at Wikimedia](https://phabricator.wikimedia.org/phame/blog/view/7/)


### Podcasts
* [Chasing Waterfalls - Tim Kadlec](https://chasingwaterfalls.io/)

* [Planet Performance Podcast - Stoyan Stefanov](https://podcast.perfplanet.com/)


### Video Formats

* [WebPageTest - Twitch](https://www.twitch.tv/webpagetest): Bi-weekly live show on Twitch by Tim Kadlec around Webpagetest topics (Catchpoint)

* [Speed@Scale](https://www.youtube.com/hashtag/speedatscale): Web Performance audits by Tracy Lee (@ladyleet) and guests


### Web Performance Meetups

Look for a performance Meetup group close to where you live. This is a great opportunity to share and discuss ideas with other performance experts. Here are some groups close to our offices:

* Barcelona: [https://www.meetup.com/Barcelona-Web-Performance/](https://www.meetup.com/Barcelona-Web-Performance/)

* Berlin: [https://www.meetup.com/Berlin-Web-Performance-Group/](https://www.meetup.com/Berlin-Web-Performance-Group/)

* London: [https://ldnwebperf.org/](https://ldnwebperf.org/)

* Munich: [https://www.meetup.com/Munchen-Web-Performance-Group/](https://www.meetup.com/Munchen-Web-Performance-Group/)

* New York City [https://www.meetup.com/Web-Performance-NY/](https://www.meetup.com/Web-Performance-NY/)

* Toronto: [https://www.meetup.com/Toronto-Web-Performance-Group/](https://www.meetup.com/Toronto-Web-Performance-Group/)


### Conferences

This are all conferences with a strong focus on web performance.
They all have a very good lineup:

* [Lazy Load 2021](https://www.webdirections.org/lazyload/)
  (June 11 & 18, online event, Ticket: Starting at 119 USD)

* [Performance.now()](https://perfnow.nl/) / [Twitter](https://twitter.com/perfnowconf)
11–12 November 2021, Amsterdam, Netherland (Ticket: 550 EUR + VAT) – The event where the Web Perf family comes together in Europe (must go event)

* [We love speed](https://www.welovespeed.com/), Bordeaux, France – Not very international, most of the talks are French

* [#perfMatters](https://perfmattersconf.com/) / [Twitter](https://twitter.com/perfmattersconf)
Redwood City, California, USA


## Core Web Vitals

* [The 9 most effective Core Web Vitals opportunities of 2023](https://www.youtube.com/watch?v=mdB-J6BRReo), Barry Pollard, 05/2023

* [Advancing Interaction to Next Paint](https://web.dev/inp-cwv/), Rick Viscomi, Annie Sullivan, 05/2023

* [How to optimize web responsiveness with Interaction to Next Paint](https://www.youtube.com/watch?v=KZ1kxzsJZ5g), Annie Sullivan, Michal Mocny, 05/2023

* [Largest Contentful Paint update in Chrome version 112](https://www.rumvision.com/blog/largest-contentful-paint-update-in-chrome-version-112/), Karlijn Löwik, 04/2023

* [Optimize Time to First Byte (TTFB)](https://web.dev/optimize-ttfb/), Jeremy Wagner, 01/2023

* [Optimizing Largest Contentful Paint (LCP)]([)https://www.youtube.com/watch?v=JhTR2fz68ec), Harry Roberts, 10/2022

* [Google's top Core Web Vitals recommendations for 2023](https://web.dev/top-cwv-2023/), Barry Pollard, Rick Viscomi, Philip Walton, Jeremy Wagner, Brendan Kenny, 01/2023 

* [What goes into making a new Web Vital metric](https://calendar.perfplanet.com/2022/making-a-new-web-vital-metric/), Annie Sullivan, 12/2022

* [Why is CrUX data different from my RUM data?](https://web.dev/crux-and-rum-differences/), Barry Pollard, 08/2022

* [Luxury retailer Farfetch sees higher conversion rates for better Core Web Vitals]([https://developer.chrome.com/docs/crux/](https://web.dev/farfetch/)), Rui Santos & Manuel Garcia & Patrícia Couto Neto & Dikla Cohen, 07/2022

* [Chrome UX Report documentation](https://developer.chrome.com/docs/crux/), 07/2022 - ℹ️

* [Optimising Largest Contentful Paint](https://csswizardry.com/2022/03/optimising-largest-contentful-paint/), Harry Roberts, 03/2022

* [Optimising Core Web Vitals on SPAs](https://simonhearne.com/2022/core-web-vitals-on-spas/), Simon Hearne, 03/2022

* [How To Benchmark And Improve Web Vitals With Real User Metrics](smashingmagazine.com/2022/02/benchmark-improve-web-vitals-real-user-metrics/), Átila Fassina, 02/2022

* [Improving Core Web Vitals, A Smashing Magazine Case Study](https://www.smashingmagazine.com/2021/12/core-web-vitals-case-study-smashing-magazine/), Barry Pollard, 12/2021

* [Hands On with the new Responsiveness Metrics](https://calendar.perfplanet.com/2021/hands-on-with-the-new-responsiveness-metrics/), Hongbo Song, 12/2021

* [Have Core Web Vitals made the web faster?](https://calendar.perfplanet.com/2021/have-core-web-vitals-made-the-web-faster/), Barry Pollard, 12/2021

* [Towards an animation smoothness metric](https://web.dev/smoothness/), Michal Mocny & Behdad Bakhshinategh & Jonathan Ross, 11/2021

* [An experimental responsiveness metric](https://web.dev/responsiveness/), Hongbo Song, 11/2021

* [CLS at BuzzFeed — Part 1: Raising The Floor](https://tech.buzzfeed.com/improving-cumulative-layout-shift-at-buzzfeed-part-1-8b7ead2381dd), Edgar Sanchez, 11/2021

* [CLS at BuzzFeed — Part 2: Getting Help From Real Users](), Edgar Sanchez, 11/2021

* [CLS at BuzzFeed — Part 3: Dealing with the unpredictable](https://tech.buzzfeed.com/improving-cumulative-layout-shift-at-buzzfeed-part-2-2a846adeb097), Edgar Sanchez, 11/2021

* [CWV will become a desktop ranking factor in February 2022](https://developers.google.com/search/blog/2021/11/bringing-page-experience-to-desktop) - ℹ️

* [Send feedback to the Google Core Web Vitals Team](https://groups.google.com/g/web-vitals-feedback) - ℹ️

* [Core Web Vitals Changelog](https://chromium.googlesource.com/chromium/src/+/refs/heads/main/docs/speed/metrics_changelog/README.md) - ℹ️

* [Case Study: Renault Group](https://web.dev/renault/), Thierry Coustillac & Antoine Bisch & Cédric Bazureau, 10/2021

* [Core Web Vitals Optimizer (proven process & open-source tool)](https://github.com/fabkrum/core-web-vitals-optimizer/blob/main/README.md), Fabian Krumbholz, 09/2021 - 📚

* [How SPA architectures affect Core Web Vitals](https://web.dev/vitals-spa-faq/), Philip Walton & Yoav Weiss, 09/2021

* [Web Vitals patterns](https://web.dev/patterns/web-vitals-patterns/), Katie Hempenius, 09/2021 - 📚

* [Insight into Core Web Vitals from the Chrome Platform Team](https://www.youtube.com/watch?v=CcHCbFhx2UM), Annie Sullivan & Katie Hempenius, 08/2021

* [Why lab and field data can be different (and what to do about it)](https://web.dev/lab-and-field-data-differences/), Philip Walton, 08/2021

* [A performance-focused workflow based on Google tools](https://web.dev/vitals-tools-workflow/), Antoine Bisch & Garima Mimani, 08/2021

* [HTTP Archive: CrUX Report](https://httparchive.org/reports/chrome-ux-report), HTTP Archive, Monthly Update

* [Prevent unwanted Layout Shifts caused by Scrollbars with the scrollbar-gutter CSS property](https://www.bram.us/2021/07/23/prevent-unwanted-layout-shifts-caused-by-scrollbars-with-the-scrollbar-gutter-css-property/), Bramus Van Damme, 07/2021

* [Simulating real users in the lab to debug CLS issues](https://dev.to/rick_viscomi/simulating-real-users-in-the-lab-to-debug-cls-issues-3hnp), Rick Viscomi, 07/2021

* [Towards a better responsiveness metric](https://web.dev/better-responsiveness-metric/), Nicolás Peña Moreno & Annie Sullivan & Hongbo Song, 06/2021 – ℹ️

* [The do’s and don’ts of Core Web Vitals](https://contentsquare.com/blog/the-dos-and-donts-of-core-web-vitals-with-iprospect/), Ric Riley, 06/2021

* [More time, tools, and details on the page experience update](https://developers.google.com/search/blog/2021/04/more-details-page-experience), Google Search Central, 05/2021 - ℹ️

* [Improving Cumulative Layout Shift at Telegraph Media Group](https://web.dev/telegraph/), Chris Boakes, 06/2021

* [CSS for Web Vitals](https://web.dev/css-web-vitals/), Katie Hempenius & Una Kravets, 06/2021

* [Business impact of Core Web Vital optimizations](https://wpostats.com/tags/core%20web%20vitals/), WPO Stats, Updated regularly - 📚

* [What can the HTTP Archive tell us about Largest Contentful Paint?](https://paulcalvano.com/2021-06-07-lcp-httparchive/), Paul Calvano, 06/2021

* [How To Fix Cumulative Layout Shift (CLS) Issues](https://www.smashingmagazine.com/2021/06/how-to-fix-cumulative-layout-shift-issues/), Barry Pollard, 06/2021

* [Core Web Vitals Tracking via GA4, BigQuery and Google Data Studio](https://bigcommerce.websiteadvantage.com.au/core-web-vitals-ga4-bigquery-data-studio/), Tony McCreath, 06/2021

* [Core Web Vitals – The Final Countdown](https://www.netcentric.biz/insights/2021/05/core-web-vitals.html), Fabian Krumbholz, 05/2021

* [How to get your page Core Web Vitals from the CrUX API](https://github.com/fabkrum/web-performance-resources/blob/master/crux-page-data.md), Fabian Krumbholz, 05/2021

* [What's new in Web Vitals](https://www.youtube.com/watch?v=XxvHY4wC8Co), Google I/O, 05/2021 - ℹ️

* [The business impact of Core Web Vitals](http://youtube.com/watch?v=nPmAE0YjGK0), Google I/O, 05/2021

* [Ask Me Anything - Core Web Vitals](https://www.youtube.com/watch?v=HWm6WNkHs90&t=615s), Google I/O 2021, 05/2021

* [Optimizing Web Vitals using Lighthouse](https://web.dev/optimize-vitals-lighthouse/), Addy Osmani, 05/2021

* [Cumulative Layout Shift: Measure and Avoid Visual Instability](https://calibreapp.com/blog/cumulative-layout-shift), Karolina Szczur, 05/2021

* [Measuring Core Web Vitals](https://www.youtube.com/watch?v=9RpREJjoeRI), Barry Pollard, 05/2021

* [More time, tools, and details on the page experience update](https://developers.google.com/search/blog/2021/04/more-details-page-experience), Jeffrey Jose (Google), 04/2021 – ℹ️

* [The Almost-Complete Guide to Cumulative Layout Shift](https://jessbpeck.com/posts/completecls/), Jess B Pack, 04/2021

* [An In-Depth Guide To Measuring Core Web Vitals](https://www.smashingmagazine.com/2021/04/complete-guide-measure-core-web-vitals/), Barry Pollard, 04/2021 – 🚀

* [Diving Into the New Cumulative Layout Shift](https://blog.webpagetest.org/posts/understanding-the-new-cumulative-layout-shift/), Tim Kadlec, 04/2021

* [Evolving the CLS metric](https://web.dev/evolving-cls/), Annie Sullivan (Google), 04/2021 – ℹ️

* [Debug Web Vitals in the field](https://web.dev/debug-web-vitals-in-the-field/), Philip Walton, 04/2021

* [Debug layout shifts](https://web.dev/debug-layout-shifts/), Katie Hempenius, 03/2021

* [Cookie Banners and Web Vitals](https://blr.design/blog/cookie-banner-web-vitals/), Brian Louis Ramirez, 03/2021

* [How to create a competitive analysis dashboard for Core Web Vitals using Google Data Studio](https://www.deepcrawl.com/blog/best-practice/competitive-analysis-core-web-vitals-google-data-studio/), Rachel Anderson, 03/2021

* [Case Study Vodafone: A 31% improvement in LCP increased sales by 8%](https://web.dev/vodafone/), Davide Grossi, 03/2021

* [Cumulative Layout Shift Study of Over 1 Million Websites](https://www.seoclarity.net/blog/core-web-vitals-study), Mitul Gandhi, 02/2021

* [Analyzing Web Vitals with WebPageTest](https://calendar.perfplanet.com/2020/analyzing-web-vitals-with-webpagetest/), Patrick Meenan, 12/2020

* [How to Improve Core Web Vitals](https://simonhearne.com/2020/core-web-vitals/), Simon Hearne, 10/2020

* [Cumulative Layout Shift in Practice](https://nicj.net/cumulative-layout-shift-in-practice/), Nic Jansma, 10/2020

* [Cumulative Layout Shift in the Real World](https://nicj.net/cumulative-layout-shift-in-the-real-world/), Nic Jansma, 10/2020

* [Optimize for Core Web Vitals](https://www.youtube.com/watch?v=AQqFZ5t8uNc), Addy Osmani, 06/2020 – 🚀 & 🎥

* [Web Vitals - Essential metrics for a healthy site](https://web.dev/vitals/), 05/2020

* [Defining the Core Web Vitals metrics thresholds](https://web.dev/defining-core-web-vitals-thresholds/), Bryan McQuade, 05/2020

* [The Science Behind Web Vitals](https://blog.chromium.org/2020/05/the-science-behind-web-vitals.html), Amar Sagoo / Annie Sullivan / Vivek Sekhar, 05/2020

* [Evaluating page experience for a better web](https://developers.google.com/search/blog/2020/05/evaluating-page-experience), Sowmya Subramanian (Google), 05/2020 – ℹ️ 

* [Lessons learned from performance monitoring in Chrome](https://www.youtube.com/watch?v=ctavZT87syI) ([Slides](https://www.slideshare.net/AnnieSullivan9/monitoring-and-metrics-in-chrome-196438420)), Annie Sullivan, 11/2019 – 🎥

### Core Web Vitals Tools

* [Layout Shift GIF Generator](https://defaced.dev/tools/layout-shift-gif-generator/): Visualise the Core Web Vitals metric Cumulative Layout Shift (CLS) with a simple GIF.

* [Cumulative Layout Shift Debugger](https://webvitals.dev/cls): Visualise the Cumulative Layout Shift (CLS) to identify what needs improving on mobile and/or desktop in the initial load of a website.

## Articles

### General

* [The Performance Inequality Gap, 2023](https://infrequently.org/2022/12/performance-baseline-2023/), Alex Russell, 12/2022

* [Browser Cookie Status](https://www.cookiestatus.com/), Simo Ahava - 📚

* [Website performance and the planet](https://blog.webpagetest.org/posts/website-performance-and-the-planet/), Fershad Irani, 01/2022

* [Should you use a carousel on your website?](https://www.pragm.co/post/should-you-use-a-carousel-on-your-website), Myriam Jessier, 12/2021

* [2021 Chrome Dev Summit: Web Performance 101 (Slides)](https://www.slideshare.net/tammyeverts/2021-chrome-dev-summit-web-performance-101?from_action=save), Tammy Everyts, 11/2021

* [Web Alamnac 2021: Web Performance](https://almanac.httparchive.org/en/2021/performance), Sia Karamalegos, 11/2021

* [My Challenge to the Web Performance Community](https://philipwalton.com/articles/my-challenge-to-the-web-performance-community/), Philip Walton, 10/2021

* [Personalizing Performance: Adapting Application in real time to member environments](https://www.linkedin.com/pulse/personalizing-performance-adapting-application-real-time-pasumarthy/), Nitin Pasumarthy, 09/2021

* [The metrics game](https://tech.bluesmoon.info/2021/08/the-metrics-game.html), Philip Tellis, 08/2021

* [Hobson's Browser](https://infrequently.org/2021/07/hobsons-browser/), Alex Rusell, 07/2021

* [Fast load times Techniques for improving site performance.](https://web.dev/fast/)

* [Website Speed: Advice from the trenches](https://www.cmg.digital/website-speed-advice-from-the-trenches), Bojan Basrak, 05/2021

* [Opting your Website out of Google's FLoC Network](https://paramdeo.com//blog/opting-your-website-out-of-googles-floc-network), Paramdeo Singh, 04/2021

* [How to Convince Your Boss to Care About Speed](https://calibreapp.com/blog/convince-your-boss-about-performance), Karolina Szczur, 04/2021

* [So You Want To Make Your Website Faster?](https://medium.com/codex/so-you-want-to-make-your-website-faster-d2a00db39097), Jason Knight, 04/2021

* [prefers-reduced-motion: Taking a no-motion-first approach to animations](https://tatianamac.com/posts/prefers-reduced-motion/), Tatiana Mac, 03/2021

* [The Performance Inequality Gap, 2021](https://infrequently.org/2021/03/the-performance-inequality-gap/), Alex Russell, 03/2021

* [Site Speed and Search Ranking (Complete Guide)](https://calibreapp.com/blog/site-speed-search-ranking-complete-guide), Ben Schwarz, 02/2021 

* [Finally – a way to calculate revenue impact of site speed](https://digies.se/site-speed/finally-a-way-to-calculate-revenue-impact-of-site-speed), Lina Hansson, 01/2021

* [Blood pressure study: Which website issue cause users the most stress?](https://www.netimperative.com/2020/12/09/blood-pressure-study-which-website-issue-cause-users-the-most-stress/), Robin Langford, 12/2020

* [Understanding Emotion for Happy Users – How does your site make your users feel?](https://tech.bluesmoon.info/2020/11/understanding-emotion-for-happy-users.html), Philip Tellis, 11/2020

* [Strengthening the Link Between Site Speed and Business Outcomes](https://andydavies.me/blog/2020/10/12/strengthening-the-link-between-site-speed-and-business-outcomes/), Andy Davies, 10/2020

* [Why you should be testing your 404 pages web performance](https://nooshu.github.io/blog/2020/08/25/you-should-be-testing-your-404-pages-web-performance/), Matt Hobbs, 08/2020

* [The Need for Speed, 23 Years Later](https://www.nngroup.com/articles/the-need-for-speed/), Kathryn Whitenton, 05/2020

* [Evaluating page experience for a better web](https://webmasters.googleblog.com/2020/05/evaluating-page-experience.html), Sowmya Subramanian, 05/2020

* [Front-End Performance Checklist 2020](https://www.smashingmagazine.com/2020/01/front-end-performance-checklist-2020-pdf-pages/), Vitaly Friedman (Smashing Magazine), 01/2020

* [Building a resilient frontend using progressive enhancement](https://www.gov.uk/service-manual/technology/using-progressive-enhancement), GOV.uk, 12/2019

* [We analyzed 5.2 million desktop and mobile pages - Here’s What We Learned About Page Speed](https://backlinko.com/page-speed-stats), Brian Dean, 10/2019

* [How Web Content Can Affect Power Usage](https://webkit.org/blog/8970/how-web-content-can-affect-power-usage/), Benjamin Poulain & Simon Fraser, 08/2019

* [Web Page Usability Matters](https://dev.to/addyosmani/web-page-usability-matters-3aok), Addy Osmani, 01/2019

* [Front-End Performance Checklist 2019](https://www.smashingmagazine.com/2019/01/front-end-performance-checklist-2019-pdf-pages/), Vitaly Friedman, 01/2019 

* [You need neither PWA nor AMP to make your website load fast](http://tonsky.me/blog/pwa/), Nikita, 11/2018

* [The very real problem facing British retailers that nobody is talking about](https://www.shiftmagazine.com/articles/the-very-real-problem-facing-british-retailers-that-nobody-is-talking-about.html), Ryan Townsend, 11/2018

* [Brain Food: Speed Matters: Designing for mobile performance (PDF)](https://www.awwwards.com/brain-food-perceived-performance/), AWWWARDS & Google, 2018

* [Start performance budgeting](https://medium.com/@osmani/start-performance-budgeting-dabde04cf6a3), Addy Osmani, 10/2018

* [Web Performance 101: JS, CSS, HTTP, images & fonts](https://3perf.com/talks/web-perf-101/), Ivan Akulov, 10/2018

* [Hyper-Lightweight Websites Challenge (PDF)](http://www.chriszacharias.com/data/Hyperlight%20Websites%20-%20Chris%20Zacharias.pdf) / [Toronto SPOTLIGHT PERFORMANCE talk](https://youtu.be/EZ3mlLyO_ww), Chris Zacharias, 10/2018

* [The power of progressive enhancement](https://medium.com/no-divide/the-power-of-progressive-enhancement-98738766b009), Andy Bell, 08/2018

* [Optimize Website Speed With Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/speed/get-started), Kayce Basques, 07/2018

* [Speed is now a landing page factor for Google Search and Ads](https://developers.google.com/web/updates/2018/07/search-ads-speed), Ilya Grigorik, Addy Osmani, 07/2018

* [How to create the best experience for every user with the newest web APIs](https://medium.com/web-perf-practitioner/how-to-create-the-best-experience-for-every-user-with-the-newest-web-apis-b24b880821b), Fabian Krumbholz, 06/2018

* [15+ Experts Share Their Web Performance Advice for 2018](https://www.keycdn.com/blog/web-performance-advice-2018/), Cody Arsenault, 06/2018

* [Fostering a Web Performance Culture](https://levelup.gitconnected.com/fostering-a-web-performance-culture-41360eb8dd36), José M. Pérez, 06/2018

* [A Beginner’s Guide to Website Speed Optimization](https://kinsta.com/learn/page-speed/), Mark Gavalda, 05/2018

* [Delivering Fast and Light Applications with Save-Data](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/save-data/), Ilya Grigroik, 01/2018

* [Can You Afford It?: Real-world Web Performance Budgets](https://infrequently.org/2017/10/can-you-afford-it-real-world-web-performance-budgets/), Alex Russell, 10/2017

* [The State of the Web — A guide to impactful performance improvements](https://medium.com/@fox/talk-the-state-of-the-web-3e12f8e413b3), Karolina Szczur, 09/2017

* [What is Progressive Enhancement and why should you care?](https://www.shopify.com/partners/blog/what-is-progressive-enhancement-and-why-should-you-care), Tiffany Tse, 02/2017

* [Making websites that work well on Opera Mini](https://dev.opera.com/articles/making-sites-work-opera-mini/), Bruce Lawson, 06/2015

* [Perf Audits for Blink & DevTools, CNet, Wikipedia, Time](https://docs.google.com/document/d/1K-mKOqiUiSjgZTEscBLjtjd6E67oiK8H2ztOiq5tigk/edit), Paul Irish, 02/2015

* [My Performance Audit Workflow](https://aerotwist.com/blog/my-performance-audit-workflow/), Paul Lewis, 04/2014


### SEO and Marketing

* [WTH Google, is Pagespeed a SEO ranking factor or not?! (Spoiler: yes, it is, but not a ranking system..)](https://www.rumvision.com/blog/is-pagespeed-a-ranking-factor-april-2023/), Erwin Hofman, 05/2023

* [Are Core Web Vitals affected by Google Ads?](https://www.rumvision.com/blog/google-ads-impacting-core-web-vitals/), Roderik Derksen, 11/2022

* [Core Web Vitals is a Measurable Ranking Factor](https://www.sistrix.com/blog/core-web-vitals-is-a-measurable-ranking-factor/), Johannes Beus, 09/2021

* [How To Perform An SEO Audit Using Google Search Console](https://seosly.com/how-to-audit-site-with-google-search-console/), Olga Zarzeczna, 06/2021

* [Everything we know about Core Web Vitals and SEO](https://simonhearne.com/2021/core-web-vitals-seo/), Simon Hearne, 02/2021


### Network and Caching

* [Worker Runtimes](https://workers.js.org/)

* [Don't make visitors on your website wait for the same page twice](https://www.rumvision.com/blog/ttfb-challenges-that-our-client-discovered-with-rumvision/), Jordy Scholing, 05/2023

* [Make sure to check your caching rules](https://www.rumvision.com/blog/make-sure-to-check-your-caching-rules/#how-do-i-avoid), Leander Westerhout, 07/2022

* [Bringing instant page-loads to the browser through speculative prerendering](https://web.dev/speculative-prerendering/#in-browser-speculation-rules-for-prefetch-and-prerender), Leena Sohoni & Addy Osmani, 02/2022

* [Experiment with Priority Hints Locally](https://blr.design/blog/experiment-with-priority-hints/), Brian Louis Ramirez, 11/2021

* [New HTTP standards for caching on the modern web](https://httptoolkit.tech/blog/status-targeted-caching-headers/), Tim Perry, 10/2021

* [Coalescing Connections to Improve Network Privacy and Performance](https://blog.cloudflare.com/connection-coalescing-experiments/), Talha Paracha &
Suleman Ahmad, 10/2021

* [Deploying HTTP/3 on Windows Server at Scale](https://techcommunity.microsoft.com/t5/networking-blog/deploying-http-3-on-windows-server-at-scale/ba-p/2839394), Nick Banks, 10/2021

* [How to win at CORS](https://jakearchibald.com/2021/cors/), Jake Archibald, 10/2021 – 🚀

* [Bringing instant page-loads to the browser through speculative prerendering](https://web.dev/speculative-prerendering/), Addy Osmani & Leena Sohoni, 09/2021

* [The Challenges of Ajax CDN](https://www.catchpoint.com/blog/ajax-cdn), Catchpoint, 09/2021

* [HTTP/3 From A To Z: Core Concepts (Part 1)](https://www.smashingmagazine.com/2021/08/http3-core-concepts-part1/), Robin Marx, 08/2021 – 🚀

* [HTTP/3: Performance Improvements (Part 2)](https://www.smashingmagazine.com/2021/08/http3-performance-improvements-part2/), Robin Marx, 08/2021

* [HTTP/3: Practical Deployment Options (Part 3)](https://www.smashingmagazine.com/2021/09/http3-practical-deployment-options-part3/), Robin Marx, 09/2021

* [Quicklink case study: faster pages, increased page views](https://medium.com/ynap-tech/quicklink-case-study-faster-pages-increased-page-views-1e829dbaa10c), Andrea Verlicchi, 07/2021

* [Conditional HTTP GET: The fastest requests need no response body](https://ieftimov.com/post/conditional-http-get-fastest-requests-need-no-response-body/), Ilija Eftimov, 06/2021

* [Preload, prefetch and other <link> tags](https://3perf.com/blog/link-rels/), Ivan Akulov, 05/2021
 
* [Prefetching Heuristics](https://blog.mgechev.com/2021/02/07/prefetching-strategies-heuristics-faster-web-apps/), Minko Gechev, 02/2021

* [Head-of-Line Blocking in QUIC and HTTP/3: The Details](https://github.com/rmarx/holblocking-blogpost), Robin Marx, 12/2020

* [Back/forward cache](https://web.dev/bfcache/), Philip Walton, 11/2020

* [Intent to Remove: HTTP/2 and gQUIC server push](https://groups.google.com/a/chromium.org/g/blink-dev/c/K3rYLvmQUBY/m/vOWBKZGoAQAJ?pli=1), Chromium, 11/2020

* [The Performance Cost of EV Certificates](https://simonhearne.com/2020/drop-ev-certs/), Simon Hearne, 11/2020

* [Who Opts-in to Save-data?](https://simonhearne.com/2020/save-data/), Simon Hearne, 10/2020

* [Improve performance by using a content delivery network](https://web.dev/content-delivery-networks/), Katie Hempenius, 09/2020 - 🚀

* [Measuring and examining TLS 1.3, IPv4, and IPv6 performance](https://nooshu.github.io/blog/2020/07/30/measuring-tls-13-ipv4-ipv6-performance/), Matt Hobbs, 07/2020

* [San Certificates: How Many Alt-Names Are Too Many?](https://paulcalvano.com/2020-02-17-san-certificates-how-many-alt-names-are-too-many/), Paul Calvano, 02/2020

* [EV Certificates Make The Web Slow and Unreliable](https://www.aaronpeters.nl/blog/ev-certificates-make-the-web-slow-and-unreliable/), Aaron Peters, 01/2020

* [The impact of SSL certificate revocation on web performance](https://nooshu.github.io/blog/2020/01/26/the-impact-of-ssl-certificate-revocation-on-web-performance/), Matt Hobbs, 01/2020

* [How to Test DNS Server Response Time to Troubleshoot Site Speed](https://wp-rocket.me/blog/test-dns-server-response-time-troubleshoot-site-speed/), Jenni McKinnon, 11/2019

* [Extended Validation Certificates are (Really, Really) Dead
](https://www.troyhunt.com/extended-validation-certificates-are-really-really-dead/), Troy Hunt, 08/2019

* [Three Ways of Checking Rel=preconnect Resource Hints Are Working](https://andydavies.me/blog/2019/04/17/three-ways-of-checking-your-rel-equals-preconnect-resource-hints-are-working/), Andy Davies, 04/2019

* [Preconnect resource hint and the crossorigin attribute](https://crenshaw.dev/preconnect-resource-hint-crossorigin-attribute), Michael Crenshaw, 04/2019

* [Cache-Control for Civilians](https://csswizardry.com/2019/03/cache-control-for-civilians/), Harry Roberts, 03/2019

* [TTFB optimization: a guide to enhanced performance](https://www.netcentric.biz/insights/2019/03/ttfb.html), Stephan Becker, 03/2019

* [QUIC and HTTP/3 : Too big to fail?!](https://calendar.perfplanet.com/2018/quic-and-http-3-too-big-to-fail/), Robin Marx, 12/2018

* [All about prefetching](https://calendar.perfplanet.com/2018/all-about-prefetching/), Katie Hempenius, 12/2018

* [Measuring Performance With Server Timing](https://www.smashingmagazine.com/2018/10/performance-server-timing/), Drew McLellan, 10/2018

* [Service Worker Caching Strategies Based on Request Types](https://medium.com/dev-channel/service-worker-caching-strategies-based-on-request-types-57411dd7652c), Thomas Steiner, 08/2018

* [Dynamic resources using the Network Information API and service workers](https://deanhume.com/dynamic-resources-using-the-network-information-api-and-service-workers/), Dean Hume, 07/2018

* [Connection-Aware Components](https://mxb.at/blog/connection-aware-components/), Max Böck, 07/2018

* [To push or not to push](https://noti.st/patrickhamann/y2sScd/to-push-or-not-to-push), Patrick Hamann, 06/2018

* [Towards ever faster websites with early hints and priority hints](https://www.fastly.com/blog/faster-websites-early-priority-hints), Andrew Betts, 06/2018

* [Brotli Compression – How Much Will It Reduce Your Content?](https://paulcalvano.com/index.php/2018/07/25/brotli-compression-how-much-will-it-reduce-your-content/), Paul Calvano, 07/2018

* [What is HTTP/2 — The Ultimate Guide](https://kinsta.com/learn/what-is-http2/), Ali Raza, 04/2018

* [Resource Hints — What is Preload, Prefetch, and Preconnect?](https://www.keycdn.com/blog/resource-hints/), Brian Jackson, 01/2018

* [HTTP Caching](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching), Ilya Grigorik, 01/2018

* [A Comprehensive Guide To HTTP/2 Server Push](https://www.smashingmagazine.com/2017/04/guide-http2-server-push/), Jeremy Wagner, 04/2017

* [Preload, Prefetch And Priorities in Chrome](https://medium.com/reloading/preload-prefetch-and-priorities-in-chrome-776165961bbf), 03/2017, Addy Osmani

* [A Link: rel=preload Analysis From the Chrome Data Saver Team](https://medium.com/reloading/a-link-rel-preload-analysis-from-the-chrome-data-saver-team-5edf54b08715), Simon Pelchat, 03/2017

* [What is the preload directive?](https://www.keycdn.com/support/preload-directive/), 01/2017

* [Caching best practices & max-age gotchas](https://jakearchibald.com/2016/caching-best-practices/), Jake Archibald, 2016

* [HTTP/2 Push: The details](https://calendar.perfplanet.com/2016/http2-push-the-details/), Robin Marx, 12/2016

* [The 14KB In The TCP Initial Window](https://tylercipriani.com/blog/2016/09/25/the-14kb-in-the-tcp-initial-window/), Tyler Cipriani, 09/2016

* [How DNS works](https://howdns.works/) (Comic)

### Image and Video Optimization

* [Building an effective Image Component](https://web.dev/image-component/), Leena Sohoni & Kara Erickson & Alex Castle, 10/2021

* [Decoding AVIF: Deep dive with cats and imgproxy](https://evilmartians.com/chronicles/decoding-avif-deep-dive-with-cats-and-imgproxy), Polina Gurtovaya & Andy Barnov, 08/2021

* [The performance effects of too much lazy-loading](https://web.dev/lcp-lazy-loading/), Rick Viscomi & Felix Arntz, 07/2021

* [GIFS on the web: A new way to bloat](https://dougsillars.com/2021/06/21/gifs-on-the-web-a-new-way-to-bloat/), Doug Sillars, 06/2021

* [Serving sharp images to high density screens](https://jakearchibald.com/2021/serving-sharp-images-to-high-density-screens/), Jake Archibald, 06/2021

* [The Humble <img> Element And Core Web Vitals](https://www.smashingmagazine.com/2021/04/humble-img-element-core-web-vitals/), Addy Osmani, 04/4021 - 🚀

* [Proxying Cloudinary Requests with Netlify](https://timkadlec.com/remembers/2020-11-17-netlify-proxy-requests/), Tim Kadlec, 11/2020

* [How to cap image fidelity to 2x and save 45% image weight on high-end mobile phones](https://www.andreaverlicchi.eu/capping-image-fidelity-2x-minimize-loading-time/), Andrea Verlicchi, 11/2020

* [How to preload responsive images with imagesizes and imagesrcset](https://www.stefanjudis.com/today-i-learned/how-to-preload-responsive-images-with-imagesizes-and-imagesrcset/), Stefan Judis, 10/2020

* [Time for Next-Gen Codecs to Dethrone JPEG](https://cloudinary.com/blog/time_for_next_gen_codecs_to_dethrone_jpeg), Jon Sneyers, 02/2020

* [Maximally optimizing image loading for the web in 2021](https://www.industrialempathy.com/posts/image-optimizations/), Malte Ubl, 12/2020

* [Native image lazy-loading for the web](https://web.dev/native-lazy-loading/), Houssein Djirdeh, Addy Osmani, Mathias Bynens, 07/2020

* [How JPEG XL Compares to Other Image Codecs](https://cloudinary.com/blog/how_jpeg_xl_compares_to_other_image_codecs), Jon Sneyers, 05/2020

* [AVIF for Next-Generation Image Coding](https://netflixtechblog.com/avif-for-next-generation-image-coding-b1d75675fe4), Netflix Technology Blog, 
 02/2020
 
* [In-Browser Performance Linting With Feature Policies](https://timkadlec.com/remembers/2020-02-20-in-browser-performance-linting-with-feature-policies/), Tim Kadlec, 02/2020
 
* [Visual acuity and device-pixel-ratio](https://observablehq.com/@eeeps/visual-acuity-and-device-pixel-ratio), Eric Portis, 03/2019  

* [Video Playback On The Web: The Current State Of Video](https://www.smashingmagazine.com/2018/10/video-playback-on-the-web-part-1/), Doug Sillars, 10/2018

* [Video Playback On The Web: Video Delivery Best Practices](https://www.smashingmagazine.com/2018/10/video-playback-on-the-web-part-2/), Doug Sillars, 10/2018

* [Automating Resource Selection with Client Hints](https://developers.google.com/web/updates/2015/09/automating-resource-selection-with-client-hints), Ilya Grigorik, 07/2018

* [Image Inconsistencies: How and When Browsers Download Images](https://csswizardry.com/2018/06/image-inconsistencies-how-and-when-browsers-download-images/), Harry Roberts, 06/2018

* [Essential Image Optimization](https://images.guide/), Addy Osmani, 2017

* [Using SVG as placeholders — More Image Loading Techniques](https://jmperezperez.com/svg-placeholders/), José M. Pérez, 10/2017

* [Base64 Encoding & Performance, Part 2: Gathering Data](https://csswizardry.com/2017/02/base64-encoding-and-performance-part-2/), Harry Roberts, 02/2017

* [Base64 Encoding & Performance, Part 1: What’s Up with Base64?](https://csswizardry.com/2017/02/base64-encoding-and-performance/), Harry Roberts, 02/2017

* [Improving Perceived Performance with Multiple Background Images](https://csswizardry.com/2016/10/improving-perceived-performance-with-multiple-background-images/), Harry Roberts, 10/2016

* [How Medium does progressive image loading](https://jmperezperez.com/medium-image-progressive-loading-placeholder/), José M. Pérez, 10/2015

* [Responsive Images 101](https://cloudfour.com/thinks/responsive-images-101-definitions/), Jason Grigsby, 03/2015

* [Srcset and sizes](https://ericportis.com/posts/2014/srcset-sizes/), Eric Portis, 03/2014


### Web Fonts

* [Fallback Font Generator](https://screenspan.net/fallback)

* [30 Best Web Safe Fonts for Your Next Design in 2021](https://kinsta.com/blog/web-safe-fonts/), Maateo Duó, 07/2021

* [Making Google Fonts Faster in 2021](https://sia.codes/posts/making-google-fonts-faster/), Sia Karamalegos, 07/2021

* [A New Way To Reduce Font Loading Impact: CSS Font Descriptors](https://www.smashingmagazine.com/2021/05/reduce-font-loading-impact-css-descriptors/), Barry Pollard, 05/2021

* [5 steps to faster web fonts](https://iainbean.com/posts/2021/5-steps-to-faster-web-fonts/), Iain Bean, 05/2021

* [How I set up Glyphhanger on macOS for optimizing and converting font files for the Web](https://www.sarasoueidan.com/blog/glyphhanger/), Sara Soueidan, 03/2021

* [More than you ever wanted to know about font loading on the web](https://deploy-preview-15--upbeat-shirley-608546.netlify.app/posts/high-performance-web-font-loading/), Malte Ubl, 01/2021

* [The importance of `@font-face` source order when used with preload](https://nooshu.github.io/blog/2021/01/23/the-importance-of-font-face-source-order-when-used-with-preload/), Matt Hobbs, 01/2021

* [How to avoid layout shifts caused by web fonts](https://simonhearne.com/2021/layout-shifts-webfonts/), Simon Hearne, 01/2021

* [The Fastest Google Fonts](https://csswizardry.com/2020/05/the-fastest-google-fonts/), Harry Roberts, 05/2020

* [Should you self-host Google Fonts?](https://www.tunetheweb.com/blog/should-you-self-host-google-fonts/), Barry Pollard, 02/2020

* [Preloading Fonts and the Puzzle of Priorities](https://andydavies.me/blog/2019/02/12/preloading-fonts-and-the-puzzle-of-priorities/), Andy Davies, 02/2019

* [The font loading checklist](https://www.zachleat.com/web/font-checklist/), Zach Leatherman, 08/2018


### Measure Performance

* [Experimenting with measuring soft navigations - Chrome Developers](https://developer.chrome.com/blog/soft-navigations-experiment/), Barry Pollard, Yoav Weiss, 02/2023

* [Variability Isn't the Problem](https://timkadlec.com/remembers/2022-12-08-variability-isnt-the-problem/), Tim Kadlec, 12/2022

* [How Fast Is Your Web App? How to Test Page Transition Performance](https://blog.webpagetest.org/posts/test-your-spa/), Scott Jehl, 09/2022

* [Element Timing: One true metric to rule them all?
](https://www.speedcurve.com/blog/element-timing-one-true-metric/), Andy Davies, 09/2022

* [Measure What You Impact, Not What You Influence](https://csswizardry.com/2022/08/measure-what-you-impact-not-what-you-influence/), Harry Roberts, 08/2022

* [Why Lighthouse Performance Score Doesn’t Work](https://calibreapp.com/blog/downsides-of-performance-score), Karolina Szczur, 12/2021

* [What's new in PageSpeed Insights](https://web.dev/whats-new-pagespeed-insights/), Addy Osmani & Elizabeth Sweeny, 11/2021

* [Why does Lighthouse lab data not match field data?](https://www.debugbear.com/blog/lighthouse-lab-data-not-matching-field-data), Matt Zeunert, 08/2021

* [How do Chrome extensions impact browser performance?](https://www.debugbear.com/blog/chrome-extension-performance-2021), Matt Zeunert, 07/2021

* [Benchmarking JavaScript Memory Usage](https://blog.webpagetest.org/posts/benchmarking-javascript-memory-usage/), Tim Kadlec, 06/2021

* [Lighthouse performance scoring - How Lighthouse calculates your overall Performance score](https://web.dev/performance-scoring/), 06/2021

* [How Real User Monitoring will improve GOV.UK for everyone](https://insidegovuk.blog.gov.uk/2021/06/16/how-real-user-monitoring-will-improve-gov-uk-for-everyone/), Matt Hobbs, 06/2021

* [How Lighthouse 8 Changes Affect Your Metrics](https://calibreapp.com/blog/lighthouse-8), Karolina Szczur, 06/2021

* [Lighthouse V.8 FAQ](https://github.com/GoogleChrome/lighthouse/blob/master/docs/v8-perf-faq.md), Paul Irish, 06/2021

* [How to use WebPageTest's Graph Page Data view](https://nooshu.github.io/blog/2021/04/13/how-to-use-webpagetests-graph-page-data-view/), Matt Hobbs, 04/2021

* [Setting up Cloudflare Workers for web performance optimisation and testing](https://nooshu.github.io/blog/2021/03/14/setting-up-cloudflare-workers-for-web-performance-optimisation-and-testing/), Matt Hobbs, 03/2021

* [Cloudflare Worker recipes for frontend performance testing](https://nooshu.github.io/blog/2021/03/02/cloudflare-worker-recipes-for-frontend-performance-testing/), Matt Hobbs, 03/2021 – 🚀 & 📚

* [Measuring Network Performance in Mobile Safari](https://csswizardry.com/2021/02/measuring-network-performance-in-mobile-safari/), Harry Roberts, 02/2021

* [An Opinionated Guide to Performance Budgets](https://speedcurve.com/blog/performance-budgets-guide/), Tammy Everts, 02/2021

* [How to run a WebPageTest test](https://nooshu.github.io/blog/2020/12/31/how-to-run-a-webpagetest-test/), Matt Hobbs, 12/2020

* [Strategies for Telemetry Exfiltration (aka Beaconing In Practice)](https://calendar.perfplanet.com/2020/beaconing-in-practice/), Nic Jansma, 12/2020

* [On Cadence, Cohorts and Trained Behavior](https://calendar.perfplanet.com/2020/y-u-no-revenue-cadence-cohorts-trained-behavior/), Tobias Baldauf, 12/2020

* [Site-Speed Topography](https://csswizardry.com/2020/11/site-speed-topography/), Harry Roberts, 11/2020

* [Measuring Performance behind consent popups](https://simonhearne.com/2020/testing-behind-consent/), Simon Hearne, 05/2020

* [Performance Budgets, Pragmatically](https://csswizardry.com/2020/01/performance-budgets-pragmatically/), Harry Roberts, 01/2020

* [How to read a WebPageTest Connection View chart](https://nooshu.github.io/blog/2019/12/30/how-to-read-a-wpt-connection-view-chart/), Matt Hobbs, 12/2019

* [How to read a WebPageTest Waterfall View chart](https://nooshu.github.io/blog/2019/10/02/how-to-read-a-wpt-waterfall-chart/), Matt Hobbs, 10/2019 – 🚀 & 📚

* [Lighthouse Variability](https://developers.google.com/web/tools/lighthouse/variability), 2019 – 🚀

* [Metrics - Measure and optimize performance and user experience](https://web.dev/metrics/), 2019

* [Largest Contentful Paint](https://web.dev/largest-contentful-paint/), Philip Walton, 08/2019

* [Time to First Byte: What It Is and Why It Matters](https://csswizardry.com/2019/08/time-to-first-byte-what-it-is-and-why-it-matters/), Harry Roberts, 08/2019

* [Web Page Usability Matters](https://dev.to/addyosmani/web-page-usability-matters-3aok), Addy Osmani, 01/2019

* [Metrics from 1M sites](https://speedcurve.com/blog/metrics-from-1m-sites/), Steve Souders, 12/2018

* [Second Meaningful Content: the Worst Performance Metric](https://www.filamentgroup.com/lab/second-meaningful-content.html), Scott Jehl, 11/2018

* [The Three Types of Performance Testing](https://csswizardry.com/2018/10/three-types-of-performance-testing/), Harry Roberts, 10/2018

* [Measuring Performance With Server Timing](https://www.smashingmagazine.com/2018/10/performance-server-timing/), Drew McLellan, 10/2018

* [Applying Waterfall Visualizations to Real User Monitoring Data](https://developer.akamai.com/blog/2018/10/10/applying-waterfall-visualizations-real-user-monitoring-data), Simon Hearne, 10/2018

* [An analysis of Chromium's paint timing metrics](https://speedcurve.com/blog/an-analysis-of-chromiums-paint-timing-metrics/), Joseph Wynn, 09/2018

* [Accurately measuring layout on the web](https://nolanlawson.com/2018/09/25/accurately-measuring-layout-on-the-web/), Nolan Lawson, (09/2018)

* [A step by step guide to monitoring the competition with the Chrome UX Report](https://dev.to/rick_viscomi/a-step-by-step-guide-to-monitoring-the-competition-with-the-chrome-ux-report-4k1o), Rick Viscomi, 09/2018

* [How to track performance](https://designsystem.digital.gov/performance/how/#choosing-metrics-amp-tools), U.S. Web Design System, 07/2018

* [Assessing Loading Performance in Real Life with Navigation and Resource Timing](https://developers.google.com/web/fundamentals/performance/navigation-and-resource-timing/), Jeremy Wagner, 06/2018

* [User Timing API (Custom Timing): the most relevant performance measure ever](https://blog.dareboost.com/en/2018/03/user-timing-api-measuring-web-performance-custom-timing/), Damien Jubeau, 03/2018

* [Server Timing in the Wild](https://medium.com/bbc-design-engineering/server-timing-in-the-wild-bfb34816322e), Christopher Sidebottom, 03/2018

* [Is a High Abandon Rate Hitting Your Online Marketing Budget?](https://medium.com/web-perf-practitioner/is-a-high-abandon-rate-hitting-your-online-marketing-budget-c819f85f96b2), Fabian Krumbholz, 03/2018

* [ResourceTiming Visibility: Third-Party Scripts, Ads and Page Weight](https://nicj.net/resourcetiming-visibility-third-party-scripts-ads-and-page-weight/), Nic Jansma, 03/2018

* [Measure Performance with the RAIL Model](https://developers.google.com/web/fundamentals/performance/rail), Addy Osmani, 02/2018

* [User-centric Performance Metrics](https://developers.google.com/web/fundamentals/performance/user-centric-performance-metrics), Philip Walton, 02/2018

* [Breaking Down the Performance API](https://css-tricks.com/breaking-performance-api/), Preethi, 12/2017

* [An Audit of Boomerang’s Performance](https://nicj.net/an-audit-of-boomerangs-performance/), Nic Jansma, 12/2017

* [Choosing the Correct Average](https://csswizardry.com/2017/01/choosing-the-correct-average/), Harry Roberts, 01/2017

* [User Timing and Custom Metrics](https://speedcurve.com/blog/user-timing-and-custom-metrics/), Steve Souders, 11/2015

* [Conversion Impact Score: What is it? And why do you need to know yours?](https://www.soasta.com/blog/website-monitoring-conversion-impact-score/), Tammy Everts, 07/2015

* [Driving WebPagetest from a Google Docs Spreadsheet](https://calendar.perfplanet.com/2014/driving-webpagetest-from-a-google-docs-spreadsheet/), Andy Davies, 12/2014

* [Page Weight Matters - surprising result after web performance improvement](https://blog.chriszacharias.com/page-weight-matters) Chris Zacharias), 12/2012

### Third-Party Services

* [Web Almanac 2021: Third Parties](https://almanac.httparchive.org/en/2021/third-parties), Barry Pollard, 11/2021

* [Best practices for using third-party embeds](https://web.dev/embed-best-practices/), Leena Sohoni & Katie Hempenius & Addy Osmani, 10/20201

* [The Impact of Third-Party Scripts on the Facebook Outage](https://www.akamai.com/blog/news/the-impact-of-third-party-scripts-on-the-facebook-outage), Kunjal Botadra, 10/2021 

* [Loading Third-Party JavaScript](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/loading-third-party-javascript), Addy Osmani & Arthur Evans

* [Best practices for tags and tag managers](https://web.dev/tag-best-practices/), Katie Hempenius, 07/2021

* [Keeping third-party scripts under control](https://web.dev/controlling-third-party-scripts/), Chris Anstey & Antoine Bisch, 04/2021

* [Best practices for cookie notices](https://web.dev/cookie-notice-best-practices/), Katie Hempenius, 04/2021

* [Bypassing Cookie Consent Banners in Lighthouse and WebPageTest](https://andydavies.me/blog/2021/03/25/bypassing-cookie-consent-banners-in-lighthouse-and-webpagetest/), Andy Davies, 03/2021 – 🚀

* [Understanding the True Cost of Client-Side A/B Testing](https://timkadlec.com/remembers/2021-01-12-cost-of-client-side-ab-testing/), Tim Kadlec, 01/2021

* [The Case Against Anti-Flicker Snippets](https://andydavies.me/blog/2020/11/16/the-case-against-anti-flicker-snippets/), Andy Davies, 11/2020

* [Reducing the Site-Speed Impact of Third-Party Tags](https://andydavies.me/blog/2020/10/02/reducing-the-site-speed-impact-of-third-party-tags/), Andy Davies, 10/2020

* [Adding controls to Google Tag Manager](https://www.tunetheweb.com/blog/adding-controls-to-google-tag-manager/), Barry Pollard, 09/2019

* [Improve web performance lazy loading reCaptcha](https://antonioufano.com/articles/improve-web-performance-lazy-loading-recaptcha/), Antonio Ufano, 06/2020

* [Self-Host Your Static Assets](https://csswizardry.com/2019/05/self-host-your-static-assets/), Harry Roberts, 05/2019

* [How we shaved 1.7 seconds off casper.com by self-hosting Optimizely](https://medium.com/caspertechteam/we-shaved-1-7-seconds-off-casper-com-by-self-hosting-optimizely-2704bcbff8ec), Kyle Rush, 08/2018

* [Changing Our Approach to Anti-tracking](https://blog.mozilla.org/futurereleases/2018/08/30/changing-our-approach-to-anti-tracking/), Nick Nguyen, 08/2018

* [When 3rd parties stop being polite … and start getting real](https://docs.google.com/presentation/d/174EE6e7sV_SXPug_gK5GH4Jk5wB35xjqPrvDUG0E6FA), Charles Vazac & Nic Jansma, 06/2018

* [Identifying, Auditing, and Discussing Third Parties](https://csswizardry.com/2018/05/identifying-auditing-discussing-third-parties/), Harry Roberts, 05/2018

* [Crashing the (Third) Party](https://medium.com/spring-media-techblog/crashing-the-third-party-b7c8a46b40db), Oleg Zender, 06/2018

* [Collection of articles about 3rd party](https://trentwalton.com/tag/Third-Party/), Trend Walton

* [How 3rd Party Scripts can be performant citizens on the web](https://www.twnsnd.com/posts/performant_third_party_scripts.html), Ryan Townsend, 08/2017

* [Performance and Resilience: Stress-Testing Third Parties](https://csswizardry.com/2017/07/performance-and-resilience-stress-testing-third-parties/), Harry Roberts, 07/2017

* [Discover how Adidas is using data science to deliver third-party governance](https://www.slideshare.net/kskoeld/discover-how-adidas-is-using-data-science-to-deliver-thirdparty-governance), Kristian Sköld, 11/2016

* [How A/B testing tools worsen your site speed (study)](https://orangevalley.nl/en/9-ab-testing-tools-compared-on-site-speed-impact/), OrangeValley, 04/2016

* [10 pro tips for managing the performance of your third-party scripts,](https://www.soasta.com/blog/10-pro-tips-for-managing-the-performance-of-your-third-party-scripts/) Tammy Everts, 11/2015

### Optimise the Critical Render Path

* [Why Not document.write()?](https://csswizardry.com/2023/01/why-not-document-write/), Harry Roberts, 01/2023

* [Speeding Up Async Snippets](https://csswizardry.com/2022/10/speeding-up-async-snippets/), Harry Roberts, 10/2022

* [Critical CSS? Not So Fast!](https://csswizardry.com/2022/09/critical-css-not-so-fast/), Harry Roberts, 09/2022

* [Priority Hints - What Your Browser Doesn’t Know (Yet)](https://www.etsy.com/codeascraft/priority-hints-what-your-browser-doesnt-know-yet), David Ross, 07/2022

* [Optimizing resource loading with Priority Hints](https://web.dev/priority-hints/), Patrick Meena & Addy Osmani & Leena Sohoni, 10/2021 - 🚀 📚

* [Chrome Resource Priorities and Scheduling](https://docs.google.com/document/d/1bCDuq9H1ih9iNjgzyAL0gpwNFiEP4TZS-YLRp_RuMlc/edit?usp=sharing), Patrick Meenan, 09/2021 - 🚀 📚

* [How To Optimize CSS for Peak Site Performance](https://kinsta.com/blog/optimize-css/), Craig Buckler, 09/2021

* [Eliminate render blocking CSS to improve start render time](https://www.jeffreyknox.dev/blog/eliminate-render-blocking-css-to-improve-start-render-time/), Jeff Knox, 09/2021

* [Small Bundles, Fast Pages: What To Do With Too Much JavaScript](https://calibreapp.com/blog/bundle-size-optimization), Ben Schwarz, 09/2021

* [How to Eliminate Render-Blocking Resources: a Deep Dive](https://sia.codes/posts/render-blocking-resources/), Sia Karamalegos, 07/2021

* [The Critical Request: How to Prioritise Requests to Improve Speed](https://calibreapp.com/blog/critical-request), Ben Schwarz, 04/2021

* [How to Improve CSS Performance](https://calibreapp.com/blog/css-performance), Milica Mihajlija, 03/2021

* [The Simplest Way to Load CSS Asynchronously](https://www.filamentgroup.com/lab/load-css-simpler/), Scott Jehl, 07/2019 – 🚀

* [CSS audit](https://css-tricks.com/a-quick-css-audit-and-general-notes-about-design-systems/)

* [Measuring the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp), Ilya Grigorik, 12/2018 

* [Inlining or Caching? Both Please!](https://www.filamentgroup.com/lab/inlining-cache.html), Scott Jehl, 11/2018

* [CSS and Network Performance](https://csswizardry.com/2018/11/css-and-network-performance/), Harry Roberts, 11/2018

* [Analyzing Critical Rendering Path Performance](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp), Ilya Grigorik, 08/2018

* [Front-End Performance Checklist](https://github.com/thedaviddias/Front-End-Performance-Checklist), 2018, GitHub Project with updates

* [The PRPL Pattern](https://developers.google.com/web/fundamentals/performance/prpl-pattern/), Addy Osmani, 02/2018

* [Now You See Me: How To Defer, Lazy-Load And Act With IntersectionObserver](https://www.smashingmagazine.com/2018/01/deferring-lazy-loading-intersection-observer-api/), Denys Mishunov, 01/2018

* [Optimising the front end for the browser](https://hackernoon.com/optimising-the-front-end-for-the-browser-f2f51a29c572), Sanjay Purswani, 02/2017

* [Prefer DEFER Over ASYNC](https://calendar.perfplanet.com/2016/prefer-defer-over-async/), Steve Souders, 12/2016

* [A comprehensive guide to font loading strategies](https://www.zachleat.com/web/comprehensive-webfonts/), Zach Leatherman, 07/2016

* [Understanding the critical rendering path, rendering pages in 1 second](https://medium.com/@luisvieira_gmr/understanding-the-critical-rendering-path-rendering-pages-in-1-second-735c6e45b47a), Luis Vieira, 06/2015

* [More Weight Doesn’t Mean More Wait](https://www.filamentgroup.com/lab/weight-wait.html), Scott Jehl, 04/2015

### Javascript and Render Performance

* [When JavaScript Fails](https://scribe.rip/@jason.godesky/when-javascript-fails-52eef47e90db), Jason Godesky, 02/2023

* [Everyone has Javascript, right?](https://www.kryogenix.org/code/browser/everyonehasjs.html), Stuart Langridge

* [Five Data-Loading Patterns To Boost Web Performance](https://www.smashingmagazine.com/2022/09/data-loading-patterns-improve-frontend-performance/), Agustinus Theodorus, 09/2022

* [Optimize long tasks](https://web.dev/optimize-long-tasks/), Jerry Wagner, 09/2022 – 🚀

* [The impact of removing jQuery on our web performance](https://insidegovuk.blog.gov.uk/2022/08/15/the-impact-of-removing-jquery-on-our-web-performance/), Matt Hobbs & Andy Sellick, 08/2022

* [Profiling & Optimizing the runtime performance with the DevTools Performance tab](iamtk.co/profiling-and-optimizing-the-runtime-performance-with-the-devtools-performance-tab), TK, 08/2022

* [Don't fight the browser preload scanner](https://web.dev/preload-scanner/), Jeremy Wagner, 05/2022

* [The Web Performance impact of jQuery](https://twitter.com/TheRealNooshu/status/1509487050122276864), Matt Hobbs, 03/2022

* [Have Single-Page Apps Ruined the Web? | Transitional Apps](https://www.youtube.com/watch?v=860d8usGC0o), Rich Harris, 12/2021

* [Improve how you architect webapps](https://www.patterns.dev/), Addy Osmani & Lydia Hallie – 🚀

* [Nuxt SSR Optimizing Tips]{https://vueschool.io/articles/vuejs-tutorials/nuxt-ssr-optimizing-tips/}, Filip Rakowski

* [GPU accelerated JavaScript](https://gpu.rocks/#/)

* [Introducing Partytown 🎉: Run Third-Party Scripts From a Web Worker](https://dev.to/adamdbradley/introducing-partytown-run-third-party-scripts-from-a-web-worker-2cnp), Adam Bradly, 10/2021

* [Astro: Astro is a fresh but familiar approach to building websites. Astro combines decades of proven performance best practices with the DX improvements of the component-oriented era. Use your favorite JavaScript framework and automatically ship the bare-minimum amount of JavaScript—by default.](https://docs.astro.build/getting-started/)

* [Minimising Layout and Layout thrashing for 60 FPS](https://www.charistheo.io/blog/2021/09/dom-reflow-and-layout-thrashing/), Charis Theo, 09/2021 – 🚀

* [Does shadow DOM improve style performance?](https://nolanlawson.com/2021/08/15/does-shadow-dom-improve-style-performance/), Nolan Lawson, 08/2021

* [Debugging memory leaks - HTTP 203](https://www.youtube.com/watch?v=YDU_3WdfkxA), Jake Archibald & Surma, 08/2021

* [Explore JavaScript Dependencies With Lighthouse Treemap](https://sia.codes/posts/lighthouse-treemap/), Sia Karamalegos, 08/2021

* [The real cost of Javascript dependencies (and the state of JS package quality)](https://medium.com/voodoo-engineering/the-real-cost-of-javascript-dependencies-and-the-state-of-js-package-quality-a8dacd74c0ec), Vincent Vallet, 06/2021

* [The State Of Web Workers In 2021](https://www.smashingmagazine.com/2021/06/web-workers-2021/), Surma, 06/2021

* [Techniques for developing high-performance animations](https://web.dev/animations/)

* [Building a Faster Web Experience with the postTask Scheduler](https://medium.com/airbnb-engineering/building-a-faster-web-experience-with-the-posttask-scheduler-276b83454e91), Callie (Airbnb Engineering & Data Science), 05/2021 – 🚀

* [Don’t attach tooltips to document.body – Learn how the browser works – Debug forced reflow](https://atfzl.com/don-t-attach-tooltips-to-document-body), Atif Afzal, 03/2021 – 🚀

* [How to Create and Fix Memory Leaks With Chrome DevTools](https://betterprogramming.pub/build-me-an-angular-app-with-memory-leaks-please-36302184e658), Rakia Ben Sassi, 03/2021

* [JavaScript performance beyond bundle size](https://nolanlawson.com/2021/02/23/javascript-performance-beyond-bundle-size/), Nolan Lawson, 02/2021

* [The Import On Interaction Pattern](https://addyosmani.com/blog/import-on-interaction/), Addy Osmani, 12/2020 – 🚀

* [The “Live DOM” Is Not “Slow”, “Bad”, Or “Wrong”. Web Developers Are.](https://levelup.gitconnected.com/the-live-dom-is-not-slow-bad-or-wrong-web-developers-are-2bf86c3b9e2e), Jason Knight, 11/2020

* [Prevent layout shifts with CSS grid stacks](https://www.hsablonniere.com/prevent-layout-shifts-with-css-grid-stacks--qcj5jo/), Hubert Sablonnière, 10/2020

* [content-visibility: the new CSS property that boosts your rendering performance](https://web.dev/content-visibility/), Una Kravets, Vladimir Levin, 08/2020

* [Preact vs React - Updating React at Etsy](https://github.com/mq2thez/blog/blob/main/upgrade-react-etsy/preact-vs-react.md), Ben Sangster, 07/2020

* [The Cost of Javascript Frameworks](https://timkadlec.com/remembers/2020-04-21-the-cost-of-javascript-frameworks/), Tim Kadlec, 04/2020 

* [Fixing memory leaks in web applications](https://nolanlawson.com/2020/02/19/fixing-memory-leaks-in-web-applications/), Nolan Lawson, 02/2020

* [How to load polyfills only when needed](https://3perf.com/blog/polyfills/), Ivan Akulov, 02/2020

* [Responsible JavaScript: Part III - Third parties](https://alistapart.com/article/responsible-javascript-part-3/), Jeremy Wagner, 11/2019

* [The cost of JavaScript in 2019](https://v8.dev/blog/cost-of-javascript-2019), Addy Osmani, 06/2019 – :rocket:

* [When should you be using Web Workers?](https://dassur.ma/things/when-workers/), Surma, 06/2019

* [Responsible Javascript: Part II - Code Bundle](https://alistapart.com/article/responsible-javascript-part-2/), Jeremy Wagner, 06/2019

* [Faster script loading with BinaryAST?](https://blog.cloudflare.com/binary-ast/), Ingvar Stepanyan, 05/2019

* [Svelte 3: Rethinking reactivity](https://svelte.dev/blog/svelte-3-rethinking-reactivity), Rich Harris, 04/2019

* [Responsible Javascript: Part I - Web platform over frameworks](https://alistapart.com/article/responsible-javascript-part-1/), Jeremy Wagner, 03/2019

* [JavaScript Loading Priorities in Chrome](https://addyosmani.com/blog/script-priorities/), Addy Osmani, 02/2019 – 📚

* [Idle Until Urgent](https://philipwalton.com/articles/idle-until-urgent/), Philip Walton, 09/2018 – :rocket:

* [Browser painting and considerations for web performance](https://css-tricks.com/browser-painting-and-considerations-for-web-performance/), Georgy Marchuk, 08/2018

* [The Cost Of JavaScript In 2018](https://medium.com/@addyosmani/the-cost-of-javascript-in-2018-7d8950fbb5d4) ([Video](https://www.youtube.com/watch?v=i5R7giitymk)), Addy Osmani, 08/2018

* [Examining Web Worker Performance](https://www.loxodrome.io/post/web-worker-performance/), James L Milner, 05/2018

* [Front-End Performance Checklist](https://github.com/thedaviddias/Front-End-Performance-Checklist), 2018, GitHub Project with updates

* [jankfree](http://jankfree.org/), Website which collects resources about render performance

* [What forces layout/reflow?](https://gist.github.com/paulirish/5d52fb081b3570c81e3a), Paul Irish

* [Using requestIdleCallback](https://developers.google.com/web/updates/2015/08/using-requestidlecallback), Paul Lewis, 01/2018

* [Optimize Javascript Execution](https://developers.google.com/web/fundamentals/performance/rendering/optimize-javascript-execution), Paul Lewis, 01/2018

* [Why Web Developers Need to Care about Interactivity](https://philipwalton.com/articles/why-web-developers-need-to-care-about-interactivity/), Philip Walton, 12/2017

* [Improving Performance with the Paint Timing API](https://www.sitepen.com/blog/2017/10/06/improving-performance-with-the-paint-timing-api), Umar Hansa, 10/2017

* [Deploying ES2015+ Code in Production Today](https://philipwalton.com/articles/deploying-es2015-code-in-production-today/),  Philip Walton, 09/2017

* [Performant Web Animations and Interactions: Achieving 60 FPS](https://blog.algolia.com/performant-web-animations/), Emily Hayman, 08/2017

* [JavaScript Start-up Performance](https://medium.com/reloading/javascript-start-up-performance-69200f43b201), Addy Osmani, 02/2017

* [Performant Parallaxing](https://developers.google.com/web/updates/2016/12/performant-parallaxing), Paul Lewis, 12/2016

* [The Anatomy of a Frame](https://aerotwist.com/blog/the-anatomy-of-a-frame/), Paul Lewis, 02/2016

* [The future of loading CSS](https://jakearchibald.com/2016/link-in-body/), Jake Archibald, 02/2016

* [4 Types of Memory Leaks in JavaScript and How to Get Rid Of Them](https://auth0.com/blog/four-types-of-leaks-in-your-javascript-code-and-how-to-get-rid-of-them/), Sebastián Peyrott, 01/2016

* [The cost of frameworks](https://aerotwist.com/blog/the-cost-of-frameworks/), Paul Lewis, 11/2015

* [FLIP Your Animations](https://aerotwist.com/blog/flip-your-animations/), Paul Lewis, 02/2015

### Perceived performance

This is all about how humans perceive performance and what we can do to help our users to keep focused:

* [A Guide to Keeping Users Engaged While They Wait](https://medium.com/docusign-design/a-guide-to-keeping-users-engaged-while-they-wait-10713ab54c3d), Morgan Davies, 07/2021

* [Optimistic UI Patterns for Improved Perceived Performance](https://simonhearne.com/2021/optimistic-ui-patterns/), Simon Hearne, 01/2021

* [Everything you need to know about skeleton screens](https://uxdesign.cc/what-you-should-know-about-skeleton-screens-a820c45a571a), Bill Chung, 10/2018

* [The psychology of web performance](https://blog.uptrends.com/web-performance/the-psychology-of-web-performance/), 06/2018

* [The Illusion of Time](https://medium.com/swlh/the-illusion-of-time-8f321fa2f191), Adrian Zumbrunnen, 08/2015

* [Why Performance Matters: The Perception Of Time](https://www.smashingmagazine.com/2015/09/why-performance-matters-the-perception-of-time/), Denys Mishunov, 09/2015

* [Why Performance Matters, Part 2: Perception Management](https://www.smashingmagazine.com/2015/11/why-performance-matters-part-2-perception-management/), Denys Mishunov, 11/2015

* [Why Performance Matters, Part 3: Tolerance Management](https://www.smashingmagazine.com/2015/12/performance-matters-part-3-tolerance-management/), Denys Mishunov, 12/2015

* [True Lies Of Optimistic User Interfaces](https://www.smashingmagazine.com/2016/11/true-lies-of-optimistic-user-interfaces/), Denys Mishunov, 11/2016

* [Taking A Look At The State Of Progressive Images And User Perception](https://www.smashingmagazine.com/2018/02/progressive-image-loading-user-perceived-performance/), José Manuel Pérez, 02/2018

* [Just-noticeable difference](https://en.wikipedia.org/wiki/Just-noticeable_difference)

### Tooling Articles

* [New Render Blocking Indicator in Chrome and WebPageTest](https://blog.webpagetest.org/posts/new-render-blocking-indicator-in-chrome-and-webpagetest/), Tim Kadlec, 07/2021

* [WebPageTest Sorcery Using Google Sheets](https://blr.design/blog/webpagetest-in-google-sheets/), Brian Louis Ramirez, 06/2021

* [Using Chrome Local Overrides To Optimize Page Speed](https://blr.design/blog/local-overrides/), Brian Louis Ramirez, 05/2021

* [WebPageTest API](https://css-tricks.com/webpagetest-api/), Chris Coyier, 05/2021

* [Profiling site speed with the Chrome DevTools Performance tab](https://www.debugbear.com/blog/devtools-performance), DebugBear, 04/2021

* [Exploring Site Speed Optimisations With WebPageTest and Cloudflare Workers](https://andydavies.me/blog/2020/09/22/exploring-site-speed-optimisations-with-webpagetest-and-cloudflare-workers/), Andy Davies, 09/2020

* [Prototyping optimizations with Cloudflare Workers and WebPageTest](https://blog.cloudflare.com/workers-and-webpagetest/), Andrew Galloni, 08/2020

* [Web Performance Recipes With Puppeteer](https://addyosmani.com/blog/puppeteer-recipes/), Addy Osmani, 04/2020

* [Cloudflare Workers](https://github.com/pmeenan/cf-workers), Pat Meenan
Collection of Cloudflare Worker scripts, generally focused on performance optimizations

* [Chrome Flags for Tooling](https://github.com/GoogleChrome/chrome-launcher/blob/master/docs/chrome-flags-for-tools.md), Paul Irish

## Online courses

These are excellent courses for web developer to gain a lot of insights about web performance.

### Free Web Courses

* [web.dev](https://web.dev/learn), Google, 11/2018

### Free Video Courses

* Udacity: [Website Performance Optimization by Google](https://www.udacity.com/course/website-performance-optimization--ud884) (free)
This course is great to start. You will learn how the browser works internally and how you can optimise the critical render path.

### Paid Video Courses

* [Setting up DevTools for Performance Testing](https://csswizardry.gumroad.com/l/perfect-devtools), Harry Roberts, 07/2022

* [Lightning-Fast Web Performance](https://scottjehl.com/lfwp/), Scott Jehl, 05/2020
This course is great for Frontend Developers who are interested in web performance. 
Scott introduces the most relevant web performance metrics and shows the most effective ways how to optimize them in great detail. The course contains also a lot of good references which can be used to dive deeper into the topic.  

* Frontend Masters: [Web Performance](https://frontendmasters.com/courses/web-performance/), Steve Kinney, 03/2018 ($39 / monthly subscription)
This is the go to course for Frontend Developers. This course is going really deep into Javascript Performance and Rendering Performance. I recommend this for more senior developers.

* Pluralsight: [Tracking Real World Web Performance](https://app.pluralsight.com/library/courses/web-performance-tracking), Nik Molnar, 05/2015 ($29 / monthly subscription)
Nice introduction into web performance measurement.

* [Modern Dev Tools](https://moderndevtools.com/), Umar Hansa, 05/2017 ($94)
Umar is a Chrome Developer Tools expert and explains all the tools you need to understand and fix web performance issues.

* [Frontend Center](https://frontend.center/), Glen Maddern, ($15/monthly subscription)
Not 100% related to Web Performance. A few of the trainings are available for free.

* [devcademy - Web performance workshop](https://devcademy.marcradziwill.com/web-performance-workshop), Marc Radziwill, 08/2020 (299€ - 750€)

## Videos

* [Modern Web - State of Web Performance 2021](https://www.youtube.com/watch?v=qeYfbPDyg80), Panel: Alex Rusell, Yoav Weiss, Katie Hempenius, Rob Ocel, Katie Saylor-Miller, 08/2021

* [Top 10 performance pitfalls - HTTP 203](https://www.youtube.com/watch?v=Lh9q3h2khlc), Jack Archibald & Surma, 06/2021

### A crash course on web performance

This is a great free introduction into web performance. Ilya Grigorik from Google is covering everything from network, the critical render path and in-app performance. It is from 2013 but it is still highly relevant.

1. [Bandwidth, latency, and radio performance](https://www.youtube.com/watch?v=7gtf47D_bu0&list=PL5jvCmjsPECB2mhJopSB-yryxO473JA1r&index=43&t=0s) (37:42)

1. [Optimizing networking performance (and HTTP 2.0)](https://www.youtube.com/watch?v=46exugLbGFI) (49:36)

1. [Critical rendering path](https://www.youtube.com/watch?v=PkOBnYxqj3k) (41:10)

1. [Delivering 60 FPS in the browser](https://www.youtube.com/watch?v=rpNXWxMyzHQ) (48:15)

### Business

* [Inclusive Design is Fast by Default](https://www.youtube.com/watch?v=MiXy2x6flww) ([Slides](https://simonhearne.com/presentations/inclusive-design/#/)), Simon Hearne, 09/2021

* [From Milliseconds to Millions: A Look at the Numbers Driving Web Performance](https://www.youtube.com/watch?v=cXLOIIJ1UaE) ([Slides](https://speakerdeck.com/csswizardry/from-milliseconds-to-millions-a-look-at-the-numbers-powering-web-performance)), Harry Roberts, 11/2019 – 🚀

* [The 7 Habits of Highly Effective Performance Teams](https://www.youtube.com/watch?v=SE0HhF4TO0Q) ([Slides](https://www.slideshare.net/tammyeverts/the-7-habits-of-highly-effective-performance-teams-perfnow-2019)), Tammy Everts, 11/2019

* [7 Years of Never Shutting Up About Site Speed (Schuh case study)](https://www.youtube.com/watch?v=D7MCAvDVv98) ([Slides](https://www.slideshare.net/StuartMcMillan1/7-years-of-site-speed)), Stuart McMillan, 11/2019

* [PWA Challenges](https://www.youtube.com/watch?v=1570FmnYtck) ([Slides](https://www.slideshare.net/grigs/progressive-web-app-challenges)), Jason Grigsby, 11/2018 – Performance.now()

* [Building a Foundation for Performance](https://www.youtube.com/watch?v=FBeR6QvroEQ), Michelle Vu, 11/2018 – Performance.now()

* [Starting a Dedicated Web Performance Team](https://www.youtube.com/watch?v=ne_UYfDmDYc), Sarah Dapul-Weberman, 06/2018

* [Web Performance @ NBrown](https://www.youtube.com/watch?v=z-mhV-pn68Q), Nick Webb & Laura Sheridan, 06/2018

* [Fast Fashion: Missguided](https://www.youtube.com/watch?v=mLzt23ZVGx0) ([Slides](https://www.slideshare.net/AndyDavies/fast-fashion-how-missguided-revolutionised-their-approach-to-site-performance-deltav-conference-may-2018)), Mark Leach & Andy Davies, 06/2018

* [25% Faster Hotel Search. Web Performance? — Trivago](https://www.youtube.com/watch?v=9f2sjQmJCKY), Tobias Baldauf, 06/2018

* [Conversions@Google 2018](https://www.youtube.com/watch?v=EbbjEY-TyhU), Luke Wroblewski, 05/2018

* [On Building Performance for the Long Term](https://vimeo.com/254947097) ([Slides](https://speakerdeck.com/aemcknig/building-performance-for-the-long-term)), Allison McKnight, 02/2018

* [Building for Billions](https://www.youtube.com/watch?v=Vmg1ECC2r2Q), Tal Oppenheimer, 06/2016

* [Making a business case for web performance optimization](https://vimeo.com/163232533), Kristian Sköld, 04/2016

* [Performance Budget](https://www.youtube.com/watch?v=yqejmZrtmNg), Tim Kadlec, 04/2015

### Third-Party Services

* [Hybrid Personalization in the Adobe Experience Platform Web SDK](https://blog.developer.adobe.com/hybrid-personalization-in-the-adobe-experience-platform-web-sdk-6a1bb674bf41), Jason Waters, 11/2023

* [Keeping it 100, Web Performance with Franklin](https://www.hlx.live/developer/keeping-it-100), Adobe - Project Franklin, 08/2023 

* [How anti-flicker snippets from A/B testing tools impact site speed](https://www.debugbear.com/blog/ab-testing-anti-flicker-body-hiding), Matt Zeunert, 02/2022

* [Deep dive into third-party performance](https://www.youtube.com/watch?v=uXv9JFvrnwo) ([Slides](https://noti.st/simonhearne/5QA7lv/third-party-performance-a-deep-dive)), Simon Hearne, 11/2019

* [It’s My (Third) Party and I’ll Cry If I Want To](https://www.youtube.com/watch?v=bmIUYBNKja4) ([Slides](https://speakerdeck.com/csswizardry/its-my-third-party-and-ill-cry-if-i-want-to)), Harry Roberts, 11/2018

* [Name That Script](https://vimeo.com/266794924) ([Slides](https://speakerdeck.com/trentwalton/name-that-script)), Trent Walton, 04/2018

* [A/B Testing, Ads and other 3rd Party Tags](https://vimeo.com/254703766) ([Slides](https://www.slideshare.net/AndyDavies/ab-testing-ads-and-other-3rd-party-tags-smashingconf-london-2018)), Andy Davies, 02/2018

* [3rd Parties: A Hate Love Who Wants to be Managed](https://www.youtube.com/watch?v=oBD_kClamck), Kristian Sköld, 12/2017

* [What are third party components doing to your site?](https://www.youtube.com/watch?v=G1BiyYOnjjk), Andy Davies/Simon Hearne, 06/2015

* [Stranger Danger: Tracking Vulnerabilities in Your Third Party Code](https://www.youtube.com/watch?v=iXA14OFXxZA), Guy Podjarny, 2015

* [Third Party Performance](https://www.youtube.com/watch?v=I5uhZcJ30SA), Guy Podjarny, 04/2015

### The Psychology of Performance

* [The Psychology of Speed](https://www.youtube.com/watch?v=7i_yQyHdxUo), Simon Hearne, 10/2020

* [Improving perceived performance of loading screens through animation - Bachelor Thesis (PDF)](https://www.diva-portal.org/smash/get/diva2:1333185/FULLTEXT01.pdf), Samantha Persson, 07/2019

* [Designing for Speed & Hacking Users Perception](https://www.youtube.com/watch?v=zfn_tVY5qRI), Mustafa Kurtuldu, 04/2019

* [Cheating the UX when there is nothing more to optimize](https://vimeo.com/251825705) ([Slides](https://speakerdeck.com/stephaniewalter/cheating-the-ux-when-there-is-nothing-more-to-optimise)), Stephanie Walter, 01/2018

* [Perceived Performance: The Only Kind that Really Matters](https://www.youtube.com/watch?v=USH4iPQ44LQ) ([Slides](http://assets.eli.wtf/talks/perceived-perf-perfmatters-2018/#/)), Eli Fitch, 11/2017

* [The Illusion of speed - improving the perceived speed of websites](https://www.youtube.com/watch?v=g3P7Gy_2wOo), Paul Bakaus, 08/2017

* [Deconstructing Performance](https://vimeo.com/184659742), Denys Mishunov, 01/2016
The content of this talk is similar to Eli Fitch’s talk, but less technical.

### Network and Caching

* [HTTP Caching Tests](https://cache-tests.fyi/), Mark Nottingham

* [List of YouTube videos about QUIC/HTTP3](https://www.youtube.com/results?search_query=robin+marx+quic), Robin Marx

* [Data-s(h)aver strategies](https://youtu.be/X0BbSvSbwD0), Tim Vereecke, 11/2019

* [HTTP/3 - HTTP over QUIC is the next generation](https://www.youtube.com/watch?v=idViw4anA6E), Daniel Stenberg, 09/2019

* [More Than You Wanted to Know About Resource Hints](https://www.youtube.com/watch?v=ySdRvo_QnxI), Harry Roberts, 06/2019

* [Resource loading, prioritization, HTTP/2 - oh my! - PerfMatters](https://www.youtube.com/watch?v=nOW-i6bbRdo) ([Slides](https://www.slideshare.net/patrickmeenan/resource-loading-prioritization-http2-oh-my) / [Slides from Tutorial](https://www.slideshare.net/patrickmeenan/http2-in-practice)), Patrick Meenan, 05/2019

* [Building Faster, More Resilient Apps with Service Worker (Chrome Dev Summit 2018)](https://www.youtube.com/watch?v=25aCD5XL1Jk), Phil Walton/Ewa Gasperowicz, 11/2018

* [Headers for Hackers](https://www.youtube.com/watch?v=k92ZbrY815c) ([Slides](https://speakerdeck.com/triblondon/headers-for-hackers), [Article: Headers we want](https://www.fastly.com/blog/headers-we-want), [Article: Headers we don't want](https://www.fastly.com/blog/headers-we-dont-want)), Andrew Betts, 11/2018 – Performance.now() Conference

* [Fun with Protocols](https://www.youtube.com/watch?v=WCwzKe4pKxY), Natasha Rooney, 11/2018 – Performance.now() Conference

* [Take a (Client) Hint](https://speaking.jeremy.codes/yD4dKY) ([Slides](http://jlwagner.net/talks/take-a-client-hint)), ([Code](https://github.com/malchata/client-hints-example)), Jeremy Wagner, 09/2018 - FullStack Fest Conference

* [QUIC: in Theory and Practice](https://www.youtube.com/watch?v=B1SQFjIXJtc), [Slides](http://internetonmars.org/deltav.pdf), Robin Marx, 06/2018

* [HTTP/2 101](https://www.youtube.com/watch?v=r5oT_2ndjms), Surma, 11/2015
Nice introduction to HTTP2

* [Yesterday’s perf best-practices are today’s HTTP/2 anti-patterns](https://www.youtube.com/watch?v=yURLTwZ3ehk), Ilya Grigorik, 06/2015

### Measure

* [Web Performance Metrics Cheatsheet](https://bitsofco.de/web-performance-metrics-cheatsheet/), Ire Aderinokun, 10/2021

* [How to test site speed optimizations with Compute@Edge](https://www.fastly.com/blog/how-to-test-site-speed-optimizations-with-compute-edge), Leon Brocard, 06/2021

* [WebPageTest and Cloudflare Workers – A Performance Consultant’s Dream Combo?](https://www.youtube.com/watch?v=YSS0a0uaDvk), Andy Davies, 20/2020 – 🚀

* [How website speed can impact digital ad revenue](https://www.youtube.com/watch?v=EwlmYec3M-s) ([Slides](https://simonhearne.github.io/presentations/digital-revenue/#/)), Simon Hearne, 06/2019

* [Crash Course in CrUX](https://www.youtube.com/watch?v=YUD5mDOJmhE), [Slides](https://gist.github.com/rviscomi/250bee3c02d1bf9e6e1f528c8813c535), Rick Viscomi, 04/2018 - perfmatters

* [The Latest in Metrics & Measurement](https://www.youtube.com/watch?v=XvZ7-Uh0R4Q), Paul Irish, 11/2018 – Performance.now()

* [How I learned to stop worrying and love UX metrics](https://www.youtube.com/watch?v=lLR_nGA5t5g) ([Slides](https://www.slideshare.net/tammyeverts/how-i-learned-to-stop-worrying-and-love-ux-metrics)), Tammy Everts, 11/2018 – Performance.now() Conference

* [User Experience & Performance: Metrics that Matter](https://www.youtube.com/watch?v=nEHsHioWY1U), [Slides](https://speakerdeck.com/bluesmoon/ux-and-performance-metrics-that-matter-a062d37f-e6c7-4b8a-8399-472ec76bb75e), Philip Tellis, 10/2018

* [Chrome User Experience Report](https://www.youtube.com/watch?v=wVY3-acLIoI), Inian Parameshwaran, 06/2018

* [How Fast Is It?](https://vimeo.com/254728119), [Slides](https://www.slideshare.net/patrickmeenan/how-fast-is-it), Patrick Meenan, 02/2018

* [How’s the UX on the Web, Really?](https://vimeo.com/254834890), Ilya Grigorik, 02/2018

* [Reliably Measuring Responsiveness in the Wild](https://www.youtube.com/watch?v=y5qPix1tdOE), Shubhie Panicker/Nic Jansma, 07/2017

* [Web Performance: Leveraging the Metrics that Most Affect User Experience](https://www.youtube.com/watch?v=6Ljq-Jn-EgU), Shubhie Panicker/Philip Walton, 05/2017

* [Measuring Continuity](https://www.youtube.com/watch?v=dbAise49tWY), Philip Tellis/Nic Jansma, 07/2016

* [Using Machine Learning to Determine Drivers of Bounce and Conversion](https://www.youtube.com/watch?v=pdTUSZ6cwBY), Tammy Everts/Patrick Meenan, 07/2016

* [Forensic Tools for In-Depth Performance Investigations](https://www.youtube.com/watch?v=jgGbdoN4l2k), Philip Tellis/Nic Jansma, 06/2016

* [Visualizing performance data in engaging ways](https://www.youtube.com/watch?v=lEhmmTlbCss), Mark Zeman, 06/2015

### Tooling

* [Extending WebPageTest with Custom Metrics](https://blog.webpagetest.org/posts/extending-webpagetest-with-custom-metrics/), Tim Kadlec, 04/2021

* [WebPageTest: Custom Metric Examples](https://docs.webpagetest.org/custom-metrics/examples/), WebPageTest

* [Speed tooling evolutions: 2019 and beyond](https://www.youtube.com/watch?v=iaWLXf1FgI0), Elizabeth Sweeny & Paul Irish, 11/2019

* [Demystifying Speed Tooling (Google I/O ’19)](https://www.youtube.com/watch?v=mLjxXPHuIJo), Elizabeth Sweeny & Paul Irish & Amir Rachum, 05/2019

* [State of the Union for Speed Tooling (Chrome Dev Summit 2018)](https://www.youtube.com/watch?v=ymxs8OSXiUA), Elizabeth Sween/Paul Irish, 11/2018

* [What’s new in Chrome Dev Tools](https://www.youtube.com/watch?v=mfuE53x4b3k&index=36&list=PL5jvCmjsPECB2mhJopSB-yryxO473JA1r&t=52s), Paul Irish, 05/2018

* [The power of Headless Chrome and browser automation](https://www.youtube.com/watch?v=lhZOFUY1weo), Eric Bidelman, 05/2018

* [Use Lighthouse and Chrome UX Report to optimize web app performance](https://www.youtube.com/watch?v=UvK9zAsSM8Q), 05/2018
Use the new Lighthouse API to integrate it into the Jenkins pipeline.

* [A Modern Front-End Workflow with DevTools](https://vimeo.com/254733177), Umar Hansa, 02/2018

* [Charles Proxy](https://www.youtube.com/watch?v=nihC1xW1eNI), Willow Talk, 01/2016

* [Developer’s Toolbox: What is Charles and why would I want it?](https://www.youtube.com/watch?v=y8Okx-RWK3M), Team Learnable, 05/2014

### Image and Video

* [Progressively loading images - HTTP 203](https://www.youtube.com/watch?v=-7k3H2GxE5E), Jake Archibald & Surma, 05/2021

* [SVG Will Save Us](https://www.youtube.com/watch?v=sxte3WpyO60), Sarah Drasner, 04/2019, perfmatters

* [Building Modern Web Media Experiences: Picture-in-Picture and AV1 (Chrome Dev Summit 2018)](https://www.youtube.com/watch?v=iTC3mfe0DwE), François Beaufort/Angie Chiang, 11/2018

* [Image Optimization](https://www.youtube.com/watch?v=jTXhYj2aCDU), Kornel Lesiński, 11/2018 – Performance.now()

* [Beyond the Basics of Image Optimization](https://vimeo.com/254736788) — ([Slides](https://github.com/una/beyond-the-basics-of-image-optimization)), Una Kravets/Martin Splitt, 02/2018

* [Your Hero Images Need You! Save the Day with HTTP2 Image Loading](https://vimeo.com/163113212), Tobias Baldauf, 04/2016

* [High Performance Images: Beautiful Shouldn’t Mean Slow](https://www.youtube.com/watch?v=7zgd2OjSoS8), Guy Podjarny, 12/2015

### Development

* [Harry Roberts - Get Your "head" Straight](https://www.youtube.com/watch?v=MHyAOZ45vnU), Harry Roberts, 11/2021

* [Web Performance Tuning with browser APIs](https://www.youtube.com/watch?v=ALN1v_sBe2g), Yaser Adel Mehraban, 06/2021

* [Transitioning to modern JavaScript](https://www.youtube.com/watch?v=cLxNdLK--yI) ([Article](https://web.dev/publish-modern-javascript/)), Houssein Djirdeh, Jason Miller, Chrome Dev Summit 2020, 12/2020

* [When JavaScript Bytes](https://www.youtube.com/watch?v=JvJ0v5OohNg) ([Slides](https://noti.st/tkadlec/MC0Bvy/when-javascript-bytes)), Tim Kadlec, 11/2019

* [You Really Don't Need All that JavaScript, I Promise.](https://www.youtube.com/watch?v=rxlJRydqmk8), Stuart Langridge, 2019

* [Adaptive Loading — Improving the UX for millions on low-end devices](https://www.youtube.com/watch?v=puUPpVrIRkc), Addy Osmany, 11/2019

* [Predictive Prefetching](https://www.youtube.com/watch?v=Faaf5tzqvZg) ([Slides](https://noti.st/shortdiv/jsHO3Z)), Divya Sasidhara, 11/2019

* [WebAssembly – To the browser and beyond!](https://www.youtube.com/watch?v=Z6ZhIA8i_8g) ([Slides](https://noti.st/patrickhamann/uEw4zt/webassembly-to-the-browser-and-beyond)), Patrick Hamann, 11/2019

* [The main thread is overworked & underpaid](https://www.youtube.com/watch?v=7Rrv9qFMWNM), Surma, 11/2019

* [Speed at Scale: Web Performance Tips and Tricks from the Trenches (Google I/O ’19)](https://www.youtube.com/watch?v=YJGCZCaIZkQ), Addy Osmani & Katie Hempenius, 05/2019

* [Rendering on the Web: Performance Implications of Application Architecture (Google I/O ’19)](https://www.youtube.com/watch?v=k-A2VfuUROg), Jason Miller & Houssein Djirdeh , 05/2019

* [A Quest to Guarantee Responsiveness: Scheduling On and Off the Main Thread (Chrome Dev Summit 2018)](https://www.youtube.com/watch?v=mDdgfyRB5kg), Shubhie Panicker/Jason Miller, 11/2018
* [Speed Essentials: Key Techniques for Fast Websites (Chrome Dev Summit 2018)](https://www.youtube.com/watch?v=reztLS3vomE), Katie Hempenius/Houssein Djirdeh, 11/2018

* [Raiders of the Fast Start: Frontend Perf Archeology](https://www.youtube.com/watch?v=qts9gPYoANU) ([Slides](https://www.slideshare.net/KatrinaSylorMiller/raiders-of-the-fast-start-frontend-performance-archaeology-performancenow-conference)), Katie Sylor-Miller, 11/2018 - Performance.now() Conference

* [The Long Tail of Performance](https://www.youtube.com/watch?v=6vMvg38CXFk) ([Slides](https://noti.st/tkadlec/FAqr8X)), Tim Kadlec, 11/2018 - Performance.now() Conference

* [Optimizing Fonts](https://www.youtube.com/watch?v=FbguhX3n3Uc) ([Slides](https://noti.st/zachleat/KNaZEg/the-five-whys-of-web-font-loading-performance)), Zach Leatherman, 11/2018 – Performance.now() Conference

* [How I optimized my JavaScript sheet music rendering engine](https://www.youtube.com/watch?v=XH5EtQge_Bg), Adrian Holovaty, 11/2018 – Performance.now() Conference

* [Debugging UI Performance Issues](https://www.youtube.com/watch?v=JGdIzKcAEkI) ([Slides](https://www.slideshare.net/AnnaMigas1/performancenow-fast-but-not-furious)), Anna Migas, 11/2018 – Performance.now() Conference

* [Make JavaScript Faster](https://www.youtube.com/watch?v=RwSlubTBnew) ([Slides](https://www.slideshare.net/souders/make-javascript-faster)), Steve Souders, 11/2018 – Performance.now() Conference

* [Schedule your animations like a pro – with requestAnimationFrame](https://www.youtube.com/watch?v=wSEU7ivOnzc), Paul Lewis, 09/2018

* [Frontend Resilience](https://www.youtube.com/watch?v=iUfymdAZ1wI) ([Slides](https://speakerdeck.com/ianfeather/building-resilient-frontend-systems-all-day-hey)), Ian Feather, 06/2018

* [There's more to Performance than meets the Eye](https://www.youtube.com/watch?v=n1sXj9oAXFU), Léonie Watson, 06/2018, Delta Conference

* [The Event Loop](https://vimeo.com/254947206), Jake Archibald, 02/2018 – [W3C Spec Event Loop](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model)

* [Performant Animations: Hitting 60fps](https://vimeo.com/254906131), Emily Hayman, 02/2018

* [Resource Loading — Past, Present & Future](https://vimeo.com/254861484) ([Slides](https://yoavweiss.github.io/smashing_resource_loading_past_present_future/#1)), Yoav Weiss, 02/2018

* [Web Fonts are ▢▢▢ Rocket Science](https://vimeo.com/254727749) ([Zach’s lenghty article](https://www.zachleat.com/web/comprehensive-webfonts/)), Zach Leatherman, 02/2018

* [Front End Center: Caching & CDNs](https://www.youtube.com/watch?v=_QeNLrkPvdI), 10/2017

* [Fast By Default: Modern Loading Best Practices](https://www.youtube.com/watch?v=_srJ7eHS3IM), Addi Osmani/Ilya Grigorik, 10/2017

* [Front End Center: Why Latency Matters: Foundations of Web Performance](https://www.youtube.com/watch?v=ak4EZQB4Ylg), 08/2017

* [Creating UX that “Just Feels Right” with Progressive Web Apps](https://www.youtube.com/watch?v=mmq-KVeO-uU), Owen Campbell-Moore, 05/2017

* [Solving the Web Performance Crisis](https://channel9.msdn.com/Blogs/msedgedev/nolanlaw-web-perf-crisis), Nolan Lawson, 01/2017

* [Solving the Web Performance Crisis](https://www.youtube.com/watch?v=yfmqDqmSJXw), Nolan Lawson, 01/2017

* [Planning for Performance: PRPL](https://www.youtube.com/watch?v=RWLzUnESylc), Sam Saccone, 11/2016

* [AMP: Does it Really Make Your Site Faster?](https://www.youtube.com/watch?v=dOiGcgw-r8g), Nic Jansma, Nigel Heron, 11/2016

* [UI Elements at 60fps](https://www.youtube.com/watch?v=ZqdNgn5Huqk), Paul Lewis, 06/2016

* [Owning your performance: RAIL](https://www.youtube.com/watch?v=w0O2znkSBXA&list=PL5jvCmjsPECB2mhJopSB-yryxO473JA1r&index=6&t=1497s), Paul Irish, 11/2015

* [HTTP2 and Front-End Performance](https://www.youtube.com/watch?v=GIDXISQs67w), Mark Nottingham, 05/2015


### Meta

* [Web Performance Research](https://github.com/imteekay/web-performance-research), TK, 08/2022

* [performance.now().reject(reasons)](https://www.youtube.com/watch?v=vtIfVPtN6io) ([Slides](https://docs.google.com/presentation/d/18KW9c8ywYvMVsXVwU-Llvc1nEX40y9Fj3VBAkHRKs_4/present)), Ilya Grigorik, 11/2019

* [A Decade of Disciplined Delivery](https://www.youtube.com/watch?v=HC1eVj5cQOo) ([Slides](https://www.dropbox.com/s/lfvrkzoqkecnh0h/DecadeOfDelivery_PDF.pdf)), Henri Helvetica, 11/2019

* [The Future of Performance](https://www.youtube.com/watch?v=Jz3Fu1o356g) ([Slides](https://www.dropbox.com/s/2bxw50ajomvniio/future-web-perf-perfnow.pdf?dl=0)), Vitaly Friedman, 11/2019


### Twitch

* [Web Performance Auditing (with Tim Kadlec) — Learn With Jason (90m)](https://www.twitch.tv/videos/1085542803), 07/2020

* [Testing optimizations with Cloudflare Workers and WebPageTest](https://www.twitch.tv/videos/1080517853), Tim Kadlec (Webpagetest), 07/2020

* [Live Auditing a Government Site](https://www.twitch.tv/videos/1066237948), Tim Kadlec (Webpagetest), 06/2020

* [Hidden Gems in WPT](https://www.twitch.tv/videos/1051949599), Tim Kadlec (Webpagetest), 06/2020


## Books

This are the books I read about web performance and I can highly recommend all of them:

* [Image Optimization](https://www.smashingmagazine.com/printed-books/image-optimization/), Addy Osmani, Smashing Magazin Book, 04/2021

* [Going Offline](https://abookapart.com/products/going-offline), Jeremy Keith, A Book Apart, 04/2018

* [High Performance Images](http://shop.oreilly.com/product/0636920039730.do), Colin Bendell/Tim Kadlec/Yoav Weiss/Guy Podjarny/Nick Doyle/Mike McCall, O’Reilly, 11/2016
This book goes really deep and will answer you all the questions you could possible ask about images.

* [Time is money](http://shop.oreilly.com/product/0636920041450.do), Tammy Everts, O’Reilly, 06/2016
This book is great to understand why performance matters and how it influences human behaviour and your business metrics. I recommend this book highly for Business Consultants.

* [Using WebPageTest](http://shop.oreilly.com/product/0636920033592.do), Rick Viscomi/Andy Davies/Marcel Duran, O’Reilly, 10/2015
This book gives a deep insight into WebPageTest. You will learn a lot of things you wouldn’t find out reading this book.

* [Designing for Performance](http://shop.oreilly.com/product/0636920033578.do), Lara Callender Hogan, O’Reilly, 12/2014

* [Responsible Responsive Design](https://abookapart.com/products/responsible-responsive-design), Scott Jehl, A Book Apart, 11/2014

* [High Performance Browser Networking](https://hpbn.co/), Ilya Grigorik, O’Reilly, 09/2013 (free)
This book is a must read. If you are serious about web performance you have to understand the network layer. This book will teach you what you need to know.

* [High Performance Web Sites](http://shop.oreilly.com/product/9780596529307.do), Steve Souders, O’Reilly, 09/2007
This book is a classic.

* [Even Faster Web Sites](http://shop.oreilly.com/product/9780596522315.do), Steve Souders, O’Reilly, 07/2009
Another classic book.

## Tools

### Free tools and services

* [Chcr.co](https://chckr.co/)
Check Your Site Across Leading Website Testing Tools

* [UI Test - Test your website in more than 80 tools](https://uitest.com/)

#### WebPageTest

* [WebPageTest](http://www.webpagetest.org/)
Make synthetic measurements from all over the world. Make performance audits of any website. This tool is very powerful and gives you a lot of insights. I use it a lot to make a website comparison video. – 🚀

* [WebPageTest comparison URL generator](https://wpt-compare.app/)
Compare multiple webpagetest results which each other. Nice tool to see filmstrips site by site.

* [Frustration Index](https://www.frustrationindex.com)
"The gap between metrics is a better KPI for user experience" - FRUSTRATIONindex looks at the gap between metrics instead of looking at them individually.
The bigger the gap the bigger the chance a user gets frustrated.

* [Request Map Generator](https://requestmap.herokuapp.com/)
The Request Map Generator is the go to place to understand what 3rd party tools are running on your page and how much data they are adding.

* [Webpagetest Slack Integration](https://github.com/WebPageTest/webpagetest-slack)


#### Lighthouse & CrUX & Core Web Vitals

* [Lighthouse network throttling simulation](https://www.debugbear.com/lighthouse-simulation)
This tool runs a Lighthouse performance test at a range of different network speeds. It shows how bandwidth and round-trip latency impact site performance metrics.

* [Lighthouse](https://developers.google.com/web/tools/lighthouse/)
Lighthouse is becoming the best audit tool for web performance. It has a great documentation and gives valuable insights. This is where my performance audit is starting.

* [Lighthouse Parade](https://github.com/cloudfour/lighthouse-parade)
A Node.js command line tool that crawls a domain and compiles a report with lighthouse performance data for every page.

* [Pagespeed Compare](https://pagespeed.compare/)
Compare performance metrics of your pages against each other or your competitors using Google PageSpeed Insights.

* [Lighthouse Scoring Calculator](https://googlechrome.github.io/lighthouse/scorecalc/): Learn how the Lighthouse Score is calculated for the last two versions. This helps to understand where changes are comming from if your score changes.

* [Lighthouse Scores from around the world](https://lighthouse-metrics.com/): Global performance insights, powered by Lighthouse. Lighthouse Metrics provides easy insights for your site's performance. Save your time by running tests from multiple locations to get the valuable insight you need.

* [Web Performance Budget Calculator](https://perf-budget-calculator.firebaseapp.com/)
Create your own budget based on httparchive data of millions of pages. Download it as an json file for [Lighthouse Web Performance Budget](https://developers.google.com/web/tools/lighthouse/audits/budgets).

* [Test your mobile speed with Google](https://testmysite.withgoogle.com/intl/en-gb)
Test score, benchmark with other pages from the same industry, detailed report

* [Google Search Console](https://search.google.com/)
Detect Core Web Vitals issues on your page. Fix it. And revalidate.

* [Google Page Speed Insights](https://developers.google.com/speed/pagespeed/insights/)
Show CrUX RUM data of big websites.

* [Treo](https://treo.sh/sitespeed/)
Configure speed metrics using percentiles and intervals for any website from @ChromeUXReport

* [Real User Experience Test (rUXt)](https://ruxt.dexecure.com/)
Access RUM data for 3,237,526 websites accessed by Google Chrome Users

* [Google Speed Scorecard](https://www.thinkwithgoogle.com/feature/mobile/)
Compare your mobile Site Speed with your competition based on CrUX data

* [Google Imapct Calculator](https://www.thinkwithgoogle.com/feature/mobile/)
Estimate the revenue impact of performance optimisations

* [Google Page Speed Industry Benchmarks](https://www.thinkwithgoogle.com/marketing-resources/data-measurement/mobile-page-speed-new-industry-benchmarks/)

* [Mobile Friendly Test](https://search.google.com/test/mobile-friendly)

* [massWebVitals](https://github.com/dwsmart/massWebVitals)
A node CLI script to grab Largest Contentful Paint, First Input Delay & Cumulative Layout Shift for a list of pages specified in a .csv file.

* [Layout Shift GIF Generator](https://defaced.dev/tools/layout-shift-gif-generator/): Visualise the Core Web Vitals metric Cumulative Layout Shift (CLS) with a simple GIF.

* [Cumulative Layout Shift Debugger](https://webvitals.dev/cls): Visualise the Cumulative Layout Shift (CLS) to identify what needs improving on mobile and/or desktop in the initial load of a website.

* [Batch Speed: Bulk speed test multiple urls using Google's Page Speed checker](https://batchspeed.com/)

* [Layout Shift Terminator](https://googlechromelabs.github.io/layout-shift-terminator/):
The following tool allows you to enter arbitrary markup which causes layout shifts (e.g. social embed) in order load the markup at various viewport sizes to be able to measure the dimensions at each. With this information it then provides optimized markup with responsive media queries to reduce the amount of layout shifting when the markup is rendered on a loading page.


#### Images & Video

* [AVPress](https://avpress.zaps.dev/)
Compress & resize videos in the browser thanks to WebAssembly and FFMPEG.WASM.

* [Squoosh](https://squoosh.app)
Upload an image and compare the original with different compressed version to find a good balance between filesize and image quality. – 🚀 

* [I just want to put an image on my page](https://just-gimme-an-img.vercel.app/) ([Article](https://paul.kinlan.me/images-are-still-too-hard/))
Optimizes images and generate the HTML for you.

* [See How Images Affect Your Page Speed](https://pageweight.imgix.com)

* [Cloudflare: Image Optimization Test](https://images.cloudflare.com/)
Image analysis tool. This tool gives you insight about how you can optimise your images to gain a better web performance.

* [Cloudinary: Image Analyser](https://webspeedtest.cloudinary.com/)
Image analysis tool. This tool gives you insight about how you can optimise your images to gain a better web performance. This tool is also integrated within webpagetest.org.

* [Responsive Image Breakpoints Generator v2.0](https://responsivebreakpoints.com/)
Easily generate the optimal responsive image dimensions

* [ImageOptim](https://imageoptim.com/)
Image compression

* [ImageAlpha](https://pngmini.com/): Free png optimizer for MacOS


#### Thirdparty

* [3P web](https://www.thirdpartyweb.today/), Shows the impact of Third-Party Tools based on HTTP Archive data.

* [https://better.fyi/trackers/](https://better.fyi/trackers/)
Nice list of 3rd party trackers with detailed information, for example about how to block the service. Which comes in handy when you want to measure the impact of a tool.

* [spof-o-matic](https://github.com/pmeenan/spof-o-matic)
Chrome extension for detecting and simulating frontend Single Points Of Failure

* [JS Manners](https://github.com/triblondon/thirdpartysla)
I like this page to audit JS Frameworks and 3rd party tools.

* [Webbkoll](https://webbkoll.dataskydd.net/)
This tool helps you check what data-protecting measures a site has taken to help you exercise control over your privacy.

* [Ghostery](https://www.ghostery.com/)
See what 3rd party tools are loaded on a site.

* [3rdParty.io](http://3rdparty.io/)
3rdParty.io monitors third-party scripts and libraries, and checks that they’re following best practices for performance, reliability and security – 🚀

* [3rd Party Audit Google Sheet](https://docs.google.com/spreadsheets/d/1uTcRSoJAkXfIm2yfG5hvCSzvSZD9fAwXNQMVK3HdPMI/edit#gid=0)
A Google Sheet provided by Harry Roberts which gives you a nice overview over your used 3rd Party Tools

* [Content Security Policy (CSP) Generator](https://report-uri.com/home/generate)

* [Wappalyzer - Identify technology on websites](https://www.wappalyzer.com/)

* [SimilarWeb](https://www.similarweb.com/)
Find similar pages for a competitor benchmark.

* [Build with](https://builtwith.com/)
Understand the technical building blocks of a website.


#### Development Tools

* [Resource Hint Validator by DebugBear](https://www.debugbear.com/resource-hint-validator)

* [HTML Size Analyzer by DebugBear](https://www.debugbear.com/html-size-analyzer)

* [PurifyCSS Online](https://purifycss.online/)
Insert your website URL below and find out by how much of your CSS file size can be reduced – 🚀

* [Microsoft WebHint](https://webhint.io/)
webhint is a customizable linting tool that helps you improve your site's accessibility, speed, cross-browser compatibility, and more by checking your code for best practices and common errors.

* [Chrome Developer Tools](https://developer.chrome.com/devtools)
This is the go to tool for all web developers. Understand how your code gets loaded, parsed and rendered. – 🚀

* [Yellow Lab Tools](https://yellowlab.tools)
Online test to help speeding up heavy web pages: Frontend Quality, WebPerf, JS Profiling – 🚀

* [Waterfaller: generate tasks for developers that boost page speed](https://waterfaller.dev/)
Waterfaller uses Google PageSpeed Insights to generate an actionable list of tasks to improve your Core Web Vitals metrics. It might be a good compliment to Lighthouse audit tips! – 🚀

* [Can I use?](https://caniuse.com/)
Check the browser support for every web technology. – 🚀

* [SpeedChecklist](https://speedchecklist.com/)
A checklist which shows you how to optimise web performance issues you might have. You find best practices for the most common problems described in great detail.

* [Slowfiles](https://slowfil.es/), Harry Roberts & Ryan Townsend
Simulate slow loading JS and CSS files.

* [CSS Triggers](https://csstriggers.com/)
Which CSS element trigger layout, paint, or composite?

* [BundlePhobia](https://bundlephobia.com/)
Find the cost of adding a npm package to your bundle

* [EStimator](https://estimator.dev/)
Find out how much turning on modern JS could save.

* [Perf Track](https://perf-track.web.app/),
Compares the HTTP archive data of different JavaScript Frameworks

* [Source Map Explorer](https://www.npmjs.com/package/source-map-explorer), [Webpack Bundle Analyer](https://www.npmjs.com/package/webpack-bundle-analyzer)
Understand what code you are loading

* [Bundle per page type/entry point](https://bundlers.tooling.report/code-splitting/multi-pages/)

* [You might not need Javascript](http://youmightnotneedjs.com/)
Don’t use Javascript for things where it is not really needed. This website shows you to do stuff with CSS: Slider, Modal, Scroll Indicator, Navigation, Tabs, Accordion

* [You might not need jQuery](http://youmightnotneedjquery.com/)
Learn how to get rid of jQuery dependencies in your project. This page shows you how to achieve things with Vanilla Javascript.

* [Browser Scope](https://www.browserscope.org/)
Browserscope is a community-driven project for profiling web browsers. The goals are to foster innovation by tracking browser functionality and to be a resource for web developers.

* [CSS stats](https://cssstats.com/)


#### Network Tools

* [Fast or Slow](https://www.fastorslow.com/)
Global Website Speed Profiler

* [https://httpstatus.io/](https://httpstatus.io/)
Service which shows status codes, latency, response headers and more from the URL you submit. This is great to check for redirects and other network related issues. 

* [Cloud Ping](http://www.cloudping.info/)
See the network latency from your location to all AWS centres in the work.

* [Charles Web Debugging Proxy](https://www.charlesproxy.com/) (free/$50)
The proxy sits between your browser and the internet and lets you monitor and alter all the network traffic. I use it mainly for network throttling and request blocking.

* [DNS Perf](https://www.dnsperf.com/dns-speed-benchmark/)
DNS Speed Benchmark: Test the performance of your DNS provider from all over the world using this benchmark tool

* [DNS Speed Test](https://www.ultratools.com/tools/dnsHostingSpeed)
The DNS hosting speed tool will give you valuable DNS performance information for each level in the DNS tree to assist with performance evaluations and performance troubleshooting.

* [SSL Server Test](https://entrust.ssllabs.com/)
This free online service performs a deep analysis of the configuration of any SSL web server on the public Internet.

* [httpstat.us](http://httpstat.us/)
Service which responds which all kind of http error codes. With this service you can check how your app or website reacts when 3rd party services are responding with an error.

* [CDN Performance Tool](https://www.uptrends.com/tools/cdn-performance-check)
Using one of your page’s CDN requests, enter the request URL above—perhaps try an image request. Uptrends sends the request and checks your CDN responses from multiple locations. Uptrends measures the response times, connection details, headers, response size, and more from each location. For best results, enable debug response headers in your CDN configuration.

* [CDN Planet](https://www.cdnplanet.com/)
Find the CDN which is right for you.

* [Gzip and Brotli Compression Level Estimator](https://tools.paulcalvano.com/compression.php)

* [Is HTTP2 fast yet?](http://ishttp2fastyet.com/), Andy Davies

* [Cache Control Header Builder](https://cache-control.sdgluck.now.sh/)


#### Fonts

* [Automatic Font Matching](https://deploy-preview-15--upbeat-shirley-608546.netlify.app/perfect-ish-font-fallback/?font=Montserrat)

* [Font-Face Descriptor Playground](https://codepen.io/simonjhearne/pen/rNMGJyr)

* [Font Style Matcher](https://meowni.ca/font-style-matcher/)
If you use font-display: swap this tool is great to make sure the fallback font looks as similar as possible to avoid major layout changes once the web font is loaded and swapped.

* [FOIT vs FOUT](https://www.zachleat.com/foitfout/)

* [Glyphhanger](https://github.com/filamentgroup/glyphhanger)
Your web font utility belt. It can subset web fonts. It can show you what unicode-ranges are used on a web site (optionally per font-family). It can also subset web fonts automatically using the unicode-ranges it found.

* [Wakamaifondue](https://wakamaifondue.com)
Tool to inspect local font files

* [Online Font Converter](https://onlinefontconverter.com/)
A good tool to create woff2 fonts

* [Font Subsetter](https://everythingfonts.com/subsetter)

* [Google Web Fonts Helper](https://google-webfonts-helper.herokuapp.com/fonts)
A Hassle-Free Way to Self-Host Google Fonts by Mario Ranftl


#### Browser Extensions

* [Cloudinary Media Inspector](https://chrome.google.com/webstore/detail/cloudinary-media-inspecto/ehnkhkglbafecknplfmjklnnjimokpkg)
Gives a quick overview of all loaded images (dimension, ratio, format, header, details)

* [Piez](https://chrome.google.com/webstore/detail/piez/npbccjkjemgagjioahfccljgnlkdleod?hl=en)
Piez displays optimizations made by Akamai Image Manager, Resource Optimizer, Push/Preconnect, and Script Manager.

* [ModHeader](https://chrome.google.com/webstore/detail/modheader/idgpnmonknjnojddfkpgkljpfnnfcklj?hl=en)
Set additional headers. I use this to set the x-host when I test Cloudflare Workers in the browser.

* [Web Vitals](https://chrome.google.com/webstore/detail/web-vitals/ahfhijdlegdabablpippeagghigmibma?hl=en#:~:text=Web%20Vitals&text=Web%20Vitals%20are%20quality%20signals,interactivity%20and%20layout%20shift%20metrics.)
Shows the Web Vitals for the active page.

* [CLS Visualizer](https://chrome.google.com/webstore/detail/cls-visualizer/jbbeihojggidiclbcneckhcblilapahn?hl=en)
This plugin will highlight and visualize the Cumulative Layout Shift of the current page.


#### Other Tools

* [ProgUX – The best experience for every user](https://progux.org/)

* [Web Performance Heat Map Generator](http://heatmap.webperf.tools/)

* [What does my site cost](https://whatdoesmysitecost.com/)
How much does it cost for your users to download your page? In many countries the majority of the users are on a pre paid data plan.

* [Website carbon - How is your website impacting the planet?](https://www.websitecarbon.com/)

* [har.tech](https://har.tech/)
Collection of tools which can be used to inspect HAR files.

* [Waterfall Heatmap Bookmarklet](https://github.com/zeman/perfmap)
Prints the timing data on assets.

* [Performance budget calculator](http://www.performancebudget.io/) - 🚀

* [UX Speed Calculator](https://ux-speed-calculator.netlify.app), Sergey Chernyshev
A visualization tool that helps understand relationship between page speed, conversion and bounce rates. Does not require a real data (e.g. RUM) and lets you tweak the distributions yourself

* [SERP Speed](https://reddico.co.uk/tools/serp-speed/)
Compare your page speed at keyword level with the rest


### Paid tools and services

These are professional tools which cost money. The cost are usually depends on traffic, server or data.

* [New Relic](https://newrelic.com/)
New Relic offers your great tools which give you insight in your whole app stack in real time. New Relic insights lets you also consume 3rd party APIs and correlate performance with business data. It also comes with great monitor solutions which alert you before things getting bad.

* [Speedcurve](https://speedcurve.com/)
Speedcurve is build on top of WebPageTest and makes running synthetic tests easy. You get nice looking dashboards which are great for running on a big display in your office. With Lux they also integrated a RUM solution. - 🚀

* [Akamai Web Performance Tools](https://www.akamai.com/uk/en/products/web-performance/)
With mPulse you can understand how your performance and business data is correlation. With the “What if” tool you can predict the impact of performance changes on your business KPI. Works together with Chrome UX report data and shows RUM data of your competition (if the data is available).

* [Calibre](https://calibreapp.com)
Nice Web Perf Tool to measure synthetic data

* [Treo](https://treo.sh)
Treo is a good choice if you are interested in Lighthouse (Pages) and CrUX (Sites) data.

* [Blackbird](https://tryblackbird.com/)
Ecommerce site speed monitoring – Track down-to-the-millisecond speed metrics for your users, see how speed affects your conversion rate, and get alerts & reports to stay on top of it

* [Cloudinary](https://cloudinary.com/)
Image and video management in the cloud

* [Request Metrics](https://requestmetrics.com/)
Request Metrics is a simple low-cost performance monitoring service. It charts real user metrics and web vitals for your web pages and API endpoints. It also comes with alerting tools that notify you when pages or endpoints slow down.

* [Cloudflare Workers](https://workers.cloudflare.com/)
They are like service workers in the cloud. With their help you can prototype your web performance optimizations quickly and test the outcome in Webpagetest.org.


## Open Source Projects

* [Fast Dom](https://github.com/wilsonpage/fastdom)
Eliminates layout thrashing by batching DOM measurement and mutation tasks.

* [FutureLink](https://github.com/SamKnows/futurelink)
Calculates the deceleration of the cursor to predict when a link is about to be clicked.

* [guess.js](https://github.com/guess-js/guess)
Libraries and tools for enabling data-driven user-experiences on the web.

* [WebPageTest](https://github.com/WPO-Foundation/webpagetest)
Foundation for WebPageTest.org. You can install it locally to run it behind a firewall.

* [Lighthouse](https://github.com/GoogleChrome/lighthouse)
Codebase of the Google Chrome Lighthouse tool.


## Studies

Studies are important to understand how the different markets in the world are working. What are the most used devices? What is the average network connection?

* [Web Performance Optimisation Stats](https://wpostats.com)
Web performance studies. Learn how web performance impacts business KPIs. A good source to convince people to invest money in web performance optimisations.

* [Progressive Web Apps Stats](https://www.pwastats.com/)
Learn what influence PWA have on business metrics.

* [http://www.internetlivestats.com/internet-users-by-country/](http://www.internetlivestats.com/internet-users-by-country/)

* [https://www.productchart.com/smartphones/](https://www.productchart.com/smartphones/)

* [https://www.gsmaintelligence.com/](https://www.gsmaintelligence.com/)

* [https://www.ericsson.com/en/mobility-report](https://www.ericsson.com/en/mobility-report)

* [Open Signal: Global stat of the mobile network](https://opensignal.com/reports/2018/02/global-state-of-the-mobile-network)

* [https://www.akamai.com/us/en/about/our-thinking/state-of-the-internet-report/](https://www.akamai.com/us/en/about/our-thinking/state-of-the-internet-report/)


## Case studies

* [Case Study: Improving The Performance Of Wix Websites](https://www.smashingmagazine.com/2021/11/improving-performance-wix-websites-case-study/), Dan Shapir, 11/2021

* [How I made my WordPress Site Score 100% on Web Vitals](https://blog.speedvitals.com/wordpress-score-100-web-vitals/), Kashish Kumawat, 11/2021

* [LinkedIn: Personalizing Performance: Adapting Application in real time to member environments](https://www.linkedin.com/pulse/personalizing-performance-adapting-application-real-time-pasumarthy/), Nitin Pasumarthy, 09/2021

* [Wix.com: How We Improved Website Performance by Evolving Our Infrastructure](https://www.wix.engineering/post/how-we-improved-website-performance-by-evolving-our-infrastructure), Alon Kochba, 08/2021

* [Learnings From a WebPageTest Session on CSS-Tricks](https://css-tricks.com/learnings-from-a-webpagetest-session-on-css-tricks/), Chris Coyier, 07/2021

* [How committing to Core Web Vitals increased Netzwelt's advertising revenues by 18%](https://web.dev/netzwelt/), Martin Schierle, 07/2021

* [Improving Cumulative Layout Shift at Telegraph Media Group](https://web.dev/telegraph/), Chris Boakes, 06/2021

* [Improving The Performance Of An Online Store (Case Study)](https://www.smashingmagazine.com/2021/06/front-end-performance-online-store-jewellerybox/), Jennifer Brehm, 06/2021

* [How We Improved Our Core Web Vitals (Case Study)](https://www.smashingmagazine.com/2021/05/core-web-vitals-case-study/), 05/2021

* [Optimizing the Performance of a React Progressive Web App](https://www.iamtk.co/optimizing-the-performance-of-a-react-progressive-web-app), TK, 04/2021

* [Making Cybertruck Faster](https://tryblackbird.com/blog/cybertruck), 04/2021

* [How has the fastest F1 website in 2021?](https://jakearchibald.com/2021/f1-perf-part-1/), Jake Archibald, 03/2021

* [How we built UK’s fastest online fashion-store](https://www.scipioerp.com/2021/03/08/how-we-built-uks-fastest-online-fashion-store/), Paul, 03/2021

* [Performance: Prefetch Next Pages Chunks](https://www.iamtk.co/performance-prefetch-next-pages-chunks), TK, 01/2021

* [Making GitHub’s new homepage fast and performant](https://github.blog/2021-01-29-making-githubs-new-homepage-fast-and-performant/), Tobias Ahlin, 01/2021

* [How We Improved SmashingMag Performance](https://www.smashingmagazine.com/2021/01/smashingmag-performance-case-study/), Vitaly Friedman, 01/2021

* [Getting Postmark’s Lighthouse Performance Score to 100](https://wildbit.com/blog/2020/09/30/getting-postmark-lighthouse-performance-score-to-100#:~:text=What%20if%20we%20could%20replace%20the%20real%20widget), Eugene Fedorenko, 09/2020

* [Case study: Analyzing Notion app performance](https://3perf.com/blog/notion/), Ivan Akulov, 05/2020

* [Rebuilding our tech stack for the new Facebook.com](https://engineering.fb.com/web/facebook-redesign/), Ashley Watkins, Royi Hagigi, 05/2020

* [How We Boosted Page Speed By 58% ... and how you can too!](https://downtimemonkey.com/blog/how-we-boosted-page-load-speed.php), Downtime Monkey, 10/2019

* [Bringing service workers to Google Search](https://web.dev/google-search-sw), Jeff Posnick, 06/2019

* [Improving third-party web performance at The Telegraph](https://medium.com/the-telegraph-engineering/improving-third-party-web-performance-at-the-telegraph-a0a1000be5), Gareth Clubb, 04/2019

* [Who has the fastest website in F1?](https://jakearchibald.com/2019/f1-perf/), Jake Archiblad, 03/2019

* [How we built the fastest conference website in the world](https://2019.jsconf.eu/news/how-we-built-the-fastest-conference-website-in-the-world/), 03/2019

* [Nikkei achieves a new level of quality and performance with their multi-page PWA](https://developers.google.com/web/showcase/2018/nikkei), Google, 11/2018

* [Measuring Web Performance for Wikipedia using synthetic testing tools](https://speakerdeck.com/soulislove/measuring-web-performance-for-wikipedia-using-synthetic-testing-tools), Wikimedia Foundation, 10/2018

* [A Netflix Web Performance Case Study](https://medium.com/dev-channel/a-netflix-web-performance-case-study-c0bcde26a9d9), Addy Osmani, 11/2018

* [How Zalando's overall site speed improved by more than 25% in five months](https://jobs.zalando.com/tech/blog/loading-time-matters/), Zalando, 06/2018

* [Fast Fashion: Missguided](https://www.youtube.com/watch?v=mLzt23ZVGx0&app=desktop), Mark Leach & Andy Davies, DeltaV, 06/2018

* [Case study: analyzing the Walmart site performance](https://iamakulov.com/notes/walmart/), Ivan Akulov, 04/2018

* [A Pinterest Progressive Web App Performance Case Study](https://medium.com/dev-channel/a-pinterest-progressive-web-app-performance-case-study-3bd6ed2e6154), Addy Osmani, 11/2017


## Open data sources

* [HTTP Archive Report: State of Images](https://httparchive.org/reports/state-of-images)

* [Scientia Mobile Report](https://www.scientiamobile.com/wp-content/uploads/2021/08/MOVR-2021-Q2-v3.pdf), 08/2021

* [What do Lighthouse Scores look like across the web?](https://www.tunetheweb.com/blog/what-do-lighthouse-scores-look-like-across-the-web/), Barry Pollard, 04/2021

* [Web Almanac 2020 - HTTP Archive's annual
state of the web report](https://almanac.httparchive.org/en/2020/), 12/2020

* [Web Worldwide](https://www.webworldwide.io/)

* [HTTP Archive](https://httparchive.org/) / [Loading speed](https://beta.httparchive.org/reports/loading-speed)
HTTP archive crawls twice a month the 1.300.000 top sites of the web. This is the best source to understand the state of the web. The [HTTP Archive - Guided Tour](https://github.com/HTTPArchive/httparchive.org/blob/master/docs/guided_tour.md) from Paul Calvano and Rick Viscomi is the best way to get started.

* [Firefox Public Data Report](https://data.firefox.com/), Firefox usage data

* [Google Transparency Report](https://transparencyreport.google.com/?hl=en)

* [Chrome UX report](https://developers.google.com/web/tools/chrome-user-experience-report/)
This is the only source I know of, which provides you with RUM data of the most used websites. The data source is the user data of Chrome users. With Google BigQuery or Page Speed Insights you can analyse your competition.

* [Chrome UX report dashboard](https://developers.google.com/web/updates/2018/08/chrome-ux-report-dashboard)

* [Akamai Internet Observatory](https://www.akamai.com/uk/en/solutions/intelligent-platform/visualizing-akamai/internet-observatory/)
Browser stats, Network latency between regions

* [Open Signal](https://opensignal.com/reports/), Mobile status report worldwide

* [Pew Research Center](http://www.pewglobal.org/2018/06/19/social-media-use-continues-to-rise-in-developing-countries-but-plateaus-across-developed-ones/)

* [Ofcom.org.uk](https://www.ofcom.org.uk/research-and-data)

* [Global Internet Speed](https://www.speedtest.net/global-index)


## W3C Standards

The [Web Performance Working Group](https://www.w3.org/webperf/) is providing methods to measure and improve aspects of application performance of user agent features and APIs.

The [Performance Timing Primer](https://w3c.github.io/perf-timing-primer/) gives a good overview on what the Web Performance Group is working on.

[All standards and drafts from the Performance Working Group](https://www.w3.org/TR/?tag=performance)


#11ty
* [Proxying Cloudinary Requests with Netlify](https://timkadlec.com/remembers/2020-11-17-netlify-proxy-requests/), Tim Kadlec, 11/2020

* [Automatically Generate Social Images for Blog Posts](https://www.learnwithjason.dev/blog/auto-generate-social-image), Jason Lengstorf

* [Migrating from Github Pages to Netlify & Cloudflare](https://nooshu.com/blog/2021/09/06/migrating-from-github-pages-to-cloudflare-and-netlify/), Matt Hobbs, 09/2021 

#Checklists
* [Web Quality Assurance Checklist](https://checklists.opquast.com/web-quality-assurance/)
* [Web Sustainability Checklist (German)](https://nachhaltiges-webdesign.jetzt/)
* [Smashing Magazine: Front-End Performance Checklist 2021](https://www.smashingmagazine.com/2021/01/front-end-performance-2021-free-pdf-checklist/)


