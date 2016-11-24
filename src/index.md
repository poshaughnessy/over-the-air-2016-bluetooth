title: Web Bluetooth in Action
output: public/index.html
theme: peter-theme
controls: false

--

# Web Bluetooth <br> in Action

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

<h2>The physical world & the digital world are merging...</h2>
<h2>&nbsp;</h2>

--

<h2>The physical world & the digital world are merging...</h2>
<h2>*...And your smartphone is at the centre.*</h2>

--

## Some smart objects may be ridiculous...

--

<p class="no-margin"><img alt="Smart Scarf" src="images/smart-scarf.jpg" style="width:90%; max-height:calc(100vh - 4em)"/></p>
<p class="caption">[Smart Scarf](https://www.kickstarter.com/projects/679116019/smart-scarf-1st-scarf-that-connects-with-your-phon)</p>


--

## But some are fun...

--

<p class="no-margin"><img alt="Anki Overdrive" src="images/anki-overdrive.gif" style="width:90%; max-height:calc(100vh - 4em)"/></p>
<p class="caption">[Anki Overdrive](https://anki.com)</p>

--

## And some can even save lives

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
<img src="images/bluetooth-profiles-etc.png" alt="GATT" style="height:55%"/>

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
  .then(characteristic => {
    // Read battery level
    return characteristic.readValue();
  })
  .then(value => {
    let batteryLevel = value.getUint8(0);
    console.log(`Battery level: ${batteryLevel}`);
  });
```

<div class="caption">[bit.ly/chrome-bluetooth-guide](http://bit.ly/chrome-bluetooth-guide)</div>

--

## The (sad) story of my OTA demo...

--

<img alt="Bluetooth friends" src="images/bluetooth-friends.jpg" width="90%"/>

--

<p class="no-margin"><img alt="CySmart" src="images/cysmart.png" style="max-height:calc(100vh - 4em)"/></p>
<p class="caption">[CySmart with CySmart BLE dongle (Windows)](http://www.cypress.com/documentation/software-and-drivers/cysmart-bluetooth-le-test-and-debug-tool)</p>

--

<p class="no-margin"><img alt="Bluetooth apps" src="images/bluetooth-debugging-apps.png" style="max-height:calc(100vh - 4em)"/></p>
<p class="caption">Bluetooth debugging apps: LightBlue, Bluefruit, CySmart</p>

--

<p class="no-margin"><img alt="Wireshark" src="images/adafruit-ble-sniff.jpg" style="max-height:calc(100vh - 4em)"/></p>
<p class="caption">[Wireshark](https://www.wireshark.org/) with [Bluefruit BLE sniffer](https://shop.pimoroni.com/products/adafruit-bluefruit-le-sniffer-ble-4-0-nrf51822-v1-0)</p>

--

## So here's one I made earlier...

--

<p class="no-margin"><img src="images/web-drone-screenshot.png" style="max-width:28%" alt="Web Drone Controller"/></p>
<p class="caption">[bit.ly/web-bluetooth-drone](http://bit.ly/web-bluetooth-drone)</p>

--

## In case of demo fail
### [bit.ly/web-bluetooth-drone-vid](https://youtu.be/gXu3G3cg52k)

--

## Code time

--

## *The physical world is now at your command*

--

<h1>Thanks!</h1>

<div class="group-closer">
  <p>Peter O'Shaughnessy</p>
  <p>[@poshaughnessy](https://twitter.com/poshaughnessy)</p>
  <p>[@samsunginternet](https://twitter.com/samsunginternet)</p>
</div>
