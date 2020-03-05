import {Routes} from '@angular/router';
import {ChatsUserChatPageComponent} from '@chat/pages/chats-user-chat-page/chats-user-chat-page.component';
import {QuickbloxDialogItemResolver, QuickbloxJoinDialogResolver} from '@quickblox/quickblox.resolver';
import {ChatsUserChatsPageComponent} from '@chat/pages/chats-user-chats-page/chats-user-chats-page.component';
import {ChatUserChatByDialogIdAndOtherProfileResolver, ChatUserChatByDialogIdResolver} from '@chat/chat.resolver';

export const CHAT_ROUTES: Routes = [
    {
        path: 'chat', children: [{
            path: ':dialogId', component: ChatsUserChatPageComponent, resolve: {
                dialogItem: QuickbloxDialogItemResolver,
                chatDialogJid: QuickbloxJoinDialogResolver,
                userChatAndOtherProfile: ChatUserChatByDialogIdAndOtherProfileResolver
            }
        }]
    },
    {
        path: 'user', component: ChatsUserChatsPageComponent
    },
];
