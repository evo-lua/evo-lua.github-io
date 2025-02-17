"use strict";(self.webpackChunkevo_lua_github_io=self.webpackChunkevo_lua_github_io||[]).push([[3393],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>v});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),u=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=u(a),c=r,v=p["".concat(d,".").concat(c)]||p[c]||s[c]||i;return a?n.createElement(v,l(l({ref:t},m),{},{components:a})):n.createElement(v,l({ref:t},m))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2779:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const i={},l="validation",o={unversionedId:"references/api/libraries/validation",id:"references/api/libraries/validation",title:"validation",description:"Tiny utility library for validating function arguments",source:"@site/docs/references/api/libraries/validation.md",sourceDirName:"references/api/libraries",slug:"/references/api/libraries/validation",permalink:"/docs/references/api/libraries/validation",draft:!1,editUrl:"https://github.com/evo-lua/evo-lua.github.io/edit/main/docs/references/api/libraries/validation.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"uuid",permalink:"/docs/references/api/libraries/uuid"},next:{title:"Namespaces",permalink:"/docs/category/namespaces"}},d={},u=[{value:"Status",id:"status",level:2},{value:"Availability",id:"availability",level:2},{value:"Functions",id:"functions",level:2},{value:"validateBoolean",id:"validateboolean",level:3},{value:"validateFunction",id:"validatefunction",level:3},{value:"validateNumber",id:"validatenumber",level:3},{value:"validateString",id:"validatestring",level:3},{value:"validateStruct",id:"validatestruct",level:3},{value:"validateTable",id:"validatetable",level:3},{value:"validateThread",id:"validatethread",level:3},{value:"validateUserdata",id:"validateuserdata",level:3},{value:"Changelog",id:"changelog",level:2}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},p=m("Stable"),s=m("Function"),c=m("Parameters"),v=m("Parameter"),y={toc:u},k="wrapper";function g(e){let{components:t,...a}=e;return(0,r.kt)(k,(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"validation"},"validation"),(0,r.kt)("p",null,"Tiny utility library for validating function arguments"),(0,r.kt)("h2",{id:"status"},"Status"),(0,r.kt)(p,{mdxType:"Stable"}),(0,r.kt)("h2",{id:"availability"},"Availability"),(0,r.kt)("p",null,"This module is preloaded. You can simply ",(0,r.kt)("inlineCode",{parentName:"p"},"require")," it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'local validation = require("validation")\n')),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"validateboolean"},"validateBoolean"),(0,r.kt)("p",null,"Raises an error if the given argument is not a ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")," value."),(0,r.kt)(s,{since:"v0.0.1",mdxType:"Function"},(0,r.kt)(c,{mdxType:"Parameters"},(0,r.kt)(v,{name:"value",mdxType:"Parameter"}),(0,r.kt)(v,{name:"name",type:"string",mdxType:"Parameter"}))),(0,r.kt)("h3",{id:"validatefunction"},"validateFunction"),(0,r.kt)("p",null,"Raises an error if the given argument is not a ",(0,r.kt)("inlineCode",{parentName:"p"},"function")," value."),(0,r.kt)(s,{since:"v0.0.1",mdxType:"Function"},(0,r.kt)(c,{mdxType:"Parameters"},(0,r.kt)(v,{name:"value",mdxType:"Parameter"}),(0,r.kt)(v,{name:"name",type:"string",mdxType:"Parameter"}))),(0,r.kt)("h3",{id:"validatenumber"},"validateNumber"),(0,r.kt)("p",null,"Raises an error if the given argument is not a ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," value."),(0,r.kt)(s,{since:"v0.0.1",mdxType:"Function"},(0,r.kt)(c,{mdxType:"Parameters"},(0,r.kt)(v,{name:"value",mdxType:"Parameter"}),(0,r.kt)(v,{name:"name",type:"string",mdxType:"Parameter"}))),(0,r.kt)("h3",{id:"validatestring"},"validateString"),(0,r.kt)("p",null,"Raises an error if the given argument is not a ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," value."),(0,r.kt)(s,{since:"v0.0.1",mdxType:"Function"},(0,r.kt)(c,{mdxType:"Parameters"},(0,r.kt)(v,{name:"value",mdxType:"Parameter"}),(0,r.kt)(v,{name:"name",type:"string",mdxType:"Parameter"}))),(0,r.kt)("h3",{id:"validatestruct"},"validateStruct"),(0,r.kt)("p",null,"Raises an error if the given argument is not a ",(0,r.kt)("inlineCode",{parentName:"p"},"cdata")," value. The exact ",(0,r.kt)("inlineCode",{parentName:"p"},"ctype")," is not checked in any way."),(0,r.kt)(s,{since:"v0.0.1",mdxType:"Function"},(0,r.kt)(c,{mdxType:"Parameters"},(0,r.kt)(v,{name:"value",mdxType:"Parameter"}),(0,r.kt)(v,{name:"name",type:"string",mdxType:"Parameter"}))),(0,r.kt)("h3",{id:"validatetable"},"validateTable"),(0,r.kt)("p",null,"Raises an error if the given argument is not a ",(0,r.kt)("inlineCode",{parentName:"p"},"table")," value."),(0,r.kt)(s,{since:"v0.0.1",mdxType:"Function"},(0,r.kt)(c,{mdxType:"Parameters"},(0,r.kt)(v,{name:"value",mdxType:"Parameter"}),(0,r.kt)(v,{name:"name",type:"string",mdxType:"Parameter"}))),(0,r.kt)("h3",{id:"validatethread"},"validateThread"),(0,r.kt)("p",null,"Raises an error if the given argument is not a ",(0,r.kt)("inlineCode",{parentName:"p"},"thread")," value (coroutine)."),(0,r.kt)(s,{since:"v0.0.1",mdxType:"Function"},(0,r.kt)(c,{mdxType:"Parameters"},(0,r.kt)(v,{name:"value",mdxType:"Parameter"}),(0,r.kt)(v,{name:"name",type:"string",mdxType:"Parameter"}))),(0,r.kt)("h3",{id:"validateuserdata"},"validateUserdata"),(0,r.kt)("p",null,"Raises an error if the given argument is not a ",(0,r.kt)("inlineCode",{parentName:"p"},"userdata")," value."),(0,r.kt)(s,{since:"v0.0.1",mdxType:"Function"},(0,r.kt)(c,{mdxType:"Parameters"},(0,r.kt)(v,{name:"value",mdxType:"Parameter"}),(0,r.kt)(v,{name:"name",type:"string",mdxType:"Parameter"}))),(0,r.kt)("h2",{id:"changelog"},"Changelog"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Version"),(0,r.kt)("th",{parentName:"tr",align:"center"},"What happened?"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"v0.0.1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Initial release")))))}g.isMDXComponent=!0}}]);