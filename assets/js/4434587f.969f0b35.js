"use strict";(self.webpackChunkevo_lua_github_io=self.webpackChunkevo_lua_github_io||[]).push([[5645],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var r=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,s=function(e,t){if(null==e)return{};var a,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,s=e.mdxType,n=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(a),c=s,k=d["".concat(o,".").concat(c)]||d[c]||m[c]||n;return a?r.createElement(k,i(i({ref:t},u),{},{components:a})):r.createElement(k,i({ref:t},u))}));function k(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=a.length,i=new Array(n);i[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[d]="string"==typeof e?e:s,i[1]=l;for(var p=2;p<n;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},406:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>v,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var r=a(7462),s=(a(7294),a(3905));const n={},i="assertions",l={unversionedId:"references/api/libraries/assertions",id:"references/api/libraries/assertions",title:"assertions",description:"Builtin assertion library designed for more convenient unit testing",source:"@site/docs/references/api/libraries/assertions.md",sourceDirName:"references/api/libraries",slug:"/references/api/libraries/assertions",permalink:"/docs/references/api/libraries/assertions",draft:!1,editUrl:"https://github.com/evo-lua/evo-lua.github.io/edit/main/docs/references/api/libraries/assertions.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Libraries",permalink:"/docs/category/libraries"},next:{title:"bdd",permalink:"/docs/references/api/libraries/bdd"}},o={},p=[{value:"Status",id:"status",level:2},{value:"Availability",id:"availability",level:2},{value:"Functions",id:"functions",level:2},{value:"assertCallsFunction",id:"assertcallsfunction",level:3},{value:"assertDoesNotThrow",id:"assertdoesnotthrow",level:3},{value:"assertEquals",id:"assertequals",level:3},{value:"assertEqualBooleans",id:"assertequalbooleans",level:3},{value:"assertEqualBytes",id:"assertequalbytes",level:3},{value:"assertEqualFunctions",id:"assertequalfunctions",level:3},{value:"assertEqualNumbers",id:"assertequalnumbers",level:3},{value:"assertEqualPointers",id:"assertequalpointers",level:3},{value:"assertEqualStrings",id:"assertequalstrings",level:3},{value:"assertEqualTables",id:"assertequaltables",level:3},{value:"assertFailure",id:"assertfailure",level:3},{value:"assertFalse",id:"assertfalse",level:3},{value:"assertNil",id:"assertnil",level:3},{value:"assertThrows",id:"assertthrows",level:3},{value:"assertTrue",id:"asserttrue",level:3},{value:"export",id:"export",level:3},{value:"Changelog",id:"changelog",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",t)},d=u("Experimental"),m=u("Function"),c=u("Parameters"),k=u("Parameter"),y={toc:p},f="wrapper";function v(e){let{components:t,...a}=e;return(0,s.kt)(f,(0,r.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"assertions"},"assertions"),(0,s.kt)("p",null,"Builtin assertion library designed for more convenient unit testing"),(0,s.kt)("h2",{id:"status"},"Status"),(0,s.kt)(d,{mdxType:"Experimental"}),(0,s.kt)("h2",{id:"availability"},"Availability"),(0,s.kt)("p",null,"This module is preloaded. You can simply ",(0,s.kt)("inlineCode",{parentName:"p"},"require")," it:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},'local assertions = require("assertions")\n')),(0,s.kt)("h2",{id:"functions"},"Functions"),(0,s.kt)("h3",{id:"assertcallsfunction"},"assertCallsFunction"),(0,s.kt)("p",null,"Raises an error if the function passed doesn't call the target function. The function has to be executed in order to determine this fact."),(0,s.kt)(m,{since:"v0.0.1",mdxType:"Function"},(0,s.kt)(c,{mdxType:"Parameters"},(0,s.kt)(k,{name:"codeUnderTest",type:"function",mdxType:"Parameter"}),(0,s.kt)(k,{name:"targetFunction",type:"function",mdxType:"Parameter"}))),(0,s.kt)("h3",{id:"assertdoesnotthrow"},"assertDoesNotThrow"),(0,s.kt)("p",null,"Raises an error if the function passed throws (raises an error) itself. The purpose of this is to generate standardized error messages."),(0,s.kt)(m,{since:"v0.0.1",mdxType:"Function"},(0,s.kt)(c,{mdxType:"Parameters"},(0,s.kt)(k,{name:"codeUnderTest",type:"function",mdxType:"Parameter"}))),(0,s.kt)("h3",{id:"assertequals"},"assertEquals"),(0,s.kt)("p",null,"Raises an error if the two passed values are not identical. This is a catch-all handler that uses the more specialized assertions internally."),(0,s.kt)(m,{since:"v0.0.1",mdxType:"Function"},(0,s.kt)(c,{mdxType:"Parameters"},(0,s.kt)(k,{name:"firstValue",mdxType:"Parameter"}),(0,s.kt)(k,{name:"secondValue",mdxType:"Parameter"}))),(0,s.kt)("h3",{id:"assertequalbooleans"},"assertEqualBooleans"),(0,s.kt)("p",null,"Raises an error if the two passed values do not represent the same ",(0,s.kt)("inlineCode",{parentName:"p"},"boolean")," value."),(0,s.kt)(m,{since:"v0.0.1",mdxType:"Function"},(0,s.kt)(c,{mdxType:"Parameters"},(0,s.kt)(k,{name:"firstValue",mdxType:"Parameter"}),(0,s.kt)(k,{name:"secondValue",mdxType:"Parameter"}))),(0,s.kt)("h3",{id:"assertequalbytes"},"assertEqualBytes"),(0,s.kt)("p",null,"Raises an error if the two passed values do not represent the same ",(0,s.kt)("inlineCode",{parentName:"p"},"cdata")," bytes. Use ",(0,s.kt)("a",{parentName:"p",href:"#assertequalpointers"},"assertEqualPointers")," to compare only the pointer."),(0,s.kt)(m,{since:"v0.0.1",mdxType:"Function"},(0,s.kt)(c,{mdxType:"Parameters"},(0,s.kt)(k,{name:"firstValue",mdxType:"Parameter"}),(0,s.kt)(k,{name:"secondValue",mdxType:"Parameter"}))),(0,s.kt)("h3",{id:"assertequalfunctions"},"assertEqualFunctions"),(0,s.kt)("p",null,"Raises an error if the two passed values do not represent the same ",(0,s.kt)("inlineCode",{parentName:"p"},"function")," value."),(0,s.kt)(m,{since:"v0.0.1",mdxType:"Function"},(0,s.kt)(c,{mdxType:"Parameters"},(0,s.kt)(k,{name:"firstValue",mdxType:"Parameter"}),(0,s.kt)(k,{name:"secondValue",mdxType:"Parameter"}))),(0,s.kt)("h3",{id:"assertequalnumbers"},"assertEqualNumbers"),(0,s.kt)("p",null,"Raises an error if the two passed values do not represent the same ",(0,s.kt)("inlineCode",{parentName:"p"},"number")," value. The optional ",(0,s.kt)("inlineCode",{parentName:"p"},"delta")," allows for float comparisons."),(0,s.kt)(m,{since:"v0.0.1",mdxType:"Function"},(0,s.kt)(c,{mdxType:"Parameters"},(0,s.kt)(k,{name:"firstValue",mdxType:"Parameter"}),(0,s.kt)(k,{name:"secondValue",mdxType:"Parameter"}),(0,s.kt)(k,{name:"delta",type:"number",optional:"true",mdxType:"Parameter"}))),(0,s.kt)("h3",{id:"assertequalpointers"},"assertEqualPointers"),(0,s.kt)("p",null,"Raises an error if the two passed values do not represent the same ",(0,s.kt)("inlineCode",{parentName:"p"},"cdata")," pointer. Use ",(0,s.kt)("a",{parentName:"p",href:"#assertequalbytes"},"assertEqualBytes")," to compare them by value."),(0,s.kt)(m,{since:"v0.0.1",mdxType:"Function"},(0,s.kt)(c,{mdxType:"Parameters"},(0,s.kt)(k,{name:"firstValue",mdxType:"Parameter"}),(0,s.kt)(k,{name:"secondValue",mdxType:"Parameter"}))),(0,s.kt)("h3",{id:"assertequalstrings"},"assertEqualStrings"),(0,s.kt)("p",null,"Raises an error if the two passed values do not represent the same ",(0,s.kt)("inlineCode",{parentName:"p"},"string")," value. Supports LuaJIT string buffers and ",(0,s.kt)("inlineCode",{parentName:"p"},"cdata")," strings."),(0,s.kt)(m,{since:"v0.0.1",mdxType:"Function"},(0,s.kt)(c,{mdxType:"Parameters"},(0,s.kt)(k,{name:"firstValue",mdxType:"Parameter"}),(0,s.kt)(k,{name:"secondValue",mdxType:"Parameter"}))),(0,s.kt)("h3",{id:"assertequaltables"},"assertEqualTables"),(0,s.kt)("p",null,"Raises an error if the two passed values do not represent the same ",(0,s.kt)("inlineCode",{parentName:"p"},"table")," value. Supports deep table comparisons."),(0,s.kt)(m,{since:"v0.0.1",mdxType:"Function"},(0,s.kt)(c,{mdxType:"Parameters"},(0,s.kt)(k,{name:"firstValue",mdxType:"Parameter"}),(0,s.kt)(k,{name:"secondValue",mdxType:"Parameter"}))),(0,s.kt)("h3",{id:"assertfailure"},"assertFailure"),(0,s.kt)("p",null,'Raises an error if the function passed does not return a "failure" type (',(0,s.kt)("inlineCode",{parentName:"p"},"nil")," and an error message)."),(0,s.kt)(m,{since:"v0.0.1",mdxType:"Function"},(0,s.kt)(c,{mdxType:"Parameters"},(0,s.kt)(k,{name:"codeUnderTest",type:"function",mdxType:"Parameter"}),(0,s.kt)(k,{name:"expectedErrorMessage",type:"string",mdxType:"Parameter"}))),(0,s.kt)("h3",{id:"assertfalse"},"assertFalse"),(0,s.kt)("p",null,"Raises an error if the value passed is not exactly ",(0,s.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,s.kt)(m,{since:"v0.0.1",mdxType:"Function"},(0,s.kt)(c,{mdxType:"Parameters"},(0,s.kt)(k,{name:"conditionToCheck",mdxType:"Parameter"}))),(0,s.kt)("h3",{id:"assertnil"},"assertNil"),(0,s.kt)("p",null,"Raises an error if the value passed is not exactly ",(0,s.kt)("inlineCode",{parentName:"p"},"nil"),"."),(0,s.kt)(m,{since:"v0.0.1",mdxType:"Function"},(0,s.kt)(c,{mdxType:"Parameters"},(0,s.kt)(k,{name:"conditionToCheck",mdxType:"Parameter"}))),(0,s.kt)("h3",{id:"assertthrows"},"assertThrows"),(0,s.kt)("p",null,"Raises an error if the function passed does not itself raise an error (with the expected error message)."),(0,s.kt)(m,{since:"v0.0.1",mdxType:"Function"},(0,s.kt)(c,{mdxType:"Parameters"},(0,s.kt)(k,{name:"codeUnderTest",type:"function",mdxType:"Parameter"}),(0,s.kt)(k,{name:"expectedErrorMessage",type:"string",mdxType:"Parameter"}))),(0,s.kt)("h3",{id:"asserttrue"},"assertTrue"),(0,s.kt)("p",null,"Raises an error if the value passed is not exactly ",(0,s.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,s.kt)(m,{since:"v0.0.1",mdxType:"Function"},(0,s.kt)(c,{mdxType:"Parameters"},(0,s.kt)(k,{name:"conditionToCheck",mdxType:"Parameter"}))),(0,s.kt)("h3",{id:"export"},"export"),(0,s.kt)("p",null,"Exports all of the assertions in this module to the global Lua environment. Use this if you don't want to ",(0,s.kt)("inlineCode",{parentName:"p"},"require")," them in every test."),(0,s.kt)("h2",{id:"changelog"},"Changelog"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"center"},"Version"),(0,s.kt)("th",{parentName:"tr",align:"center"},"What happened?"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},"v0.0.1"),(0,s.kt)("td",{parentName:"tr",align:"center"},"Initial release")))))}v.isMDXComponent=!0}}]);