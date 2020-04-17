import {Component, EventEmitter, Injector, Output} from '@angular/core';
import {SelectedFile} from '@images/images.models';
import {BaseComponent} from '@core/components/base.component';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import {ImagesConstants} from '@images/images.constants';

@Component({
  selector: 'images-capture-photo',
  templateUrl: './images-capture-photo.component.html',
  styleUrls: ['./images-capture-photo.component.scss'],
})
export class ImagesCapturePhotoComponent extends BaseComponent {

  nativeCamera: Camera;

  @Output()
  fileSelected = new EventEmitter<SelectedFile>();

  constructor(injector: Injector) {
    super(injector);
    this.nativeCamera = injector.get(Camera);
  }

  initializeComponent() {
  }

  takePicture(options?: CameraOptions) {
    this.nativeCamera.getPicture(options || ImagesConstants.PHOTO_CAMERA_OPTIONS)
        .then(imagePath => {
          const currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
          this.fileSelected.emit({file_url: imagePath, file_name: currentName});
        });
  }
}

@Component({
  selector: 'images-capture-photo-no-template',
  template: '',
  styleUrls: ['./images-capture-photo.component.scss'],
})
export class ImagesCapturePhotoNoTemplateComponent extends ImagesCapturePhotoComponent {
}
