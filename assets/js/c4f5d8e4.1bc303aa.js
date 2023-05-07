"use strict";(self.webpackChunkevo_lua_github_io=self.webpackChunkevo_lua_github_io||[]).push([[4195],{1378:(e,t,a)=>{a.r(t),a.d(t,{default:()=>E});var n=a(7294),r=a(6010),o=a(9960),s=a(7961),i=a(7462);const l={features:"features_t9lD",featureSvg:"featureSvg_GfXr"},c=[{title:"What can I do with Evo?",description:n.createElement(n.Fragment,null,"Evo functions as a substitute for the standard (PUC) Lua interpreter or - more accurately - LuaJIT. It runs your Lua scripts in an enriched environment, giving you access to powerful C and C++ libraries wrapped in easy-to-use APIs. This makes it possible to do lots of things that Lua can't usually do on its own. Of course there's still all of the Lua standard libraries and LuaJIT features, such as the FFI (foreign function interface) to easily call native libraries that aren't already built in. You can even run a fully-fledged browser engine and execute JavaScript (or load HTML and CSS) from within Lua - what a time to be alive!")},{title:"How does Evo compare to other runtimes?",description:n.createElement(n.Fragment,null,"Evo may be seen as an extension of both the standard PUC-Lua interpreter and LuaJIT, in the sense that it's more or less \"LuaJIT with extra libraries\". This means it can do everything they can do, and more. Like LuaPower, LuaDist, or Luvit (which Evo is directly inspired by) it's intended as a \"batteries included\" runtime environment that's suitable for many real-world applications - though it aims to be easy to use and extend more than feature-complete. While the idea isn't new, a key difference is probably that Evo focuses on sustaining its ability to quickly evolve and meet new challenges head-on - hence the name.")},{title:"What's the project status?",description:n.createElement(n.Fragment,null,"Evo is in its larval stage of development, although it isn't completely new: The first prototypes were developed in 2021, eventually leading to the current design. Even if the concept has more than proven itself, the project is clearly far from being finished - and it likely never will, since evolution is in its DNA. Right now, Evo is like a caterpillar - which may yet turn into a butterfly. It hasn't had enough time to spin its cocoon and is still actively being worked on, so it'll be quite a while until all the planned features are in. If you'd like to take part in the journey, feel free to stick around! Contributions or feedback are welcome.")}];function u(e){let{Svg:t,title:a,description:o}=e;return n.createElement("div",{className:(0,r.Z)("col col--4")},n.createElement("div",{className:"text--center"}),n.createElement("div",null,n.createElement("h3",null,a),n.createElement("p",null,o)))}function h(){return n.createElement("section",{className:l.features},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},c.map(((e,t)=>n.createElement(u,(0,i.Z)({key:t},e)))))))}const m={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"};const d=function(){const[e,t]=(0,n.useState)("https://github.com/evo-lua/evo-runtime/releases"),[a,r]=(0,n.useState)(""),[o,s]=(0,n.useState)([]),i=864e5,l=e=>{const t=new Date-e,a=t<i?(e=>{const t=Math.floor(e/1e3),a=Math.floor(t/60),n=Math.floor(a/60);return n>0?`${n} hours ago`:a>0?`${a} minutes ago`:`${t} seconds ago`})(t):(e=>`${Math.floor(e/i)} days ago`)(t);return a};(0,n.useEffect)((()=>{fetch("https://api.github.com/repos/evo-lua/evo-runtime/releases/latest").then((e=>e.json())).then((e=>{const a=e.tag_name,n=e.html_url,o=new Date(e.published_at),i=e.assets;s(i);const c=l(o);t(n),r(`Latest Release: ${a} (${c})`)})).catch((e=>{console.error("Error fetching release information:",e)}))}),[]);const c=e=>{const t=o.find((t=>t.name.includes(e)));return t?t.browser_download_url:""};return n.createElement("div",{className:"hero-buttons-container"},n.createElement("a",{className:"hero-text",href:e,target:"_blank",rel:"noopener noreferrer"},a),n.createElement("div",null,n.createElement("a",{className:"hero-button",href:c("exe")},"Download for Windows (x64)"),n.createElement("a",{className:"hero-button",href:c("linux-x64")},"Download for Linux (x64)"),n.createElement("a",{className:"hero-button",href:c("macos-x64")},"Download for Mac OS (x64)")))};function f(){return n.createElement("div",null,n.createElement("h1",{className:"hero__title"},n.createElement("img",{className:"hero-banner-image",src:"/img/caterpillar.png"})),n.createElement("p",{className:"hero__subtitle"},"Evo is an experimental all-in-one Lua runtime"),n.createElement("p",{className:"hero__description"},"It combines asynchronous I/O, just-in-time compilation, and browser technologies with many general-purpose libraries and other useful tools that can help you create complex Lua-based applications with ease."),n.createElement("p",{className:"hero__subscript"},"Disclaimer: This website is under construction! Both the documentation and Evo itself are a work in progress. You're welcome to look around, but don't expect too much - yet."))}function p(){return n.createElement("div",{className:"hero-buttons-container"},n.createElement(d,null),n.createElement("div",null,n.createElement(o.Z,{className:"hero-text",to:"/docs/how-to-guides/building-from-source"},"Build from Source"),n.createElement(o.Z,{className:"hero-text",to:"/docs/getting-started/evo-in-a-nutshell#how-can-users-get-support"},"Report a Problem"),n.createElement(o.Z,{className:"hero-text",to:"/docs/getting-started/evo-in-a-nutshell#how-can-users-contribute"},"Contribute")))}function b(){return n.createElement("header",{className:(0,r.Z)("hero hero--primary",m.heroBanner),id:"hero-banner"},n.createElement("div",{className:"hero__container"},n.createElement(f,null),n.createElement(p,null)))}function v(){return n.createElement("div",{className:"hero__container"},n.createElement("a",{className:"hero-button hero__quickstart-button",href:"/docs/category/getting-started/"},"Get Started in Minutes"))}function E(){return n.createElement(s.Z,{title:"",description:"Lua runtime engine powered by LuaJIT and libuv"},n.createElement(b,null),n.createElement("main",null,n.createElement(h,null),n.createElement(v,null)))}}}]);