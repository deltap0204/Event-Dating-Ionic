import {Injectable} from '@angular/core';
import {RestService} from '@core/http/rest.service';
import {Restangular} from 'ngx-restangular';
import {ChatConstants} from './chat.constants';
import {ChatRequests} from './chat.models';
import CreateUserChat = ChatRequests.CreateUserChat;
import GetUserChats = ChatRequests.GetUserChats;
import GetUserChat = ChatRequests.GetUserChat;
import GetUserChatsByDialogId = ChatRequests.GetUserChatsByDialogId;

@Injectable({
    providedIn: 'root'
})
export class ChatService extends RestService {

    chatService: Restangular;

    constructor(restangular: Restangular) {
        super(restangular);
        this.chatService = this.getService(ChatConstants.CHAT_ENDPOINT);
    }

    createUserChat(request: CreateUserChat.Request) {
        return this.chatService.one('').customPOST(this.serialize(request));
    }

    getUserChats(request: GetUserChats.Request) {
        return this.chatService.one('').get();
    }

    getUserChat(request: GetUserChat.Request) {
        return this.chatService.one(request.chatId).get();
    }

    getUserChatsByDialogId(request: GetUserChatsByDialogId.Request) {
        return this.chatService.one('dialogs').customGET('', this.serialize(request));
    }
}
