"use strict";(self.webpackChunkevo_lua_github_io=self.webpackChunkevo_lua_github_io||[]).push([[2522],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=u(n),c=l,h=p["".concat(s,".").concat(c)]||p[c]||m[c]||a;return n?i.createElement(h,o(o({ref:t},d),{},{components:n})):i.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[p]="string"==typeof e?e:l,o[1]=r;for(var u=2;u<a;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},774:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>u});var i=n(7462),l=(n(7294),n(3905));const a={},o="Building from Source",r={unversionedId:"how-to-guides/building-from-source",id:"how-to-guides/building-from-source",title:"Building from Source",description:"Learn how to compile the Evo source code into a binary executable",source:"@site/docs/how-to-guides/building-from-source.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/building-from-source",permalink:"/docs/how-to-guides/building-from-source",draft:!1,editUrl:"https://github.com/evo-lua/evo-lua.github.io/edit/main/docs/how-to-guides/building-from-source.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How-to Guides",permalink:"/docs/category/how-to-guides"},next:{title:"Integrations and Tooling",permalink:"/docs/how-to-guides/integrations-and-tooling"}},s={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Supported Platforms",id:"supported-platforms",level:3},{value:"Development Environment",id:"development-environment",level:3},{value:"Windows",id:"windows",level:4},{value:"Mac OS",id:"mac-os",level:4},{value:"Linux",id:"linux",level:4},{value:"Standard Build Workflow",id:"standard-build-workflow",level:2},{value:"Recursive Checkout",id:"recursive-checkout",level:3},{value:"Building Dependencies",id:"building-dependencies",level:3},{value:"Building the Runtime",id:"building-the-runtime",level:3},{value:"Running Tests",id:"running-tests",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Windows: Silent Build Failures",id:"windows-silent-build-failures",level:3},{value:"Windows Subsystem for Linux",id:"windows-subsystem-for-linux",level:3},{value:"Mac OS X Deployment Target",id:"mac-os-x-deployment-target",level:3},{value:"Alternatives",id:"alternatives",level:2},{value:"GitHub Releases",id:"github-releases",level:3}],d={toc:u},p="wrapper";function m(e){let{components:t,...a}=e;return(0,l.kt)(p,(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"building-from-source"},"Building from Source"),(0,l.kt)("p",null,"Learn how to compile the Evo source code into a binary executable"),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("h3",{id:"supported-platforms"},"Supported Platforms"),(0,l.kt)("p",null,'The following configurations are "officially supported" (and tested):'),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"OS: Recent versions of Windows, GNU/Linux, or Mac OS"),(0,l.kt)("li",{parentName:"ul"},"Toolchain: GNU Compiler Collection",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"g++")," on Linux is easily installed with your distribution's package manager"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"g++")," is actually Apple ",(0,l.kt)("inlineCode",{parentName:"li"},"clang")," on Mac OS, but it's largely compatible"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"g++")," on Windows must be provided via MINGW64 (using ",(0,l.kt)("a",{parentName:"li",href:"https://www.msys2.org/"},"MSYS2")," - standalone won't work!)"))),(0,l.kt)("li",{parentName:"ul"},"When using the ",(0,l.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/windows/wsl/install"},"Windows Subsystem for Linux"),", simply follow the instructions for Linux builds")),(0,l.kt)("p",null,"Other operating systems and toolchains might be compatible as well, but no promises there."),(0,l.kt)("h3",{id:"development-environment"},"Development Environment"),(0,l.kt)("p",null,"A number of tools and libraries need to be installed (and made available in your ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH"),") before you can build the runtime."),(0,l.kt)("h4",{id:"windows"},"Windows"),(0,l.kt)("p",null,"The following steps are necessary before you can start the build process:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Download and set up a Linux-like ",(0,l.kt)("a",{parentName:"li",href:"https://www.msys2.org/"},"MSYS2")," environment"),(0,l.kt)("li",{parentName:"ol"},"Use the provided ",(0,l.kt)("inlineCode",{parentName:"li"},"mingw64.exe")," shell, e.g., via start menu: ",(0,l.kt)("inlineCode",{parentName:"li"},"MSYS2 MINGW64")," (requirement for compiling OpenSSL)"),(0,l.kt)("li",{parentName:"ol"},"Install build tools: ",(0,l.kt)("inlineCode",{parentName:"li"},"pacman -S git make mingw-w64-x86_64-gcc ninja mingw-w64-x86_64-cmake mingw-w64-x86_64-rust --noconfirm"))),(0,l.kt)("p",null,"The above command, when run in a MSYS2 shell, should install all required tools on Windows."),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"The default ",(0,l.kt)("inlineCode",{parentName:"p"},"gcc"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"g++"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"cargo"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"cmake")," cannot be used in MSYS2.\nInstead, you must install the x86_64 variant listed above.")),(0,l.kt)("p",null,"Make sure you have access to the typical Unix tools as well as ",(0,l.kt)("inlineCode",{parentName:"p"},"ninja"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"cmake"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"cargo"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"gcc"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"g++")," in your terminal before proceeding."),(0,l.kt)("h4",{id:"mac-os"},"Mac OS"),(0,l.kt)("p",null,"A complete setup procedure involves the following steps:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Download the ",(0,l.kt)("a",{parentName:"li",href:"https://brew.sh/"},"Homebrew package manager")),(0,l.kt)("li",{parentName:"ol"},"Install Apple's compiler toolchain: ",(0,l.kt)("inlineCode",{parentName:"li"},"xcode-select --install")),(0,l.kt)("li",{parentName:"ol"},"Install the required build tools: ",(0,l.kt)("inlineCode",{parentName:"li"},"brew install git cmake ninja coreutils rust"))),(0,l.kt)("p",null,"You should be able to execute ",(0,l.kt)("inlineCode",{parentName:"p"},"gcc"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"g++"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"cmake"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"cargo"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"ninja")," in your terminal before starting the build."),(0,l.kt)("h4",{id:"linux"},"Linux"),(0,l.kt)("p",null,"On Ubuntu (and other Debian-derived distributions), this should install all the necessary build tools and development dependencies:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt update\nsudo apt install make cmake ninja-build cargo binutils build-essential libgtk-3-dev libwebkit2gtk-4.0-dev libpulse-dev --yes\n")),(0,l.kt)("p",null,"The above command works on a fresh Ubuntu system and includes the GNU compiler toolchain as well as some required development headers."),(0,l.kt)("p",null,"For ArchLinux, some package names will be slightly different from both Windows and Ubuntu:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pacman -Syu base-devel cmake ninja rust webkit2gtk gtk3 pulseaudio\n")),(0,l.kt)("p",null,"Development headers don't need to be installed separately here since they're included in the above packages."),(0,l.kt)("h2",{id:"standard-build-workflow"},"Standard Build Workflow"),(0,l.kt)("p",null,"In case of problems: You can always take a look at the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/evo-lua/evo-runtime/tree/main/.github/workflows"},"build workflows")," to see all required steps (and the expected results)."),(0,l.kt)("h3",{id:"recursive-checkout"},"Recursive Checkout"),(0,l.kt)("p",null,"Make sure to ",(0,l.kt)("strong",{parentName:"p"},"recursively")," check out the source code to include the required ",(0,l.kt)("a",{parentName:"p",href:"https://git-scm.com/book/en/v2/Git-Tools-Submodules"},"submodules"),":"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"git clone https://github.com/evo-lua/evo-runtime --recursive")),(0,l.kt)("p",null,"Afterwards, you should find various third-party dependencies (organized as Git submodules) in the ",(0,l.kt)("inlineCode",{parentName:"p"},"deps")," folder."),(0,l.kt)("h3",{id:"building-dependencies"},"Building Dependencies"),(0,l.kt)("p",null,"Before trying to compile the runtime, you must build all of its dependencies at least once. This process can take a while, but you won't have to repeat it unless the dependencies (Git submodules located in ",(0,l.kt)("inlineCode",{parentName:"p"},"deps"),") have been updated."),(0,l.kt)("p",null,"Once you have all of the required tools installed, simply run the provided shell scripts from the project root:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"On Windows, run ",(0,l.kt)("inlineCode",{parentName:"li"},"deps/windowsbuild-all.sh")," ",(0,l.kt)("strong",{parentName:"li"},"in a MSYS2 MINGW64 shell")," (",(0,l.kt)("em",{parentName:"li"},"not")," the regular CMD or PowerShell)"),(0,l.kt)("li",{parentName:"ul"},"For Unix-like systems, run ",(0,l.kt)("inlineCode",{parentName:"li"},"deps/unixbuild-all.sh")," instead ",(0,l.kt)("strong",{parentName:"li"},"in any bash-like")," shell (including the Mac OS X Terminal)")),(0,l.kt)("p",null,"If all went well, you should find several static libraries (","*",".a) in the ",(0,l.kt)("inlineCode",{parentName:"p"},"ninjabuild-unix")," (or ",(0,l.kt)("inlineCode",{parentName:"p"},"ninjabuild-windows"),") folder:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"windowsbuild-all-deps.png",src:n(4593).Z,width:"899",height:"44"})),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"While the all-in-one build scripts are convenient, you can build each dependency individually. Several build scripts following the convention of ",(0,l.kt)("inlineCode",{parentName:"p"},"library-platform.sh")," (e.g., ",(0,l.kt)("inlineCode",{parentName:"p"},"luajit-unixbuild.sh"),") live inside the ",(0,l.kt)("inlineCode",{parentName:"p"},"deps")," folder, alongside other utility scripts.")),(0,l.kt)("p",null,"It's recommended to only rebuild the dependencies when needed, as some of them can take a long time to compile (e.g., OpenSSL)."),(0,l.kt)("h3",{id:"building-the-runtime"},"Building the Runtime"),(0,l.kt)("p",null,"Once you have all the dependencies prebuilt, you can compile the runtime itself:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Windows: Run ",(0,l.kt)("inlineCode",{parentName:"li"},"windowsbuild.cmd")," (using the MSYS2 shell is optional here)"),(0,l.kt)("li",{parentName:"ul"},"Otherwise, run ",(0,l.kt)("inlineCode",{parentName:"li"},"unixbuild.sh")," (using any ",(0,l.kt)("inlineCode",{parentName:"li"},"bash"),"-compatible shell)")),(0,l.kt)("p",null,"Running the script will generate a ",(0,l.kt)("inlineCode",{parentName:"p"},"build.ninja")," file with the build description (sans dependencies):"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"ninjabuild-windows.png",src:n(7565).Z,width:"473",height:"225"})),(0,l.kt)("p",null,"Ninja will compile and link the ",(0,l.kt)("inlineCode",{parentName:"p"},"evo")," executable (without rebuilding any dependencies), which you can then run:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"ninjabuild-success.png",src:n(2063).Z,width:"644",height:"249"})),(0,l.kt)("p",null,"Since this process is fast, you can iterate quickly after making changes and rebuild dependencies only as needed."),(0,l.kt)("h3",{id:"running-tests"},"Running Tests"),(0,l.kt)("p",null,"You may want to run the unit test suite to exercise the freshly-built executable:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ninjabuild-windows/evo.exe Tests/unit-test.lua")," on Windows"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ninjabuild-unix/evo Tests/unit-test.lua")," on other systems")),(0,l.kt)("p",null,"Some more basic smoke tests can similarly be run via:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ninjabuild-windows/evo.exe Tests/smoke-test.lua")," on Windows"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ninjabuild-unix/evo Tests/smoke-test.lua")," on other systems")),(0,l.kt)("p",null,"Additionally, there are a number of integration tests that will open some native WebView windows (amongst other things):"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ninjabuild-windows/evo.exe Tests/integration-test.lua")," on Windows"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ninjabuild-unix/evo Tests/integration-test.lua")," on other systems")),(0,l.kt)("p",null,"You can also move the executable to somewhere in your ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH"),", and then omit the ",(0,l.kt)("inlineCode",{parentName:"p"},"ninjabuild-*")," prefix."),(0,l.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,l.kt)("h3",{id:"windows-silent-build-failures"},"Windows: Silent Build Failures"),(0,l.kt)("p",null,"If you're seeing silent failures (nonzero exit code, but no visible output) or cryptic ",(0,l.kt)("inlineCode",{parentName:"p"},"make")," errors: Chances are you're using the wrong compiler toolchain. Double-check that ",(0,l.kt)("inlineCode",{parentName:"p"},"mingw-w64-x86_64-gcc")," is being used and not the default ",(0,l.kt)("inlineCode",{parentName:"p"},"gcc"),", Be aware that both executables may potentially have the same name. Luckily, you can query the package manager to find out where the right version is located:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ which gcc\n/mingw64/bin/gcc\n\n$ pacman -Ql mingw-w64-x86_64-gcc | grep gcc.exe\n\nmingw-w64-x86_64-gcc /mingw64/bin/gcc.exe\nmingw-w64-x86_64-gcc /mingw64/bin/x86_64-w64-mingw32-gcc.exe\n\n$ pacman -Ql gcc | grep gcc.exe\n\ngcc /usr/bin/gcc.exe\ngcc /usr/bin/x86_64-pc-msys-gcc.exe\n")),(0,l.kt)("p",null,"Since packages like ",(0,l.kt)("inlineCode",{parentName:"p"},"llvm")," (for ",(0,l.kt)("inlineCode",{parentName:"p"},"clang-format"),") depend on ",(0,l.kt)("inlineCode",{parentName:"p"},"gcc"),", you may end up with both versions on your system by accident."),(0,l.kt)("h3",{id:"windows-subsystem-for-linux"},"Windows Subsystem for Linux"),(0,l.kt)("p",null,"If you just installed WSL and set things up, CMake may fail with an error:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"CMake Error at /usr/share/cmake-3.22/Modules/CMakeTestCCompiler.cmake:85 (configure_file):"),(0,l.kt)("p",{parentName:"blockquote"},"Operation not permitted")),(0,l.kt)("p",null,"Solution: ",(0,l.kt)("a",{parentName:"p",href:"https://discourse.cmake.org/t/cmake-error-operation-not-permitted-in-new-wsl-ubuntu-session/3681/6"},"Restart WSL")),(0,l.kt)("h3",{id:"mac-os-x-deployment-target"},"Mac OS X Deployment Target"),(0,l.kt)("p",null,"You must set the special environment variable ",(0,l.kt)("inlineCode",{parentName:"p"},"MACOSX_DEPLOYMENT_TARGET")," to a compatible value for the build to succeed. Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Building the runtime and its dependencies on Mac OS 12.6 (Monterey)"',title:'"Building',the:!0,runtime:!0,and:!0,its:!0,dependencies:!0,on:!0,Mac:!0,OS:!0,12.6:!0,'(Monterey)"':!0},"MACOSX_DEPLOYMENT_TARGET=12.6 deps/unixbuild-all.sh && ./unixbuild.sh\n")),(0,l.kt)("p",null,"See Apple's ",(0,l.kt)("a",{parentName:"p",href:"https://developer.apple.com/library/archive/documentation/DeveloperTools/Reference/XcodeBuildSettingRef/1-Build_Setting_Reference/build_setting_ref.html#//apple_ref/doc/uid/TP40003931-CH3-SW129"},"(outdated) documentation")," for details, or the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/evo-lua/evo-runtime/blob/main/.github/workflows/ci-mac.yml"},"build workflow for Mac OS")," that contains the version used to create releases."),(0,l.kt)("h2",{id:"alternatives"},"Alternatives"),(0,l.kt)("h3",{id:"github-releases"},"GitHub Releases"),(0,l.kt)("p",null,"You can try the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/evo-lua/evo-runtime/releases"},"prebuilt releases available on GitHub"),". They should work on all modern x64-based Windows and Mac OS systems."),(0,l.kt)("p",null,"With Linux, results may vary due to a variety of compatibility issues. Luckily, building is easy here and should generally be no problem.\nReleases for other platforms or architectures may be added by popular demand, if and only if the maintenance burden is worth it."))}m.isMDXComponent=!0},2063:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/ninjabuild-success-0bf87128bd55b34efdb97aa1aaed2833.png"},7565:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/ninjabuild-windows-9348b23069acd1da107aba8f2f5e3e5c.png"},4593:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/png;base64,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"}}]);