"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2971],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>m});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),u=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},s=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),k=u(a),m=r,d=k["".concat(p,".").concat(m)]||k[m]||c[m]||l;return a?n.createElement(d,o(o({ref:e},s),{},{components:a})):n.createElement(d,o({ref:e},s))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=k;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},1797:(t,e,a)=>{a.r(e),a.d(e,{contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:6},o="\u8bbe\u8ba1\u6a21\u5f0f",i={unversionedId:"\u7cfb\u7edf\u8bbe\u8ba1/\u8bbe\u8ba1\u6a21\u5f0f",id:"\u7cfb\u7edf\u8bbe\u8ba1/\u8bbe\u8ba1\u6a21\u5f0f",title:"\u8bbe\u8ba1\u6a21\u5f0f",description:"\u672c\u6587\u7cbe\u9009\u4e86 Azure Cloud Design Patterns \u4e2d\u5e38\u7528\u4ee5\u53ca\u4e0e\u9762\u8bd5\u76f8\u5173\u7684\u6a21\u5f0f\uff0c\u91cd\u65b0\u8fdb\u884c\u5206\u7c7b\u4ee5\u53ca\u5217\u51fa\u5173\u952e\u70b9\uff1a",source:"@site/docs/\u7cfb\u7edf\u8bbe\u8ba1/\u8bbe\u8ba1\u6a21\u5f0f.md",sourceDirName:"\u7cfb\u7edf\u8bbe\u8ba1",slug:"/\u7cfb\u7edf\u8bbe\u8ba1/\u8bbe\u8ba1\u6a21\u5f0f",permalink:"/\u7cfb\u7edf\u8bbe\u8ba1/\u8bbe\u8ba1\u6a21\u5f0f",editUrl:"https://github.com/Interview-Science/Book/edit/main/docs/\u7cfb\u7edf\u8bbe\u8ba1/\u8bbe\u8ba1\u6a21\u5f0f.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\u57fa\u672c\u7ec4\u4ef6",permalink:"/\u7cfb\u7edf\u8bbe\u8ba1/\u57fa\u7840\u7ec4\u4ef6"},next:{title:"\u5e94\u7528\u5206\u7c7b",permalink:"/\u7cfb\u7edf\u8bbe\u8ba1/\u5e94\u7528\u5206\u7c7b"}},p=[{value:"Cache-Aside pattern",id:"cache-aside-pattern",children:[],level:3},{value:"Choreography pattern",id:"choreography-pattern",children:[],level:3},{value:"Retry pattern &amp; Circuit Breaker pattern",id:"retry-pattern--circuit-breaker-pattern",children:[],level:3}],u={toc:p};function s(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u8bbe\u8ba1\u6a21\u5f0f"},"\u8bbe\u8ba1\u6a21\u5f0f"),(0,r.kt)("p",null,"\u672c\u6587\u7cbe\u9009\u4e86 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/architecture/patterns/"},"Azure Cloud Design Patterns")," \u4e2d\u5e38\u7528\u4ee5\u53ca\u4e0e\u9762\u8bd5\u76f8\u5173\u7684\u6a21\u5f0f\uff0c\u91cd\u65b0\u8fdb\u884c\u5206\u7c7b\u4ee5\u53ca\u5217\u51fa\u5173\u952e\u70b9\uff1a"),(0,r.kt)("h3",{id:"cache-aside-pattern"},(0,r.kt)("a",{parentName:"h3",href:"https://docs.microsoft.com/en-us/azure/architecture/patterns/cache-aside"},"Cache-Aside pattern")),(0,r.kt)("p",null,"\u4f7f\u7528\u7f13\u5b58\u7ec4\u4ef6\u5bf9\u6570\u636e\u8fdb\u884c\u5206\u7ea7\u5b58\u50a8\uff0c\u63d0\u9ad8\u8bfb\u53d6\u901f\u5ea6"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4f55\u65f6\u4f7f\u7528")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5e94\u7528"),(0,r.kt)("th",{parentName:"tr",align:null},"\u529f\u80fd"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9700\u8981\u5173\u6ce8"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Video"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528 CDN \u548c POP \u7f13\u5b58\u70ed\u95e8\u89c6\u9891"),(0,r.kt)("td",{parentName:"tr",align:null},"\u70ed\u95e8\u89c6\u9891\u63d0\u524d\u9884\u70ed\uff0c\u5b9a\u65f6\u66f4\u65b0\u7f13\u5b58\u89c6\u9891")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ranking"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5bf9\u6392\u540d\u7ed3\u679c\u8fdb\u884c\u7f13\u5b58"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b9a\u671f\u8ba1\u7b97\u6392\u540d\u5e76\u4e14\u66f4\u65b0\u7f13\u5b58")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Search"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5bf9\u641c\u7d22\u7ed3\u679c\u8fdb\u884c\u7f13\u5b58"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b9a\u671f\u8ba1\u7b97\u641c\u7d22\u7ed3\u679c\u5e76\u4e14\u66f4\u65b0\u7f13\u5b58")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u9700\u8981\u5173\u6ce8")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/architecture/patterns/cache-aside#issues-and-considerations"},"Issues and considerations")),(0,r.kt)("p",null,"Lifetime of cached data"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Don't make the expiration period too short because this can cause applications to continually retrieve data from the data store and add it to the cache. Similarly, don't make the expiration period so long that the cached data is likely to become stale. ")),(0,r.kt)("p",null,"Evicting data"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Most caches adopt a least-recently-used policy for selecting items to evict, but this might be customizable.")),(0,r.kt)("p",null,"Priming the cache"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Many solutions prepopulate the cache with the data that an application is likely to need as part of the startup processing.")),(0,r.kt)("p",null,"Consistency"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Implementing the Cache-Aside pattern doesn't guarantee consistency between the data store and the cache.")),(0,r.kt)("p",null,"Local (in-memory) caching"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This data could quickly become inconsistent between caches, so it might be necessary to expire data held in a private cache and refresh it more frequently. In these scenarios, consider investigating the use of a shared or a distributed caching mechanism.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5982\u4f55\u6267\u884c")),(0,r.kt)("p",null,"\u8bfb\u53d6\u6570\u636e\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u68c0\u67e5\u7f13\u5b58\u662f\u5426\u6709\u6570\u636e\uff0c\u6709\u7684\u8bdd\u4ece\u7f13\u5b58\u8fd4\u56de"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u6ca1\u6709\u7684\u8bdd\uff0c\u4ece\u6301\u4e45\u5316\u5b58\u50a8\u4e2d\u8bfb\u53d6\u6570\u636e"),(0,r.kt)("li",{parentName:"ol"},"\u5c06\u6570\u636e\u5199\u5165\u7f13\u5b58")),(0,r.kt)("p",null,"\u5199\u6570\u636e\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5c06\u6570\u636e\u5199\u5165\u6301\u4e45\u5316\u5b58\u50a8"),(0,r.kt)("li",{parentName:"ol"},"\u4ece\u7f13\u5b58\u5220\u9664\u6570\u636e")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u76f8\u5173\u7ec4\u4ef6")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7279\u70b9"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9605\u8bfb"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Redis"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,"atomic operations"),(0,r.kt)("li",null,"in-memory dataset"),(0,r.kt)("li",null,"asynchronous replication"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://redis.io/docs/about/"},"Introduction to Redis"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Memorystore"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,"supports both Redis and Memcached and is fully protocol compatible"),(0,r.kt)("li",null,"Provisioning, replication, failover, and patching are all automated"),(0,r.kt)("li",null,"Highly scalable & Highly available"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://cloud.google.com/memorystore"},"Memorystore"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Amazon ElastiCache"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,"Support for two engines: Memcached and Redis"),(0,r.kt)("li",null,"Ease of management via the AWS Management Console"),(0,r.kt)("li",null,"Detailed monitoring statistics for the engine nodes at no extra cost via Amazon CloudWatch"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://aws.amazon.com/elasticache/features/?nc=sn&loc=3"},"Amazon ElastiCache features"))))),(0,r.kt)("h3",{id:"choreography-pattern"},(0,r.kt)("a",{parentName:"h3",href:"https://docs.microsoft.com/en-us/azure/architecture/patterns/choreography"},"Choreography pattern")),(0,r.kt)("p",null,"\u4f7f\u7528\u5f02\u6b65\u6d88\u606f\u961f\u5217\u5bf9\u4e1a\u52a1\u8fdb\u884c\u89e3\u8026\uff0c\u517c\u5bb9\u591a\u79cd\u7f16\u7a0b\u8bed\u8a00\u4e0e\u6846\u67b6\uff0c\u89e3\u51b3\u4e1a\u52a1\u7ec4\u4ef6\u9700\u8981\u5355\u72ec\u7ba1\u7406\uff0c\u91cd\u8bd5\u7684\u95ee\u9898\uff0c\u9002\u7528\u4e8e\u4e1a\u52a1\u7ec4\u4ef6\u7ecf\u5e38\u589e\u5220\u548c\u4fee\u6539\u7684\u573a\u666f\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4f55\u65f6\u4f7f\u7528")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5e94\u7528"),(0,r.kt)("th",{parentName:"tr",align:null},"\u529f\u80fd"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9700\u8981\u5173\u6ce8"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"News Feed"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u901a\u77e5\u5230\u6d88\u606f\u8ba2\u9605\u8005"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u6709\u5e8f\u6027\uff0c\u91cd\u8bd5\u7b56\u7565")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Shopping"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u4e8b\u4ef6\u901a\u77e5\u5230\u4e1a\u52a1\u7ec4\u4ef6\uff08\u8ba2\u5355\u72b6\u6001\uff0c\u7269\u6d41\u72b6\u6001\u7b49\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u6301\u4e45\u5316\uff0c\u6570\u636e\u56de\u6eaf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Live"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u4e1a\u52a1\u6570\u636e\u5230\u4e1a\u52a1\u7ec4\u4ef6\uff08\u8bc4\u8bba\uff0c\u70b9\u8d5e\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u6709\u5e8f\u6027\uff0c\u6d88\u606f\u6301\u4e45\u5316")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u9700\u8981\u5173\u6ce8")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/architecture/patterns/choreography#issues-and-considerations"},"Issues and considerations")),(0,r.kt)("p",null,"difficult to recover "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"consider using a retry and, or time out mechanism to recognize that operation as a failure.")),(0,r.kt)("p",null,"order in sequence "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"have multiple message buses that get messages in the required order")),(0,r.kt)("p",null,"single point of failure"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"for choreography, the role is distributed between all services and resiliency becomes less robust.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/architecture/patterns/publisher-subscriber#issues-and-considerations"},"\u4f7f\u7528\u6d88\u606f\u961f\u5217\u7684\u6f5c\u5728\u95ee\u9898")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5982\u4f55\u6267\u884c")),(0,r.kt)("p",null,"\u4f7f\u7528\u6d88\u606f\u961f\u5217\u7ec4\u4ef6\uff0c\u5f53\u6709\u65b0\u7684\u6d88\u606f\u5219\u7531\u53d1\u5e03\u8005\u63a8\u9001\u7ed9\u8ba2\u9605\u8005\u3002\u63a8\u8350\u6d4f\u89c8\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=cvu53CnZmGI&list=PLIivdWyY5sqKwVLe4BLJ-vlh9r9zCdOse"},"Cloud Pub/Sub Make Easy")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u76f8\u5173\u7ec4\u4ef6")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7279\u70b9"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9605\u8bfb"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RabbitMQ"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,"Asynchronous Messaging"),(0,r.kt)("li",null,"cross-language messaging with multiple languages"),(0,r.kt)("li",null,"high availability and throughput"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.rabbitmq.com/#features"},"RabbitMQ Features"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Pub/Sub"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,"At-least-once delivery"),(0,r.kt)("li",null,"Exactly-once processing"),(0,r.kt)("li",null,"Seek and replay"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://cloud.google.com/pubsub#section-9"},"Pub/Sub All features"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Amazon SQS"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,"Unlimited Throughput"),(0,r.kt)("li",null,"At-Least-Once Delivery"),(0,r.kt)("li",null,"Best-Effort Ordering"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://aws.amazon.com/sqs/features/"},"Amazon SQS features"))))),(0,r.kt)("h3",{id:"retry-pattern--circuit-breaker-pattern"},(0,r.kt)("a",{parentName:"h3",href:"https://docs.microsoft.com/en-us/azure/architecture/patterns/retry"},"Retry pattern")," & ",(0,r.kt)("a",{parentName:"h3",href:"https://docs.microsoft.com/en-us/azure/architecture/patterns/choreography"},"Circuit Breaker pattern")),(0,r.kt)("p",null,"\u4f7f\u7528\u4ee3\u7406\u7b56\u7565\u5bf9\u91cd\u8bd5\u529f\u80fd\u8fdb\u884c\u7ba1\u7406\u548c\u9650\u5236\uff0c\u9632\u6b62\u51fa\u73b0\u5927\u91cf\u91cd\u8bd5\u5bfc\u81f4\u539f\u672c\u5d29\u6e83\u7684\u7ec4\u4ef6\u65e0\u6cd5\u6062\u590d\u4ee5\u53ca\u8017\u7528\u8fc7\u591a\u91cd\u8bd5\u8d44\u6e90\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4f55\u65f6\u4f7f\u7528")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5e94\u7528"),(0,r.kt)("th",{parentName:"tr",align:null},"\u529f\u80fd"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9700\u8981\u5173\u6ce8"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"News Feed"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5bf9\u6d88\u606f\u53d1\u9001\u5931\u8d25\u8fdb\u884c\u91cd\u8bd5"),(0,r.kt)("td",{parentName:"tr",align:null},"Exception Handling, Logging")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IM"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5bf9\u6d88\u606f\u53d1\u9001\u5931\u8d25\u8fdb\u884c\u91cd\u8bd5"),(0,r.kt)("td",{parentName:"tr",align:null},"Exception Handling, Logging")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"File Sync"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5bf9\u4e1a\u52a1\u64cd\u4f5c\u8fdb\u884c\u91cd\u8bd5\uff08\u66f4\u65b0\u6587\u4ef6\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"Retry after delay")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u9700\u8981\u5173\u6ce8")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/architecture/patterns/retry#solution"},"Retry Issues and considerations"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/architecture/patterns/circuit-breaker"},"Circuit Breaker Issues and considerations")),(0,r.kt)("p",null,"Fail fast"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For some noncritical operations, it's better to fail fast rather than retry several times and impact the throughput of the application.")),(0,r.kt)("p",null,"Exception Handling"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A request to a service can fail for a variety of reasons raising different exceptions depending on the nature of the failure. Some exceptions indicate a failure that can be resolved quickly, while others indicate that the failure is longer lasting. It's useful for the retry policy to adjust the time between retry attempts based on the type of the exception.")),(0,r.kt)("p",null,"Idempotent"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"retries could cause the operation to be executed more than once, with unintended side effects")),(0,r.kt)("p",null,"Logging"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"It's important to log all connectivity failures that cause a retry so that underlying problems with the application, services, or resources can be identified.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5982\u4f55\u6267\u884c")),(0,r.kt)("p",null,"\u5177\u4f53\u7b56\u7565\u8bf7\u6d4f\u89c8\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/architecture/patterns/retry#solution"},"Solution")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/architecture/patterns/circuit-breaker#solution"},"Solution"))))}s.isMDXComponent=!0}}]);