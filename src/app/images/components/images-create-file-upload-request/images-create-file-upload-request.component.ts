import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {BaseComponent} from '@core/components/base.component';
import {ImagesService} from '@images/images.service';
import {FileRequests} from '@images/images.models';
import {CommonsService} from '@core/commons.service';
import {Files} from '@core/core.models';
import CreateFileUploadRequest = FileRequests.CreateFileUploadRequest;
import UploadedFile = Files.UploadedFile;

@Component({
    selector: 'images-create-file-upload-request',
    templateUrl: './images-create-file-upload-request.component.html',
    styleUrls: ['./images-create-file-upload-request.component.scss'],
})
export class ImagesCreateFileUploadRequestComponent extends BaseComponent {

    @Input()
    entityType: string;
    @Input()
    name: string;
    @Input()
    entity: string;

    @Output()
    fileUploadRequestCreated = new EventEmitter<UploadedFile>();

    constructor(protected imagesService: ImagesService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

    createRequestData(name?: string, type?: string, entity_type?: string,
                      entity?: string): CreateFileUploadRequest.Request {
        const request = new CreateFileUploadRequest.Request();
        request.entityType = entity_type || this.entityType;
        request.entity = entity || this.entity;
        request.name = name || this.name;
        request.type = this.getFileContentType(request.name);

        return request;
    }

    getFileContentType(file_name: string): string {
        return CommonsService.getFileContentType(file_name);
    }

    createFileUploadRequest(request: CreateFileUploadRequest.Request) {
        console.log(request);
        this.imagesService.createFileUploadRequest(request)
            .pipe(CommonsService.deserializeMap(CreateFileUploadRequest.Response))
            .subscribe(value => {
                this.fileUploadRequestCreated.emit(value);
            });
    }

}
