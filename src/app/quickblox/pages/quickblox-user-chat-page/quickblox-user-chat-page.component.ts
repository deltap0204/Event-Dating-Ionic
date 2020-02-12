import {Component, Injector} from '@angular/core';
import {PageComponent} from '@core/components/page.component';
import {Observable} from 'rxjs';
import {QuickbloxRequests} from '@quickblox/quickblox.models';
import DialogItem = QuickbloxRequests.ListDialogs.DialogItem;

@Component({
    selector: 'quickblox-user-chat-page',
    templateUrl: './quickblox-user-chat-page.component.html',
    styleUrls: ['./quickblox-user-chat-page.component.scss']
})
export class QuickbloxUserChatPageComponent extends PageComponent {

    dialogItem$: Observable<DialogItem>;
    chatDialogJid$: Observable<string>;

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
        this.dialogItem$ = this.getRouterParameterObservable('dialogItem');
        this.chatDialogJid$ = this.getRouterParameterObservable('chatDialogJid');
    }
}
