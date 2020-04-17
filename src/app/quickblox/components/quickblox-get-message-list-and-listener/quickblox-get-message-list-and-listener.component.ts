import {Component, Injector, Input} from '@angular/core';
import {BaseComponent} from '@core/components/base.component';
import {QuickbloxObjects, QuickbloxRequests} from '@quickblox/quickblox.models';
import DialogItem = QuickbloxRequests.ListDialogs.DialogItem;
import QuickbloxMessage = QuickbloxObjects.QuickbloxMessage;

@Component({
    selector: 'quickblox-get-message-list-and-listener',
    templateUrl: './quickblox-get-message-list-and-listener.component.html',
    styleUrls: ['./quickblox-get-message-list-and-listener.component.scss']
})
export class QuickbloxGetMessageListAndListenerComponent extends BaseComponent {

    @Input()
    dialogItem: DialogItem;

    quickblox_messages: QuickbloxMessage[];

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

}
