import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {BaseComponent} from '@core/components/base.component';
import {Chats} from '@core/core.models';
import {ChatRequests} from '@chat/chat.models';
import {ChatService} from '@chat/chat.service';
import {CommonsService} from '@core/commons.service';
import UserChat = Chats.UserChat;
import GetUserChatsByDialogId = ChatRequests.GetUserChatsByDialogId;

@Component({
    selector: 'chats-user-chats-by-dialog-id',
    templateUrl: './chats-user-chats-by-dialog-id.component.html',
    styleUrls: ['./chats-user-chats-by-dialog-id.component.scss'],
})
export class ChatsUserChatsByDialogIdComponent extends BaseComponent {

    @Input()
    dialogId: string;

    @Output()
    userChatsReceived = new EventEmitter<UserChat[]>();

    user_chats: UserChat[];

    constructor(protected chatService: ChatService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
        this.getUserChatsByDialogId(this.createRequestData());
    }

    createRequestData(dialog_id?: string): GetUserChatsByDialogId.Request {
        const request = new GetUserChatsByDialogId.Request();
        request.dialogId = dialog_id || this.dialogId;

        return request;
    }

    getUserChatsByDialogId(request: GetUserChatsByDialogId.Request) {
        this.chatService.getUserChatsByDialogId(request).pipe(CommonsService.deserializeMap(UserChat))
            .subscribe(value => {
                this.user_chats = value;
                this.userChatsReceived.emit(value);
            });
    }

}
