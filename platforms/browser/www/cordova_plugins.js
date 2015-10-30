cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.eface2face.iosrtc/dist/cordova-plugin-iosrtc.js",
        "id": "com.eface2face.iosrtc.Plugin",
        "clobbers": [
            "cordova.plugins.iosrtc"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/src/browser/DeviceProxy.js",
        "id": "cordova-plugin-device.DeviceProxy",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.eface2face.iosrtc": "1.2.8",
    "cordova-plugin-crosswalk-webview": "1.3.1",
    "cordova-plugin-device": "1.0.1",
    "cordova-plugin-whitelist": "1.0.0"
}
// BOTTOM OF METADATA
});