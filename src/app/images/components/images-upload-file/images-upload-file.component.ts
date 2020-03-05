import {Component, EventEmitter, Injector, Input, Output, ViewChild} from '@angular/core';
import {Files} from '@core/core.models';
import {BaseComponent} from '@core/components/base.component';
import {FileService} from '@images/file.service';
import {Subscription} from 'rxjs';
import {FileBlob, SelectedFile} from '@images/images.models';
// tslint:disable-next-line:max-line-length
import {ImagesCreateFileUploadRequestComponent} from '@images/components/images-create-file-upload-request/images-create-file-upload-request.component';
import UploadedFile = Files.UploadedFile;

@Component({
    selector: 'images-upload-file',
    templateUrl: './images-upload-file.component.html',
    styleUrls: ['./images-upload-file.component.scss'],
})
export class ImagesUploadFileComponent extends BaseComponent {

    @Input()
    entityType: string;
    @Input()
    name: string;
    @Input()
    entity: string;

    @Output()
    fileUploaded = new EventEmitter<UploadedFile>();
    @Output()
    fileReceived = new EventEmitter<FileBlob>();
    @Output()
    fileSelected = new EventEmitter<FileBlob>();

    @Output()
    fileUploadRequestCreated = new EventEmitter<UploadedFile>();

    @ViewChild(ImagesCreateFileUploadRequestComponent, {static: true})
    images_create_file_upload_request_component: ImagesCreateFileUploadRequestComponent;

    image_file_upload_subscription$: Subscription;

    selected_file: SelectedFile;
    file_blob: FileBlob;
    uploaded_file: UploadedFile;

    constructor(protected fileService: FileService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }


    uploadFileFromBlob(file_blob: Blob, file_remote_url: string, content_type: string) {
        this.image_file_upload_subscription$ =
            this.fileService.uploadFile(file_remote_url, file_blob, content_type).subscribe(value => {
                this.fileUploaded.emit(this.uploaded_file);
            }, error => {
                console.log(error);
            });
    }
}

@Component({
    selector: 'images-upload-file-with-preview',
    templateUrl: './images-upload-file-with-preview.component.html',
    styleUrls: ['./images-upload-file.component.scss'],
})
export class ImagesUploadFileWithPreviewComponent extends ImagesUploadFileComponent {
    private win: any = window;

    convertFileSrc(path: string) {
        return this.win.Ionic.WebView.convertFileSrc(path);
    }

}

@Component({
    selector: 'images-upload-file-with-preview-sm',
    templateUrl: './images-upload-file-with-preview-sm.component.html',
    styleUrls: ['./images-upload-file.component.scss'],
})
export class ImagesUploadFileWithPreviewSmComponent extends ImagesUploadFileComponent {
    private win: any = window;

    convertFileSrc(path: string) {
        return this.win.Ionic.WebView.convertFileSrc(path);
    }

}
