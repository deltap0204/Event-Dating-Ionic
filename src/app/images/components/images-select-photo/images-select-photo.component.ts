import {Component, EventEmitter, Injector, Output} from '@angular/core';
import {BaseComponent} from '@core/components/base.component';
import {SelectedFile} from '@images/images.models';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import {CommonsService} from '@core/commons.service';
import {ImagesConstants} from '@images/images.constants';

@Component({
    selector: 'images-select-photo',
    templateUrl: './images-select-photo.component.html',
    styleUrls: ['./images-select-photo.component.scss'],
})
export class ImagesSelectPhotoComponent extends BaseComponent {

    nativeCamera: Camera;

    @Output()
    fileSelected = new EventEmitter<SelectedFile>();

    constructor(injector: Injector) {
        super(injector);
        this.nativeCamera = injector.get(Camera);
    }

    initializeComponent() {
    }

    uploadFromPhotoLibrary(options?: CameraOptions) {
        this.nativeCamera.getPicture(options || ImagesConstants.PHOTO_PHOTOLIBRARY_OPTIONS)
            .then(imagePath => {
                const currentName = CommonsService.parseFilePath(imagePath);
                console.log(currentName);
                this.fileSelected.emit({
                    file_url: imagePath,
                    file_name: currentName.basename.substr(0, currentName.basename.indexOf('?'))
                });
            });
    }
}

@Component({
    selector: 'images-select-photo-no-template',
    template: '',
    styleUrls: ['./images-select-photo.component.scss'],
})
export class ImagesSelectPhotoNoTemplateComponent extends ImagesSelectPhotoComponent {
}
