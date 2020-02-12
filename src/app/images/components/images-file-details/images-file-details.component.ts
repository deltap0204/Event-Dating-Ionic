import {Component, EventEmitter, Injector, Input, OnInit, Output} from '@angular/core';
import {BaseComponent} from '@core/components/base.component';
import {Files} from '@core/core.models';
import UploadedFile = Files.UploadedFile;
import {FileRequests} from '@images/images.models';
import GetUploadedFile = FileRequests.GetUploadedFile;
import {ImagesService} from '@images/images.service';
import {CommonsService} from '@core/commons.service';

@Component({
    selector: 'images-file-details',
    templateUrl: './images-file-details.component.html',
    styleUrls: ['./images-file-details.component.scss'],
})
export class ImagesFileDetailsComponent extends BaseComponent {

    @Input()
    uploadedFile: UploadedFile;
    @Input()
    uploadedFileId: string;
    @Input()
    alt: string;

    @Output()
    uploadedFileReceived = new EventEmitter<UploadedFile>();

    constructor(protected fileService: ImagesService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
        this.makeServiceCallWithIdIfObjectNull(this.uploadedFile, this.createRequestData(), this.getUploadedFile);
    }

    createRequestData(uploaded_file_id?: string): GetUploadedFile.Request {
        const request = new GetUploadedFile.Request();
        request.fileId = uploaded_file_id || this.uploadedFileId;

        return request;
    }

    getUploadedFile = (request: GetUploadedFile.Request) => {
        this.fileService.getUploadedFile(request).pipe(CommonsService.deserializeMap(UploadedFile)).subscribe(value => {
            this.uploadedFile = value;
            this.uploadedFileReceived.emit(value);
        });
    }

}

@Component({
  selector: 'images-file-details-sm',
  templateUrl: './images-file-details-sm.component.html',
  styleUrls: ['./images-file-details.component.scss'],
})
export class ImagesFileDetailsSmComponent extends ImagesFileDetailsComponent {
}

@Component({
    selector: 'images-file-details-md-with-delete',
    templateUrl: './images-file-details-md-with-delete.component.html',
    styleUrls: ['./images-file-details.component.scss'],
})
export class ImagesFileDetailsMdWithDeleteComponent extends ImagesFileDetailsComponent {

    @Output()
    uploadedFileDeleted = new EventEmitter<boolean>();

}


@Component({
  selector: 'images-file-details-xl',
  templateUrl: './images-file-details-xl.component.html',
  styleUrls: ['./images-file-details.component.scss'],
})
export class ImagesFileDetailsXlComponent extends ImagesFileDetailsComponent {
}
