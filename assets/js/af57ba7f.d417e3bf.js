"use strict";(self.webpackChunkevo_lua_github_io=self.webpackChunkevo_lua_github_io||[]).push([[685],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=c(r),f=o,b=l["".concat(u,".").concat(f)]||l[f]||d[f]||i;return r?n.createElement(b,a(a({ref:t},p),{},{components:r})):n.createElement(b,a({ref:t},p))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[l]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5463:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>v,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:10},a="Extensions",s={unversionedId:"references/api/extensions",id:"references/api/extensions",title:"Extensions",description:"Unofficial extensions to the Lua standard libraries",source:"@site/docs/references/api/extensions.md",sourceDirName:"references/api",slug:"/references/api/extensions",permalink:"/docs/references/api/extensions",draft:!1,editUrl:"https://github.com/evo-lua/evo-lua.github.io/edit/main/docs/references/api/extensions.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"API",permalink:"/docs/category/api"},next:{title:"Globals",permalink:"/docs/references/api/globals"}},u={},c=[{value:"Debug Library",id:"debug-library",level:2},{value:"debug.dump",id:"debugdump",level:3}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},l=p("Function"),d=p("Parameters"),f=p("Parameter"),b=p("Returns"),m=p("Return"),y={toc:c},g="wrapper";function v(e){let{components:t,...r}=e;return(0,o.kt)(g,(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"extensions"},"Extensions"),(0,o.kt)("p",null,"Unofficial extensions to the Lua standard libraries"),(0,o.kt)("h2",{id:"debug-library"},"Debug Library"),(0,o.kt)("h3",{id:"debugdump"},"debug.dump"),(0,o.kt)("p",null,"Prints a human-readable string representation of the given object. Mostly useful for dumping tables, but unsuitable for serialization purposes. The output format cannot be considered stable. Currently uses ",(0,o.kt)("a",{parentName:"p",href:"/docs/references/api/inspect"},"inspect")," internally, though this may change in the future."),(0,o.kt)(l,{mdxType:"Function"},(0,o.kt)(d,{mdxType:"Parameters"},(0,o.kt)(f,{name:"object",mdxType:"Parameter"})),(0,o.kt)(b,{mdxType:"Returns"},(0,o.kt)(m,{name:"stringifiedObject",type:"string",mdxType:"Return"}))))}v.isMDXComponent=!0}}]);