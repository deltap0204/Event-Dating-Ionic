import {Component, EventEmitter, Injector, Input, Output, ViewChild} from '@angular/core';
import {BaseComponent} from '@core/components/base.component';
import {QuickbloxRequests} from '@quickblox/quickblox.models';
import {QuickbloxService} from '@quickblox/quickblox.service';
import {Subscription} from 'rxjs';
import {FileBlob} from '@images/images.models';
import {ImagesSelectFileComponent} from '@images/components/images-select-file/images-select-file.component';
import CreateAndUploadFile = QuickbloxRequests.CreateAndUploadFile;

@Component({
    selector: 'quickblox-create-and-upload-file',
    templateUrl: './quickblox-create-and-upload-file.component.html',
    styleUrls: ['./quickblox-create-and-upload-file.component.scss'],
})
export class QuickbloxCreateAndUploadFileComponent extends BaseComponent {

    @Input()
    file: FileBlob;
    @Input()
    isPublic: boolean;

    @Output()
    fileUploaded = new EventEmitter<CreateAndUploadFile.Response>();

    create_and_upload_file$: Subscription;

    @ViewChild(ImagesSelectFileComponent, {static: false})
    images_select_file_sm: ImagesSelectFileComponent;

    constructor(protected quickbloxService: QuickbloxService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

    resetSelectedFile() {
        this.images_select_file_sm.selected_file = undefined;
    }

    createRequestData(file?: FileBlob, is_public?: boolean): CreateAndUploadFile.Request {
        const request = new CreateAndUploadFile.Request();
        const fileData = (file || this.file).file;
        request.file = (file || this.file).blob;
        request.name = fileData.name;
        request.size = fileData.size;
        request.type = fileData.type;
        request.isPublic = true;

        return request;
    }

    createAndUploadFile(request: CreateAndUploadFile.Request) {
        this.create_and_upload_file$ = this.quickbloxService.createAndUploadFile(request)
            .subscribe(value => {
                this.fileUploaded.emit(value);
            });
    }

}
