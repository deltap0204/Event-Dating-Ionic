import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {BaseComponent} from '@core/components/base.component';
import {QuickbloxService} from '@quickblox/quickblox.service';
import {QuickbloxRequests} from '@quickblox/quickblox.models';
import QuickbloxTypingListener = QuickbloxRequests.QuickbloxTypingListener;

@Component({
    selector: 'quickblox-message-create-and-listener',
    templateUrl: './quickblox-message-create-and-listener.component.html',
    styleUrls: ['./quickblox-message-create-and-listener.component.scss']
})
export class QuickbloxMessageCreateAndListenerComponent extends BaseComponent {

    @Input()
    dialogId: string;
    @Input()
    chatDialogJid: string;

    typingListenerResponse: QuickbloxTypingListener.Response;

    @Output()
    typingListener = new EventEmitter<QuickbloxTypingListener.Response>();

    constructor(protected quickbloxService: QuickbloxService, injector: Injector) {
        super(injector);
        this.typingListener.subscribe(event => {
            this.onTyping(event);
        });
    }

    initializeComponent() {
    }

    onTyping(event: QuickbloxTypingListener.Response) {
        this.typingListenerResponse = event;
    }
}
