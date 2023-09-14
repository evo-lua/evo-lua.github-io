"use strict";(self.webpackChunkevo_lua_github_io=self.webpackChunkevo_lua_github_io||[]).push([[4195],{5451:(e,t,n)=>{n.r(t),n.d(t,{default:()=>O});var a=n(7294),r=n(6010),o=n(9960),i=n(7961),s=n(7462);const l={features:"features_t9lD",featureSvg:"featureSvg_GfXr",featureSummaryContainer:"featureSummaryContainer_WDNQ",featureSummaryText:"featureSummaryText_nCut"};function u(e){return a.createElement(a.Fragment,null,a.createElement("div",{className:l.featureSummaryText},a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-px-24",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"#4ade80",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),a.createElement("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),a.createElement("path",{d:"M9 12l2 2l4 -4"})),e.text))}const c=[{title:"What can I do with Evo?",description:a.createElement(a.Fragment,null,a.createElement("div",{className:l.featureSummaryContainer},a.createElement(u,{text:"Write multimedia apps and servers"}),a.createElement(u,{text:"Create self-contained executables"}),a.createElement(u,{text:"Interface with native (C/C++) libraries"}),a.createElement(u,{text:"High-performance asynchronous I/O"}),a.createElement(u,{text:"Use WebViews to run JavaScript from Lua"})),"Evo functions as a substitute for the standard (PUC) Lua interpreter or - more accurately - LuaJIT. It runs your Lua scripts in an enriched environment, giving you access to powerful C and C++ libraries wrapped in easy-to-use APIs. This makes it possible to do lots of things that Lua can't usually do on its own. Of course there's still all of the Lua standard libraries and LuaJIT features, such as the FFI (foreign function interface) to easily call native libraries that aren't already built in. You can even run a fully-fledged browser engine and execute JavaScript (or load HTML and CSS) from within Lua - what a time to be alive!")},{title:"How does Evo compare to other runtimes?",description:a.createElement(a.Fragment,null,a.createElement("div",{className:l.featureSummaryContainer},a.createElement(u,{text:"All-in-one standalone executable"}),a.createElement(u,{text:"Fully compatible with existing LuaJIT code"}),a.createElement(u,{text:"Supports Lua 5.1 and (partially) 5.2"}),a.createElement(u,{text:"Includes additional libraries and tools"}),a.createElement(u,{text:"Focus on testing and documentation"})),"Evo may be seen as an extension of both the standard PUC-Lua interpreter and LuaJIT, in the sense that it's more or less \"LuaJIT with extra libraries\". This means it can do everything they can do, and more. Like LuaPower, LuaDist, or Luvit (which Evo is directly inspired by) it's intended as a \"batteries included\" runtime environment that's suitable for many real-world applications - though it aims to be easy to use and extend more than feature-complete. While the idea isn't new, a key difference is probably that Evo focuses on sustaining its ability to quickly evolve and meet new challenges head-on - hence the name.")},{title:"What's the project status?",description:a.createElement(a.Fragment,null,a.createElement("div",{className:l.featureSummaryContainer},a.createElement(u,{text:"Functional but not feature-complete"}),a.createElement(u,{text:"Initial development started in 2021"}),a.createElement(u,{text:"Frequently updated (more or less)"}),a.createElement(u,{text:"Contributions are always welcome!"}),a.createElement(u,{text:"... but don't expect too much (yet)"})),"Evo is in its larval stage of development, although it isn't completely new: The first prototypes were developed in 2021, eventually leading to the current design. Even if the concept has more than proven itself, the project is clearly far from being finished - and it likely never will, since evolution is in its DNA. Right now, Evo is like a caterpillar - which may yet turn into a butterfly. It hasn't had enough time to spin its cocoon and is still actively being worked on, so it'll be quite a while until all the planned features are in. If you'd like to take part in the journey, feel free to stick around! Contributions or feedback are welcome.")}];function m(e){let{Svg:t,title:n,description:o}=e;return a.createElement("div",{className:(0,r.Z)("col col--4")},a.createElement("div",{className:"text--center"}),a.createElement("div",null,a.createElement("h3",null,n),a.createElement("p",null,o)))}function d(){return a.createElement("section",{className:l.features},a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},c.map(((e,t)=>a.createElement(m,(0,s.Z)({key:t},e)))))))}const h={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"};var f={};function g(){return f}function v(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function p(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function y(e){p(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===b(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function w(e,t){if(null==e)throw new TypeError("assign requires that input parameter not be null or undefined");for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}var E={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};const x=function(e,t,n){var a,r=E[e];return a="string"==typeof r?r:1===t?r.one:r.other.replace("{{count}}",t.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a};function S(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}var M={date:S({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:S({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:S({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};var k={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function W(e){return function(t,n){var a;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,o=null!=n&&n.width?String(n.width):r;a=e.formattingValues[o]||e.formattingValues[r]}else{var i=e.defaultWidth,s=null!=n&&n.width?String(n.width):e.defaultWidth;a=e.values[s]||e.values[i]}return a[e.argumentCallback?e.argumentCallback(t):t]}}function N(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.width,r=a&&e.matchPatterns[a]||e.matchPatterns[e.defaultMatchWidth],o=t.match(r);if(!o)return null;var i,s=o[0],l=a&&e.parsePatterns[a]||e.parsePatterns[e.defaultParseWidth],u=Array.isArray(l)?function(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n;return}(l,(function(e){return e.test(s)})):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n;return}(l,(function(e){return e.test(s)}));return i=e.valueCallback?e.valueCallback(u):u,{value:i=n.valueCallback?n.valueCallback(i):i,rest:t.slice(s.length)}}}var C;const P={code:"en-US",formatDistance:x,formatLong:M,formatRelative:function(e,t,n,a){return k[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:W({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:W({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:W({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:W({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:W({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(C={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(C.matchPattern);if(!n)return null;var a=n[0],r=e.match(C.parsePattern);if(!r)return null;var o=C.valueCallback?C.valueCallback(r[0]):r[0];return{value:o=t.valueCallback?t.valueCallback(o):o,rest:e.slice(a.length)}}),era:N({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:N({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:N({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:N({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:N({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var D=6e4,T=1440,_=30*T,j=365*T;function L(e,t,n){var a,r,o;p(2,arguments);var i=g(),s=null!==(a=null!==(r=null==n?void 0:n.locale)&&void 0!==r?r:i.locale)&&void 0!==a?a:P;if(!s.formatDistance)throw new RangeError("locale must contain localize.formatDistance property");var l=function(e,t){p(2,arguments);var n=y(e),a=y(t),r=n.getTime()-a.getTime();return r<0?-1:r>0?1:r}(e,t);if(isNaN(l))throw new RangeError("Invalid time value");var u,c,m=w(w({},n),{addSuffix:Boolean(null==n?void 0:n.addSuffix),comparison:l});l>0?(u=y(t),c=y(e)):(u=y(e),c=y(t));var d,h=String(null!==(o=null==n?void 0:n.roundingMethod)&&void 0!==o?o:"round");if("floor"===h)d=Math.floor;else if("ceil"===h)d=Math.ceil;else{if("round"!==h)throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");d=Math.round}var f,b=c.getTime()-u.getTime(),E=b/D,x=(b-(v(c)-v(u)))/D,S=null==n?void 0:n.unit;if("second"===(f=S?String(S):E<1?"second":E<60?"minute":E<T?"hour":x<_?"day":x<j?"month":"year")){var M=d(b/1e3);return s.formatDistance("xSeconds",M,m)}if("minute"===f){var k=d(E);return s.formatDistance("xMinutes",k,m)}if("hour"===f){var W=d(E/60);return s.formatDistance("xHours",W,m)}if("day"===f){var N=d(x/T);return s.formatDistance("xDays",N,m)}if("month"===f){var C=d(x/_);return 12===C&&"month"!==S?s.formatDistance("xYears",1,m):s.formatDistance("xMonths",C,m)}if("year"===f){var L=d(x/j);return s.formatDistance("xYears",L,m)}throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'")}const F=function(){const[e,t]=(0,a.useState)("https://github.com/evo-lua/evo-runtime/releases"),[n,r]=(0,a.useState)(""),[o,i]=(0,a.useState)([]);(0,a.useEffect)((()=>{fetch("https://api.github.com/repos/evo-lua/evo-runtime/releases/latest").then((e=>e.json())).then((e=>{const n=e.tag_name,a=e.html_url,o=new Date(e.published_at),s=e.assets;i(s);const l=function(e,t){return p(1,arguments),L(e,Date.now(),t)}(o);t(a),r(`Latest Release: ${n} (${l} ago)`)})).catch((e=>{console.error("Error fetching release information:",e)}))}),[]);const s=e=>{const t=o.find((t=>t.name.includes(e)));return t?t.browser_download_url:""};return a.createElement("div",{className:"hero-buttons-container"},a.createElement("a",{className:"hero-text",href:e,target:"_blank",rel:"noopener noreferrer"},n),a.createElement("div",null,a.createElement("a",{className:"hero-button",href:s("exe")},"Download for Windows (x64)"),a.createElement("a",{className:"hero-button",href:s("linux-x64")},"Download for Linux (x64)"),a.createElement("a",{className:"hero-button",href:s("macos-x64")},"Download for Mac OS (x64)")))};function I(){return a.createElement("div",null,a.createElement("h1",{className:"hero__title"},a.createElement("img",{className:"hero-banner-image",src:"/img/caterpillar.png"})),a.createElement("p",{className:"hero__subtitle"},"Evo is an experimental all-in-one Lua runtime"),a.createElement("p",{className:"hero__description"},"It combines asynchronous I/O, just-in-time compilation, and browser technologies with many general-purpose libraries and other useful tools that can help you create complex Lua-based applications with ease."),a.createElement("p",{className:"hero__subscript"},"Disclaimer: This website is under construction! Both the documentation and Evo itself are a work in progress. You're welcome to look around, but don't expect too much - yet."))}function A(){return a.createElement("div",{className:"hero-buttons-container"},a.createElement(F,null),a.createElement("div",null,a.createElement(o.Z,{className:"hero-text",to:"/docs/how-to-guides/building-from-source"},"Build from Source"),a.createElement(o.Z,{className:"hero-text",to:"https://github.com/evo-lua/evo-runtime/issues/new"},"Report a Problem"),a.createElement(o.Z,{className:"hero-text",to:"/docs/contributing"},"Contribute")))}function J(){return a.createElement("header",{className:(0,r.Z)("hero hero--primary",h.heroBanner),id:"hero-banner"},a.createElement("div",{className:"hero__container"},a.createElement(I,null),a.createElement(A,null)))}function q(){return a.createElement("div",{className:"hero__container"},a.createElement("a",{className:"hero-button hero__quickstart-button",href:"/docs/category/getting-started/"},"Get Started in Minutes"))}function O(){return a.createElement(i.Z,{title:"",description:"Lua runtime engine powered by LuaJIT and libuv"},a.createElement(J,null),a.createElement("main",null,a.createElement(d,null),a.createElement(q,null)))}}}]);