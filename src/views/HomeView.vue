<template>
  <div>
    <div
      v-show="isShowProgressCircle"
      @click="documentHandleClickButtonInitPower"
      class="
        fixed
        inline-flex
        items-center
        justify-center
        overflow-hidden
        rounded-full
        top-0
        right-12
        md:right-1/2
        2xl:right-2
        bg-white
        hover:cursor-pointer
      "
    >
      <svg class="w-20 h-20">
        <circle
          class="text-gray-300"
          stroke-width="5"
          stroke="currentColor"
          fill="transparent"
          r="30"
          cx="40"
          cy="40"
        ></circle>
        <circle
          class="text-blue-600"
          stroke-width="5"
          stroke-linecap="round"
          stroke="currentColor"
          fill="transparent"
          r="30"
          cx="40"
          cy="40"
          :stroke-dasharray="progressCircleSvgValue.strokeDasharray"
          :stroke-dashoffset="progressCircleSvgValue.strokeDashoffset"
        ></circle>
      </svg>
      <svg
        v-if="isShowInitPowerButton"
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 absolute text-xl text-emerald-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
      <span v-else class="absolute text-xl text-blue-700">
        {{ progressPercentageString }}
      </span>
    </div>
    <div class="bg-black h-96 overflow-hidden" @click="documentHandleClickBox">
      <div ref="screenContainer">
        <div id="screen"></div>
        <canvas id="vga" class="mx-auto"></canvas>
        <div id="virtual-keyboard-caller-box">
          <textarea
            id="virtual-keyboard-caller"
            ref="virtualKeyboardCaller"
            v-model="virtualKeyboardBlackHole"
            autocorrect="off"
            autocapitalize="none"
            spellcheck="false"
            tabindex="0"
          ></textarea>
        </div>
      </div>
    </div>
    <div
      class="mt-5 px-3 w-full flex justify-between"
      v-show="!isShowInitPowerButton"
    >
      <button
        class="w-16 text-base font-medium text-gray-600 hover:text-gray-500"
        @click="documentHandleClickButtonPower"
      >
        電源
      </button>
      <button
        class="w-16 text-base font-medium text-gray-600 hover:text-gray-500"
        @click="documentHandleClickButtonPause"
      >
        {{ emulatorExtendedInfo.isPaused ? "恢復" : "暫停" }}
      </button>
      <button
        class="w-16 text-base font-medium text-gray-600 hover:text-gray-500"
        @click="documentHandleClickButtonReset"
      >
        重置
      </button>
      <button
        v-show="isTouchDevice"
        class="w-28 text-base font-medium text-gray-600 hover:text-gray-500"
        @click="documentHandleClickButtonCallSmartphoneVirtualKeyboard"
      >
        呼出虛擬鍵盤
      </button>
      <button
        class="w-28 text-base font-medium text-gray-600 hover:text-gray-500"
        @click="documentHandleClickButtonFullScreen"
      >
        進入全螢幕
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data: () => ({
    isPowerPressed: false,
    isDownloadCompleted: false,
    isTouchDevice: false,
    progressTicks: -1,
    emulator: null,
    emulatorExtendedInfo: {
      isPaused: false,
      mouseEnabled: false,
    },
    restoreFile: null,
    virtualKeyboardBlackHole: " ",
    systemProfile: {
      slitaz: {
        memory_size: 64 * 1024 * 1024,
        vga_memory_size: 8 * 1024 * 1024,
        cdrom: {
          url: "./machine/slitaz.iso",
          size: 36419584,
        },
      },
      xpud: {
        memory_size: 512 * 1024 * 1024,
        vga_memory_size: 32 * 1024 * 1024,
        cdrom: {
          url: "./machine/xpud.iso",
          size: 66529280,
        },
      },
    },
  }),
  watch: {
    isDownloadCompleted(isCompleted) {
      if (!isCompleted || !this.isPowerPressed) return;
      setTimeout(() => {
        this.machinePowerBoot(this.emulator);
      }, 500);
    },
    virtualKeyboardBlackHole(newValue) {
      if (newValue === " ") return;
      if (newValue === "") {
        const value = 0x00e; // Backspace
        this.machineSendKeyboardCode(this.emulator, value);
      } else {
        const value = newValue.substring(1);
        this.machineSendKeyboardText(this.emulator, value);
      }
      window.requestAnimationFrame(() => {
        this.virtualKeyboardBlackHole = " ";
      });
    },
  },
  computed: {
    isEmulatorRunning() {
      if (this.emulatorExtendedInfo.isPaused) return true;
      return this.emulator && this.emulator.is_running();
    },
    isInFullScreen() {
      return !!document.fullscreenElement;
    },
    isShowProgressCircle() {
      return !this.isPowerPressed || this.progressTicks >= 0;
    },
    isShowInitPowerButton() {
      return (
        (!this.isDownloadCompleted && !this.isPowerPressed) ||
        (this.isDownloadCompleted && !this.isEmulatorRunning)
      );
    },
    progressPercentage() {
      const progressValue = this.progressTicks < 1 ? this.progressTicks : 1;
      return progressValue * 100;
    },
    progressPercentageString() {
      const value = this.progressPercentage;
      return `${value.toFixed(0)}%`;
    },
    progressCircleSvgValue() {
      const circumference = 30 * 2 * Math.PI;
      return {
        strokeDasharray: circumference,
        strokeDashoffset:
          circumference - (this.progressPercentage / 100) * circumference,
      };
    },
    powerPauseText() {
      return this.emulatorExtendedInfo.isPaused ? "Resume" : "Pause";
    },
    powerResetText() {
      return "Reset";
    },
    powerPowerText() {
      return this.isEmulatorRunning ? "Power OFF" : "Power ON";
    },
    emulatorScreenInfo() {
      return this.emulator.v86.cpu.devices.vga.stats;
    },
    emulatorEventMethods() {
      return [
        {
          name: "download-progress",
          method: (e) => {
            this.progressTicks = 0;

            if (e.file_name.endsWith(".wasm")) {
              const filenameRaw = e.file_name.split("/");
              const filename = filenameRaw[filenameRaw.length - 1];
              this.lucidLog(`Fetching "${filename}" ...`);
              return;
            }

            if (
              e.file_index === e.file_count - 1 &&
              e.loaded >= e.total - 2048
            ) {
              this.isDownloadCompleted = true;
              this.lucidLog("Download completed!");
              if (!this.isPowerPressed) {
                this.lucidLog("Click power button to start.");
              }
              this.progressTicks = -1;
              return;
            }

            if (typeof e.file_index === "number" && e.file_count) {
              this.lucidLog(
                `Downloading images (${e.file_index + 1}/${e.file_count}) ...`
              );
            }

            if (e.total && typeof e.loaded === "number") {
              this.progressTicks = e.loaded / e.total;
            } else {
              this.lucidLog(`Progress: ${this.progressTicks++ % 50}`);
            }
          },
        },
        {
          name: "download-error",
          method: (e) => {
            this.progressTicks = 0;
            this.progressState = `
              Error: Loading "${e.file_name}" failed.
              Check your connection and reload the page to try again later.
            `;
          },
        },
        {
          name: "mouse-enable",
          method: (isEnabled) => {
            this.emulatorExtendedInfo.mouseEnabled = isEnabled;
          },
        },
        {
          name: "screen-set-mode",
          method: () => {
            this.documentHandleResizeScreen();
          },
        },
        {
          name: "screen-set-size-graphical",
          method: () => {
            this.documentHandleResizeScreen();
          },
        },
        {
          name: "emulator-stopped",
          method: () => {
            if (!this.isInFullScreen) return;
            this.documentRequestExitFullScreen();
          },
        },
      ];
    },
  },
  methods: {
    lucidLog(message) {
      console.log(`[Lucid] ${message}`);
    },
    machineSetup(baseProfile) {
      const system = { ...baseProfile };
      // Setup WASM
      system.wasm_path = "./v86.wasm";
      // Setup BIOS
      system.bios = {
        url: "./machine/bios/seabios.bin",
      };
      system.vga_bios = {
        url: "./machine/bios/vgabios.bin",
      };
      // Setup Network Relay
      system.network_relay_url =
        system.network_relay_url || "wss://relay.widgetry.org/";
      // Setup Screen Container
      system.screen_container = this.$refs.screenContainer;
      // Mount Machine
      const V86Starter = window.V86Starter;
      this.emulator = new V86Starter(system);
      // Return Machine
      return this.emulator;
    },
    machineSetupEventListener(machine) {
      for (const e of this.emulatorEventMethods) {
        machine.add_listener(e.name, e.method);
      }
    },
    machineScreenSetScale(machine, scale) {
      machine.screen_set_scale(scale);
    },
    async machineStateSave(machine) {
      // Save the state of the machine
      const state = await machine.save_state();
      const stateObject = new Blob([state]);
      // Create virtual download link
      const a = document.createElement("a");
      a.download = `lucid-state.bin`;
      a.href = window.URL.createObjectURL(stateObject);
      a.dataset.downloadurl = `application/octet-stream:${a.download}:${a.href}`;
      // Trigger virtual download link
      a.click();
    },
    machineStateRestore(machine, file) {
      machine.stop();

      const filereader = new FileReader();

      filereader.onload = (e) => {
        machine.restore_state(e.target.result);
        machine.run();
      };

      filereader.readAsArrayBuffer(file);
    },
    machinePowerBoot(machine) {
      this.isPowerPressed = true;
      if (!this.isDownloadCompleted) return;
      if (this.isEmulatorRunning) {
        machine.stop();
        machine.restart();
      } else {
        machine.run();
      }
    },
    machineSendKeyboardText(machine, text) {
      machine.keyboard_send_text(text);
    },
    machineSendKeyboardCode(machine, code) {
      machine.bus.send("keyboard-code", code);
    },
    machinePowerPause(machine) {
      if (this.emulatorExtendedInfo.isPaused) {
        machine.run();
        this.emulatorExtendedInfo.isPaused = false;
      } else {
        machine.stop();
        this.emulatorExtendedInfo.isPaused = true;
      }
    },
    machinePowerReset(machine) {
      machine.restart();
    },
    documentLockMouse() {
      const body = document.body;
      const method =
        body.requestPointerLock ||
        body.mozRequestPointerLock ||
        body.webkitRequestPointerLock ||
        body.msRequestPointerLock;
      if (method) {
        method.call(body);
      } else {
        console.warn("The browser is not support requestPointerLock");
      }
    },
    documentRequestFullScreen() {
      const element = this.$refs.screenContainer;
      const method =
        element.requestFullscreen ||
        element.mozRequestFullScreen ||
        element.webkitRequestFullscreen ||
        element.msRequestFullscreen;
      if (method) {
        method.call(element);
      } else {
        console.warn("The browser is not support requestFullscreen");
      }
    },
    documentRequestExitFullScreen() {
      const method =
        document.exitFullscreen ||
        document.mozCancelFullScreen ||
        document.webkitExitFullscreen ||
        document.msExitFullscreen;
      if (method) {
        method.call(document);
      } else {
        console.warn("The browser is not support exitFullscreen");
      }
    },
    documentHandleResizeScreen() {
      if (!this.isEmulatorRunning) return;
      if (!this.emulatorScreenInfo.is_graphical) {
        this.machineScreenSetScale(this.emulator, 1);
      }
      const documentScreen = {
        width: this.$refs.screenContainer.clientWidth || 1,
        height: this.$refs.screenContainer.clientHeight || 1,
      };
      const emulatorScreen = {
        width: this.emulatorScreenInfo.res_x || 1,
        height: this.emulatorScreenInfo.res_y || 1,
      };
      if (documentScreen.height > documentScreen.width) {
        const widthScale = documentScreen.width / emulatorScreen.width;
        const heightScale = documentScreen.height / emulatorScreen.height;
        const scale = Math.min(widthScale, heightScale);
        this.machineScreenSetScale(this.emulator, scale);
      } else {
        this.machineScreenSetScale(this.emulator, 1);
      }
    },
    documentHandleChangeRestoreFile(e) {
      this.restoreFile = e.target.files[0];
    },
    documentHandleClickBox() {
      if (this.emulatorExtendedInfo.mouseEnabled) {
        this.documentLockMouse();
      }
    },
    documentHandleClickButtonInitPower() {
      if (this.isPowerPressed) return;
      this.machinePowerBoot(this.emulator);
    },
    documentHandleClickButtonPower() {
      this.machinePowerBoot(this.emulator);
    },
    documentHandleClickButtonPause() {
      this.machinePowerPause(this.emulator);
    },
    documentHandleClickButtonReset() {
      this.machinePowerReset(this.emulator);
    },
    documentHandleClickButtonFullScreen() {
      this.documentRequestFullScreen();
    },
    documentHandleClickButtonCallSmartphoneVirtualKeyboard() {
      this.$refs.virtualKeyboardCaller.focus();
    },
  },
  created() {
    this.isTouchDevice =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0;
    window.addEventListener("resize", this.documentHandleResizeScreen);
  },
  destroyed() {
    window.removeEventListener("resize", this.documentHandleResizeScreen);
  },
  mounted() {
    this.documentHandleResizeScreen();
    const params = new URLSearchParams(window.location.search);
    const baseProfile = (() => {
      const profileName = params.get("profile");
      const defaultProfile = this.systemProfile.slitaz;
      if (profileName) {
        return this.systemProfile[profileName] || defaultProfile;
      }
      if (navigator.language === "zh-TW") {
        return this.systemProfile.xpud || defaultProfile;
      }
      return defaultProfile;
    })();
    if (params.get("network_relay_url")) {
      baseProfile.network_relay_url = params.get("network_relay_url");
    }
    const machine = this.machineSetup(baseProfile);
    this.machineSetupEventListener(machine);
  },
};
</script>

<style scoped>
#virtual-keyboard-caller-box {
  position: absolute;
  top: 0;
  z-index: 10;
}

#virtual-keyboard-caller {
  width: 0;
  height: 0;
  resize: none;
  position: absolute;
  opacity: 0;
  left: -9999em;
  top: 0;
  z-index: -10;
  white-space: nowrap;
  overflow: hidden;
}
</style>
