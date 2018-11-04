# Web Performance Resources

> This is a list of sources I personally found useful to learn about web performance.
> I will keep this list up to date and add new great resources.
> If you know great resources which aren’t covered here please create a pull request.

### Table of Contents
* **[Stay up to date: Community / Blogs / Newsletter](#stay-up-to-date)**
* **[Articles](#articles)**
  * [General](#general)
  * [Network and Caching](#network-and-caching)
  * [Image Optimization](#image-optimization)  
  * [Measure Performance](#measure-performance)
  * [Third-Party Services](#third-party-services)
  * [Optimise the Critical Render Path](#optimise-the-critical-render-path)
  * [Javascript and Render Performance](#javascript-and-render-performance)  
  * [Perceived Performance](#perceived-performance)   
* **[Online courses](#online-courses)**
* **[Videos](#videos)**
  * [Business](#business)
  * [Network](#network) 
  * [Measure](#measure)
  * [Tooling](#tooling)
  * [Images](#images)
  * [The Psychology of Performance](#the-psychology-of-performance)
  * [Third-Party Services](#third-party-services)
  * [Development](#development)
* **[Books](#books)**
* **[Tools](#tools)**
  * [Free tools and services](#free-tools-and-services)
  * [Paid tools and services](#paid-tools-and-services)  
* **[Open Source Projects](#open-source-projects)**
* **[Studies](#studies)**
* **[Open Data Sources](#open-data-sources)**
* **[Web Performance Meetups](#web-performance-meetups)**
* **[Conferences](#conferences)**
* **[W3C Standards](#w3c-standards)**
  
## Stay up to date

* [Planet Performance](http://www.perfplanet.com/)
Overview of performance related blogs

* [Dev Tips](https://umaar.com/dev-tips/), Umar Hansa, weekly
Great resource to learn the newest Chrome Dev Tools tips and tricks

* [Smashing Magazine Newsletter](https://www.smashingmagazine.com/the-smashing-newsletter/)
This is not a Web Performance only Newsletter

* [Medium articles about web performance](https://medium.com/tag/web-performance/latest)

* Twitter: [#webperf](https://twitter.com/search?q=%23webperf), [#perfmatters](https://twitter.com/search?q=%23perfmatters)

* This [Web Performance Twitter-List](https://twitter.com/fabkru/lists/web-performance) makes it easy for you to follow all the web performance authors, speakers, and evangelists at once:

* [Web performance Slack channel ](https://webperformance.herokuapp.com/)
Slack channel which is focusing on web performance with more than 750 members

## Articles

### General

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

### Network and Caching

* [Service Worker Caching Strategies Based on Request Types](https://medium.com/dev-channel/service-worker-caching-strategies-based-on-request-types-57411dd7652c), Thomas Steiner, 08/2018

* [Dynamic resources using the Network Information API and service workers](https://deanhume.com/dynamic-resources-using-the-network-information-api-and-service-workers/), Dean Hume, 07/2018

* [Connection-Aware Components](https://mxb.at/blog/connection-aware-components/), Max Böck, 07/2018

* [To push or not to push](https://noti.st/patrickhamann/y2sScd/to-push-or-not-to-push), Patrick Hamann, 06/2018

* [What is HTTP/2 — The Ultimate Guide](https://kinsta.com/learn/what-is-http2/), Ali Raza, 04/2018

* [Resource Hints — What is Preload, Prefetch, and Preconnect?](https://www.keycdn.com/blog/resource-hints/), Brian Jackson, 01/2018

* [HTTP Caching](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching), Ilya Grigorik, 01/2018

* [A Comprehensive Guide To HTTP/2 Server Push](https://www.smashingmagazine.com/2017/04/guide-http2-server-push/), Jeremy Wagner, 04/2017

* [What is the preload directive?](https://www.keycdn.com/support/preload-directive/), 01/2017

* [How DNS works](https://howdns.works/) (Comic)

### Image Optimization

* [Essential Image Optimization](https://images.guide/), Addy Osmani, 2017

* [Using SVG as placeholders — More Image Loading Techniques](https://jmperezperez.com/svg-placeholders/), José M. Pérez, 10/2017

* [How Medium does progressive image loading](https://jmperezperez.com/medium-image-progressive-loading-placeholder/), José M. Pérez, 10/2015 

### Measure Performance

* [The Three Types of Performance Testing](https://csswizardry.com/2018/10/three-types-of-performance-testing/), Harry Roberts, 10/2018

* [Accurately measuring layout on the web](https://nolanlawson.com/2018/09/25/accurately-measuring-layout-on-the-web/), Nolan Lawson, (09/2018)

* [How to track performance](https://designsystem.digital.gov/performance/how/#choosing-metrics-amp-tools), U.S. Web Design System, 07/2018

* [Assessing Loading Performance in Real Life with Navigation and Resource Timing](https://developers.google.com/web/fundamentals/performance/navigation-and-resource-timing/), Jeremy Wagner, 06/2018

* [User Timing API (Custom Timing): the most relevant performance measure ever](https://blog.dareboost.com/en/2018/03/user-timing-api-measuring-web-performance-custom-timing/), Damien Jubeau, 03/2018

* [Is a High Abandon Rate Hitting Your Online Marketing Budget?](https://medium.com/web-perf-practitioner/is-a-high-abandon-rate-hitting-your-online-marketing-budget-c819f85f96b2), Fabian Krumbholz, 03/2018

* [ResourceTiming Visibility: Third-Party Scripts, Ads and Page Weight](https://nicj.net/resourcetiming-visibility-third-party-scripts-ads-and-page-weight/), Nic Jansma, 03/2018

* [Measure Performance with the RAIL Model](https://developers.google.com/web/fundamentals/performance/rail), Addy Osmani, 02/2018

* [User-centric Performance Metrics](https://developers.google.com/web/fundamentals/performance/user-centric-performance-metrics), Philip Walton, 02/2018

* [An Audit of Boomerang’s Performance](https://nicj.net/an-audit-of-boomerangs-performance/), Nic Jansma, 12/2017

* [User Timing and Custom Metrics](https://speedcurve.com/blog/user-timing-and-custom-metrics/), Steve Souders, 11/2015

* [Conversion Impact Score: What is it? And why do you need to know yours?](https://www.soasta.com/blog/website-monitoring-conversion-impact-score/), Tammy Everts, 07/2015

* [Driving WebPagetest from a Google Docs Spreadsheet](https://calendar.perfplanet.com/2014/driving-webpagetest-from-a-google-docs-spreadsheet/), Andy Davies, 12/2014

### Third-Party Services
* [How we shaved 1.7 seconds off casper.com by self-hosting Optimizely](https://medium.com/caspertechteam/we-shaved-1-7-seconds-off-casper-com-by-self-hosting-optimizely-2704bcbff8ec), Kyle Rush, 08/2018

* [Changing Our Approach to Anti-tracking](https://blog.mozilla.org/futurereleases/2018/08/30/changing-our-approach-to-anti-tracking/), Nick Nguyen, 08/2018

* [When 3rd parties stop being polite … and start getting real](https://docs.google.com/presentation/d/174EE6e7sV_SXPug_gK5GH4Jk5wB35xjqPrvDUG0E6FA), Charles Vazac & Nic Jansma, 06/2018

* [Identifying, Auditing, and Discussing Third Parties](https://csswizardry.com/2018/05/identifying-auditing-discussing-third-parties/), Harry Roberts, 05/2018

* [Crashing the (Third) Party](https://medium.com/spring-media-techblog/crashing-the-third-party-b7c8a46b40db), Oleg Zender, 06/2018

* [Collection of articles about 3rd party](https://trentwalton.com/tag/Third-Party/), Trend Walton

* [How 3rd Party Scripts can be performant citizens on the web](https://www.twnsnd.com/posts/performant_third_party_scripts.html), Ryan Townsend, 08/2017

* [Performance and Resilience: Stress-Testing Third Parties](https://csswizardry.com/2017/07/performance-and-resilience-stress-testing-third-parties/), Harry Roberts, 07/2017

* [Discover how Adidas is using data science to deliver third-party governance](https://www.slideshare.net/kskoeld/discover-how-adidas-is-using-data-science-to-deliver-thirdparty-governance), Kristian Sköld, 11/2016

* [10 pro tips for managing the performance of your third-party scripts,](https://www.soasta.com/blog/10-pro-tips-for-managing-the-performance-of-your-third-party-scripts/) Tammy Everts, 11/2015

### Optimise the Critical Render Path

* [Th font loading checklist](https://www.zachleat.com/web/font-checklist/), Zach Leatherman, 08/2018

* [Front-End Performance Checklist](https://github.com/thedaviddias/Front-End-Performance-Checklist), 2018, GitHub Project with updates

* [The PRPL Pattern](https://developers.google.com/web/fundamentals/performance/prpl-pattern/), Addy Osmani, 02/2018

* [Now You See Me: How To Defer, Lazy-Load And Act With IntersectionObserver](https://www.smashingmagazine.com/2018/01/deferring-lazy-loading-intersection-observer-api/), Denys Mishunov, 01/2018

* [Optimising the front end for the browser](https://hackernoon.com/optimising-the-front-end-for-the-browser-f2f51a29c572), Sanjay Purswani, 02/2017

* [A comprehensive guide to font loading strategies](https://www.zachleat.com/web/comprehensive-webfonts/), Zach Leatherman, 07/2016

* [Understanding the critical rendering path, rendering pages in 1 second](https://medium.com/@luisvieira_gmr/understanding-the-critical-rendering-path-rendering-pages-in-1-second-735c6e45b47a), Luis Vieira, 06/2015

* [More Weight Doesn’t Mean More Wait](https://www.filamentgroup.com/lab/weight-wait.html), Scott Jehl, 04/2015

### Javascript and Render Performance

* [Idle Until Urgent](https://philipwalton.com/articles/idle-until-urgent/), Philip Walton, 09/2018

* [Browser painting and considerations for web performance](https://css-tricks.com/browser-painting-and-considerations-for-web-performance/), Georgy Marchuk, 08/2018

* [The Cost Of JavaScript In 2018](https://medium.com/@addyosmani/the-cost-of-javascript-in-2018-7d8950fbb5d4), Addy Osmani, 08/2018

* [Front-End Performance Checklist](https://github.com/thedaviddias/Front-End-Performance-Checklist), 2018, GitHub Project with updates

* [Why Web Developers Need to Care about Interactivity](https://philipwalton.com/articles/why-web-developers-need-to-care-about-interactivity/), Philip Walton, 12/2017

* [jankfree](http://jankfree.org/), Website which collects resources about render performance

* [What forces layout/reflow?](https://gist.github.com/paulirish/5d52fb081b3570c81e3a), Paul Irish

* [Using requestIdleCallback](https://developers.google.com/web/updates/2015/08/using-requestidlecallback), Paul Lewis, 01/2018

* [Optimize Javascript Execution](https://developers.google.com/web/fundamentals/performance/rendering/optimize-javascript-execution), Paul Lewis, 01/2018

* [Improving Performance with the Paint Timing API](https://www.sitepen.com/blog/2017/10/06/improving-performance-with-the-paint-timing-api), Umar Hansa, 10/2017

* [Performant Web Animations and Interactions: Achieving 60 FPS](https://blog.algolia.com/performant-web-animations/), Emily Hayman, 08/2017

* [JavaScript Start-up Performance](https://medium.com/reloading/javascript-start-up-performance-69200f43b201), Addy Osmani, 02/2017

* [The Anatomy of a Frame](https://aerotwist.com/blog/the-anatomy-of-a-frame/), Paul Lewis, 02/2016

* [The future of loading CSS](https://jakearchibald.com/2016/link-in-body/), Jake Archibald, 02/2016

* [4 Types of Memory Leaks in JavaScript and How to Get Rid Of Them](https://auth0.com/blog/four-types-of-leaks-in-your-javascript-code-and-how-to-get-rid-of-them/), Sebastián Peyrott, 01/2016

* [The cost of frameworks](https://aerotwist.com/blog/the-cost-of-frameworks/), Paul Lewis, 11/2015

* [FLIP Your Animations](https://aerotwist.com/blog/flip-your-animations/), Paul Lewis, 02/2015

### Perceived performance

This is all about how humans perceive performance and what we can do to help our users to keep focused:

* [The psychology of web performance](https://blog.uptrends.com/web-performance/the-psychology-of-web-performance/), 06/2018

* [The Illusion of Time](https://medium.com/swlh/the-illusion-of-time-8f321fa2f191), Adrian Zumbrunnen, 08/2015

* [Why Performance Matters: The Perception Of Time](https://www.smashingmagazine.com/2015/09/why-performance-matters-the-perception-of-time/), Denys Mishunov, 09/2015

* [Why Performance Matters, Part 2: Perception Management](https://www.smashingmagazine.com/2015/11/why-performance-matters-part-2-perception-management/), Denys Mishunov, 11/2015

* [Why Performance Matters, Part 3: Tolerance Management](https://www.smashingmagazine.com/2015/12/performance-matters-part-3-tolerance-management/), Denys Mishunov, 12/2015

* [True Lies Of Optimistic User Interfaces](https://www.smashingmagazine.com/2016/11/true-lies-of-optimistic-user-interfaces/), Denys Mishunov, 11/2016

* [Taking A Look At The State Of Progressive Images And User Perception](https://www.smashingmagazine.com/2018/02/progressive-image-loading-user-perceived-performance/), José Manuel Pérez, 02/2018

## Online courses

These are excellent courses for web developer to gain a lot of insights about web performance.

* Udacity: [Website Performance Optimization by Google](https://www.udacity.com/course/website-performance-optimization--ud884) (free)
This course is great to start. You will learn how the browser works internally and how you can optimise the critical render path.

* Frontend Masters: [Web Performance](https://frontendmasters.com/courses/web-performance/), Steve Kinney, 03/2018 ($39 / monthly subscription)
This is the go to course for Frontend Developers. This course is going really deep into Javascript Performance and Rendering Performance. I recommend this for more senior developers.

* Pluralsight: [Tracking Real World Web Performance](https://app.pluralsight.com/library/courses/web-performance-tracking), Nik Molnar, 05/2015 ($29 / monthly subscription)
Nice introduction into web performance measurement.

* [Modern Dev Tools](https://moderndevtools.com/), Umar Hansa, 05/2017 ($94)
Umar is a Chrome Developer Tools expert and explains all the tools you need to understand and fix web performance issues.

* [Frontend Center](https://frontend.center/), Glen Maddern, ($15/monthly subscription)
Not 100% related to Web Performance. A few of the trainings are available for free.

## Videos

### A crash course on web performance

This is a great free introduction into web performance. Ilya Grigorik from Google is covering everything from network, the critical render path and in-app performance. It is from 2013 but it is still highly relevant.

1. [Bandwidth, latency, and radio performance](https://www.youtube.com/watch?v=7gtf47D_bu0&list=PL5jvCmjsPECB2mhJopSB-yryxO473JA1r&index=43&t=0s) (37:42)

1. [Optimizing networking performance (and HTTP 2.0)](https://www.youtube.com/watch?v=46exugLbGFI) (49:36)

1. [Critical rendering path](https://www.youtube.com/watch?v=PkOBnYxqj3k) (41:10)

1. [Delivering 60 FPS in the browser](https://www.youtube.com/watch?v=rpNXWxMyzHQ) (48:15)

### Business

* [Starting a Dedicated Web Performance Team](https://www.youtube.com/watch?v=ne_UYfDmDYc), Sarah Dapul-Weberman, 06/2018

* [Web Performance @ NBrown](https://www.youtube.com/watch?v=z-mhV-pn68Q) (Slides), Nick Webb & Laura Sheridan, 06/2018

* [Fast Fashion: Missguided](https://www.youtube.com/watch?v=mLzt23ZVGx0) ([Slides](https://www.slideshare.net/AndyDavies/fast-fashion-how-missguided-revolutionised-their-approach-to-site-performance-deltav-conference-may-2018)), Mark Leach & Andy Davies, 06/2018

* [25% Faster Hotel Search. Web Performance? — Trivago](https://www.youtube.com/watch?v=9f2sjQmJCKY), Tobias Baldauf, 06/2018

* [Conversions@Google 2018](https://www.youtube.com/watch?v=EbbjEY-TyhU), Luke Wroblewski, 05/2018

* [On Building Performance for the Long Term](https://vimeo.com/254947097) ([Slides](https://speakerdeck.com/aemcknig/building-performance-for-the-long-term)), Allison McKnight, 02/2018

* [Building for Billions](https://www.youtube.com/watch?v=Vmg1ECC2r2Q), Tal Oppenheimer, 06/2016

* [Making a business case for web performance optimization](https://vimeo.com/163232533), Kristian Sköld, 04/2016

* [Performance Budget](https://www.youtube.com/watch?v=yqejmZrtmNg), Tim Kadlec, 04/2015

### Third-Party Services

* [It’s My (Third) Party and I’ll Cry If I Want To](https://www.youtube.com/watch?v=rzMID7ES6q4) ([Slides](https://speakerdeck.com/csswizardry/its-my-third-party-and-ill-cry-if-i-want-to)), Harry Roberts, 06/2018

* [Name That Script](https://vimeo.com/266794924) ([Slides](https://speakerdeck.com/trentwalton/name-that-script)), Trent Walton, 04/2018

* [A/B Testing, Ads and other 3rd Party Tags](https://vimeo.com/254703766) ([Slides](https://www.slideshare.net/AndyDavies/ab-testing-ads-and-other-3rd-party-tags-smashingconf-london-2018)), Andy Davies, 02/2018

* [3rd Parties: A Hate Love Who Wants to be Managed](https://www.youtube.com/watch?v=oBD_kClamck), Kristian Sköld, 12/2017

* [What are third party components doing to your site?](https://www.youtube.com/watch?v=G1BiyYOnjjk), Andy Davies/Simon Hearne, 06/2015

* [Stranger Danger: Tracking Vulnerabilities in Your Third Party Code](https://www.youtube.com/watch?v=iXA14OFXxZA), Guy Podjarny, 2015

* [Third Party Performance](https://www.youtube.com/watch?v=I5uhZcJ30SA), Guy Podjarny, 04/2015

### The Psychology of Performance

* [Cheating the UX when there is nothing more to optimize](https://vimeo.com/251825705) ([Slides](https://speakerdeck.com/stephaniewalter/cheating-the-ux-when-there-is-nothing-more-to-optimise)), Stephanie Walter, 01/2018

* O’Reilly Safaribooksonline: [Perceived Performance: The Only Kind that Really Matters](https://www.safaribooksonline.com/library/view/perceived-performance-the/9781492029953/) ([Slides](http://assets.eli.wtf/talks/perceived-perf-talk/)), Eli Fitch, 11/2017 (34$ / monthly subscription) 
This is a really good talk about how humans perceive performance. Eli shares a lot of good tips and tricks how you can improve the perceived performance.

* [Deconstructing Performance](https://vimeo.com/184659742), Denys Mishunov, 01/2016
The content of this talk is similar to Eli Fitch’s talk, but less technical.

### Network

* [QUIC: in Theory and Practice](https://www.youtube.com/watch?v=B1SQFjIXJtc) ([Slides](http://internetonmars.org/deltav.pdf)), Robin Marx, 06/2018

* [HTTP/2 101](https://www.youtube.com/watch?v=r5oT_2ndjms), Surma, 11/2015
Nice introduction to HTTP2

* [Yesterday’s perf best-practices are today’s HTTP/2 anti-patterns](https://www.youtube.com/watch?v=yURLTwZ3ehk), Ilya Grigorik, 06/2015

### Measure

* [Chrome User Experience Report](https://www.youtube.com/watch?v=wVY3-acLIoI), Inian Parameshwaran, 06/2018

* [How Fast Is It?](https://vimeo.com/254728119) ([Slides](https://www.slideshare.net/patrickmeenan/how-fast-is-it)), Patrick Meenan, 02/2018

* [How’s the UX on the Web, Really?](https://vimeo.com/254834890), Ilya Grigorik, 02/2018

* [Reliably Measuring Responsiveness in the Wild](https://www.youtube.com/watch?v=y5qPix1tdOE), Shubhie Panicker/Nic Jansma, 07/2017

* [Web Performance: Leveraging the Metrics that Most Affect User Experience](https://www.youtube.com/watch?v=6Ljq-Jn-EgU), Shubhie Panicker/Philip Walton, 05/2017

* [Measuring Continuity](https://www.youtube.com/watch?v=dbAise49tWY), Philip Tellis/Nic Jansma, 07/2016

* [Using Machine Learning to Determine Drivers of Bounce and Conversion](https://www.youtube.com/watch?v=pdTUSZ6cwBY), Tammy Everts/Patrick Meenan, 07/2016

* [Forensic Tools for In-Depth Performance Investigations](https://www.youtube.com/watch?v=jgGbdoN4l2k), Philip Tellis/Nic Jansma, 06/2016

* [Visualizing performance data in engaging ways](https://www.youtube.com/watch?v=lEhmmTlbCss), Mark Zeman, 06/2015

### Tooling

* [What’s new in Chrome Dev Tools](https://www.youtube.com/watch?v=mfuE53x4b3k&index=36&list=PL5jvCmjsPECB2mhJopSB-yryxO473JA1r&t=52s), Paul Irish, 05/2018

* [The power of Headless Chrome and browser automation](https://www.youtube.com/watch?v=lhZOFUY1weo), Eric Bidelman, 05/2018

* [Use Lighthouse and Chrome UX Report to optimize web app performance](https://www.youtube.com/watch?v=UvK9zAsSM8Q), 05/2018
Use the new Lighthouse API to integrate it into the Jenkins pipeline.

* [A Modern Front-End Workflow with DevTools](https://vimeo.com/254733177), Umar Hansa, 02/2018

* [Charles Proxy](https://www.youtube.com/watch?v=nihC1xW1eNI), Willow Talk, 01/2016

* [Developer’s Toolbox: What is Charles and why would I want it?](https://www.youtube.com/watch?v=y8Okx-RWK3M), Team Learnable, 05/2014

### Images

* [Beyond the Basics of Image Optimization](https://vimeo.com/254736788) — ([Slides](https://github.com/una/beyond-the-basics-of-image-optimization)), Una Kravets/Martin Splitt, 02/2018

* [Your Hero Images Need You! Save the Day with HTTP2 Image Loading](https://vimeo.com/163113212), Tobias Baldauf, 04/2016

* [High Performance Images: Beautiful Shouldn’t Mean Slow](https://www.youtube.com/watch?v=7zgd2OjSoS8), Guy Podjarny, 12/2015

### Development

* [Schedule your animations like a pro – with requestAnimationFrame](https://www.youtube.com/watch?v=wSEU7ivOnzc), Paul Lewis, 09/2018

* [Frontend Resilience](https://www.youtube.com/watch?v=iUfymdAZ1wI) ([Slides](https://speakerdeck.com/ianfeather/building-resilient-frontend-systems-all-day-hey)), Ian Feather, 06/2018

* [Performant Animations: Hitting 60fps](https://vimeo.com/254906131), Emily Hayman, 02/2018

* [Resource Loading — Past, Present & Future](https://vimeo.com/254861484) ([Slides](https://yoavweiss.github.io/smashing_resource_loading_past_present_future/#1)), Yoav Weiss, 02/2018

* [Web Fonts are ▢▢▢ Rocket Science](https://vimeo.com/254727749) ([Zach’s lenghty article](https://www.zachleat.com/web/comprehensive-webfonts/)), Zach Leatherman, 02/2018

* [Creating UX that “Just Feels Right” with Progressive Web Apps](https://www.youtube.com/watch?v=mmq-KVeO-uU), Owen Campbell-Moore, 05/2017

* [Front End Center: Caching & CDNs](https://www.youtube.com/watch?v=_QeNLrkPvdI), 10/2017

* [Fast By Default: Modern Loading Best Practices](https://www.youtube.com/watch?v=_srJ7eHS3IM), Addi Osmani/Ilya Grigorik, 10/2017

* [Front End Center: Why Latency Matters: Foundations of Web Performance](https://www.youtube.com/watch?v=ak4EZQB4Ylg), 08/2017

* [Solving the Web Performance Crisis](https://www.youtube.com/watch?v=yfmqDqmSJXw), Nolan Lawson, 01/2017

* [Planning for Performance: PRPL](https://www.youtube.com/watch?v=RWLzUnESylc), Sam Saccone, 11/2016

* [AMP: Does it Really Make Your Site Faster?](https://www.youtube.com/watch?v=dOiGcgw-r8g), Nic Jansma, Nigel Heron, 11/2016

* [UI Elements at 60fps](https://www.youtube.com/watch?v=ZqdNgn5Huqk), Paul Lewis, 06/2016

* [Owning your performance: RAIL](https://www.youtube.com/watch?v=w0O2znkSBXA&list=PL5jvCmjsPECB2mhJopSB-yryxO473JA1r&index=6&t=1497s), Paul Irish, 11/2015

* [HTTP2 and Front-End Performance](https://www.youtube.com/watch?v=GIDXISQs67w), Mark Nottingham, 05/2015

## Books

This are the books I read about web performance and I can highly recommend all of them:

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

## Tools

### Free tools and services

* [Lighthouse](https://developers.google.com/web/tools/lighthouse/)
Lighthouse is becoming the best audit tool for web performance. It has a great documentation and gives valuable insights. This is where my performance audit is starting.

* [Chrome Developer Tools](https://developer.chrome.com/devtools)
This is the go to tool for all web developers. Understand how your code gets loaded, parsed and rendered.

* [Image Analyser](https://webspeedtest.cloudinary.com/)
Image analysis tool. This tool gives you insight about how you can optimise your images to gain a better web performance. This tool is also integrated within webpagetest.org.

* [WebPageTest](http://www.webpagetest.org/)
Make synthetic measurements from all over the world. Make performance audits of any website. This tool is very powerful and gives you a lot of insights. I use it a lot to make a website comparison video.

* [Request Map Generator](https://requestmap.herokuapp.com/)
The Request Map Generator is the go to place to understand what 3rd party tools are running on your page and how much data they are adding.

* [Web Performance Heat Map Generator](http://heatmap.webperf.tools/)

* [What does my site cost](https://whatdoesmysitecost.com/)
How much does it cost for your users to download your page? In many countries the majority of the users are on a pre paid data plan.

* [spof-o-matic](https://github.com/pmeenan/spof-o-matic)
Chrome extension for detecting and simulating frontend Single Points Of Failure

* [CSS Triggers](https://csstriggers.com/)
Which CSS element trigger layout, paint, or composite?

* [Source Map Explorer](https://www.npmjs.com/package/source-map-explorer), [Webpback Bundle Analyer](https://www.npmjs.com/package/webpack-bundle-analyzer)
Understand what code you are loading

* [Ghostery](https://www.ghostery.com/)
See what 3rd party tools are loaded on a site.

* [https://better.fyi/trackers/](https://better.fyi/trackers/)
Nice list of 3rd party trackers with detailed information, for example about how to block the service. Which comes in handy when you want to measure the impact of a tool.

* [ImageOptim](https://imageoptim.com/)
Image compression

* [Can I use?](https://caniuse.com/)
Check the browser support for every web technology.

* [JS Manners](http://jsmanners.com/)
I like this page to audit JS Frameworks and 3rd party tools.

* [You might not need Javascript](http://youmightnotneedjs.com/)
Don’t use Javascript for things where it is not really needed. This website shows you to do stuff with CSS: Slider, Modal, Scroll Indicator, Navigation, Tabs, Accordion

* [You might not need jQuery](http://youmightnotneedjquery.com/)
Learn how to get rid of jQuery dependencies in your project. This page shows you how to achieve things with Vanilla Javascript.

* [Cloud Ping](http://www.cloudping.info/)
See the network latency from your location to all AWS centres in the work.

* [Charles Web Debugging Proxy](https://www.charlesproxy.com/) (free/$50)
The proxy sits between your browser and the internet and lets you monitor and alter all the network traffic. I use it mainly for network throttling and request blocking.

* [har.tech](https://har.tech/)
Collection of tools which can be used to inspect HAR files.

* [httpstat.us](http://httpstat.us/)
Service which responds which all kind of http error codes. With this service you can check how your app or website reacts when 3rd party services are responding with an error.

* [Font Style Matcher](https://meowni.ca/font-style-matcher/)
If you use font-display: swap this tool is great to make sure the fallback font looks as similar as possible to avoid major layout changes once the web font is loaded and swapped.

* [3rdParty.io](http://3rdparty.io/)
3rdParty.io monitors third-party scripts and libraries, and checks that they’re following best practices for performance, reliability and security

* [3rd Party Audit Google Sheet](https://docs.google.com/spreadsheets/d/1uTcRSoJAkXfIm2yfG5hvCSzvSZD9fAwXNQMVK3HdPMI/edit#gid=0)
A Google Sheet provided by Harry Roberts which gives you a nice overview over your used 3rd Party Tools

* [Content Security Policy (CSP) Generator](https://report-uri.com/home/generate)

* [Real User Experience Test (rUXt)](https://ruxt.dexecure.com/)
Access RUM data for 3,237,526 websites accessed by Google Chrome Users

* [Waterfall Heatmap Bookmarklet](https://github.com/zeman/perfmap)
Prints the timing data on assets.

* [Test your mobile speed with Google](https://testmysite.withgoogle.com/intl/en-gb)
Test score, benchmark with other pages from the same industry, detailed report

* [Google Speed Scorecard](https://www.thinkwithgoogle.com/feature/mobile/)
Compare your mobile Site Speed with your competition based on CrUX data

* [Google Imapct Calculator](https://www.thinkwithgoogle.com/feature/mobile/)
Estimate the revenue impact of performance optimisations

* [Google Page Speed Industry Benchmarks](https://www.thinkwithgoogle.com/marketing-resources/data-measurement/mobile-page-speed-new-industry-benchmarks/)

### Paid tools and services

These are professional tools which cost money. The cost are usually depends on traffic, server or data.

* [New Relic](https://newrelic.com/)
New Relic offers your great tools which give you insight in your whole app stack in real time. New Relic insights lets you also consume 3rd party APIs and correlate performance with business data. It also comes with great monitor solutions which alert you before things getting bad.

* [Speedcurve](https://speedcurve.com/)
Speedcurve is build on top of WebPageTest and makes running synthetic tests easy. You get nice looking dashboards which are great for running on a big display in your office. With Lux they also integrated a RUM solution.

* [Akamai Web Performance Tools](https://www.akamai.com/uk/en/products/web-performance/)
With mPulse you can understand how your performance and business data is correlation. With the “What if” tool you can predict the impact of performance changes on your business KPI. Works together with Chrome UX report data and shows RUM data of your competition (if the data is available).

* [Cloudinary](https://cloudinary.com/)
Image and video management in the cloud

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

## Open data sources

* [HTTP Archive](https://httparchive.org/) / [Loading speed](https://beta.httparchive.org/reports/loading-speed)
HTTP archive crawls periodically the top sites of the web and is a great source for learning about trends on the internet.

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

## Web Performance Meetups

Look for a performance Meetup group close to where you live. This is a great opportunity to share and discuss ideas with other performance experts. Here are some groups close to our offices:

* Munich: [https://www.meetup.com/Munchen-Web-Performance-Group/](https://www.meetup.com/Munchen-Web-Performance-Group/)

* Berlin: [https://www.meetup.com/Berlin-Web-Performance-Group/](https://www.meetup.com/Berlin-Web-Performance-Group/)

* Barcelona: [https://www.meetup.com/Barcelona-Web-Performance/](https://www.meetup.com/Barcelona-Web-Performance/)

## Conferences

This are all conferences with a strong focus on web performance.
They all have a very good lineup:

* [Smashing Conference London 2018](https://smashingconf.com/london-2018/)
(Ticket: Early Bird: $499 — Conference & Workshop: $922)
07–08 February 2018, London, UK

* [#perfMatters](https://perfmattersconf.com/) / [Twitter](https://twitter.com/perfmattersconf)
(Ticket: Blind Bird $239 — Conference & Workshop: $748)
27–28 March, 2018, Redwood City, California, USA

* [DeltaV](https://2018.deltavconf.com/) / [Twitter](https://twitter.com/deltavconf)
(Ticket: Early bird £399 + VAT)
10–11 May 2018, London, UK

* [Performance.now()](https://perfnow.nl/) / [Twitter](https://twitter.com/perfnowconf)
(Ticket: 550 EUR + VAT)
8–9 November 2018, Amsterdam, Netherland

## W3C Standards

The [Web Performance Working Group](https://www.w3.org/webperf/) is providing methods to measure and improve aspects of application performance of user agent features and APIs.

The [Performance Timing Primer](https://w3c.github.io/perf-timing-primer/) gives a good overview on what the Web Performance Group is working on:

* [High-Resolution Time](https://github.com/w3c/hr-time)

* [Performance Timeline](https://w3c.github.io/performance-timeline/)

* [Resource Timing](https://w3c.github.io/resource-timing/)

* [Navigation Timing](https://w3c.github.io/navigation-timing/)

* [User Timing](https://w3c.github.io/user-timing/)

* [Page Visibility](https://www.w3.org/TR/2017/PR-page-visibility-2-20171017/)

* [Beacon API](https://www.w3.org/TR/beacon/)

* [Cooperative Scheduling](https://github.com/w3c/requestidlecallback)

* [Preload](https://www.w3.org/TR/preload/)

* [Resource Hints](https://www.w3.org/TR/resource-hints/)

* [Long Tasks](https://www.w3.org/TR/longtasks/)

* [Server Timing](https://www.w3.org/TR/server-timing/)

* [Paint Timing](https://www.w3.org/TR/paint-timing/)

* [Device Memory](https://github.com/w3c/device-memory)
