import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  start() {
    // read more at https://github.com/capacitor-community/camera-preview#startoptions
  }
  stop() {
    // read more at https://github.com/capacitor-community/camera-preview#stop
  }

  flip() {
    // read more at https://github.com/capacitor-community/camera-preview#flip
  }

  captureSample() {
    // read more at https://github.com/capacitor-community/camera-preview#capturesampleoptions
  }

  getSupportedFlashModes() {
    // read more at https://github.com/capacitor-community/camera-preview#getsupportedflashmodes
  }

  setFlashMode() {
    // read more at https://github.com/capacitor-community/camera-preview#setflashmodeoptions
  }

  startRecordVideo() {
    // read more at https://github.com/capacitor-community/camera-preview#startrecordvideooptions-------android-only
    // Note: according to docs it's Android only feature
  }

  stopRecordVideo() {
    // read more at https://github.com/capacitor-community/camera-preview#stoprecordvideo-------android-only
    // Note: according to docs it's Android only feature
  }

  setOpacity() {
    // read more at https://github.com/capacitor-community/camera-preview#setopacityoptions-cameraopacityoptions-promise-------android-only
    // Note: according to docs it's Android only feature
  }
}
