import {Component, EventEmitter, Injector, Output} from '@angular/core';
import {BaseComponent} from '@core/components/base.component';
import {QuickbloxService} from '@quickblox/quickblox.service';
import {QuickbloxRequests} from '@quickblox/quickblox.models';
import QuickbloxTypingListener = QuickbloxRequests.QuickbloxTypingListener;

@Component({
    selector: 'quickblox-typing-listener',
    templateUrl: './quickblox-typing-listener.component.html',
    styleUrls: ['./quickblox-typing-listener.component.scss']
})
export class QuickbloxTypingListenerComponent extends BaseComponent {

    @Output() typingStatusChanged = new EventEmitter<QuickbloxTypingListener.Response>();

    constructor(protected quickbloxService: QuickbloxService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
        this.quickbloxService.quickBlox.chat.onMessageTypingListener = this.messageTypingListner.bind(this);
    }

    messageTypingListner(isTyping?, userId?, dialogId?) {
        const response = new QuickbloxTypingListener.Response();
        response.isTyping = isTyping;
        response.userId = userId;
        response.dislogId = dialogId;
        this.typingStatusChanged.emit(response);
    }

}
