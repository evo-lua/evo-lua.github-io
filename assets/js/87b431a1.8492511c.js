"use strict";(self.webpackChunkevo_lua_github_io=self.webpackChunkevo_lua_github_io||[]).push([[540],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,f=c["".concat(l,".").concat(m)]||c[m]||p[m]||a;return n?i.createElement(f,o(o({ref:t},d),{},{components:n})):i.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1902:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o=["components"],s={},l="RFC: Builtin Test Runner",u={unversionedId:"background-information/design/implemented/unit-test-runner",id:"background-information/design/implemented/unit-test-runner",title:"RFC: Builtin Test Runner",description:"This document describes design goals for a BDD-style unit test runner",source:"@site/docs/background-information/design/implemented/unit-test-runner.md",sourceDirName:"background-information/design/implemented",slug:"/background-information/design/implemented/unit-test-runner",permalink:"/docs/background-information/design/implemented/unit-test-runner",draft:!1,editUrl:"https://github.com/evo-lua/evo-lua.github.io/edit/main/docs/background-information/design/implemented/unit-test-runner.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"RFC: Smoke Testing",permalink:"/docs/background-information/design/implemented/testing-architecture"},next:{title:"Template",permalink:"/docs/background-information/design/template"}},d={},p=[{value:"Motivation",id:"motivation",level:2},{value:"Testing Philosophy",id:"testing-philosophy",level:2},{value:"Organizing Tests",id:"organizing-tests",level:2},{value:"Additional Features",id:"additional-features",level:2},{value:"Nonstandard Assertions",id:"nonstandard-assertions",level:3},{value:"Asynchronous Tests",id:"asynchronous-tests",level:3},{value:"Setup and Teardown Code",id:"setup-and-teardown-code",level:3},{value:"Test Retries and Pending Tests",id:"test-retries-and-pending-tests",level:3},{value:"Test Discovery",id:"test-discovery",level:3},{value:"Parallelization",id:"parallelization",level:3},{value:"Stubs, Mocks &amp; Spies",id:"stubs-mocks--spies",level:3},{value:"Additional Reporting Formats",id:"additional-reporting-formats",level:3},{value:"Alternatives",id:"alternatives",level:2}],c={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rfc-builtin-test-runner"},"RFC: Builtin Test Runner"),(0,a.kt)("p",null,"This document describes design goals for a BDD-style unit test runner"),(0,a.kt)("h2",{id:"motivation"},"Motivation"),(0,a.kt)("p",null,"There's a need for unit testing, but the existing frameworks are largely inactive and can't easily be adapted."),(0,a.kt)("h2",{id:"testing-philosophy"},"Testing Philosophy"),(0,a.kt)("p",null,"BDD style, meaning ",(0,a.kt)("inlineCode",{parentName:"p"},"describe")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"it")," is used to define test suites. Why?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Easy to understand"),(0,a.kt)("li",{parentName:"ul"},"Requires little boilerplate"),(0,a.kt)("li",{parentName:"ul"},"Flexible enough for all basic unit testing needs"),(0,a.kt)("li",{parentName:"ul"},"Simple enough to implement from scratch"),(0,a.kt)("li",{parentName:"ul"},"Lends itself well to domain-driven design")),(0,a.kt)("p",null,"Guiding principle: Focus on what matters - fast feedback and iteration speed above extensive feature sets."),(0,a.kt)("h2",{id:"organizing-tests"},"Organizing Tests"),(0,a.kt)("p",null,"No concept of test suites and test cases should be implemented in code. Instead, Lua scripts (files) ",(0,a.kt)("em",{parentName:"p"},"are")," test suites. Separations inside them are only relevant for the reporting stage (for readability's sake)."),(0,a.kt)("p",null,'The core idea here is that all those fancy bells and whistles detract from the one (and only) thing developers care about when writing tests: Making sure that the code works, as fast as possible and with minimal headaches. No one enjoys writing tests, after all, and since test code needs to be maintained as part of the code base it might as well be "real code".'),(0,a.kt)("p",null,"For the reporting step, and for backwards compatibility, using ",(0,a.kt)("em",{parentName:"p"},"describe")," and ",(0,a.kt)("em",{parentName:"p"},"it")," functions should be possible. However, these don't need to do anything other than visually indent the printed labels and are otherwise purely optional."),(0,a.kt)("h2",{id:"additional-features"},"Additional Features"),(0,a.kt)("p",null,"Various commonly-included features have been considered for an initial prototype."),(0,a.kt)("h3",{id:"nonstandard-assertions"},"Nonstandard Assertions"),(0,a.kt)("p",null,"Assertions are optionally provided via the ",(0,a.kt)("em",{parentName:"p"},"assertions")," library, which should be built into the runtime itself."),(0,a.kt)("p",null,"Using the standard Lua ",(0,a.kt)("em",{parentName:"p"},"assert")," or a third-party solution (like ",(0,a.kt)("em",{parentName:"p"},"luassert"),") is also possible as long as failing tests throw."),(0,a.kt)("h3",{id:"asynchronous-tests"},"Asynchronous Tests"),(0,a.kt)("p",null,"Coroutines can trivially be used to implement asynchronous tests. There's really no need for more complexity."),(0,a.kt)("h3",{id:"setup-and-teardown-code"},"Setup and Teardown Code"),(0,a.kt)("p",null,"Setup and teardown should be implemented by each test, as appropriate. Special functions could be added later."),(0,a.kt)("h3",{id:"test-retries-and-pending-tests"},"Test Retries and Pending Tests"),(0,a.kt)("p",null,'Flaky tests should be fixed and not retried until they work. Pending or "not-yet-implemented" tests should be removed.'),(0,a.kt)("h3",{id:"test-discovery"},"Test Discovery"),(0,a.kt)("p",null,"Instead of adding fancy discovery logic, CLI flags and other magic, simply passing a list of test files will suffice."),(0,a.kt)("h3",{id:"parallelization"},"Parallelization"),(0,a.kt)("p",null,"Multiple runners can be spawned via shell scripts or by using the ",(0,a.kt)("em",{parentName:"p"},"uv")," library. Better support may be worth adding later."),(0,a.kt)("h3",{id:"stubs-mocks--spies"},"Stubs, Mocks & Spies"),(0,a.kt)("p",null,"These may be worth adding as a separate library should they become relevant. For the time being, they are not."),(0,a.kt)("h3",{id:"additional-reporting-formats"},"Additional Reporting Formats"),(0,a.kt)("p",null,"TAP or other formats may be added in the future. But at least for an initial version, that's probably not useful enough."),(0,a.kt)("h2",{id:"alternatives"},"Alternatives"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Make ",(0,a.kt)("inlineCode",{parentName:"li"},"busted")," work the way it should (painful)"),(0,a.kt)("li",{parentName:"ul"},"Attempt to fit ",(0,a.kt)("inlineCode",{parentName:"li"},"luaunit")," into the BDD framework (impedance mismatch)"),(0,a.kt)("li",{parentName:"ul"},"Try out some of more niche frameworks listed on ",(0,a.kt)("a",{parentName:"li",href:"http://lua-users.org/wiki/UnitTesting"},"lua-users.org")," (unlikely to be fruitful)")))}m.isMDXComponent=!0}}]);