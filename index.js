'use strict';

var osxDefaults = require('osx-defaults');

var IR_DOMAIN = '/Library/Preferences/com.apple.driver.AppleIRController';
var LAUNCH_DOMAIN = 'com.apple.LaunchServices';

module.exports = {
  disableIrReceiver: function disableIrReceiver(callback){
    osxDefaults.set(IR_DOMAIN, 'DeviceEnabled', 0, callback);
  },
  disableAppQuarantine: function disableAppQuarantine(callback){
    osxDefaults.set(LAUNCH_DOMAIN, 'LSQuarantine', 0, callback);
  },
};
