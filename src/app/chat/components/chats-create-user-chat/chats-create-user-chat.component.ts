import {Component, EventEmitter, Injector, Input, OnInit, Output} from '@angular/core';
import {BaseComponent} from '@core/components/base.component';
import {ChatService} from '../../chat.service';
import {Chats, Users} from '@core/core.models';
import UserAccount = Users.UserAccount;
import {ChatRequests} from '../../chat.models';
import CreateUserChat = ChatRequests.CreateUserChat;
import {CommonsService} from '@core/commons.service';
import UserChat = Chats.UserChat;

@Component({
    selector: 'chats-create-user-chat',
    templateUrl: './chats-create-user-chat.component.html',
    styleUrls: ['./chats-create-user-chat.component.scss'],
})
export class ChatsCreateUserChatComponent extends BaseComponent {

    @Input()
    otherAccount: UserAccount;

    @Output()
    userChatCreated = new EventEmitter<UserChat>();

    constructor(protected chatService: ChatService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

    createRequestData(other_id?: string): CreateUserChat.Request {
        const request = new CreateUserChat.Request();
        request.otherAccount = other_id || this.otherAccount._id;

        return request;
    }

    createUserChat(request: CreateUserChat.Request) {
        this.chatService.createUserChat(request).pipe(CommonsService.deserializeMap(CreateUserChat.Response))
            .subscribe(value => {
                this.userChatCreated.emit(value);
            });
    }

}
