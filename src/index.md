title: Web Bluetooth in Action
output: public/index.html
style: styles.css
script: script.js
controls: false

--

# Web Bluetooth <br> in Action

<img src="images/ble-logo.png" alt="BLE logo" class="w-100"/>

<div class="group-closer">
  <p>Peter O'Shaughnessy</p>
  <p>[@poshaughnessy](https://twitter.com/poshaughnessy)</p>
</div>

--

<h2>Samsung Internet</h2>
<p class="no-margin"><img src="images/samsunginternet5.png" alt="Samsung Internet" width="40%"></p>
<p class="caption"><a href="http://bit.ly/what-is-samsung-internet">bit.ly/what-is-samsung-internet</a></p>

--

<p class="media-container fill-h">![ByBox](images/bybox-stockonnect.gif)</p>
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

<p class="media-container fill-h">![Smart Scarf](images/smart-scarf.jpg)</p>

--

## But some are fun...

--

<p class="media-container fill-h">![Anki Overdrive](images/anki-overdrive.gif)</p>
<p class="caption">[Anki Overdrive](https://anki.com)</p>

--

## And some can even save lives

--

<p class="media-container fill-h">![Smart Monitor SmartWatch](images/smart-watch.jpg)</p>
<p class="caption">[Smart Monitor](http://smart-monitor.com/) via [wearable-technologies.com](https://www.wearable-technologies.com/2016/05/wearable-can-save-lives/)</p>


--

## Bluetooth Low Energy

![BLE](images/ble-phone.png)

--

<!--<img src="images/ble-logo.png" alt="BLE logo" class="w-200"/>-->
<!--* Can constantly advertise presence-->
<!--* Can last years on coin cell batteries-->
<!--* ~100 kbps throughput (vs 24 Mbps!)-->
<!-- -- -->

<h2>Generic ATTributes (GATT)</h2>
<p class="media-container"><img src="images/bluetooth-profiles-etc.png" alt="GATT" width="40%"/></p>

--

<p class="media-container"><img src="images/ble-characteristic-props.png" alt="BLE characteristic properties" width="75%"/></p>

--

<p class="media-container fill-w">![BLE comms](images/bybox-comms.png)</p>

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

* Node *(desktop, native)*
* React Native *(mobile, native/hybrid)* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
* Cordova *(mobile, hybrid)*

--

* Node *(desktop, native)*
* React Native *(mobile, native/hybrid)*
* Cordova *(mobile, hybrid)*
* **Web Bluetooth** *(desktop/mobile, web)*

--

![caniuse.com](images/web-bluetooth-caniuse.png)
<p class="caption">caniuse.com</p>

--

## Chrome Origin Trial

Until late Jan 2017

[bit.ly/WebBluetoothOriginTrial](http://bit.ly/WebBluetoothOriginTrial)

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

<p class="media-container fill-h"><img src="images/bluetooth-pairing-prompt.png" alt="Bluetooth pairing prompt"/></p>

--

```javascript
  ...
  .then(device => device.connectGATT())
  .then(server => server.getPrimaryService('batt_service'))
  .then(service => service.getCharacteristic('batt_level'))
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

<p class="media-container">![Bluetooth friends](images/bluetooth-friends.jpg)</p>

--

<p class="media-container fill-h">![CySmart](images/cysmart.png)</p>
<p class="caption">[CySmart with CySmart BLE dongle (Windows)](http://www.cypress.com/documentation/software-and-drivers/cysmart-bluetooth-le-test-and-debug-tool)</p>

--

<p class="media-container">![CySmart app](images/bluetooth-debugging-apps.png)</p>
<p class="caption">Bluetooth debugging apps: LightBlue, Bluefruit, CySmart</p>

--

<p class="media-container fill-h">![Wireshark](images/adafruit-ble-sniff.jpg)</p>
<p class="caption">[Wireshark](https://www.wireshark.org/) with [Bluefruit BLE sniffer](https://shop.pimoroni.com/products/adafruit-bluefruit-le-sniffer-ble-4-0-nrf51822-v1-0)</p>

--

## So here's one I made earlier...

--

<h2>Demo</h2>
<p class="no-margin"><img src="images/web-drone-screenshot.png" width="30%" alt="Web Drone Controller"/></p>
<p class="caption">[bit.ly/web-bluetooth-drone](http://bit.ly/web-bluetooth-drone)</p>

--

<h2>In case of demo fail</h2>
[bit.ly/web-bluetooth-drone-vid](https://youtu.be/gXu3G3cg52k)

--

<h2>Code time</h2>

--

<h2>The physical world is now at your command.</h2>

--

<h1>Thanks!</h1>

<div class="group-closer">
  <p>Peter O'Shaughnessy</p>
  <p>[@poshaughnessy](https://twitter.com/poshaughnessy)</p>
  <p>[@samsunginternet](https://twitter.com/samsunginternet)</p>
</div>
