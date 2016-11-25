title: Web Bluetooth in Action
output: public/index.html
theme: peter-theme
controls: false

--

# Web Bluetooth <br> in Action <img src="images/clapper-board.png" alt="Action!" style="height:1em;"/>

<img src="images/ble-logo.png" alt="BLE logo" style="width:12%;"/>

<div class="contact">
  <p>Peter O'Shaughnessy</p>
  <p>[@poshaughnessy](https://twitter.com/poshaughnessy)</p>
</div>

--

<h2>Samsung Internet</h2>
<p class="no-margin"><img src="images/samsunginternet5.png" alt="Samsung Internet" style="width:37%"></p>
<p class="caption"><a href="http://bit.ly/what-is-samsung-internet">bit.ly/what-is-samsung-internet</a></p>

--

<p class="no-margin"><img alt="ByBox" src="images/bybox-stockonnect.gif" style="width:90%; max-height:calc(100vh - 4em)"/></p>
<p class="caption">[ByBox Stockonnect app by pebble {code} and ByBox](https://www.bybox.com/)</p>

--

<h2>The physical world & the digital world are merging 🔀</h2>
<h2>&nbsp;</h2>

--

<h2>The physical world & the digital world are merging 🔀</h2>
<h2>*...And your smartphone is at the centre* 📱</h2>

--

## Some smart objects may be a bit "out there" 👽

--

<p class="no-margin"><img alt="Smart Scarf" src="images/smart-scarf.jpg" style="width:90%; max-height:calc(100vh - 4em)"/></p>
<p class="caption">[Smart Scarf](https://www.kickstarter.com/projects/679116019/smart-scarf-1st-scarf-that-connects-with-your-phon)</p>


--

## But some are cool 😎

--

<p class="no-margin"><img alt="Anki Overdrive" src="images/anki-overdrive.gif" style="width:90%; max-height:calc(100vh - 4em)"/></p>
<p class="caption">[Anki Overdrive](https://anki.com)</p>

--

## And some can even save lives 🏥

--

<p class="no-margin"><img alt="Smart Monitor SmartWatch" src="images/smart-watch.jpg" style="min-width:80%; max-height:calc(100vh - 4em)"/></p>
<p class="caption">[Smart Monitor](http://smart-monitor.com/) via [wearable-technologies.com](https://www.wearable-technologies.com/2016/05/wearable-can-save-lives/)</p>


--

## Bluetooth Low Energy

<img alt="BLE" src="images/ble-phone.png" style="width:60%"/>

--

<!--<img src="images/ble-logo.png" alt="BLE logo" class="w-200"/>-->
<!--* Can constantly advertise presence-->
<!--* Can last years on coin cell batteries-->
<!--* ~100 kbps throughput (vs 24 Mbps!)-->
<!-- -- -->

<h2>Generic ATTributes (GATT)</h2>
<img src="images/bluetooth-profiles-etc.png" alt="GATT" style="max-height:70vh"/>

--

<img src="images/ble-characteristic-props.png" alt="BLE characteristic properties" width="75%"/>

--

<img src="images/bybox-comms.png" alt="ByBox comms" width="85%"/>

--

<!--## Hex in JavaScript-->
<!--* `0xff === 255`-->
<!--* `parseInt('ff', 16) === 255`-->
<!--* ArrayBuffer, Uint8Array and DataView-->
<!-- [bit.ly/html5-rocks-typed-arrays-guide](http://www.html5rocks.com/en/tutorials/webgl/typed_arrays/) -->
<!-- -- -->

<!--```javascript-->
<!--// Length of 12 bytes-->
<!--let buffer = new ArrayBuffer(12);-->

<!-- // ...Read data into the buffer... -->

<!--let array = new Uint8Array(buffer);-->

<!--// Gives e.g. 255 / 0xff:-->
<!--let my8BitInt = array[0];-->
<!-- ``` -->

<!-- -- -->

<!--```javascript-->
<!--let buffer = new ArrayBuffer(12);-->
<!--let dataView = new DataView(buffer);-->

<!--// Gives e.g. 255 / 0xff:-->
<!--let my8BitInt = dataView.getUint8(0);-->
<!--```-->

<!-- -- -->

* Node *(desktop)*
* React Native *(mobile)* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
* Cordova *(mobile)*<br/><br/>

--

* Node *(desktop)*
* React Native *(mobile)*
* Cordova *(mobile)*
* **Web Bluetooth** *(desktop/mobile)*

--

<img alt="caniuse.com" src="images/web-bluetooth-caniuse.png" style="width:90%"/>
<p class="caption"><a href="http://caniuse.com">caniuse.com</a></p>

--

## Chrome Origin Trial

#### Until late Jan 2017

#### [bit.ly/WebBluetoothOriginTrial](http://bit.ly/WebBluetoothOriginTrial)

--

<img src="images/web-bluetooth-flag.png" alt="Web Bluetooth flag" style="width:90%"/>

Intent to ship in m56: [bit.ly/intent-to-ship-web-bluetooth-chrome](bit.ly/intent-to-ship-web-bluetooth-chrome)

--

```javascript
navigator.bluetooth.requestDevice({
  filters: [{
    name: 'SomeAmazingRobot'
  }],
  optionalServices: ['battery_service']
})
...
```

--

<img src="images/bluetooth-pairing-prompt.png" alt="Bluetooth pairing prompt" style="max-height:calc(100vh - 4em)"/>

--

```javascript
  ...
  .then(device => device.gatt.connect())
  .then(server => server.getPrimaryService('battery_service'))
  .then(service => service.getCharacteristic('battery_level'))
```

--

```javascript
  ...
  .then(characteristic => {
    // Read battery level
    return characteristic.readValue();
  })
  .then(value => {
    var batteryLevel = value.getUint8(0);
    console.log('Battery level', batteryLevel);
  });
```

<div class="caption">[bit.ly/chrome-bluetooth-guide](http://bit.ly/chrome-bluetooth-guide)</div>

-- no-margin

<img alt="BLE peripheral sim app" src="images/ble-peripheral-sim.png" style="min-width:45%"/>
<div class="caption">[bit.ly/ble-peripheral-sim](http://bit.ly/ble-peripheral-sim) (Android)</div>

-- no-margin

<img alt="Bleno" src="images/bleno.png" style="width: 90%"/>
<div class="caption">[github.com/sandeepmistry/bleno](github.com/sandeepmistry/bleno)</div>

--

<img alt="Problems" src="images/ble-battery-demo-probs.png" style="max-width: 80%; max-height: calc(100vh - 5em)"/>
<div class="caption">Problems! [But had a bit of help :)](https://github.com/WebBluetoothCG/ble-test-peripheral-android/issues/68)</div>

--

<button id="btn-battery-demo">Read battery level</button>
<div id="battery-demo-output"></div>

--

## The story of my new demo attempt 📖

--

<img alt="Bluetooth friends" src="images/bluetooth-friends.jpg" width="90%"/>

--

<img alt="Hackaball" src="images/hackaball.jpg" width="90%"/>

--

## Step 1: Exploring 🔍

-- no-margin

<img alt="CySmart" src="images/cysmart.png" style="max-height:calc(100vh - 4em)"/>
<p class="caption">[CySmart with CySmart BLE dongle (Windows)](http://www.cypress.com/documentation/software-and-drivers/cysmart-bluetooth-le-test-and-debug-tool)</p>

-- no-margin

<img alt="Bluetooth apps" src="images/bluetooth-debugging-apps.png" style="max-height:calc(100vh - 4em)"/>
<p class="caption">Bluetooth debugging apps: [LightBlue](https://itunes.apple.com/us/app/lightblue-explorer-bluetooth/id557428110?mt=8), [Bluefruit](https://play.google.com/store/apps/details?id=com.adafruit.bluefruit.le.connect&hl=en), [CySmart](https://play.google.com/store/apps/details?id=com.cypress.cysmart&hl=en)</p>

-- no-margin

<img alt="Bluez" src="images/bluez-hcitool-gatttool-1.png" width="90%"/>
<p class="caption">[BlueZ](http://www.bluez.org/about/)</p>

--

## Step 2: Sniffing 👃

-- no-margin

<img alt="Wireshark" src="images/adafruit-ble-sniff.jpg" style="max-height:calc(100vh - 4em)"/>
<p class="caption">[Wireshark](https://www.wireshark.org/) with [Bluefruit BLE sniffer](https://shop.pimoroni.com/products/adafruit-bluefruit-le-sniffer-ble-4-0-nrf51822-v1-0)</p>

-- no-margin

<img alt="ble-sniffer-osx" src="images/ble-sniffer-osx.png" style="max-height:calc(100vh - 4em)"/>
<p class="caption">[ble-sniffer-osx](https://sourceforge.net/projects/nrfblesnifferosx/)</p>

--

<img alt="Actual Hackaball sniffing" src="images/hackaball-sniffing.png" style="max-height:calc(100vh - 4em)"/>

--

## Step 3: Testing out 🎲

--

<img alt="Bluez" src="images/bluez-hcitool-gatttool-2.png" width="90%"/>

--

## More reverse engineering required ⏪

--

## So here's one I made earlier... 🎁

--

<p class="no-margin"><img src="images/web-drone-screenshot.png" style="max-width:28%" alt="Web Drone Controller"/></p>
<p class="caption">[bit.ly/web-bluetooth-drone](http://bit.ly/web-bluetooth-drone)</p>

--

## In case of demo fail 🔥
### [bit.ly/web-bluetooth-drone-vid](https://youtu.be/gXu3G3cg52k)

--

## Code time ⌚️

--

## *The physical world is <br> now at your command* 🤖

--

<h1>Thanks! 🙏</h1>

<div class="contact">
  <p>Peter O'Shaughnessy</p>
  <p>[@poshaughnessy](https://twitter.com/poshaughnessy)</p>
  <p>[@samsunginternet](https://twitter.com/samsunginternet)</p>
</div>
