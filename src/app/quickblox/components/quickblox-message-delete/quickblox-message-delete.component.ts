import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {BaseComponent} from '@core/components/base.component';
import {QuickbloxService} from '@quickblox/quickblox.service';
import {QuickbloxRequests} from '@quickblox/quickblox.models';
import {CommonsService} from '@core/commons.service';
import DeleteQuickbloxMessage = QuickbloxRequests.DeleteQuickbloxMessage;
import DeleteQuickbloxMessageParam = QuickbloxRequests.DeleteQuickbloxMessage.DeleteQuickbloxMessageParam;

@Component({
    selector: 'quickblox-message-delete',
    templateUrl: './quickblox-message-delete.component.html',
    styleUrls: ['./quickblox-message-delete.component.scss']
})
export class QuickbloxMessageDeleteComponent extends BaseComponent {

    @Input()
    quickbloxMessageId: string;

    // @Input()
    forceDelete: boolean;

    @Output()
    quickbloxMessageDeleted = new EventEmitter<boolean>();

    constructor(protected quickbloxService: QuickbloxService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
        // TODO: Remove this for future case
        this.forceDelete = true;
    }

    createRequestData(message_id?: string, force_delete?: boolean): DeleteQuickbloxMessage.Request {
        const request = new DeleteQuickbloxMessage.Request();
        request.messageId = message_id || this.quickbloxMessageId;
        const delete_params = new DeleteQuickbloxMessageParam();
        delete_params.force = (force_delete || this.forceDelete) ? 1 : undefined;
        request.params = delete_params;
        return request;
    }

    deleteMessage(request: DeleteQuickbloxMessage.Request) {
        this.quickbloxService.deleteMessage(request)
            .pipe(CommonsService.convertToJson, CommonsService.deserializeMap(DeleteQuickbloxMessage.Response))
            .subscribe(message_deleted => {
                if (message_deleted.successfully_deleted.ids.length > 0) {
                    this.quickbloxMessageDeleted.emit(true);
                }
            });
    }
}
