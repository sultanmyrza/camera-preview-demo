## Test results for ["@capacitor-community/camera-preview": "^2.0.0"](https://github.com/capacitor-community/camera-preview) plugin.

## On iOS:

- CameraPreview.start() ✅
- CameraPreview.stop() ✅
- CameraPreview.flip() ✅
- CameraPreview.capture() ✅
- CameraPreview.captureSample() ✅
- CameraPreview.getSupportedFlashModes() ✅
- CameraPreview.setFlashMode() ❌
  - `throws {"message":"failed to set flash mode","errorMessage":"failed to set flash mode"}`
- CameraPreview.startRecordVideo(options) ❌
  - `Property 'startRecordVideo' does not exist on type 'CameraPreviewPlugin'`
- CameraPreview.stopRecordVideo() ❌
  - `Property 'stopRecordVideo' does not exist on type 'CameraPreviewPlugin'`
- CameraPreview.setOpacity() ❌

## On Android:

- CameraPreview.start() ✅
- CameraPreview.stop() ✅
- CameraPreview.flip() ✅
- CameraPreview.capture() ✅
- CameraPreview.captureSample() ✅
- CameraPreview.getSupportedFlashModes() ☢️
  - return empty array expected: ["on", "off", "auto"]
- CameraPreview.setFlashMode() ❌
  - crashes the app
- CameraPreview.startRecordVideo(options) ❌
  - `Property 'startRecordVideo' does not exist on type 'CameraPreviewPlugin'`
- CameraPreview.stopRecordVideo() ❌
  - `Property 'stopRecordVideo' does not exist on type 'CameraPreviewPlugin'`
- CameraPreview.setOpacity() ❌

NOTE: on Android Front Camera is too zoomed in
