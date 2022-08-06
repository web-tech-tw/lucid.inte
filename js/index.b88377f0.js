(function(){"use strict";var t={2176:function(t,e,n){var i=n(8935),s=n(6166),r=n.n(s);const a={baseURL:"https://web-tech-tw.eu.org/sara.recv",timeout:6e4},o=r().create(a);o.interceptors.request.use((function(t){const e=localStorage.getItem("unified_token");return e&&(t.headers["Authorization"]=`SARA ${e}`),t}),(function(t){return Promise.reject(t)})),o.interceptors.response.use((function(t){return"sara-issue"in t?.headers&&localStorage.setItem("unified_token",t.headers["sara-issue"]),t}),(function(t){return Promise.reject(t)}));const l={install:t=>{t.prototype.$sara=o,t.prototype.$profile=async()=>{if(!localStorage.getItem("unified_token"))return null;try{const t=await o.get("profile");return t?.data?.profile||!1}catch(t){return 401===t?.response?.status&&(localStorage.removeItem("unified_token"),location.reload()),!1}}}};i.Z.use(l);const u={},c=r().create(u);c.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),c.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)}));const d={install:t=>{t.axios=c,window.axios=c,Object.defineProperties(t.prototype,{axios:{get(){return c}},$axios:{get(){return c}}})}};i.Z.use(d);var m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative bg-white"},[n("app-header"),n("router-view"),n("app-footer")],1)},p=[],f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"max-w-7xl mx-auto px-4 sm:px-6"},[n("div",{staticClass:"\n        flex\n        justify-between\n        items-center\n        border-b-2 border-gray-100\n        py-6\n        md:justify-start md:space-x-10\n      "},[n("div",{staticClass:"flex justify-start lg:w-0 lg:flex-1"},[n("router-link",{attrs:{to:"/"}},[n("h1",{staticClass:"\n              flex-auto\n              text-lg\n              font-semibold\n              text-gray-900\n              hidden\n              sm:block\n            "},[t._v(" "+t._s(t.title.long)+" ")]),n("h1",{staticClass:"flex-auto text-lg font-semibold text-gray-900 sm:hidden"},[t._v(" "+t._s(t.title.short)+" ")])])],1),n("nav",{staticClass:"md:flex space-x-10 hidden"},t._l(t.menu,(function(e,i){return n("div",{key:i},["dropdown"===e.type?n("div",{staticClass:"relative"},[n("button",{staticClass:"\n                text-gray-500\n                group\n                bg-white\n                rounded-md\n                inline-flex\n                items-center\n                text-base\n                font-medium\n                hover:text-gray-900\n                focus:outline-none\n                focus:ring-2\n                focus:ring-offset-2\n                focus:ring-indigo-500\n              ",attrs:{"aria-expanded":"false",type:"button"},on:{click:function(n){return t.openMenu(e.status)}}},[n("span",[t._v(t._s(e.name))]),n("svg",{staticClass:"text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"clip-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","fill-rule":"evenodd"}})])]),n("div",{staticClass:"\n                absolute\n                z-10\n                -ml-4\n                mt-3\n                transform\n                px-2\n                w-screen\n                max-w-md\n                sm:px-0\n                lg:ml-0 lg:left-1/2 lg:-translate-x-1/2\n              "},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.menu_collapse[e.status],expression:"menu_collapse[item.status]"}],staticClass:"\n                  rounded-lg\n                  shadow-lg\n                  ring-1 ring-black ring-opacity-5\n                  overflow-hidden\n                "},[n("div",{staticClass:"\n                    relative\n                    grid\n                    gap-6\n                    bg-white\n                    px-5\n                    py-6\n                    sm:gap-8 sm:p-8\n                  "},t._l(e.items,(function(e,i){return n("div",{key:i,staticClass:"\n                      -m-3\n                      p-3\n                      flex\n                      items-start\n                      rounded-lg\n                      hover:bg-gray-50\n                      cursor-pointer\n                    ",on:{click:e.action}},[n("img",{staticClass:"rounded-full",attrs:{alt:e.name,src:e.icon,height:"30",width:"30"}}),n("div",{staticClass:"ml-4"},[n("p",{staticClass:"text-base font-medium text-gray-900"},[t._v(" "+t._s(e.name)+" ")]),n("p",{staticClass:"mt-1 text-sm text-gray-500"},[t._v(" "+t._s(e.description)+" ")])])])})),0)])])]):"function"===e.type?n("button",{staticClass:"text-base font-medium text-gray-500 hover:text-gray-900",attrs:{"aria-expanded":"false",type:"button"},on:{click:e.action}},[t._v(" "+t._s(e.name)+" ")]):t._e()])})),0),n("div",{staticClass:"-mr-2 -my-2 md:hidden"},[n("button",{staticClass:"\n            bg-white\n            rounded-md\n            p-2\n            inline-flex\n            items-center\n            justify-center\n            text-gray-400\n            hover:text-gray-500 hover:bg-gray-100\n            focus:outline-none\n            focus:ring-2\n            focus:ring-inset\n            focus:ring-indigo-500\n          ",attrs:{"aria-expanded":"false",type:"button"},on:{click:function(e){t.menu_collapse.mobile_menu=!0}}},[n("span",{staticClass:"sr-only"},[t._v("Open menu")]),n("svg",{staticClass:"h-6 w-6",attrs:{"aria-hidden":"true",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M4 6h16M4 12h16M4 18h16","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}})])])])])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.menu_collapse.mobile_menu,expression:"menu_collapse.mobile_menu"}],staticClass:"\n      absolute\n      top-0\n      inset-x-0\n      p-2\n      transition\n      transform\n      origin-top-right\n      md:hidden\n    "},[n("div",{staticClass:"\n        rounded-lg\n        shadow-lg\n        ring-1 ring-black ring-opacity-5\n        bg-white\n        divide-y-2 divide-gray-50\n      "},[n("div",{staticClass:"pt-5 pb-6 px-5"},[n("div",{staticClass:"flex items-center justify-between",on:{click:function(e){t.menu_collapse.mobile_menu=!1}}},[n("div",[n("h1",{staticClass:"flex-auto text-lg font-semibold text-gray-900 sm:hidden"},[t._v(" "+t._s(t.title.short)+" ")])]),n("div",{staticClass:"-mr-2"},[n("button",{staticClass:"\n                bg-white\n                rounded-md\n                p-2\n                inline-flex\n                items-center\n                justify-center\n                text-gray-400\n                hover:text-gray-500 hover:bg-gray-100\n                focus:outline-none\n                focus:ring-2\n                focus:ring-inset\n                focus:ring-indigo-500\n              ",attrs:{type:"button"}},[n("span",{staticClass:"sr-only"},[t._v("Close menu")]),n("svg",{staticClass:"h-6 w-6",attrs:{"aria-hidden":"true",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M6 18L18 6M6 6l12 12","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}})])])])]),n("div",{staticClass:"mt-6"},[n("nav",{staticClass:"grid gap-y-8"},t._l(t.menu,(function(e,i){return n("div",{key:i},["dropdown"===e.type?n("div",{staticClass:"relative"},[n("button",{staticClass:"\n                    text-gray-500\n                    group\n                    bg-white\n                    rounded-md\n                    inline-flex\n                    items-center\n                    text-base\n                    font-medium\n                    hover:text-gray-900\n                    focus:outline-none\n                    focus:ring-2\n                    focus:ring-offset-2\n                    focus:ring-indigo-500\n                    w-full\n                  ",attrs:{"aria-expanded":"false",type:"button"},on:{click:function(n){return t.openMenu(e.status)}}},[n("span",[t._v(t._s(e.name))]),n("svg",{staticClass:"\n                      text-gray-400\n                      ml-2\n                      h-5\n                      w-5\n                      group-hover:text-gray-500\n                    ",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"clip-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","fill-rule":"evenodd"}})])]),n("div",{staticClass:"\n                    absolute\n                    z-10\n                    -ml-7\n                    mt-3\n                    transform\n                    px-2\n                    w-screen\n                    max-w-md\n                    sm:px-0 sm:-ml-4\n                    lg:ml-0 lg:left-1/2 lg:-translate-x-1/2\n                  "},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.menu_collapse[e.status],expression:"menu_collapse[item.status]"}],staticClass:"\n                      rounded-lg\n                      shadow-lg\n                      ring-1 ring-black ring-opacity-5\n                      overflow-hidden\n                    "},[n("div",{staticClass:"\n                        relative\n                        grid\n                        gap-6\n                        bg-white\n                        px-5\n                        py-6\n                        sm:gap-8 sm:p-8\n                      "},t._l(e.items,(function(e,i){return n("div",{key:i,staticClass:"\n                          -m-3\n                          p-3\n                          flex\n                          items-start\n                          rounded-lg\n                          hover:bg-gray-50\n                          cursor-pointer\n                        ",on:{click:e.action}},[n("img",{staticClass:"rounded-full",attrs:{alt:e.name,src:e.icon,height:"30",width:"30"}}),n("div",{staticClass:"ml-4"},[n("p",{staticClass:"text-base font-medium text-gray-900"},[t._v(" "+t._s(e.name)+" ")]),n("p",{staticClass:"mt-1 text-sm text-gray-500"},[t._v(" "+t._s(e.description)+" ")])])])})),0)])])]):"function"===e.type?n("button",{staticClass:"\n                  -m-3\n                  p-3\n                  flex\n                  items-center\n                  rounded-md\n                  hover:bg-gray-50\n                  w-full\n                ",attrs:{type:"button"},on:{click:e.action}},[n("img",{staticClass:"rounded-full",attrs:{alt:e.name,src:e.icon,height:"30",width:"30"}}),n("span",{staticClass:"ml-3 text-base font-medium text-gray-900"},[t._v(t._s(e.name))])]):t._e()])})),0)])])])])])},g=[],v={name:"AppHeader",data:()=>({title:{short:"Lucid",long:"Lucid - 讓 Linux 隨處可得"},menu_collapse:{mobile_menu:!1,template:!1,online_service:!1},profile:null}),computed:{menu(){return[{name:"回首頁",type:"function",icon:n(9182),action:()=>location.assign("https://web-tech-tw.github.io")}]}},async created(){document.addEventListener("click",this.handleDocumentClick),this.profile=await this.$profile()},methods:{openMenu(t){Object.keys(this.menu_collapse).forEach((e=>{"mobile_menu"!==e&&(this.menu_collapse[e]=e===t&&!this.menu_collapse[e])}))},handleDocumentClick(t){this.$el.contains(t.target)||Object.keys(this.menu_collapse).forEach((t=>{this.menu_collapse[t]=!1}))}}},h=v,x=n(1001),b=(0,x.Z)(h,f,g,!1,null,null,null),y=b.exports,w=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"mt-16 pb-16 text-sm leading-6"},[n("div",{staticClass:"max-w-7xl mx-auto mt-11 divide-y divide-gray-200 px-4 sm:px-6 md:px-8"},[t._v(" 「Lucid」是基於純網頁運行的 Alpine Linux x86-compatible 虛擬電腦。 ")]),n("div",{staticClass:"max-w-7xl mx-auto mt-5 divide-y divide-gray-200 px-4 sm:px-6 md:px-8 text-sky-700"},[n("a",{staticClass:"mr-3",attrs:{href:"https://github.com/web-tech-tw/lucid.inte"}},[t._v("網站原始碼")]),n("a",{staticClass:"mr-3",attrs:{href:"https://web-tech-tw.github.io/#/privacy"}},[t._v("隱私權政策")])]),n("div",{staticClass:"max-w-7xl mx-auto mt-5 divide-y divide-gray-200 px-4 sm:px-6 md:px-8"},[t._v(" © 2022 臺灣網際網路技術推廣組織 Taiwan Web Technology Promotion Organization (Web Tech TW) ")])])}],C={name:"AppFooter"},k=C,j=(0,x.Z)(k,w,_,!1,null,null,null),O=j.exports,A={name:"App",components:{AppHeader:y,AppFooter:O}},E=A,M=(0,x.Z)(E,m,p,!1,null,null,null),L=M.exports,P=n(2809);i.Z.use(P.Z);const T=[{path:"/",name:"home",component:()=>n.e(439).then(n.bind(n,439))},{path:"*",name:"not-found",component:()=>n.e(412).then(n.bind(n,3412))}],$=new P.Z({routes:T});var S=$;i.Z.config.productionTip=!1,new i.Z({router:S,render:t=>t(L)}).$mount("#app")},9182:function(t,e,n){t.exports=n.p+"img/home.f19e567a.svg"}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var r=e[i]={exports:{}};return t[i](r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,i,s,r){if(!i){var a=1/0;for(c=0;c<t.length;c++){i=t[c][0],s=t[c][1],r=t[c][2];for(var o=!0,l=0;l<i.length;l++)(!1&r||a>=r)&&Object.keys(n.O).every((function(t){return n.O[t](i[l])}))?i.splice(l--,1):(o=!1,r<a&&(a=r));if(o){t.splice(c--,1);var u=s();void 0!==u&&(e=u)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[i,s,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,i){return n.f[i](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{412:"1bcf6392",439:"783af0de"}[t]+".js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="lucid.inte:";n.l=function(i,s,r,a){if(t[i])t[i].push(s);else{var o,l;if(void 0!==r)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==i||d.getAttribute("data-webpack")==e+r){o=d;break}}o||(l=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,n.nc&&o.setAttribute("nonce",n.nc),o.setAttribute("data-webpack",e+r),o.src=i),t[i]=[s];var m=function(e,n){o.onerror=o.onload=null,clearTimeout(p);var s=t[i];if(delete t[i],o.parentNode&&o.parentNode.removeChild(o),s&&s.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=m.bind(null,o.onerror),o.onload=m.bind(null,o.onload),l&&document.head.appendChild(o)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/lucid.inte/"}(),function(){var t={826:0};n.f.j=function(e,i){var s=n.o(t,e)?t[e]:void 0;if(0!==s)if(s)i.push(s[2]);else{var r=new Promise((function(n,i){s=t[e]=[n,i]}));i.push(s[2]=r);var a=n.p+n.u(e),o=new Error,l=function(i){if(n.o(t,e)&&(s=t[e],0!==s&&(t[e]=void 0),s)){var r=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.src;o.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",o.name="ChunkLoadError",o.type=r,o.request=a,s[1](o)}};n.l(a,l,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,i){var s,r,a=i[0],o=i[1],l=i[2],u=0;if(a.some((function(e){return 0!==t[e]}))){for(s in o)n.o(o,s)&&(n.m[s]=o[s]);if(l)var c=l(n)}for(e&&e(i);u<a.length;u++)r=a[u],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(c)},i=self["webpackChunklucid_inte"]=self["webpackChunklucid_inte"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(2176)}));i=n.O(i)})();
//# sourceMappingURL=index.b88377f0.js.map