import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {BaseComponent} from '@core/components/base.component';
import {QuickbloxService} from '@quickblox/quickblox.service';
import {QuickbloxRequests} from '@quickblox/quickblox.models';
import {CommonsService} from '@core/commons.service';
import ListDialogs = QuickbloxRequests.ListDialogs;

@Component({
    selector: 'quickblox-list-dialogs',
    templateUrl: './quickblox-list-dialogs.component.html',
    styleUrls: ['./quickblox-list-dialogs.component.scss']
})
export class QuickbloxListDialogsComponent extends BaseComponent {

    @Input() dialogId: string;
    @Input() privacyType: number;
    @Input() name: string;

    @Output()
    quickbloxDialogsRecieved = new EventEmitter<ListDialogs.Response>();

    quickblox_dialogs: ListDialogs.Response;

    constructor(protected quickbloxService: QuickbloxService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
        this.listDialogs(this.createRequestData());
    }


    createRequestData(id?: string, privacy_type?: number, name?: string): ListDialogs.Request {
        const request = new ListDialogs.Request();
        request.id = id || this.dialogId;
        request.privacy_type = privacy_type || this.privacyType;
        request.name = name || this.name;
        return request;
    }

    listDialogs(request: ListDialogs.Request) {
        this.quickbloxService.listDialogs(request)
            .pipe(CommonsService.deserializeMap(ListDialogs.Response))
            .subscribe(quickblox_dialogs => {
                this.quickblox_dialogs = quickblox_dialogs;
                this.quickbloxDialogsRecieved.emit(quickblox_dialogs);
            });
    }

}

@Component({
    selector: 'quickblox-list-dialogs-with-last-message',
    templateUrl: './quickblox-list-dialogs-with-last-message.component.html',
    styleUrls: ['./quickblox-list-dialogs.component.scss']
})
export class QuickbloxListDialogsWithLastMessageComponent extends QuickbloxListDialogsComponent {
}


@Component({
    selector: 'quickblox-list-dialogs-no-template',
    templateUrl: './quickblox-list-dialogs-no-template.component.html',
    styleUrls: ['./quickblox-list-dialogs.component.scss']
})
export class QuickbloxListDialogsNoTemplateComponent extends QuickbloxListDialogsComponent {
}
