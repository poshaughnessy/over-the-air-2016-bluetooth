/**
 * Returns the current page number of the presentation.
 */
function currentPosition() {
  return parseInt(document.querySelector('.slide:not(.hidden)').id.slice(6));
}


/**
 * Navigates forward n pages
 * If n is negative, we will navigate in reverse
 */
function navigate(n) {
  var position = currentPosition();
  var numSlides = document.getElementsByClassName('slide').length;

  /* Positions are 1-indexed, so we need to add and subtract 1 */
  var nextPosition = (position - 1 + n) % numSlides + 1;

  /* Normalize nextPosition in-case of a negative modulo result */
  nextPosition = (nextPosition - 1 + numSlides) % numSlides + 1;

  document.getElementById('slide-' + position).classList.add('hidden');
  document.getElementById('slide-' + nextPosition).classList.remove('hidden');

  updateProgress();
  updateURL();
  updateTabIndex();
  updateDemos();
}


/**
 * Updates the current URL to include a hashtag of the current page number.
 */
function updateURL() {
  window.history.replaceState({} , null, '#' + currentPosition());
}


/**
 * Sets the progress indicator.
 */
function updateProgress() {
  var progressBar = document.querySelector('.progress-bar');

  if (progressBar !== null) {
    var numSlides = document.getElementsByClassName('slide').length;
    var position = currentPosition() - 1;
    var percent = (numSlides === 1) ? 100 : 100 * position / (numSlides - 1);
    progressBar.style.width = percent.toString() + '%';
  }
}


/**
 * Removes tabindex property from all links on the current slide, sets
 * tabindex = -1 for all links on other slides. Prevents slides from appearing
 * out of control.
 */
function updateTabIndex() {
  var allLinks = document.querySelectorAll('.slide a');
  var position = currentPosition();
  var currentPageLinks = document.getElementById('slide-' + position).querySelectorAll('a');
  var i;

  for (i = 0; i < allLinks.length; i++) {
    allLinks[i].setAttribute('tabindex', -1);
  }

  for (i = 0; i < currentPageLinks.length; i++) {
    currentPageLinks[i].removeAttribute('tabindex');
  }
}

/**
 * Determines whether or not we are currently in full screen mode
 */
function isFullScreen() {
  return document.fullscreenElement ||
    document.mozFullScreenElement ||
    document.webkitFullscreenElement ||
    document.msFullscreenElement;
}

/**
 * Toggle fullScreen mode on document element.
 * Works on chrome (>= 15), firefox (>= 9), ie (>= 11), opera(>= 12.1), safari (>= 5).
 */
function toggleFullScreen() {
  /* Convenient renames */
  var docElem = document.documentElement;
  var doc = document;

  docElem.requestFullscreen =
    docElem.requestFullscreen ||
    docElem.msRequestFullscreen ||
    docElem.mozRequestFullScreen ||
    docElem.webkitRequestFullscreen.bind(docElem, Element.ALLOW_KEYBOARD_INPUT);

  doc.exitFullscreen =
    doc.exitFullscreen ||
    doc.msExitFullscreen ||
    doc.mozCancelFullScreen ||
    doc.webkitExitFullscreen;

  isFullScreen() ? doc.exitFullscreen() : docElem.requestFullscreen();
}

document.addEventListener('DOMContentLoaded', function () {
  // Update the tabindex to prevent weird slide transitioning
  updateTabIndex();

  // If the location hash specifies a page number, go to it.
  var page = window.location.hash.slice(1);
  if (page) {
    navigate(parseInt(page) - 1);
  }

  document.onkeydown = function (e) {
    var kc = e.keyCode;

    // left, down, H, J, backspace, PgUp - BACK
    // up, right, K, L, space, PgDn - FORWARD
    // enter - FULLSCREEN
    if (kc === 37 || kc === 40 || kc === 8 || kc === 72 || kc === 74 || kc === 33) {
      navigate(-1);
    } else if (kc === 38 || kc === 39 || kc === 32 || kc === 75 || kc === 76 || kc === 34) {
      navigate(1);
    } else if (kc === 13) {
      toggleFullScreen();
    }
  };

  if (document.querySelector('.next') && document.querySelector('.prev')) {
    document.querySelector('.next').onclick = function (e) {
      e.preventDefault();
      navigate(1);
    };

    document.querySelector('.prev').onclick = function (e) {
      e.preventDefault();
      navigate(-1);
    };
  }
});

/**
 * Swipe handling added by Peter
 */

var SWIPE_X_MIN = 50,
    startX;

document.body.addEventListener('touchstart', function(e) {
  e.preventDefault();
  var touch = e.touches[0];
  startX = touch.screenX;
}, false);

document.body.addEventListener('touchend', function(e) {
  e.preventDefault();
  var touch = e.changedTouches[0];
  var swipeXDist = touch.screenX - startX;
  if (swipeXDist < -SWIPE_X_MIN) {
    // Swipe to left = move right
    navigate(1);
  } else if (swipeXDist > SWIPE_X_MIN) {
    // Swipe to right = move left
    navigate(-1);
  }
}, false);

/**
 * Custom demos added by Peter
 */

var batteryDemoButton = document.getElementById('btn-battery-demo');

batteryDemoButton.addEventListener('click', bleBatteryDemo, false);

function isElementVisible(el) {
  return el.offsetParent !== null;
}

function updateDemos() {
  // If we want to make things happen on slide change we can add that here (using isElementVisible)
}

function bleBatteryDemo() {

  if (!navigator.bluetooth) {
    return;
  }

  navigator.bluetooth.requestDevice({
      filters: [{ services: ['battery_service'] }]
    })
    .then(function(device) {
      console.log('Device', device.name);
      return device.gatt.connect();
    })
    .then(function(server) {
      console.log('Server', server);
      return server.getPrimaryService('battery_service');
    })
    .then(function(service) {
      console.log('Service', service);
      return service.getCharacteristic('battery_level');
    })
    .then(function(characteristic) {
      console.log('Characteristic', characteristic);
      return characteristic.readValue();
    })
    .then(function(value) {
      console.log('Value', value);
      var batteryLevel = value.getUint8(0);
      console.log('Battery level', batteryLevel);
    })
    .catch(function(err) {
      console.error('Bluetooth error', err);
    });
}
