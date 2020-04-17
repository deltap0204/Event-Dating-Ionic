import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {BaseComponent} from '@core/components/base.component';
import {ImagesService} from '@images/images.service';
import {FileRequests} from '@images/images.models';
import {Files} from '@core/core.models';
import {CommonsService} from '@core/commons.service';
import GetUploadedFileByEntityAndType = FileRequests.GetUploadedFileByEntityAndType;
import UploadedFile = Files.UploadedFile;

@Component({
    selector: 'images-by-entity-and-type',
    templateUrl: './images-by-entity-and-type.component.html',
    styleUrls: ['./images-by-entity-and-type.component.scss'],
})
export class ImagesByEntityAndTypeComponent extends BaseComponent {

    slideOpts = {
        initialSlide: 0,
        speed: 400
    };

    @Input()
    entity: string;
    @Input()
    entityType: string;

    @Input()
    alt: string;

    @Input()
    uploadedFiles: UploadedFile[];

    @Output()
    uploadedFilesRecieved = new EventEmitter<UploadedFile>();

    constructor(protected imagesService: ImagesService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
        this.makeServiceCallWithIdIfObjectNull(this.uploadedFiles, this.createRequestData(),
            this.getUploadedFileByEntityAndType);
    }

    createRequestData(entity?: string, entity_type?: string): GetUploadedFileByEntityAndType.Request {
        const request = new GetUploadedFileByEntityAndType.Request();
        request.entity = entity || this.entity;
        request.entityType = entity_type || this.entityType;

        return request;
    }

    getUploadedFileByEntityAndType = (request: GetUploadedFileByEntityAndType.Request) => {
        this.imagesService.getFileByEntityAndType(request)
            .pipe(CommonsService.deserializeMap(GetUploadedFileByEntityAndType.Response)).subscribe(value => {
            this.uploadedFiles = value;
            this.uploadedFilesRecieved.emit(value);
        });
    }

}


@Component({
    selector: 'images-by-entity-and-type-sm',
    templateUrl: './images-by-entity-and-type-sm.component.html',
    styleUrls: ['./images-by-entity-and-type.component.scss'],
})
export class ImagesByEntityAndTypeSmComponent extends ImagesByEntityAndTypeComponent {
}

@Component({
    selector: 'images-by-entity-and-type-xl',
    templateUrl: './images-by-entity-and-type-xl.component.html',
    styleUrls: ['./images-by-entity-and-type.component.scss'],
})
export class ImagesByEntityAndTypeXlComponent extends ImagesByEntityAndTypeComponent {
}

@Component({
    selector: 'images-by-entity-and-type-with-edit',
    templateUrl: './images-by-entity-and-type-with-edit.component.html',
    styleUrls: ['./images-by-entity-and-type.component.scss'],
})
export class ImagesByEntityAndTypeWithEditComponent extends ImagesByEntityAndTypeComponent {
    @Input()
    maxCount = 0;

    numbers = [];


    initializeComponent() {
        super.initializeComponent();
        this.numbers = Array(this.maxCount).fill(0).map((x, i) => i);
    }
}
