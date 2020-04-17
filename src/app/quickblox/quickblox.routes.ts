import {Routes} from '@angular/router';
import {QuickbloxUserChatPageComponent} from '@quickblox/pages/quickblox-user-chat-page/quickblox-user-chat-page.component';
import {QuickbloxDialogItemResolver, QuickbloxJoinDialogResolver} from '@quickblox/quickblox.resolver';

export const QUICKBLOX_ROUTES: Routes = [
    {
        path: ':dialogId', component: QuickbloxUserChatPageComponent,
        resolve: {
            dialogItem: QuickbloxDialogItemResolver,
            chatDialogJid: QuickbloxJoinDialogResolver
        }
    },
];
