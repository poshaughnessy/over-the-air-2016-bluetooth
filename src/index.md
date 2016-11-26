title: Web Bluetooth in Action
output: public/index.html
theme: peter-theme
controls: true

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

## But some are fun 🎮

--

<p class="no-margin"><img alt="Anki Overdrive" src="images/anki-overdrive.gif" style="width:90%; max-height:calc(100vh - 4em)"/></p>
<p class="caption">[Anki Overdrive](https://anki.com)</p>

--

## And some can even save lives 🏥

--

<p class="no-margin"><img alt="Smart Monitor SmartWatch" src="images/smart-watch.jpg" style="min-width:80%; max-height:calc(100vh - 4em)"/></p>
<p class="caption">[Smart Monitor](http://smart-monitor.com/) via [wearable-technologies.com](https://www.wearable-technologies.com/2016/05/wearable-can-save-lives/)</p>


--

## Bluetooth Low Energy (BLE)

<img alt="BLE" src="images/ble-phone.png" style="width:60%"/>

--

<h2>Generic ATTributes (GATT)</h2>
<img src="images/bluetooth-profiles-etc.png" alt="GATT" style="max-height:70vh"/>

--

<img src="images/ble-characteristic-props.png" alt="BLE characteristic properties" width="75%"/>

--

<img src="images/bybox-comms.png" alt="ByBox comms" width="85%"/>

--

* Node *(desktop)*
* React Native *(mobile)*
* Cordova *(mobile)*
* **Web Bluetooth** *(desktop/mobile)*

--

<img alt="caniuse.com" src="images/web-bluetooth-caniuse.png" style="width:90%"/>
<p class="caption"><a href="http://caniuse.com">caniuse.com</a></p>

--

<img src="images/web-bluetooth-flag.png" alt="Web Bluetooth flag" style="width:90%"/>

Intent to ship in m56: [bit.ly/intent-to-ship-web-bluetooth-chrome](bit.ly/intent-to-ship-web-bluetooth-chrome)

--

## Chrome Origin Trial

#### Until late Jan 2017

#### [bit.ly/WebBluetoothOriginTrial](http://bit.ly/WebBluetoothOriginTrial)

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

--

* 8 bits
* = 1 byte
* = 0-255
* = 2 hex characters (`0xFF === 255`)

-- no-margin

<img alt="BLE peripheral sim app" src="images/ble-peripheral-sim.png" style="min-width:45%"/>
<div class="caption">[bit.ly/ble-peripheral-sim](http://bit.ly/ble-peripheral-sim) (Android)</div>

-- no-margin

<img alt="Bleno" src="images/bleno.png" style="width: 90%"/>
<div class="caption">[github.com/sandeepmistry/bleno](github.com/sandeepmistry/bleno)</div>

--

<img alt="Problems" src="images/ble-battery-demo-probs.png" style="max-width: 80%; max-height: calc(100vh - 5em)"/>
<div class="caption">*Problems! [But had a bit of help :)](https://github.com/WebBluetoothCG/ble-test-peripheral-android/issues/68)*</div>

--

<button id="btn-battery-demo">Read battery level</button>
<div id="battery-demo-output"></div>

--

## The story of my new demo attempt 📖

--

<img alt="Bluetooth friends" src="images/bluetooth-friends.jpg" width="90%"/>

--

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">THEY TRIED TO MAKE ME GO TO DALEK REHAB. I SAID... <a href="https://t.co/fouAcwl02g">pic.twitter.com/fouAcwl02g</a></p>&mdash; Peter&#39;s Dalek (@petersdalek) <a href="https://twitter.com/petersdalek/status/759788828030676992">July 31, 2016</a></blockquote>

--

<video controls width="30%">
  <source src="videos/ScaryDinoRobot.webm"/>
  <source src="videos/ScaryDinoRobot.mp4"/>
</video>

-- no-margin

<img alt="Hackaball" src="images/hackaball.jpg" width="90%"/>
<p class="caption">[hackaball.com](http://www.hackaball.com/)</p>

--

## Step 1: Exploring 🔍

-- no-margin

<img alt="CySmart" src="images/cysmart.png" style="max-height:calc(100vh - 4em)"/>
<p class="caption">[CySmart with CySmart BLE dongle (Windows)](http://www.cypress.com/documentation/software-and-drivers/cysmart-bluetooth-le-test-and-debug-tool)</p>

-- no-margin

<img alt="Bluetooth apps" src="images/bluetooth-debugging-apps.png" style="max-height:calc(100vh - 4em)"/>
<p class="caption">Bluetooth debugging apps: [LightBlue](https://itunes.apple.com/us/app/lightblue-explorer-bluetooth/id557428110?mt=8), [Bluefruit](https://play.google.com/store/apps/details?id=com.adafruit.bluefruit.le.connect&hl=en), [CySmart](https://play.google.com/store/apps/details?id=com.cypress.cysmart&hl=en)</p>

-- no-margin

<img alt="Bluefruit app (Android)" src="images/bluefruit-info.png" style="max-height:calc(100vh - 4em)"/>
<p class="caption">Bluefruit (Android)</p>

-- no-margin

<img alt="Bluez" src="images/bluez-hcitool-gatttool-1.png" width="90%"/>
<p class="caption">[BlueZ](http://www.bluez.org/about/)</p>

-- no-margin

<img alt="Bluez" src="images/bluez-hcitool-gatttool-zoom1.png" width="90%"/>
<p class="caption">[BlueZ](http://www.bluez.org/about/)</p>

-- no-margin

<img alt="Bluez" src="images/bluez-hcitool-gatttool-zoom2.png" width="90%"/>
<p class="caption">[BlueZ](http://www.bluez.org/about/)</p>

-- no-margin

<img alt="Bluez" src="images/bluez-hcitool-gatttool-zoom3.png" width="90%"/>
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

<img alt="Hackaball advertising" src="images/advertising.png" style="max-height:calc(100vh - 4em)"/>

--

<img alt="Hackaball advertising" src="images/advertising-zoom.png" style="max-height:calc(100vh - 4em)"/>

--

<img alt="Hackaball scan response" src="images/scan-response.png" style="max-height:calc(100vh - 4em)"/>

--

<img alt="Hackaball scan response" src="images/scan-response-zoom.png" style="max-height:calc(100vh - 4em)"/>

--

<img alt="A Hackaball command" src="images/hackaball-sniffing.png" style="max-height:calc(100vh - 4em)"/>

--

<img alt="A Hackaball command" src="images/hackaball-sniffing-zoom.png" style="max-height:calc(100vh - 4em)"/>

--

<img alt="Bluez" src="images/bluez-hcitool-gatttool-zoom4.png" width="90%"/>

--

## Step 3: Testing out 🎲

--

<img alt="Bluez" src="images/bluez-hcitool-gatttool-zoom5.png" width="90%"/>

--

## More reverse engineering required ⏪

--

## So here's one I made earlier... 🎁

--

<img alt="Parrot mini drone" src="images/min-drone.jpg" style="max-height:calc(100vh - 4em)"/>

#### [bit.ly/web-bluetooth-drone](http://bit.ly/web-bluetooth-drone)

--

<p class="no-margin"><img src="images/web-drone-screenshot.png" style="max-width:28%" alt="Web Drone Controller"/></p>
<p class="caption">[https://webdr.one](https://webdr.one)</p>

--

## In case of demo fail 🔥
### [bit.ly/web-bluetooth-drone-vid](https://youtu.be/gXu3G3cg52k)

--

## Quick code peek 👀

--

## *The physical world <br> is at our command* 🤖

--

<h1>Thanks! 🙏</h1>

<div class="contact">
  <p>Peter O'Shaughnessy</p>
  <p>[@poshaughnessy](https://twitter.com/poshaughnessy)</p>
  <p>[@samsunginternet](https://twitter.com/samsunginternet)</p>
</div>
