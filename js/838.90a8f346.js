"use strict";(self["webpackChunklucid_inte"]=self["webpackChunklucid_inte"]||[]).push([[838],{838:function(e,t,s){s.r(t),s.d(t,{default:function(){return u}});var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{directives:[{name:"show",rawName:"v-show",value:e.isShowProgressCircle,expression:"isShowProgressCircle"}],staticClass:"\n      fixed\n      inline-flex\n      items-center\n      justify-center\n      overflow-hidden\n      rounded-full\n      top-0\n      right-12\n      md:right-1/2\n      2xl:right-2\n      bg-white\n      hover:cursor-pointer\n    ",on:{click:e.documentHandleClickButtonPower}},[s("svg",{staticClass:"w-20 h-20"},[s("circle",{staticClass:"text-gray-300",attrs:{"stroke-width":"5",stroke:"currentColor",fill:"transparent",r:"30",cx:"40",cy:"40"}}),s("circle",{staticClass:"text-blue-600",attrs:{"stroke-width":"5","stroke-linecap":"round",stroke:"currentColor",fill:"transparent",r:"30",cx:"40",cy:"40","stroke-dasharray":e.progressCircleSvgValue.strokeDasharray,"stroke-dashoffset":e.progressCircleSvgValue.strokeDashoffset}})]),e.isShowInitPowerButton?s("svg",{staticClass:"h-6 w-6 absolute text-xl text-emerald-700",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13 10V3L4 14h7v7l9-11h-7z"}})]):s("span",{staticClass:"absolute text-xl text-blue-700"},[e._v(" "+e._s(e.progressPercentageString)+" ")])]),s("div",{staticClass:"bg-black h-96 overflow-hidden",on:{click:e.documentHandleClickBox}},[s("div",{ref:"screenContainer"},[s("div",{attrs:{id:"screen"}}),s("canvas",{staticClass:"mx-auto",attrs:{id:"vga"}})])]),e.isEmulatorRunning?s("div",{staticClass:"mt-5 px-3 w-full flex justify-between"},[s("button",{staticClass:"w-16 text-base font-medium text-gray-600 hover:text-gray-500",on:{click:e.documentHandleClickButtonPower}},[e._v(" 電源 ")]),s("button",{staticClass:"w-16 text-base font-medium text-gray-600 hover:text-gray-500",on:{click:e.documentHandleClickButtonPause}},[e._v(" "+e._s(e.emulatorExtendedInfo.isPaused?"恢復":"暫停")+" ")]),s("button",{staticClass:"w-16 text-base font-medium text-gray-600 hover:text-gray-500",on:{click:e.documentHandleClickButtonReset}},[e._v(" 重置 ")]),s("button",{staticClass:"w-28 text-base font-medium text-gray-600 hover:text-gray-500",on:{click:e.documentHandleClickButtonFullScreen}},[e._v(" 進入全螢幕 ")])]):e._e(),s("div",{staticClass:"mt-5 px-3 w-full flex justify-center"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.virtualKeyboardBlackHole,expression:"virtualKeyboardBlackHole"}],staticClass:"rounded-md resize-none border-2 text-center",attrs:{placeholder:"虛擬鍵盤呼出器"},domProps:{value:e.virtualKeyboardBlackHole},on:{input:function(t){t.target.composing||(e.virtualKeyboardBlackHole=t.target.value)}}})])])},r=[],n={name:"HomeView",data:()=>({isPowerPressed:!1,isDownloadCompleted:!1,isShowOptionsMenu:!1,isShowRestoreModal:!1,progressTicks:-1,emulator:null,emulatorExtendedInfo:{isPaused:!1,mouseEnabled:!1},restoreFile:null,virtualKeyboardBlackHole:" ",systemProfile:{default:{memory_size:67108864,vga_memory_size:8388608,cdrom:{url:"./machine/system.iso",size:23068672}}}}),watch:{isDownloadCompleted(e){e&&this.isPowerPressed&&setTimeout((()=>{this.machinePowerBoot(this.emulator)}),500)},virtualKeyboardBlackHole(e){if(" "!==e){if(""===e){const e=14;this.machineSendKeyboardCode(this.emulator,e)}else{const t=e.substring(1);this.machineSendKeyboardText(this.emulator,t)}window.requestAnimationFrame((()=>{this.virtualKeyboardBlackHole=" "}))}}},computed:{isEmulatorRunning(){return!!this.emulatorExtendedInfo.isPaused||this.emulator&&this.emulator.is_running()},isInFullScreen(){return!!document.fullscreenElement},isShowProgressCircle(){return!this.isPowerPressed||this.progressTicks>=0},isShowInitPowerButton(){return!this.isDownloadCompleted&&!this.isPowerPressed||this.isDownloadCompleted&&!this.isEmulatorRunning},isShowModal(){return this.isShowRestoreModal},progressPercentage(){const e=this.progressTicks<1?this.progressTicks:1;return 100*e},progressPercentageString(){const e=this.progressPercentage;return`${e.toFixed(0)}%`},progressCircleSvgValue(){const e=60*Math.PI;return{strokeDasharray:e,strokeDashoffset:e-this.progressPercentage/100*e}},powerPauseText(){return this.emulatorExtendedInfo.isPaused?"Resume":"Pause"},powerResetText(){return"Reset"},powerPowerText(){return this.isEmulatorRunning?"Power OFF":"Power ON"},emulatorScreenInfo(){return this.emulator.v86.cpu.devices.vga.stats},emulatorEventMethods(){return[{name:"download-progress",method:e=>{if(this.progressTicks=0,e.file_name.endsWith(".wasm")){const t=e.file_name.split("/"),s=t[t.length-1];this.lucidLog(`Fetching "${s}" ...`)}else{if(e.file_index===e.file_count-1&&e.loaded>=e.total-2048)return this.isDownloadCompleted=!0,this.lucidLog("Download completed!"),this.isPowerPressed||this.lucidLog("Click power button to start."),void(this.progressTicks=-1);"number"===typeof e.file_index&&e.file_count&&this.lucidLog(`Downloading images (${e.file_index+1}/${e.file_count}) ...`),e.total&&"number"===typeof e.loaded?this.progressTicks=e.loaded/e.total:this.lucidLog("Progress: "+this.progressTicks++%50)}}},{name:"download-error",method:e=>{this.progressTicks=0,this.progressState=`\n              Error: Loading "${e.file_name}" failed.\n              Check your connection and reload the page to try again later.\n            `}},{name:"mouse-enable",method:e=>{this.emulatorExtendedInfo.mouseEnabled=e}},{name:"screen-set-mode",method:()=>{this.documentHandleResizeScreen()}},{name:"screen-set-size-graphical",method:()=>{this.documentHandleResizeScreen()}},{name:"emulator-stopped",method:()=>{this.isInFullScreen&&this.documentRequestExitFullScreen()}}]}},methods:{lucidLog(e){console.log(`[Lucid] ${e}`)},machineSetup(e){const t={...e};t.wasm_path="./v86.wasm",t.bios={url:"./machine/bios/seabios.bin"},t.vga_bios={url:"./machine/bios/vgabios.bin"},t.network_relay_url=t.network_relay_url||"wss://relay.widgetry.org/",t.screen_container=this.$refs.screenContainer;const s=window.V86Starter;return this.emulator=new s(t),this.emulator},machineSetupEventListener(e){for(const t of this.emulatorEventMethods)e.add_listener(t.name,t.method)},machineScreenSetScale(e,t){e.screen_set_scale(t)},async machineStateSave(e){const t=await e.save_state(),s=new Blob([t]),o=document.createElement("a");o.download="lucid-state.bin",o.href=window.URL.createObjectURL(s),o.dataset.downloadurl=`application/octet-stream:${o.download}:${o.href}`,o.click()},machineStateRestore(e,t){e.stop();const s=new FileReader;s.onload=t=>{e.restore_state(t.target.result),e.run()},s.readAsArrayBuffer(t)},machinePowerBoot(e){this.isPowerPressed=!0,this.isDownloadCompleted&&(this.isEmulatorRunning?(e.stop(),e.restart()):e.run())},machineSendKeyboardText(e,t){e.keyboard_send_text(t)},machineSendKeyboardCode(e,t){e.bus.send("keyboard-code",t)},machinePowerPause(e){this.emulatorExtendedInfo.isPaused?(e.run(),this.emulatorExtendedInfo.isPaused=!1):(e.stop(),this.emulatorExtendedInfo.isPaused=!0)},machinePowerReset(e){e.restart()},documentLockMouse(){const e=document.body,t=e.requestPointerLock||e.mozRequestPointerLock||e.webkitRequestPointerLock||e.msRequestPointerLock;t?t.call(e):console.warn("The browser is not support requestPointerLock")},documentRequestFullScreen(){const e=this.$refs.screenContainer,t=e.requestFullscreen||e.mozRequestFullScreen||e.webkitRequestFullscreen||e.msRequestFullscreen;t?t.call(e):console.warn("The browser is not support requestFullscreen")},documentRequestExitFullScreen(){const e=document.exitFullscreen||document.mozCancelFullScreen||document.webkitExitFullscreen||document.msExitFullscreen;e?e.call(document):console.warn("The browser is not support exitFullscreen")},documentHandleResizeScreen(){if(!this.isEmulatorRunning)return;this.emulatorScreenInfo.is_graphical||this.machineScreenSetScale(this.emulator,1);const e={width:this.$refs.screenContainer.clientWidth||1,height:this.$refs.screenContainer.clientHeight||1},t={width:this.emulatorScreenInfo.res_x||1,height:this.emulatorScreenInfo.res_y||1},s=e.width/t.width,o=e.height/t.height,r=Math.min(s,o);this.machineScreenSetScale(this.emulator,r)},documentHandleChangeRestoreFile(e){this.restoreFile=e.target.files[0]},documentHandleClickBox(){this.emulatorExtendedInfo.mouseEnabled&&this.documentLockMouse()},documentHandleClickButtonPower(){this.machinePowerBoot(this.emulator)},documentHandleClickButtonPause(){this.machinePowerPause(this.emulator)},documentHandleClickButtonReset(){this.machinePowerReset(this.emulator)},documentHandleClickButtonFullScreen(){this.documentRequestFullScreen()},documentHandleClickButtonOptions(){this.isShowOptionsMenu=!this.isShowOptionsMenu},documentHandleClickButtonOptionsCallSmartphoneVirtualKeyboard(){this.$refs.virtualKeyboardCaller.focus(),this.isShowOptionsMenu=!1},documentHandleClickButtonOptionsRestore(){this.emulatorExtendedInfo.isPaused||this.machinePowerPause(this.emulator),this.isShowRestoreModal=!0,this.isShowOptionsMenu=!1},documentHandleClickButtonOptionsSave(){this.machineStateSave(this.emulator),this.isShowOptionsMenu=!1},documentHandleClickButtonRestoreCancel(){this.emulatorExtendedInfo.isPaused&&this.machinePowerPause(this.emulator),this.restoreFile=null,this.isShowRestoreModal=!1},documentHandleClickButtonRestoreImport(){this.emulatorExtendedInfo.isPaused&&this.machinePowerPause(this.emulator),this.machineStateRestore(this.emulator,this.restoreFile),this.isShowRestoreModal=!1}},created(){window.addEventListener("resize",this.documentHandleResizeScreen)},destroyed(){window.removeEventListener("resize",this.documentHandleResizeScreen)},mounted(){this.documentHandleResizeScreen();const e=new URLSearchParams(window.location.search),t=e.get("profile"),s=this.systemProfile[t]||this.systemProfile.default;e.get("network_relay_url")&&(s.network_relay_url=e.get("network_relay_url"));const o=this.machineSetup(s);this.machineSetupEventListener(o)}},i=n,a=s(1001),l=(0,a.Z)(i,o,r,!1,null,null,null),u=l.exports}}]);
//# sourceMappingURL=838.90a8f346.js.map