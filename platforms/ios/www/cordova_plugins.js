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
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.0.0",
    "com.eface2face.iosrtc": "1.2.8",
    "cordova-plugin-device": "1.0.1",
    "cordova-plugin-crosswalk-webview": "1.3.1"
}
// BOTTOM OF METADATA
});