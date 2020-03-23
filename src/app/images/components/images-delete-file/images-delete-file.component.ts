import {Component, EventEmitter, Injector, Input, OnInit, Output} from '@angular/core';
import {BaseComponent} from '@core/components/base.component';
import {ImagesService} from '@images/images.service';
import {Files} from '@core/core.models';
import UploadedFile = Files.UploadedFile;
import {FileRequests} from '@images/images.models';
import DeleteUploadedFile = FileRequests.DeleteUploadedFile;

@Component({
    selector: 'images-delete-file',
    templateUrl: './images-delete-file.component.html',
    styleUrls: ['./images-delete-file.component.scss'],
})
export class ImagesDeleteFileComponent extends BaseComponent {

    @Input()
    uploadedFile: UploadedFile;

    @Output()
    uploadedFileDeleted = new EventEmitter<boolean>();

    constructor(protected filesService: ImagesService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

    createRequestData(uploaded_file?: UploadedFile): DeleteUploadedFile.Request {
        const request = new DeleteUploadedFile.Request();
        request.fileId = (uploaded_file || this.uploadedFile)._id;

        return request;
    }

    deleteUploadedFile(request: DeleteUploadedFile.Request) {
        this.filesService.deleteUploadedFile(request).subscribe(value => {
            this.uploadedFileDeleted.emit(true);
        });
    }
}
