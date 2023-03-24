"use strict";(self.webpackChunkevo_lua_github_io=self.webpackChunkevo_lua_github_io||[]).push([[9502],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),f=a,m=c["".concat(s,".").concat(f)]||c[f]||d[f]||i;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3181:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:20},l="Globals",o={unversionedId:"references/api/globals",id:"references/api/globals",title:"Globals",description:"Convenient shorthands for some frequently-used functionality",source:"@site/docs/references/api/globals.md",sourceDirName:"references/api",slug:"/references/api/globals",permalink:"/docs/references/api/globals",draft:!1,editUrl:"https://github.com/evo-lua/evo-lua.github.io/edit/main/docs/references/api/globals.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Extensions",permalink:"/docs/references/api/extensions"},next:{title:"assertions",permalink:"/docs/references/api/assertions"}},s={},p=[{value:"Availability",id:"availability",level:2},{value:"Constants",id:"constants",level:2},{value:"EVO_VERSION",id:"evo_version",level:3},{value:"STATIC_FFI_EXPORTS",id:"static_ffi_exports",level:3},{value:"Functions",id:"functions",level:2},{value:"describe",id:"describe",level:3},{value:"dump",id:"dump",level:3},{value:"format",id:"format",level:3},{value:"it",id:"it",level:3},{value:"printf",id:"printf",level:3},{value:"Tables",id:"tables",level:2},{value:"buffer",id:"buffer",level:3},{value:"Changelog",id:"changelog",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"globals"},"Globals"),(0,a.kt)("p",null,"Convenient shorthands for some frequently-used functionality"),(0,a.kt)("h2",{id:"availability"},"Availability"),(0,a.kt)("p",null,"All functions are made available in the global environment and can be accessed directly:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'printf("Hello %s", "world") -- Implied global lookup: _G.printf\n')),(0,a.kt)("h2",{id:"constants"},"Constants"),(0,a.kt)("h3",{id:"evo_version"},"EVO_VERSION"),(0,a.kt)("p",null,"The build version embedded into the native C++ runtime at compile time, given as a ",(0,a.kt)("a",{parentName:"p",href:"https://semver.org/"},"semantic version")," string in ",(0,a.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/git-describe"},"git describe")," format."),(0,a.kt)("h3",{id:"static_ffi_exports"},"STATIC_FFI_EXPORTS"),(0,a.kt)("p",null,"A table containing the low-level APIs bound to the Lua environment via LuaJIT's ",(0,a.kt)("a",{parentName:"p",href:"http://luajit.org/ext_ffi.html"},"foreign function interface"),". For details, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/background-information/luajit/static-ffi-bindings"},"this page"),"."),(0,a.kt)("p",null,"You probably don't need to access these manually unless you want to know which libraries are embedded using this method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:"title=dump-ffi-exports.lua",title:"dump-ffi-exports.lua"},"dump(STATIC_FFI_EXPORTS)\n\n-- Result:\n{\n        webview = <userdata 1>\n}\n")),(0,a.kt)("p",null,"Keep in mind that FFI libraries are generally memory-unsafe, so prefer using the high-level interfaces provided if possible."),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"describe"},"describe"),(0,a.kt)("p",null,"Alias for ",(0,a.kt)("a",{parentName:"p",href:"/docs/references/api/bdd#describe"},"bdd.describe(...)"),"."),(0,a.kt)("h3",{id:"dump"},"dump"),(0,a.kt)("p",null,"Alias for ",(0,a.kt)("a",{parentName:"p",href:"/docs/references/api/extensions#debugdump"},"debug.dump(...)"),"."),(0,a.kt)("h3",{id:"format"},"format"),(0,a.kt)("p",null,"Alias for ",(0,a.kt)("a",{parentName:"p",href:"https://www.lua.org/manual/5.1/manual.html#pdf-string.format"},"string.format(...)"),"."),(0,a.kt)("h3",{id:"it"},"it"),(0,a.kt)("p",null,"Alias for ",(0,a.kt)("a",{parentName:"p",href:"/docs/references/api/bdd#it"},"bdd.it(...)"),"."),(0,a.kt)("h3",{id:"printf"},"printf"),(0,a.kt)("p",null,"Alias for ",(0,a.kt)("inlineCode",{parentName:"p"},"print(string.format(...))"),"."),(0,a.kt)("h2",{id:"tables"},"Tables"),(0,a.kt)("h3",{id:"buffer"},"buffer"),(0,a.kt)("p",null,"Alias for ",(0,a.kt)("inlineCode",{parentName:"p"},"string.buffer")," (LuaJIT builtin)."),(0,a.kt)("h2",{id:"changelog"},"Changelog"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Version"),(0,a.kt)("th",{parentName:"tr",align:"center"},"What happened?"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"v0.0.1"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Initial release")))))}d.isMDXComponent=!0}}]);