import {Component, EventEmitter, Injector, Output} from '@angular/core';
import {BaseComponent} from '@core/components/base.component';
import {QuickbloxService} from '@quickblox/quickblox.service';
import {CommonsService} from '@core/commons.service';
import {QuickbloxRequests} from '@quickblox/quickblox.models';
import QuickbloxMessageListener = QuickbloxRequests.QuickbloxMessageListener;

@Component({
    selector: 'quickblox-message-listener',
    templateUrl: './quickblox-message-listener.component.html',
    styleUrls: ['./quickblox-message-listener.component.scss']
})
export class QuickbloxMessageListenerComponent extends BaseComponent {

    @Output()
    quickbloxMessageReceived = new EventEmitter<QuickbloxMessageListener.Response>();


    constructor(protected quickbloxService: QuickbloxService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
        this.quickbloxService.quickBlox.chat.onMessageListener = this.messageListner.bind(this);
    }

    messageListner(userId, msg) {
        const msg_details: QuickbloxMessageListener.Response = CommonsService.deserialize(msg, QuickbloxMessageListener.Response);
        msg_details.user_id = userId;
        this.quickbloxMessageReceived.emit(msg_details);
    }
}
