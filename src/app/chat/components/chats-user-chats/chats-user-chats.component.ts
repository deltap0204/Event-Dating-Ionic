import {
  Component,
  EventEmitter,
  Injector,
  OnInit,
  Output,
} from "@angular/core";
import { BaseComponent } from "@core/components/base.component";
import { ChatService } from "@chat/chat.service";
import { Chats } from "@core/core.models";
import UserChat = Chats.UserChat;
import { ChatRequests } from "@chat/chat.models";
import GetUserChats = ChatRequests.GetUserChats;
import { CommonsService } from "@core/commons.service";

@Component({
  selector: "chats-user-chats",
  templateUrl: "./chats-user-chats.component.html",
  styleUrls: ["./chats-user-chats.component.scss"],
})
export class ChatsUserChatsComponent extends BaseComponent {
  user_chats: UserChat[];
  @Output()
  userChatsReceived = new EventEmitter<UserChat[]>();

  constructor(protected chatService: ChatService, injector: Injector) {
    super(injector);
  }

  initializeComponent() {
    this.getUserChats(this.createRequestData());
  }

  createRequestData(): GetUserChats.Request {
    return new GetUserChats.Request();
  }

  getUserChats(request: GetUserChats.Request) {
    this.chatService
      .getUserChats(request)
      .pipe(CommonsService.deserializeMap(UserChat))
      .subscribe((value) => {
        this.user_chats = value;
        this.userChatsReceived.emit(value);
      });
  }
}

@Component({
  selector: "chats-user-chats-no-template",
  templateUrl: "./chats-user-chats-no-template.component.html",
  styleUrls: ["./chats-user-chats.component.scss"],
})
export class ChatsUserChatsNoTemplateComponent extends ChatsUserChatsComponent {}
