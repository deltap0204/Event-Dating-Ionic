import {NgModule} from '@angular/core';
import {CoreModule} from '@core/core.module';
import {
    ImagesByEntityAndTypeComponent,
    ImagesByEntityAndTypeSmComponent,
    ImagesByEntityAndTypeWithEditComponent,
    ImagesByEntityAndTypeXlComponent
} from '@images/components/images-by-entity-and-type/images-by-entity-and-type.component';
// tslint:disable-next-line:max-line-length
import {ImagesCreateFileUploadRequestComponent} from '@images/components/images-create-file-upload-request/images-create-file-upload-request.component';
import {
    ImagesSelectPhotoComponent,
    ImagesSelectPhotoNoTemplateComponent
} from '@images/components/images-select-photo/images-select-photo.component';
import {
    ImagesSelectFileComponent,
    ImagesSelectFileNoTemplateComponent,
    ImagesSelectFileOnlyButtonComponent
} from '@images/components/images-select-file/images-select-file.component';
import {
    ImagesCapturePhotoComponent,
    ImagesCapturePhotoNoTemplateComponent
} from '@images/components/images-capture-photo/images-capture-photo.component';
import {
    ImagesUploadFileComponent,
    ImagesUploadFileWithPreviewComponent,
    ImagesUploadFileWithPreviewSmComponent
} from '@images/components/images-upload-file/images-upload-file.component';
import {ImagesDeleteFileComponent} from '@images/components/images-delete-file/images-delete-file.component';
import {
    ImagesFileDetailsComponent, ImagesFileDetailsMdWithDeleteComponent,
    ImagesFileDetailsSmComponent,
    ImagesFileDetailsXlComponent
} from '@images/components/images-file-details/images-file-details.component';


@NgModule({
    declarations: [ImagesByEntityAndTypeComponent,
        ImagesCreateFileUploadRequestComponent,
        ImagesSelectPhotoComponent,
        ImagesSelectPhotoNoTemplateComponent,
        ImagesSelectFileComponent,
        ImagesSelectPhotoComponent,
        ImagesCapturePhotoComponent,
        ImagesCapturePhotoNoTemplateComponent,
        ImagesUploadFileComponent,
        ImagesByEntityAndTypeSmComponent,
        ImagesByEntityAndTypeXlComponent,
        ImagesUploadFileWithPreviewComponent,
        ImagesDeleteFileComponent,
        ImagesFileDetailsComponent,
        ImagesFileDetailsSmComponent,
        ImagesFileDetailsXlComponent,
        ImagesSelectFileOnlyButtonComponent,
        ImagesByEntityAndTypeWithEditComponent,
        ImagesSelectFileNoTemplateComponent,
        ImagesUploadFileWithPreviewSmComponent,
        ImagesFileDetailsMdWithDeleteComponent
    ],
    imports: [
        CoreModule
    ],
    exports: [ImagesByEntityAndTypeComponent,
        ImagesCreateFileUploadRequestComponent,
        ImagesSelectPhotoComponent,
        ImagesSelectPhotoNoTemplateComponent,
        ImagesSelectFileComponent,
        ImagesSelectPhotoComponent,
        ImagesCapturePhotoComponent,
        ImagesCapturePhotoNoTemplateComponent,
        ImagesUploadFileComponent,
        ImagesByEntityAndTypeSmComponent,
        ImagesByEntityAndTypeXlComponent,
        ImagesUploadFileWithPreviewComponent,
        ImagesDeleteFileComponent,
        ImagesFileDetailsComponent,
        ImagesFileDetailsSmComponent,
        ImagesFileDetailsXlComponent,
        ImagesSelectFileOnlyButtonComponent,
        ImagesByEntityAndTypeWithEditComponent,
        ImagesSelectFileNoTemplateComponent,
        ImagesUploadFileWithPreviewSmComponent,
        ImagesFileDetailsMdWithDeleteComponent
    ]
})
export class ImagesModule {
}
