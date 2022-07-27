"use strict";(self.webpackChunkevo_lua_github_io=self.webpackChunkevo_lua_github_io||[]).push([[298],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,p=d["".concat(u,".").concat(f)]||d[f]||g[f]||i;return n?r.createElement(p,a(a({ref:t},c),{},{components:n})):r.createElement(p,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5089:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return g}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={},u="RFC: Standardized Logging Framework",s={unversionedId:"background-information/design/drafts/logging-framework",id:"background-information/design/drafts/logging-framework",title:"RFC: Standardized Logging Framework",description:"This document describes design goals for libuv-compatible logging.",source:"@site/docs/background-information/design/drafts/logging-framework.md",sourceDirName:"background-information/design/drafts",slug:"/background-information/design/drafts/logging-framework",permalink:"/docs/background-information/design/drafts/logging-framework",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/background-information/design/drafts/logging-framework.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Drafts",permalink:"/docs/category/drafts"},next:{title:"RFC: Standardized Unit Test Runner",permalink:"/docs/background-information/design/drafts/unit-test-runner"}},c={},g=[{value:"Motivation",id:"motivation",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Alternatives",id:"alternatives",level:2}],d={toc:g};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rfc-standardized-logging-framework"},"RFC: Standardized Logging Framework"),(0,i.kt)("p",null,"This document describes design goals for libuv-compatible logging."),(0,i.kt)("h2",{id:"motivation"},"Motivation"),(0,i.kt)("p",null,"There's only one (moderately) active logging framework for Lua, which uses standard Lua I/O (not async via libuv)."),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,"The framework MUST accomplish the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Allow for synchronous and asynchronous logging using libuv's I/O facilities"),(0,i.kt)("li",{parentName:"ul"},"Support multiple logging outputs at the same time (e.g., console and file on disk)"),(0,i.kt)("li",{parentName:"ul"},"Support multiple channels, following a standard syslog severity-based approach")),(0,i.kt)("p",null,"It SHOULD aim to do the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Follow an estbalished style of logging APIs, like log4j"),(0,i.kt)("li",{parentName:"ul"},"Be as performant as possible (I/O bound), with low impact on the event loop itself")),(0,i.kt)("h2",{id:"alternatives"},"Alternatives"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Make ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/lunarmodules/lualogging"},"LuaLogging")," work with libuv's event loop (viability TBD)"),(0,i.kt)("li",{parentName:"ul"},"Adapt one of the abandoned frameworks for luvit, like ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/gsick/luvit-logger"},"luvit-logger")," or ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/zhaozg/luvit-logging"},"luvit-logging")," (not worth it?)")))}f.isMDXComponent=!0}}]);