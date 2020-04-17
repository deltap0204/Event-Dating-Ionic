import {Component, EventEmitter, Injector, Input, OnInit, Output} from '@angular/core';
import {BaseComponent} from '@core/components/base.component';
import {Chats} from '@core/core.models';
import UserChat = Chats.UserChat;
import {ChatRequests} from '../../chat.models';
import GetUserChat = ChatRequests.GetUserChat;
import {ChatService} from '../../chat.service';
import {CommonsService} from '@core/commons.service';

@Component({
    selector: 'chats-user-chat',
    templateUrl: './chats-user-chat.component.html',
    styleUrls: ['./chats-user-chat.component.scss'],
})
export class ChatsUserChatComponent extends BaseComponent {

    @Input()
    chatId: string;
    @Input()
    userChat: UserChat;

    @Output()
    userChatReceived = new EventEmitter<UserChat>();

    constructor(protected chatService: ChatService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
        this.makeServiceCallWithIdIfObjectNull(this.userChat, this.createRequestData(), this.getUserChat);
    }

    createRequestData(chat_id?: string): GetUserChat.Request {
        const request = new GetUserChat.Request();
        request.chatId = chat_id || this.chatId;

        return request;
    }

    getUserChat = (request: GetUserChat.Request) => {
        this.chatService.getUserChat(request).pipe(CommonsService.deserializeMap(GetUserChat.Response))
            .subscribe(value => {
                console.log(value);
                
                this.userChat = value;
                this.userChatReceived.emit(value);
            });
    }

}
