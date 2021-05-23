# Three big takeaways from the Google I/O Web Vitals Q&A
If you don’t have time to watch the 30 minutes Google I/O Web Vital Q&A session here, you find a quick overview of the most relevant news.

## The most important insight at a glance

![image](https://user-images.githubusercontent.com/21277749/119262133-724f5b00-bbda-11eb-978b-cdec2d54bae6.png)

## Summary
* The biggest news: The ranking boost is granular. You don’t have to reach the “good” threshold for all Core Web Vital metrics to benefit.
* Once you reach the good threshold, you don’t get any further ranking benefits from micro-optimizations.
* Depending on the CrUX data available, Google will calculate the search ranking boost in this order: Page (CrUX), Page group (Google Search Console), Site/Origin (Page Speed Insights). It is recommended to optimize your pages with the highest traffic first–check your analytics.
* The search ranking factor is the same in all countries and based on your global Core Web Vitals score. If more than 25% of your users come from different countries, you should consider using a CDN.
* The Core Web Vitals (CWV) are based on CrUX data. The CrUX data is collected by Chrome users who agreed to share anonymized data with Google. The data is 100% based on real user experiences.
* The Core Web Vitals will impact the mobile search ranking starting this summer (June-August 2021). The desktop search will follow in the future — they didn’t communicate a date yet.
* The new Cumulative Layout Shift (CLS) algorithm (5-second windows) will be used for the ranking factor. Google will update its tools soon. Nobody will see a worse CLS because of this change.

## Most relevant questions with time code

## [Watch full session](https://youtu.be/HWm6WNkHs90)
Google I/O Ask Me Anything Web Vitals — May 19, 2021, with Philip Walton, Elizabeth Sweeny, John Mueller, and Annie Sullivan.

### [How does Google determine a page’s Core Web Vitals Score?](https://youtu.be/HWm6WNkHs90)

* Real User Data coming from Chrome users who opted in to share user statistic
* 75 percentile is calculated for each of the metrics: Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS), and First Input Delay (FID)

### [Why am I seeing different scores reported in different tools such as Lighthouse and the Chrome User Experience Report (2:05)](https://youtu.be/HWm6WNkHs90?t=127)

* Two Data Sources: Field Data (CrUX), Simulated/Lab Load Data (LHS)
* Different Runtime conditions of tools: LHS in Chrome Dev Tools local machine vs. Page Speed Insight: Server calls

### [Is inclusion in CrUX based purely on having enough data collected for a URL for a statistically relevant sample size? Are there other cappings to x amount of URLs or origins? If the sample size is the primary concern, is there a good ‘rule of thumb’ to be aware of if collecting your own RUM (6:55)](https://youtu.be/HWm6WNkHs90?t=415)
 

* Don’t sample your RUM data. Get as many as possible.
* The CrUX data has to reach a threshold to be anonymous.
* There is no capping of data done by Google.

### [Will desktop CWV be part of the initial Page Experience Update or added in later? (11:04)](https://youtu.be/HWm6WNkHs90?t=664)

* Not in the initial rollout during the summer
* But it is planned for later

### [The field data in Lighthouse/Page Speed Insights being a 28-day aggregate makes it impossible to take action on the data and be sure the action truly was resolved. Are there any plans to either shorten the window or perhaps plot the data on a graph so we can see change over time? (11:47)](https://youtu.be/HWm6WNkHs90?t=707)

* Google recommends using your own RUM Analytics Solution to monitor Core Web Vitals.
* Have a parameter that shows the current release number to be able to segment the data to be able to compare before & after
* Search Console offers a graph which shows the history

### [When did the five-second cap for Cumulative Layout Shift (CLS) go into production? Should site owners expect a shift in data around that data? (15:35)](https://youtu.be/HWm6WNkHs90?t=935)
 
* It is not in production yet
* Google will update its tools before it becomes a ranking factor.
* Every ranking effect will be on the newer definition of CLS
* Nobody will see a worse CLS because of this change

### [Is the page experience boost per country? Example: LCP p75 is 2 from visitors within the UK but 4s from Australia, making my global p75 2.6s (so average). Will searches from within the UK get the ranking boost (because of good LCP)? (17:09)](https://youtu.be/HWm6WNkHs90?t=1029)

* The data from all users over the globe is collected to calculate the score.
* Google doesn’t see dramatic changes on a country level
* If you have a global user base, make sure to use a CDN

### [In the context of the Page Experience Update, does CWV use only data for the specific page or a combination of page and original-level data? (19:38)](https://youtu.be/HWm6WNkHs90?t=1178)

* It depends on the availability of data.
* If there is enough data, the score will be calculated on the page level.
* Google also calculates the score for page groups (Google Search Console)
* If the single page doesn’t have enough data, the group score determines the search ranking.
* If this data is also unavailable, the data is calculated for the whole origin (all page aggregated). A lot of the tools use this number.

### [What is the most common detriment to sites’ core web vitals that also has the most significant effect if fixed (how should we prioritize our work)? (22:46)](https://youtu.be/HWm6WNkHs90?t=1366)

* Check your RUM data which metrics are poor, and start optimizing these pages.
* Use Lighthouse data to (You can now filter tips on metric level) understand how to fix the CWV.
* LCP is the metric that most sites struggle with — often due to image issues.

### [Is Page Experience a binary ranking factor? Only a “good experience” page can get a ranking boost, or is there a gradation in how Page Experience signals affect rankings? One kinda-slow page might get a boost over an even-slower page. (25:53)](https://youtu.be/HWm6WNkHs90?t=1553)

* Relevance plays the most significant role.
* The boost is not a binary signal. If you improve your LCP from 20 seconds to 10 seconds, that could potentially boost your ranking.
* With the Page Experience Signal, you don’t have to reach the “good” threshold for all three metrics to get a boost in rankings.
* Once you reached the good threshold for a metric, micro-optimizing (LCP 2 seconds down to 1 second) won’t benefit your rankings but might help your users.


## Thanks for your feedback
* [Barry Pollard (@tunetheweb)](https://twitter.com/tunetheweb)
* [Tim Vereecke (@TimVereecke)](https://twitter.com/TimVereecke)
* [Dan Shappir (@DanShappir)](https://twitter.com/DanShappir)
