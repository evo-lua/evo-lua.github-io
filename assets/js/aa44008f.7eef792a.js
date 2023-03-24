"use strict";(self.webpackChunkevo_lua_github_io=self.webpackChunkevo_lua_github_io||[]).push([[8678],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),o=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},d=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=o(r),m=a,f=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return r?n.createElement(f,u(u({ref:t},d),{},{components:r})):n.createElement(f,u({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,u=new Array(i);u[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,u[1]=l;for(var o=2;o<i;o++)u[o]=r[o];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},382:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>v,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var n=r(7462),a=(r(7294),r(3905));const i={},u="uuid",l={unversionedId:"references/api/uuid",id:"references/api/uuid",title:"uuid",description:"Lua bindings for the embedded stduuid library",source:"@site/docs/references/api/uuid.md",sourceDirName:"references/api",slug:"/references/api/uuid",permalink:"/docs/references/api/uuid",draft:!1,editUrl:"https://github.com/evo-lua/evo-lua.github.io/edit/main/docs/references/api/uuid.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"transform",permalink:"/docs/references/api/transform"},next:{title:"uv",permalink:"/docs/references/api/uv"}},s={},o=[{value:"Status",id:"status",level:2},{value:"Availability",id:"availability",level:2},{value:"Fields",id:"fields",level:2},{value:"RFC_STRING_PATTERN",id:"rfc_string_pattern",level:3},{value:"Functions",id:"functions",level:2},{value:"create_v4",id:"create_v4",level:3},{value:"create_mersenne_twisted",id:"create_mersenne_twisted",level:3},{value:"create_v5",id:"create_v5",level:3},{value:"create_system_guid",id:"create_system_guid",level:3},{value:"is_valid",id:"is_valid",level:3},{value:"Changelog",id:"changelog",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},p=d("External"),c=d("Function"),m=d("Returns"),f=d("Return"),g=d("Parameters"),h=d("Parameter"),y={toc:o},k="wrapper";function v(e){let{components:t,...r}=e;return(0,a.kt)(k,(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"uuid"},"uuid"),(0,a.kt)("p",null,"Lua bindings for the embedded ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mariusbancila/stduuid"},"stduuid")," library"),(0,a.kt)("h2",{id:"status"},"Status"),(0,a.kt)(p,{mdxType:"External"}),(0,a.kt)("h2",{id:"availability"},"Availability"),(0,a.kt)("p",null,"This module is preloaded. You can simply ",(0,a.kt)("inlineCode",{parentName:"p"},"require")," it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'local uuid = require("uuid")\n')),(0,a.kt)("h2",{id:"fields"},"Fields"),(0,a.kt)("h3",{id:"rfc_string_pattern"},"RFC_STRING_PATTERN"),(0,a.kt)("p",null,"A Lua string pattern that can be used to ",(0,a.kt)("a",{parentName:"p",href:"https://www.lua.org/manual/5.1/manual.html#pdf-string.gmatch"},"match")," strings according to the ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Universally_unique_identifier#Format"},"standardized RFC UUID format"),"."),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"create_v4"},"create_v4"),(0,a.kt)("p",null,"Generates a UUID using the default (basic) random number generator. May produce inferior randomness (",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mariusbancila/stduuid#random-uuids"},"see details here"),")."),(0,a.kt)(c,{mdxType:"Function"},(0,a.kt)(m,{mdxType:"Returns"},(0,a.kt)(f,{name:"guid",type:"string",mdxType:"Return"}))),(0,a.kt)("h3",{id:"create_mersenne_twisted"},"create_mersenne_twisted"),(0,a.kt)("p",null,"Generates a UUID using the ",(0,a.kt)("a",{parentName:"p",href:"https://cplusplus.com/reference/random/mt19937/"},"mt19937")," random number generator. Produces high-quality randomness via ",(0,a.kt)("a",{parentName:"p",href:"https://cplusplus.com/reference/random/mersenne_twister_engine/"},"Mersenne Twister Engine"),"."),(0,a.kt)(c,{mdxType:"Function"},(0,a.kt)(m,{mdxType:"Returns"},(0,a.kt)(f,{name:"guid",type:"string",mdxType:"Return"}))),(0,a.kt)("h3",{id:"create_v5"},"create_v5"),(0,a.kt)("p",null,"Generates a ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Universally_unique_identifier#Versions_3_and_5_(namespace_name-based)"},"name-based")," UUID using SHA-1 hashing to deterministically produce an identifier based on a given ",(0,a.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/10867405/generating-v5-uuid-what-is-name-and-namespace"},"namespace-name-pair"),"."),(0,a.kt)(c,{mdxType:"Function"},(0,a.kt)(g,{mdxType:"Parameters"},(0,a.kt)(h,{name:"namespace",type:"string",mdxType:"Parameter"}),(0,a.kt)(h,{name:"name",type:"string",mdxType:"Parameter"})),(0,a.kt)(m,{mdxType:"Returns"},(0,a.kt)(f,{name:"guid",type:"string",mdxType:"Return"}))),(0,a.kt)("h3",{id:"create_system_guid"},"create_system_guid"),(0,a.kt)("p",null,"Generates a UUID using a nonstandard, platform-specific random number generator. It currently uses the following APIs internally:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Windows: ",(0,a.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/windows/win32/api/combaseapi/nf-combaseapi-cocreateguid"},"CoCreateGuid")),(0,a.kt)("li",{parentName:"ul"},"Linux: ",(0,a.kt)("a",{parentName:"li",href:"https://man7.org/linux/man-pages/man3/uuid_generate.3.html"},"uuid_generate")),(0,a.kt)("li",{parentName:"ul"},"Mac OS: ",(0,a.kt)("a",{parentName:"li",href:"https://developer.apple.com/documentation/corefoundation/1542906-cfuuidcreate?language=objc"},"CFUUIDCreate"))),(0,a.kt)(c,{mdxType:"Function"},(0,a.kt)(m,{mdxType:"Returns"},(0,a.kt)(f,{name:"guid",type:"string",mdxType:"Return"}))),(0,a.kt)("h3",{id:"is_valid"},"is_valid"),(0,a.kt)("p",null,"Returns whether or not the given value is a valid RFC UUID string, i.e., whether it matches the ",(0,a.kt)("a",{parentName:"p",href:"#rfc_string_pattern"},"RFC_STRING_PATTERN"),"."),(0,a.kt)(c,{mdxType:"Function"},(0,a.kt)(g,{mdxType:"Parameters"},(0,a.kt)(h,{name:"input",type:"any",mdxType:"Parameter"})),(0,a.kt)(m,{mdxType:"Returns"},(0,a.kt)(f,{name:"isValidUUID",type:"boolean",mdxType:"Return"}))),(0,a.kt)("h2",{id:"changelog"},"Changelog"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Version"),(0,a.kt)("th",{parentName:"tr",align:"center"},"What happened?"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"v0.0.1"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Initial release")))))}v.isMDXComponent=!0}}]);