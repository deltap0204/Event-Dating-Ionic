import {Component, EventEmitter, Injector, Output, ViewChild} from '@angular/core';
import {BaseComponent} from '@core/components/base.component';
import {ActionSheetController} from '@ionic/angular';
import {FileBlob, SelectedFile} from '@images/images.models';
import {ImagesSelectPhotoNoTemplateComponent} from '@images/components/images-select-photo/images-select-photo.component';
import {ImagesCapturePhotoNoTemplateComponent} from '@images/components/images-capture-photo/images-capture-photo.component';
import {PhotoViewer} from '@ionic-native/photo-viewer/ngx';
import {File} from '@ionic-native/file';

@Component({
  selector: 'images-select-file',
  templateUrl: './images-select-file.component.html',
  styleUrls: ['./images-select-file.component.scss'],
})
export class ImagesSelectFileComponent extends BaseComponent {

  actionSheetController: ActionSheetController;

  @Output()
  fileSelected = new EventEmitter<SelectedFile>();
  @Output()
  fileReceived = new EventEmitter<FileBlob>();

  selected_file: SelectedFile;

  photo_viewer: PhotoViewer;

  @ViewChild(ImagesSelectPhotoNoTemplateComponent, {static: true})
  private images_select_photo_no_template_component: ImagesSelectPhotoNoTemplateComponent;

  @ViewChild(ImagesCapturePhotoNoTemplateComponent, {static: true})
  private images_capture_photo_no_template_component: ImagesCapturePhotoNoTemplateComponent;

  // copied from
  // https://devdactic.com/ionic-4-image-upload-storage/

  constructor(injector: Injector) {
    super(injector);
    this.photo_viewer = injector.get(PhotoViewer);
    this.actionSheetController = injector.get(ActionSheetController);
    this.fileSelected.subscribe(selected_file => {
      this.makeFileUrlIntoFile(selected_file.file_url);
    });
  }

  initializeComponent() {
  }

  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Select Image source',
      keyboardClose: true,
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.images_select_photo_no_template_component.uploadFromPhotoLibrary();
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.images_capture_photo_no_template_component.takePicture();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    await actionSheet.present();
  }

  makeFileUrlIntoFile(imagePath) {
    File.resolveLocalFilesystemUrl(imagePath).then((fileEntry) => {
// @ts-ignore
      fileEntry.file((resFile) => {
        console.log(resFile);
        this.readFile(resFile);
      });
    });
  }

  readFile(file: any) {
    const reader = new FileReader();
    reader.onloadend = () => {
      const imgBlob = new Blob([reader.result], {
        type: file.type
      });
      this.fileReceived.emit({file: file, blob: imgBlob});
    };
    reader.readAsArrayBuffer(file);
  }

  showFullView() {
    this.photo_viewer.show(this.selected_file.file_url, this.selected_file.file_name);
  }
}

@Component({
  selector: 'images-select-file-only-button',
  templateUrl: './images-select-file-only-button.component.html',
  styleUrls: ['./images-select-file.component.scss'],
})
export class ImagesSelectFileOnlyButtonComponent extends ImagesSelectFileComponent {
}

@Component({
  selector: 'images-select-file-no-template',
  templateUrl: './images-select-file-no-template.component.html',
  styleUrls: ['./images-select-file.component.scss'],
})
export class ImagesSelectFileNoTemplateComponent extends ImagesSelectFileComponent {
}