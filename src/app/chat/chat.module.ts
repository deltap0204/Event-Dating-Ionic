import {NgModule} from '@angular/core';
import {ChatsCreateUserChatComponent} from '@chat/components/chats-create-user-chat/chats-create-user-chat.component';
import {ChatsUserChatComponent} from '@chat/components/chats-user-chat/chats-user-chat.component';
import {
    ChatsUserChatsComponent,
    ChatsUserChatsNoTemplateComponent
} from '@chat/components/chats-user-chats/chats-user-chats.component';
import {CoreModule} from '@core/core.module';
import {QuickbloxModule} from '@quickblox/quickblox.module';
import {RouterModule} from '@angular/router';
import {CHAT_ROUTES} from '@chat/chat.routes';
import {ChatsUserChatPageComponent} from '@chat/pages/chats-user-chat-page/chats-user-chat-page.component';
import {ChatsUserChatsPageComponent} from '@chat/pages/chats-user-chats-page/chats-user-chats-page.component';
import {ChatsUserAccountsToOtherAccountPipe, ChatsUserAccountsToSameAccountPipe} from '@chat/chat.pipe';
import {UsersModule} from '@users/users.module';
import {ImagesModule} from '@images/images.module';
import {ChatsUserChatsByDialogIdComponent} from '@chat/components/chats-user-chats-by-dialog-id/chats-user-chats-by-dialog-id.component';
import {ChatUserChatByDialogIdAndOtherProfileResolver, ChatUserChatByDialogIdResolver} from '@chat/chat.resolver';


@NgModule({
    declarations: [
        ChatsCreateUserChatComponent,
        ChatsUserChatComponent,
        ChatsUserChatsComponent,
        ChatsUserChatPageComponent,
        ChatsUserChatsPageComponent,
        ChatsUserAccountsToOtherAccountPipe,
        ChatsUserChatsByDialogIdComponent,
        ChatsUserAccountsToSameAccountPipe,
        ChatsUserChatsNoTemplateComponent
    ],
    imports: [
        CoreModule,
        QuickbloxModule,
        RouterModule.forChild(CHAT_ROUTES),
        UsersModule,
        ImagesModule
    ],
    exports: [
        ChatsCreateUserChatComponent,
        ChatsUserChatComponent,
        ChatsUserChatsComponent,
        ChatsUserChatPageComponent,
        ChatsUserChatsPageComponent,
        ChatsUserAccountsToOtherAccountPipe,
        ChatsUserChatsByDialogIdComponent,
        ChatsUserAccountsToSameAccountPipe,
        ChatsUserChatsNoTemplateComponent
    ],
    providers: [
        ChatUserChatByDialogIdResolver,
        ChatUserChatByDialogIdAndOtherProfileResolver
    ]
})
export class ChatModule {
}
