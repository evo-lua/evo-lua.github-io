"use strict";(self.webpackChunkevo_lua_github_io=self.webpackChunkevo_lua_github_io||[]).push([[270],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=u(n),p=a,h=m["".concat(s,".").concat(p)]||m[p]||c[p]||r;return n?i.createElement(h,l(l({ref:t},d),{},{components:n})):i.createElement(h,l({ref:t},d))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5370:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),l=["components"],o={},s="RFC: Ninja-based Builds",u={unversionedId:"background-information/design/implemented/build-system-rework",id:"background-information/design/implemented/build-system-rework",title:"RFC: Ninja-based Builds",description:"This document details the reasons for replacing Luvi's CMake build system.",source:"@site/docs/background-information/design/implemented/build-system-rework.md",sourceDirName:"background-information/design/implemented",slug:"/background-information/design/implemented/build-system-rework",permalink:"/docs/background-information/design/implemented/build-system-rework",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/background-information/design/implemented/build-system-rework.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Implemented",permalink:"/docs/category/implemented"},next:{title:"RFC: Event Handling",permalink:"/docs/background-information/design/implemented/event-handling"}},d={},c=[{value:"Motivation",id:"motivation",level:2},{value:"Goals",id:"goals",level:2},{value:"Design Decisions",id:"design-decisions",level:2},{value:"Evaluation",id:"evaluation",level:2},{value:"Alternatives",id:"alternatives",level:2},{value:"Disclaimer",id:"disclaimer",level:2}],m={toc:c};function p(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rfc-ninja-based-builds"},"RFC: Ninja-based Builds"),(0,r.kt)("p",null,"This document details the reasons for replacing Luvi's CMake build system."),(0,r.kt)("h2",{id:"motivation"},"Motivation"),(0,r.kt)("p",null,"Evo is based on Luvi, and as such uses the same build system (based on ",(0,r.kt)("a",{parentName:"p",href:"https://cmake.org/"},"CMake"),"). Multiple issues have surfaced:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CMake adds an exceeding amount of complexity and an entirely new (poorly-designed) language to the stack"),(0,r.kt)("li",{parentName:"ul"},"Integrating external dependencies in the build process has proven to be a huge pain in at least some cases"),(0,r.kt)("li",{parentName:"ul"},"The existing build system accounts for many unsupported use cases, unnecessarily increasing complexity further"),(0,r.kt)("li",{parentName:"ul"},'It uses version 2 of CMake, which makes the code difficult to maintain and extend, or migrate to "modern" CMake'),(0,r.kt)("li",{parentName:"ul"},"Builds using WSL can randomly fail with segmentation faults that I'd rather not spend more time debugging"),(0,r.kt)("li",{parentName:"ul"},"CMake builds also frequently fail for obscure reasons, don't build what they're supposed to, or rebuild too many things (might be a configuration issue)"),(0,r.kt)("li",{parentName:"ul"},"Speaking of which, debugging CMake files is not fun (it's not a fully-fledged language, with poor tooling)"),(0,r.kt)("li",{parentName:"ul"},"Builds are somewhat slow when using the standard CMake generators, and Ninja support is experimental"),(0,r.kt)("li",{parentName:"ul"},"In fact, the Ninja build files that CMake creates are huge and complicated, which doesn't bode well for their quality"),(0,r.kt)("li",{parentName:"ul"},"The ability to create VS solutions (and use the VS debugger) aren't very valuable because the C code involved consists largely of glue code and Lua bindings")),(0,r.kt)("p",null,"After spending obscene amounts of time battling build-related problems, it may be time for a change of scenery."),(0,r.kt)("h2",{id:"goals"},"Goals"),(0,r.kt)("p",null,"A reimagined build system for the runtime should fulfill the following requirements:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Anyone familiar with Lua (and possibly C/C++) should be able to make changes to the build system easily"),(0,r.kt)("li",{parentName:"ul"},"Those familiar with standard Makefile builds (widely used in the Unix world) should experience less friction"),(0,r.kt)("li",{parentName:"ul"},"Support for any optional configuration, toolchains etc. should be dropped to minimize the maintenance burden")),(0,r.kt)("p",null,"Since Makefiles aren't ideal for reducing build times, Ninja build files might be created from within Lua scripts."),(0,r.kt)("h2",{id:"design-decisions"},"Design Decisions"),(0,r.kt)("p",null,'To cut down on accidental complexity, the build system should only support a minimal and "recommended" configuration:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'One "blessed" configuration, building the runtime as an executable that\'s linked with a minimal set of libraries'),(0,r.kt)("li",{parentName:"ul"},"Only the GNU compiler toolchain should be supported, since it's free software available on all relevant systems"),(0,r.kt)("li",{parentName:"ul"},"Incremental builds should be handled by Ninja, with support for gmake, MSVC and other CMake generators dropped"),(0,r.kt)("li",{parentName:"ul"},"The build configuration (",(0,r.kt)("inlineCode",{parentName:"li"},"ninja.build"),") should be auto-generated in Lua, which is trivial given the restrictions above"),(0,r.kt)("li",{parentName:"ul"},"Third-party libraries may use Makefiles, CMake or any other build script that can be integrated via ninja commands")),(0,r.kt)("h2",{id:"evaluation"},"Evaluation"),(0,r.kt)("p",null,"This design should cover all of the requirements:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The build configuration can be trivially changed by anyone with basic Lua knowledge"),(0,r.kt)("li",{parentName:"ul"},"Builds are fast thanks to relying on Ninja's incremental build functionality (same or better as CMake)"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"ninja.build")," files can be understood by anyone familiar with Makefiles if low-level debugging is required"),(0,r.kt)("li",{parentName:"ul"},"Compatibility with third party libraries is unaffected (ninja can easily build them by invoking ",(0,r.kt)("inlineCode",{parentName:"li"},"cmake")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"make"),")"),(0,r.kt)("li",{parentName:"ul"},"More complex configuration needs that may arise in the future can be scripted with maximum flexibility")),(0,r.kt)("h2",{id:"alternatives"},"Alternatives"),(0,r.kt)("p",null,"The following alternatives have been considered and (at least partially) explored before settling on a decision:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Attempt to migrate the CMake build system to "modern" CMake and prune unused features (still a giant headache)'),(0,r.kt)("li",{parentName:"ul"},"Use another established (Lua-based) build system, like xmake or premake (only alleviates the language issue)"),(0,r.kt)("li",{parentName:"ul"},"Use another established (non-Lua-based) build system, like meson (Python-based syntax, limiting language)"),(0,r.kt)("li",{parentName:"ul"},"Move to using Ninja build files directly (efficient, but difficult to maintain as they're glorified makefiles)"),(0,r.kt)("li",{parentName:"ul"},"Build with ",(0,r.kt)("a",{parentName:"li",href:"https://ziglang.org/"},"zig"),", which has been suggested by the luvi authors (requires rewriting external build scripts; not Lua)"),(0,r.kt)("li",{parentName:"ul"},"Use regular build scripts (cannot do incremental builds, which significantly slows down development)")),(0,r.kt)("p",null,"None of these options really seems all that appealing, as they don't fully solve the outlined problems."),(0,r.kt)("h2",{id:"disclaimer"},"Disclaimer"),(0,r.kt)("p",null,"For a regular C library, CMake would be more valuable due to its status as de-facto standard. In this case, there's barely any C code (that isn't glue) and using the runtime as a library makes no sense, so the headaches really aren't worth it."))}p.isMDXComponent=!0}}]);