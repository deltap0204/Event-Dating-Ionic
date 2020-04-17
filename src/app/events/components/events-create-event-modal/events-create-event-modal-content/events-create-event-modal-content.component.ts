import {Component, Injector, ViewChild} from '@angular/core';
import {BaseModalContentComponent} from '@core/components/modals/base-modal-content.component';
import {ImagesUploadFileWithPreviewComponent} from '@images/components/images-upload-file/images-upload-file.component';
import {Events, UserInterests} from '@core/core.models';
import {CategoriesCreateCategoryEntityComponent} from '@categories/components/categories-create-category-entity/categories-create-category-entity.component';
import ModalResult = UserInterests.ModalResult;
import Event = Events.Event;
import {CategoriesAllCategoriesWithSelectComponent} from '@categories/components/categories-all-categories/categories-all-categories.component';
import {bufferCount} from 'rxjs/operators';

@Component({
    selector: 'events-create-event-modal-content',
    templateUrl: './events-create-event-modal-content.component.html',
    styleUrls: ['./events-create-event-modal-content.component.scss'],
})
export class EventsCreateEventModalContentComponent extends BaseModalContentComponent {

    @ViewChild(ImagesUploadFileWithPreviewComponent, {static: true})
    images_upload_file_with_preview_component: ImagesUploadFileWithPreviewComponent;
    @ViewChild(CategoriesCreateCategoryEntityComponent, {static: true})
    categories_create_category_entity_component: CategoriesCreateCategoryEntityComponent;
    @ViewChild(CategoriesAllCategoriesWithSelectComponent, {static: true})
    categories_all_categories_with_select_component: CategoriesAllCategoriesWithSelectComponent;

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

    registerEffectAndCloseModal(event: Event, modal_result: ModalResult) {
        if (this.categories_all_categories_with_select_component.selected_categories.length) {
            this.categories_all_categories_with_select_component.selected_categories.forEach(category => {
                this.categories_create_category_entity_component.createCategoryEntity(
                    this.categories_create_category_entity_component.createRequestData(event._id, undefined,
                        category._id));
            });
            this.effects_observable_array.push(
                this.categories_create_category_entity_component.categoryEntityCreated.asObservable().pipe(
                    bufferCount(this.categories_all_categories_with_select_component.selected_categories.length)));
        }

        if (this.images_upload_file_with_preview_component.file_blob) {
            const file_blob = this.images_upload_file_with_preview_component.file_blob;
            const component = this.images_upload_file_with_preview_component.images_create_file_upload_request_component;
            component.createFileUploadRequest(
                component.createRequestData(file_blob.file.name, undefined, undefined, event._id));
            this.effects_observable_array.push(
                this.images_upload_file_with_preview_component.fileUploaded.asObservable());
        }
        if (this.categories_all_categories_with_select_component.selected_categories.length) {

        }
        this.closeModal(modal_result);
    }
}
