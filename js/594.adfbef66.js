"use strict";(self["webpackChunklucid_inte"]=self["webpackChunklucid_inte"]||[]).push([[594],{4594:function(e,t,n){n.r(t),n.d(t,{default:function(){return r}});var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"bg-black min-h-screen overflow-hidden",on:{click:e.documentHandleClickBox}},[n("div",{ref:"screenContainer"},[n("div",{attrs:{id:"screen"}}),n("canvas",{attrs:{id:"vga"}})])]),n("div",{staticClass:"mt-5 px-3 w-full flex justify-between"},[n("button",{staticClass:"w-16",on:{click:e.documentHandleClickButtonPause}},[e._v(" "+e._s(e.emulatorExtendedInfo.isPaused?"Resume":"Pause")+" ")]),n("button",{staticClass:"w-28",on:{click:e.documentHandleClickButtonFullScreen}},[e._v(" Full Screen ")]),n("button",{staticClass:"w-16",on:{click:e.documentHandleClickButtonReset}},[e._v(" Reset ")])])])},o=[],u={name:"HomeView",data:()=>({emulator:null,emulatorExtendedInfo:{isPaused:!1,mouseEnabled:!1}}),computed:{emulatorEventMethods(){return[{name:"mouse-enable",method:e=>{this.emulatorExtendedInfo.mouseEnabled=e}},{name:"emulator-stopped",method:()=>{this.documentRequestExitFullScreen()}}]}},methods:{machineBoot(){const e={wasm_path:"./v86.wasm",memory_size:268435456,vga_memory_size:8388608,cdrom:{url:"./machine/system.iso",size:56379392},bios:{url:"./machine/bios/seabios.bin"},vga_bios:{url:"./machine/bios/vgabios.bin"},network_relay_url:"wss://relay.widgetry.org/",screen_container:this.$refs.screenContainer,autostart:!0},t=window.V86Starter;return this.emulator=new t(e),this.emulator},machineSetupEventListener(e){for(const t of this.emulatorEventMethods)e.add_listener(t.name,t.method)},machinePowerPause(e){this.emulatorExtendedInfo.isPaused?(e.run(),this.emulatorExtendedInfo.isPaused=!1):(e.stop(),this.emulatorExtendedInfo.isPaused=!0)},machinePowerReset(e){e.restart()},documentLockMouse(){const e=document.body,t=e.requestPointerLock||e.mozRequestPointerLock||e.webkitRequestPointerLock||e.msRequestPointerLock;t?t.call(e):console.warn("The browser is not support requestPointerLock")},documentRequestFullScreen(){const e=this.$refs.screenContainer,t=e.requestFullscreen||e.mozRequestFullScreen||e.webkitRequestFullscreen||e.msRequestFullscreen;t?t.call(e):console.warn("The browser is not support requestFullscreen")},documentRequestExitFullScreen(){const e=document.exitFullscreen||document.mozCancelFullScreen||document.webkitExitFullscreen||document.msExitFullscreen;e?e.call(document):console.warn("The browser is not support exitFullscreen")},documentHandleClickBox(){this.emulatorExtendedInfo.mouseEnabled&&this.documentLockMouse()},documentHandleClickButtonPause(){this.machinePowerPause(this.emulator)},documentHandleClickButtonReset(){this.machinePowerReset(this.emulator)},documentHandleClickButtonFullScreen(){this.documentRequestFullScreen()}},mounted(){const e=this.machineBoot();this.machineSetupEventListener(e)}},l=u,c=n(1001),i=(0,c.Z)(l,s,o,!1,null,null,null),r=i.exports}}]);
//# sourceMappingURL=594.adfbef66.js.map