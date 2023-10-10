"use strict";(self.webpackChunkevo_lua_github_io=self.webpackChunkevo_lua_github_io||[]).push([[3527],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(n),y=a,k=m["".concat(s,".").concat(y)]||m[y]||c[y]||i;return n?r.createElement(k,l(l({ref:t},d),{},{components:n})):r.createElement(k,l({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=y;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},5898:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>b,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={},l="C_FileSystem",o={unversionedId:"references/api/namespaces/filesystem",id:"references/api/namespaces/filesystem",title:"C_FileSystem",description:"Usability-focused abstraction of the underlying file system APIs",source:"@site/docs/references/api/namespaces/filesystem.md",sourceDirName:"references/api/namespaces",slug:"/references/api/namespaces/filesystem",permalink:"/docs/references/api/namespaces/filesystem",draft:!1,editUrl:"https://github.com/evo-lua/evo-lua.github.io/edit/main/docs/references/api/namespaces/filesystem.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Namespaces",permalink:"/docs/category/namespaces"},next:{title:"C_Runtime",permalink:"/docs/references/api/namespaces/runtime"}},s={},p=[{value:"Status",id:"status",level:2},{value:"Availability",id:"availability",level:2},{value:"Functions",id:"functions",level:2},{value:"AppendFile",id:"appendfile",level:3},{value:"Delete",id:"delete",level:3},{value:"Exists",id:"exists",level:3},{value:"IsDirectory",id:"isdirectory",level:3},{value:"IsFile",id:"isfile",level:3},{value:"MakeDirectory",id:"makedirectory",level:3},{value:"MakeDirectoryTree",id:"makedirectorytree",level:3},{value:"ReadDirectory",id:"readdirectory",level:3},{value:"ReadDirectoryTree",id:"readdirectorytree",level:3},{value:"ReadFile",id:"readfile",level:3},{value:"WriteFile",id:"writefile",level:3},{value:"Changelog",id:"changelog",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},m=d("Experimental"),c=d("Blocking"),y=d("Function"),k=d("Parameters"),u=d("Parameter"),f=d("Returns"),h=d("Return"),v=d("Struct"),x=d("Member"),T={toc:p},g="wrapper";function b(e){let{components:t,...n}=e;return(0,a.kt)(g,(0,r.Z)({},T,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"c_filesystem"},"C_FileSystem"),(0,a.kt)("p",null,"Usability-focused abstraction of the underlying file system APIs"),(0,a.kt)("h2",{id:"status"},"Status"),(0,a.kt)(m,{mdxType:"Experimental"}),(0,a.kt)("h2",{id:"availability"},"Availability"),(0,a.kt)("p",null,"This is a global namespace and can be accessed directly:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'C_FileSystem.MakeDirectory("test") -- Implicit global lookup: _G.C_FileSystem\n')),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"appendfile"},"AppendFile"),(0,a.kt)(c,{mdxType:"Blocking"}),(0,a.kt)("p",null,"Opens the given ",(0,a.kt)("inlineCode",{parentName:"p"},"filePath")," in append mode and writes ",(0,a.kt)("inlineCode",{parentName:"p"},"contents")," to the end of the file."),(0,a.kt)(y,{since:"v0.0.1",mdxType:"Function"},(0,a.kt)(k,{mdxType:"Parameters"},(0,a.kt)(u,{name:"filePath",type:"string",mdxType:"Parameter"}),(0,a.kt)(u,{name:"contents",type:"string",mdxType:"Parameter"})),(0,a.kt)(f,{mdxType:"Returns"},(0,a.kt)(h,{name:"success",type:"boolean",mdxType:"Return"}))),(0,a.kt)("h3",{id:"delete"},"Delete"),(0,a.kt)(c,{mdxType:"Blocking"}),(0,a.kt)("p",null,"Removes the file or directory referenced by the given ",(0,a.kt)("inlineCode",{parentName:"p"},"fileSystemPath"),". This operation cannot be undone."),(0,a.kt)(y,{since:"v0.0.1",mdxType:"Function"},(0,a.kt)(k,{mdxType:"Parameters"},(0,a.kt)(u,{name:"fileSystemPath",type:"string",mdxType:"Parameter"})),(0,a.kt)(f,{mdxType:"Returns"},(0,a.kt)(h,{name:"success",type:"boolean",mdxType:"Return"}))),(0,a.kt)("h3",{id:"exists"},"Exists"),(0,a.kt)(c,{mdxType:"Blocking"}),(0,a.kt)("p",null,"Returns ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," if the given ",(0,a.kt)("inlineCode",{parentName:"p"},"fileSystemPath")," exists (can be accessed in read-only mode), and ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,a.kt)(y,{since:"v0.0.1",mdxType:"Function"},(0,a.kt)(k,{mdxType:"Parameters"},(0,a.kt)(u,{name:"fileSystemPath",type:"string",mdxType:"Parameter"})),(0,a.kt)(f,{mdxType:"Returns"},(0,a.kt)(h,{name:"isReadableFileSystemEntry",type:"boolean",mdxType:"Return"}))),(0,a.kt)("h3",{id:"isdirectory"},"IsDirectory"),(0,a.kt)(c,{mdxType:"Blocking"}),(0,a.kt)("p",null,"Returns ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," if the given ",(0,a.kt)("inlineCode",{parentName:"p"},"fileSystemPath")," refers to a ",(0,a.kt)("inlineCode",{parentName:"p"},"directory")," type entry, and ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,a.kt)(y,{since:"v0.0.1",mdxType:"Function"},(0,a.kt)(k,{mdxType:"Parameters"},(0,a.kt)(u,{name:"fileSystemPath",type:"string",mdxType:"Parameter"})),(0,a.kt)(f,{mdxType:"Returns"},(0,a.kt)(h,{name:"isDirectory",type:"boolean",mdxType:"Return"}))),(0,a.kt)("h3",{id:"isfile"},"IsFile"),(0,a.kt)(c,{mdxType:"Blocking"}),(0,a.kt)("p",null,"Returns ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," if the given ",(0,a.kt)("inlineCode",{parentName:"p"},"fileSystemPath")," refers to a ",(0,a.kt)("inlineCode",{parentName:"p"},"file")," type entry, and ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,a.kt)(y,{since:"v0.0.1",mdxType:"Function"},(0,a.kt)(k,{mdxType:"Parameters"},(0,a.kt)(u,{name:"fileSystemPath",type:"string",mdxType:"Parameter"})),(0,a.kt)(f,{mdxType:"Returns"},(0,a.kt)(h,{name:"isFile",type:"boolean",mdxType:"Return"}))),(0,a.kt)("h3",{id:"makedirectory"},"MakeDirectory"),(0,a.kt)(c,{mdxType:"Blocking"}),(0,a.kt)("p",null,"Creates a new directory with the given ",(0,a.kt)("inlineCode",{parentName:"p"},"directoryPath")," if one doesn't already exist. Will not create parent directories automatically."),(0,a.kt)(y,{since:"v0.0.1",mdxType:"Function"},(0,a.kt)(k,{mdxType:"Parameters"},(0,a.kt)(u,{name:"directoryPath",type:"string",mdxType:"Parameter"})),(0,a.kt)(f,{mdxType:"Returns"},(0,a.kt)(h,{name:"success",type:"boolean",mdxType:"Return"}))),(0,a.kt)("h3",{id:"makedirectorytree"},"MakeDirectoryTree"),(0,a.kt)(c,{mdxType:"Blocking"}),(0,a.kt)("p",null,"Creates a new directory with the given ",(0,a.kt)("inlineCode",{parentName:"p"},"directoryPath")," if one doesn't already exist. Will create parent directories (recursively) if needed."),(0,a.kt)(y,{since:"v0.0.3",mdxType:"Function"},(0,a.kt)(k,{mdxType:"Parameters"},(0,a.kt)(u,{name:"directoryPath",type:"string",mdxType:"Parameter"})),(0,a.kt)(f,{mdxType:"Returns"},(0,a.kt)(h,{name:"success",type:"boolean",mdxType:"Return"}))),(0,a.kt)("h3",{id:"readdirectory"},"ReadDirectory"),(0,a.kt)(c,{mdxType:"Blocking"}),(0,a.kt)("p",null,"Reads the contents of the given directory, and returns a list of all files found within it. Will process only the root directory."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"isFile")," flag is always ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," in the current implementation as directories are removed after their contents have been processed."),(0,a.kt)(y,{since:"v0.0.1",mdxType:"Function"},(0,a.kt)(k,{mdxType:"Parameters"},(0,a.kt)(u,{name:"directoryPath",type:"string",mdxType:"Parameter"})),(0,a.kt)(f,{mdxType:"Returns"},(0,a.kt)(h,{name:"directoryContents",type:"table",mdxType:"Return"}))),(0,a.kt)(v,{name:"directoryContents",mdxType:"Struct"},(0,a.kt)(x,{name:"absolutePath",type:"string",mdxType:"Member"}),(0,a.kt)(x,{name:"isFile",type:"boolean",mdxType:"Member"})),(0,a.kt)("h3",{id:"readdirectorytree"},"ReadDirectoryTree"),(0,a.kt)(c,{mdxType:"Blocking"}),(0,a.kt)("p",null,"Reads the contents of the given directory tree (including nested subdirectories), and returns a list of all files found within it."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"isFile")," flag is always ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," in the current implementation as directories are removed after their contents have been processed."),(0,a.kt)(y,{since:"v0.0.4",mdxType:"Function"},(0,a.kt)(k,{mdxType:"Parameters"},(0,a.kt)(u,{name:"directoryPath",type:"string",mdxType:"Parameter"})),(0,a.kt)(f,{mdxType:"Returns"},(0,a.kt)(h,{name:"directoryContents",type:"table",mdxType:"Return"}))),(0,a.kt)(v,{name:"directoryContents",mdxType:"Struct"},(0,a.kt)(x,{name:"absolutePath",type:"string",mdxType:"Member"}),(0,a.kt)(x,{name:"isFile",type:"boolean",mdxType:"Member"})),(0,a.kt)("h3",{id:"readfile"},"ReadFile"),(0,a.kt)(c,{mdxType:"Blocking"}),(0,a.kt)("p",null,"Opens the given ",(0,a.kt)("inlineCode",{parentName:"p"},"filePath")," in read-only mode and returns the file contents as a Lua string."),(0,a.kt)(y,{since:"v0.0.1",mdxType:"Function"},(0,a.kt)(k,{mdxType:"Parameters"},(0,a.kt)(u,{name:"filePath",type:"string",mdxType:"Parameter"})),(0,a.kt)(f,{mdxType:"Returns"},(0,a.kt)(h,{name:"fileContents",type:"string",mdxType:"Return"}))),(0,a.kt)("h3",{id:"writefile"},"WriteFile"),(0,a.kt)(c,{mdxType:"Blocking"}),(0,a.kt)("p",null,"Opens the given ",(0,a.kt)("inlineCode",{parentName:"p"},"filePath")," in write mode and writes ",(0,a.kt)("inlineCode",{parentName:"p"},"contents")," to the file. Overwrites the file if it already exists."),(0,a.kt)(y,{since:"v0.0.1",mdxType:"Function"},(0,a.kt)(k,{mdxType:"Parameters"},(0,a.kt)(u,{name:"filePath",type:"string",mdxType:"Parameter"}),(0,a.kt)(u,{name:"contents",type:"string",mdxType:"Parameter"})),(0,a.kt)(f,{mdxType:"Returns"},(0,a.kt)(h,{name:"success",type:"boolean",mdxType:"Return"}))),(0,a.kt)("h2",{id:"changelog"},"Changelog"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Version"),(0,a.kt)("th",{parentName:"tr",align:"center"},"What happened?"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"v0.0.4"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Added ",(0,a.kt)("inlineCode",{parentName:"td"},"ReadDirectoryTree"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"v0.0.3"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Added ",(0,a.kt)("inlineCode",{parentName:"td"},"MakeDirectoryTree"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"v0.0.1"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Initial release")))))}b.isMDXComponent=!0}}]);