import { Component } from '@angular/core';
import {
  CameraPreview,
  CameraPreviewFlashMode,
  CameraPreviewOptions,
  CameraPreviewPictureOptions,
  CameraSampleOptions,
} from '@capacitor-community/camera-preview';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private readonly alertCtrl: AlertController) {}

  private async showModalWithImage(imageBlob: string) {
    const alert = await this.alertCtrl.create({
      cssClass: 'alert-message-with',
      header: 'Success',
      subHeader: 'Your image',
      message: `<img src="${imageBlob}"  loading="lazy" decoding="async">`,
      buttons: ['OK'],
    });
    await alert.present();
    await alert.onDidDismiss();
  }

  start() {
    // read more at https://github.com/capacitor-community/camera-preview#startoptions
    const options: CameraPreviewOptions = {
      position: 'front',
      toBack: true,
      enableHighResolution: true,
    };
    CameraPreview.start(options);
  }
  stop() {
    // read more at https://github.com/capacitor-community/camera-preview#stop
    CameraPreview.stop();
  }

  flip() {
    // read more at https://github.com/capacitor-community/camera-preview#flip
    CameraPreview.flip();
  }

  async capture() {
    // read more at https://github.com/capacitor-community/camera-preview#captureoptions
    const options: CameraPreviewPictureOptions = { quality: 100 };
    const result = await CameraPreview.capture(options);
    const base64PictureData = result.value;
    const imageBlob = `data:image/jpeg;base64,${base64PictureData}`;
    this.showModalWithImage(imageBlob);
  }

  async captureSample() {
    // read more at https://github.com/capacitor-community/camera-preview#capturesampleoptions
    const options: CameraSampleOptions = { quality: 50 };
    const result = await CameraPreview.capture(options);
    const base64PictureData = result.value;
    const imageBlob = `data:image/jpeg;base64,${base64PictureData}`;
    this.showModalWithImage(imageBlob);
  }

  async getSupportedFlashModes() {
    // read more at https://github.com/capacitor-community/camera-preview#getsupportedflashmodes
    const flashModes = await CameraPreview.getSupportedFlashModes();
    const supportedFlashModes: CameraPreviewFlashMode[] = flashModes.result;
    alert(JSON.stringify(supportedFlashModes));
  }

  async setFlashMode() {
    // read more at https://github.com/capacitor-community/camera-preview#setflashmodeoptions
    const flashMode: CameraPreviewFlashMode = 'torch';
    try {
      await CameraPreview.setFlashMode({ flashMode });
    } catch (error) {
      alert(JSON.stringify(error));
    }
  }

  startRecordVideo() {
    // read more at https://github.com/capacitor-community/camera-preview#startrecordvideooptions-------android-only
    // Note: according to docs it's Android only feature
    const options: CameraPreviewOptions = { position: 'front', toBack: true };
    // CameraPreview.startRecordVideo(options);
    const errMsg = `Property 'startRecordVideo' does not exist on type 'CameraPreviewPlugin'`;
    alert(errMsg);
  }

  async stopRecordVideo() {
    // read more at https://github.com/capacitor-community/camera-preview#stoprecordvideo-------android-only
    // Note: according to docs it's Android only feature
    // const resultRecordVideo = await CameraPreview.stopRecordVideo();
    const errMsg = `Property 'stopRecordVideo' does not exist on type 'CameraPreviewPlugin'`;
    alert(errMsg);
  }

  async setOpacity() {
    // read more at https://github.com/capacitor-community/camera-preview#setopacityoptions-cameraopacityoptions-promise-------android-only
    // Note: according to docs it's Android only feature
    // const myCamera = await CameraPreview.start({ enableOpacity: true });
    // myCamera.setOpacity({ opacity: 0.4 });
    alert('Not implemented');
  }
}
