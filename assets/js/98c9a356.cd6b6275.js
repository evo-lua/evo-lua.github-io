"use strict";(self.webpackChunkevo_lua_github_io=self.webpackChunkevo_lua_github_io||[]).push([[5462],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(r),c=a,h=u["".concat(l,".").concat(c)]||u[c]||m[c]||i;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},3648:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>T,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const i={},o="bdd",s={unversionedId:"references/api/libraries/bdd",id:"references/api/libraries/bdd",title:"bdd",description:"Behavior-driven testing library for running unit tests",source:"@site/docs/references/api/libraries/bdd.md",sourceDirName:"references/api/libraries",slug:"/references/api/libraries/bdd",permalink:"/docs/references/api/libraries/bdd",draft:!1,editUrl:"https://github.com/evo-lua/evo-lua.github.io/edit/main/docs/references/api/libraries/bdd.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"assertions",permalink:"/docs/references/api/libraries/assertions"},next:{title:"console",permalink:"/docs/references/api/libraries/console"}},l={},d=[{value:"Status",id:"status",level:2},{value:"Availability",id:"availability",level:2},{value:"Functions",id:"functions",level:2},{value:"describe",id:"describe",level:3},{value:"getElapsedTime",id:"getelapsedtime",level:3},{value:"getErrorDetails",id:"geterrordetails",level:3},{value:"getHumanReadableTime",id:"gethumanreadabletime",level:3},{value:"getReport",id:"getreport",level:3},{value:"isBasicReportingMode",id:"isbasicreportingmode",level:3},{value:"isDetailedReportingMode",id:"isdetailedreportingmode",level:3},{value:"isMinimalReportingMode",id:"isminimalreportingmode",level:3},{value:"it",id:"it",level:3},{value:"report",id:"report",level:3},{value:"reset",id:"reset",level:3},{value:"setBasicReportMode",id:"setbasicreportmode",level:3},{value:"setDetailedReportMode",id:"setdetailedreportmode",level:3},{value:"setMinimalReportMode",id:"setminimalreportmode",level:3},{value:"startTestRunner",id:"starttestrunner",level:3},{value:"Changelog",id:"changelog",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},u=p("Experimental"),m=p("Function"),c=p("Parameters"),h=p("Parameter"),g=p("Returns"),b=p("Return"),f=p("Struct"),k=p("Member"),y={toc:d},v="wrapper";function T(e){let{components:t,...r}=e;return(0,a.kt)(v,(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bdd"},"bdd"),(0,a.kt)("p",null,"Behavior-driven testing library for running unit tests"),(0,a.kt)("h2",{id:"status"},"Status"),(0,a.kt)(u,{mdxType:"Experimental"}),(0,a.kt)("h2",{id:"availability"},"Availability"),(0,a.kt)("p",null,"This module is preloaded. You can simply ",(0,a.kt)("inlineCode",{parentName:"p"},"require")," it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'local bdd = require("bdd")\n')),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"describe"},"describe"),(0,a.kt)("p",null,"Signals to the test runner that a new ",(0,a.kt)("a",{parentName:"p",href:"/docs/how-to-guides/unit-testing#sections-and-subsections"},"section")," should be started. You should only ever call this from within a test file."),(0,a.kt)(m,{mdxType:"Function"},(0,a.kt)(c,{mdxType:"Parameters"},(0,a.kt)(h,{name:"label",type:"string",mdxType:"Parameter"}),(0,a.kt)(h,{name:"testFunction",type:"function",mdxType:"Parameter"}))),(0,a.kt)("h3",{id:"getelapsedtime"},"getElapsedTime"),(0,a.kt)("p",null,"Returns a ",(0,a.kt)("a",{parentName:"p",href:"#gethumanreadabletime"},"human-readable string representation")," of the elapsed time for the current test run, which is the period between the last call to ",(0,a.kt)("a",{parentName:"p",href:"#starttestrunner"},"startTestRunner")," and now. If the tests have all been executed, the elapsed time is the total duration of the test run."),(0,a.kt)(m,{mdxType:"Function"},(0,a.kt)(g,{mdxType:"Returns"},(0,a.kt)(b,{name:"elapsedTime",type:"string",mdxType:"Return"}))),(0,a.kt)("h3",{id:"geterrordetails"},"getErrorDetails"),(0,a.kt)("p",null,"Returns a table containing error information about the last (or current) test run. Errors accumulate in-order; i.e., the table is an array."),(0,a.kt)(m,{mdxType:"Function"},(0,a.kt)(g,{mdxType:"Returns"},(0,a.kt)(b,{name:"errorDetails",type:"ErrorDetails[]",mdxType:"Return"}))),(0,a.kt)(f,{name:"ErrorDetails",mdxType:"Struct"},(0,a.kt)(k,{name:"message",type:"string",mdxType:"Member"}),(0,a.kt)(k,{name:"specFile",type:"string",mdxType:"Member"}),(0,a.kt)(k,{name:"stackTrace",type:"string",mdxType:"Member"})),(0,a.kt)("h3",{id:"gethumanreadabletime"},"getHumanReadableTime"),(0,a.kt)("p",null,"This utility method formats a duration, assumed to be given in nanoseconds, for human consumption. You cannot rely on the format being stable, just that it's easy to read (for an arbitrary definition of \"easy\"). It's intended to format the time for completed test runs."),(0,a.kt)(m,{mdxType:"Function"},(0,a.kt)(c,{mdxType:"Parameters"},(0,a.kt)(h,{name:"highResolutionTime",type:"number",mdxType:"Parameter"})),(0,a.kt)(g,{mdxType:"Returns"},(0,a.kt)(b,{name:"formattedTime",type:"string",mdxType:"Return"}))),(0,a.kt)("h3",{id:"getreport"},"getReport"),(0,a.kt)("p",null,"Returns the contents of the internal report buffer. You can use this after the test run has finished in order to print a summary."),(0,a.kt)(m,{mdxType:"Function"},(0,a.kt)(g,{mdxType:"Returns"},(0,a.kt)(b,{name:"report",type:"string",mdxType:"Return"}))),(0,a.kt)("h3",{id:"isbasicreportingmode"},"isBasicReportingMode"),(0,a.kt)("p",null,"Returns whether the test runner is set to use the ",(0,a.kt)("a",{parentName:"p",href:"/docs/how-to-guides/unit-testing#basic-reports"},"basic reporting mode"),"."),(0,a.kt)(m,{mdxType:"Function"},(0,a.kt)(g,{mdxType:"Returns"},(0,a.kt)(b,{name:"enabledFlag",type:"boolean",mdxType:"Return"}))),(0,a.kt)("h3",{id:"isdetailedreportingmode"},"isDetailedReportingMode"),(0,a.kt)("p",null,"Returns whether the test runner is set to use the ",(0,a.kt)("a",{parentName:"p",href:"/docs/how-to-guides/unit-testing#detailed-reports"},"detailed reporting mode"),"."),(0,a.kt)(m,{mdxType:"Function"},(0,a.kt)(g,{mdxType:"Returns"},(0,a.kt)(b,{name:"enabledFlag",type:"boolean",mdxType:"Return"}))),(0,a.kt)("h3",{id:"isminimalreportingmode"},"isMinimalReportingMode"),(0,a.kt)("p",null,"Returns whether the test runner is set to use the ",(0,a.kt)("a",{parentName:"p",href:"/docs/how-to-guides/unit-testing#minimal-reports"},"minimal reporting mode"),"."),(0,a.kt)(m,{mdxType:"Function"},(0,a.kt)(g,{mdxType:"Returns"},(0,a.kt)(b,{name:"enabledFlag",type:"boolean",mdxType:"Return"}))),(0,a.kt)("h3",{id:"it"},"it"),(0,a.kt)("p",null,"Signals to the test runner that a new ",(0,a.kt)("a",{parentName:"p",href:"/docs/how-to-guides/unit-testing#sections-and-subsections"},"subsection")," should be started. You should only ever call this from within a test file."),(0,a.kt)(m,{mdxType:"Function"},(0,a.kt)(c,{mdxType:"Parameters"},(0,a.kt)(h,{name:"label",type:"string",mdxType:"Parameter"}),(0,a.kt)(h,{name:"testFunction",type:"function",mdxType:"Parameter"}))),(0,a.kt)("h3",{id:"report"},"report"),(0,a.kt)("p",null,"Adds a given message to the internal report buffer, so that it will be included in the final report after all tests have run. Inserts newlines (",(0,a.kt)("inlineCode",{parentName:"p"},"\\n"),") after each message to simulate print-like semantics. Converts non-string values according to the usual LuaJIT conventions."),(0,a.kt)(m,{mdxType:"Function"},(0,a.kt)(c,{mdxType:"Parameters"},(0,a.kt)(h,{name:"message",type:"string",mdxType:"Parameter"}))),(0,a.kt)("h3",{id:"reset"},"reset"),(0,a.kt)("p",null,"Resets the test runner's internal state to its default values. This will happen automatically whenever you start a new test runner."),(0,a.kt)("h3",{id:"setbasicreportmode"},"setBasicReportMode"),(0,a.kt)("p",null,"Enables the ",(0,a.kt)("a",{parentName:"p",href:"/docs/how-to-guides/unit-testing#basic-reports"},"basic reporting mode")," (must be called before starting the test runner). Only one reporting mode can be active."),(0,a.kt)("h3",{id:"setdetailedreportmode"},"setDetailedReportMode"),(0,a.kt)("p",null,"Enables the ",(0,a.kt)("a",{parentName:"p",href:"/docs/how-to-guides/unit-testing#detailed-reports"},"detailed reporting mode")," (must be called before starting the test runner). Only one reporting mode can be active."),(0,a.kt)("h3",{id:"setminimalreportmode"},"setMinimalReportMode"),(0,a.kt)("p",null,"Enables the ",(0,a.kt)("a",{parentName:"p",href:"/docs/how-to-guides/unit-testing#minimal-reports"},"minimal reporting mode")," (must be called before starting the test runner). Only one reporting mode can be active."),(0,a.kt)("h3",{id:"starttestrunner"},"startTestRunner"),(0,a.kt)("p",null,"Starts a new test runner for the given list of test files. It will merely execute the tests, without reporting results or error details",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),". After a test run has completed, any errors that occured during it can be queried via ",(0,a.kt)("a",{parentName:"p",href:"#geterrordetails"},"getErrorDetails"),", and reports via ",(0,a.kt)("a",{parentName:"p",href:"#getreport"},"getReport"),"."),(0,a.kt)("p",null,(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," ",(0,a.kt)("em",{parentName:"p"},"The exact behavior depends on the ",(0,a.kt)("a",{parentName:"em",href:"/docs/how-to-guides/unit-testing#reporting-test-results"},"reporting mode")," used. In some modes, the runner will fail loudly when encountering an error.")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Only one test runner can be started at a time. Manipulating its state from inside the tests may lead to undefined behavior.")),(0,a.kt)(m,{mdxType:"Function"},(0,a.kt)(c,{mdxType:"Parameters"},(0,a.kt)(h,{name:"specFiles",type:"table",mdxType:"Parameter"}))),(0,a.kt)("h2",{id:"changelog"},"Changelog"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Version"),(0,a.kt)("th",{parentName:"tr",align:"center"},"What happened?"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"v0.0.1"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Initial release")))))}T.isMDXComponent=!0}}]);