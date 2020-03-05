import {Component, Injector, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {QuickbloxRequests} from '@quickblox/quickblox.models';
import DialogItem = QuickbloxRequests.ListDialogs.DialogItem;
import {PageComponent} from '@core/components/page.component';
import {Chats} from '@core/core.models';
import UserChat = Chats.UserChat;
import {UserChatAndOtherProfile} from '@chat/chat.models';

@Component({
    selector: 'chats-user-chat-page',
    templateUrl: './chats-user-chat-page.component.html',
    styleUrls: ['./chats-user-chat-page.component.scss'],
})
export class ChatsUserChatPageComponent extends PageComponent {

    dialogItem$: Observable<DialogItem>;
    chatDialogJid$: Observable<string>;
    userChatAndOtherProfile$: Observable<UserChatAndOtherProfile>;

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
        this.dialogItem$ = this.getRouterParameterObservable('dialogItem');
        this.chatDialogJid$ = this.getRouterParameterObservable('chatDialogJid');
        this.userChatAndOtherProfile$ = this.getRouterParameterObservable('userChatAndOtherProfile');
    }

}
