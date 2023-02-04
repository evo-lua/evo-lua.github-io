"use strict";(self.webpackChunkevo_lua_github_io=self.webpackChunkevo_lua_github_io||[]).push([[362],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=d(n),u=i,m=h["".concat(o,".").concat(u)]||h[u]||p[u]||l;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[h]="string"==typeof e?e:i,r[1]=s;for(var d=2;d<l;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2153:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var a=n(7462),i=(n(7294),n(3905));const l={},r="RFC: Event Handling",s={unversionedId:"background-information/design/implemented/event-handling",id:"background-information/design/implemented/event-handling",title:"RFC: Event Handling",description:"This document details the design goals behind Evo's event registry",source:"@site/docs/background-information/design/implemented/event-handling.md",sourceDirName:"background-information/design/implemented",slug:"/background-information/design/implemented/event-handling",permalink:"/docs/background-information/design/implemented/event-handling",draft:!1,editUrl:"https://github.com/evo-lua/evo-lua.github.io/edit/main/docs/background-information/design/implemented/event-handling.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"RFC: Code Conventions",permalink:"/docs/background-information/design/implemented/code-conventions"},next:{title:"RFC: Smoke Testing",permalink:"/docs/background-information/design/implemented/testing-architecture"}},o={},d=[{value:"Motivation",id:"motivation",level:2},{value:"Design Decisions",id:"design-decisions",level:2},{value:"Event Registry vs. Event Emitters",id:"event-registry-vs-event-emitters",level:3},{value:"Event Names",id:"event-names",level:3},{value:"Event Listeners",id:"event-listeners",level:3},{value:"The OnEvent Catchall Handler",id:"the-onevent-catchall-handler",level:4},{value:"Standard Event Handlers",id:"standard-event-handlers",level:4},{value:"Placeholder Event Handlers",id:"placeholder-event-handlers",level:4},{value:"Optional Payloads",id:"optional-payloads",level:4},{value:"Code Sharing",id:"code-sharing",level:3},{value:"Historical Context",id:"historical-context",level:2},{value:"Capitalized Event Names",id:"capitalized-event-names",level:3},{value:"Network Messages and Events",id:"network-messages-and-events",level:3},{value:"Variable Number of Arguments",id:"variable-number-of-arguments",level:3},{value:"Technical Constraints",id:"technical-constraints",level:2},{value:"Alternatives",id:"alternatives",level:2},{value:"References",id:"references",level:2}],c={toc:d},h="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(h,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rfc-event-handling"},"RFC: Event Handling"),(0,i.kt)("p",null,"This document details the design goals behind Evo's event registry"),(0,i.kt)("h2",{id:"motivation"},"Motivation"),(0,i.kt)("p",null,"Asynchronous as well as synchronous events should be handled in a standardized and recognizable fashion."),(0,i.kt)("h2",{id:"design-decisions"},"Design Decisions"),(0,i.kt)("h3",{id:"event-registry-vs-event-emitters"},"Event Registry vs. Event Emitters"),(0,i.kt)("p",null,'Events can be handled with a global event registry ("event bus" pattern), or locally ("event emitter" pattern).'),(0,i.kt)("p",null,"Implications of using a global event registry:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A global API namespace must be provided (neutral)"),(0,i.kt)("li",{parentName:"ul"},"Every event emitter needs to hook into the registry (mild inconvenience)"),(0,i.kt)("li",{parentName:"ul"},"All events that fire can be observed and handled from anywhere (maximum flexibility)"),(0,i.kt)("li",{parentName:"ul"},"Can easily log events or otherwise track them, without missing any")),(0,i.kt)("p",null,"Implications of sticking to local event emitters instead:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Each event emitter must handle its own events (neutral)"),(0,i.kt)("li",{parentName:"ul"},"Events are not observable to unrelated code (less flexible)"),(0,i.kt)("li",{parentName:"ul"},"Shared functionality needs to be outsourced to a mixin, or inherited (added complexity)")),(0,i.kt)("p",null,"A global event registry seems like it would be more flexible, simpler to implement, and easier to understand."),(0,i.kt)("h3",{id:"event-names"},"Event Names"),(0,i.kt)("p",null,"Events are always written in capital letters, like ",(0,i.kt)("inlineCode",{parentName:"p"},"APPLICATION_SHUTDOWN")," (C enum style). The Node.js style of lower-case single-word event names (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"shutdown"),") seems less flexible and readable in comparison."),(0,i.kt)("h3",{id:"event-listeners"},"Event Listeners"),(0,i.kt)("p",null,"All event handlers should have a standard name and signature, and adhere to the following conventions."),(0,i.kt)("h4",{id:"the-onevent-catchall-handler"},"The OnEvent Catchall Handler"),(0,i.kt)("p",null,"The primary event handler is always ",(0,i.kt)("inlineCode",{parentName:"p"},"OnEvent(eventID, payload)")," , where ",(0,i.kt)("inlineCode",{parentName:"p"},"payload")," is a table that contains the named keys and values of all passed arguments. This ",(0,i.kt)("inlineCode",{parentName:"p"},"payload")," table should ",(0,i.kt)("em",{parentName:"p"},"not")," be an array, as that would defeat the point of making it easier to change the signature without having to update existing code that's unaffected by the changes."),(0,i.kt)("p",null,"This handler serves as a catchall, forwarding events to more specialized handlers. Ideally, it needn't be overridden."),(0,i.kt)("h4",{id:"standard-event-handlers"},"Standard Event Handlers"),(0,i.kt)("p",null,"For each event, the name of its default handler is identical to the event ID written in PascalCase, with underscores removed and the word ",(0,i.kt)("inlineCode",{parentName:"p"},"On")," preprended. Default event handlers may exist for only a subset of all possible event triggers."),(0,i.kt)("p",null,"Example: The ",(0,i.kt)("inlineCode",{parentName:"p"},"APPLICATION_SHUTDOWN")," event is forwarded to ",(0,i.kt)("inlineCode",{parentName:"p"},"MyObject:OnApplicationShutdown()")," by the catchall handler ",(0,i.kt)("inlineCode",{parentName:"p"},"MyObject:OnEvent()"),", with all arguments intact (this is assuming that ",(0,i.kt)("inlineCode",{parentName:"p"},"MyObject")," registered for the event first)."),(0,i.kt)("p",null,"These handlers are designed under the assumption that users won't generally override them, although it is possible."),(0,i.kt)("p",null,"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"TcpClient.OnClientReadError")," will call ",(0,i.kt)("inlineCode",{parentName:"p"},"TcpClient.CLIENT_READ_ERROR")," and then disconnect the peer."),(0,i.kt)("h4",{id:"placeholder-event-handlers"},"Placeholder Event Handlers"),(0,i.kt)("p",null,"Events that have no implementation in the runtime, but might be of interest to consumers of the API, trigger empty placeholder event handlers. These are effectively no-ops that are intended to be overridden as needed. They always map 1:1 to the event name itself, in all capital letters and without the ",(0,i.kt)("inlineCode",{parentName:"p"},"On")," prefix used by standard event listeners."),(0,i.kt)("p",null,"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"TcpClient.TCP_SESSION_ENDED")," is called whenever ",(0,i.kt)("inlineCode",{parentName:"p"},"TCP_SESSION_ENDED")," fires, but it does nothing by default"),(0,i.kt)("h4",{id:"optional-payloads"},"Optional Payloads"),(0,i.kt)("p",null,"Creating new ",(0,i.kt)("inlineCode",{parentName:"p"},"payload")," tables doesn't seem to add any overhead, ",(0,i.kt)("a",{parentName:"p",href:"https://gist.github.com/Duckwhale/5685a0abe2930d563b4bc931a543b536"},"according to some very basic benchmarking"),"."),(0,i.kt)("p",null,"Since accessing the ",(0,i.kt)("inlineCode",{parentName:"p"},"payload")," table ",(0,i.kt)("em",{parentName:"p"},"does")," have a measurable performance impact, and many event handlers will only care about the ",(0,i.kt)("inlineCode",{parentName:"p"},"eventID")," itself, it doesn't make sense to only pass a ",(0,i.kt)("inlineCode",{parentName:"p"},"payload")," table with a ",(0,i.kt)("inlineCode",{parentName:"p"},"payload.eventID")," field that would have to be read every time. When no arguments are passed, there's also no table creation (possible ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)"},"GC churn"),")."),(0,i.kt)("h3",{id:"code-sharing"},"Code Sharing"),(0,i.kt)("p",null,"With a standardized approach to event handling, the core functionality can be outsourced to a ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Mixin"},"mixin"),". This is preferable to direct inheritance as it removes the need for metatable lookups. These can be costly and aren't always well-optimized by the runtime. It also improves transparency because all methods are copied to the target, though this comes at the cost of some redundancy and leads to slightly higher memory usage per object. As Lua(JIT) generally has a low memory footprint, the trade-off is probably worth it, though some benchmarking would have to be done first."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://gist.github.com/Duckwhale/d3116b5c92f44c82b48ad3f2955b277b"},"Initial benchmarking")," suggests there may not be any difference in performance, at least in simple cases that can easily be optimized. However, having every object inherit from a single ancestor will lead to bloated hierarchies (see NodeJS) and doesn't play well with objects that already use metatables for other purposes, or are inherited from another object. For that reason, the initial version should simply use a mixin; this can always be re-evaluated later if the need arises."),(0,i.kt)("h2",{id:"historical-context"},"Historical Context"),(0,i.kt)("h3",{id:"capitalized-event-names"},"Capitalized Event Names"),(0,i.kt)("p",null,"Event emitters in NodeJS are generally less readable than they could be (like most JavaScript code...). Therefore, a more flexible naming scheme that supports adding information without sacrificing readability should be adopted. Since event names are effectively constants (i.e., enum values), capitalizing them only seems consistent with established C/Lua programming practice. It also allows a clear separation between user-implemented and standard event handlers."),(0,i.kt)("h3",{id:"network-messages-and-events"},"Network Messages and Events"),(0,i.kt)("p",null,"Messages received from a remote peer can trigger events directly, and messages to be sent can trivially be constructed from events. This is (presumably) what happens in the World of Warcraft client, and also in NodeJS, which indicates that the model fits well with a networked application such as a server based on libuv. Hence both NodeJS and the WOW API are referenced herein as case studies, with the goal of finding a design that hopefully improves on their weaknesses."),(0,i.kt)("h3",{id:"variable-number-of-arguments"},"Variable Number of Arguments"),(0,i.kt)("p",null,"In the original WOW API, event handlers would pass multiple values via varargs, like ",(0,i.kt)("inlineCode",{parentName:"p"},"OnEvent(eventID, ...)"),". This has proven to cause issues when signatures inevitably have to change, which is why arguments should be passed as a ",(0,i.kt)("inlineCode",{parentName:"p"},"payload")," table. Entries should be indexed with the argument name, so that accessing missing fields raise a script error, and no changes need to be made to legacy code when new ones are added or unused properties are removed."),(0,i.kt)("p",null,"Events are objects in JavaScript as well, which may however be due to the lack of varargs in early versions."),(0,i.kt)("h2",{id:"technical-constraints"},"Technical Constraints"),(0,i.kt)("p",null,"Because libuv provides the underlying event loop and it works with callbacks for asynchronous events, any implementation built on top of it can at best mask this fact. Event handlers then are merely callback functions in disguise, providing a slightly higher-level interface that can more easily be adapted to the problem domain."),(0,i.kt)("p",null,"The performance of handling large numbers of events will always be dictated by the overhead of Lua-C interactions (libuv callbacks), and by how well the underlying LuaJIT runtime manages to optimize a particular use case. There's no way around this short of writing C code directly, which is undesirable. This overhead is likely insignificant in many cases."),(0,i.kt)("h2",{id:"alternatives"},"Alternatives"),(0,i.kt)("p",null,"None, except using libuv callbacks exclusively. This results in somewhat unidiomatic Lua code, akin to JS. Not ideal."),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/api/events.html"},"Events in Node.js")," (uses local event emitters)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wowpedia.fandom.com/wiki/Events"},"Events in the World of Warcraft client")," (uses a global event registry bound to local objects)"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"http://docs.libuv.org/en/v1.x/design.html"},"libuv event loop")," will be the facilitator of callback-induced events")))}p.isMDXComponent=!0}}]);