import {NgModule} from '@angular/core';
import {CoreModule} from '@core/core.module';
import {
    QuickbloxDialogItemResolver,
    QuickbloxJoinDialogResolver,
    QuickbloxSessionResolver
} from '@quickblox/quickblox.resolver';
import {
    QuickbloxGetMessageListComponent,
    QuickbloxGetMessageListNoTemplateComponent, QuickbloxGetMessageListNoTemplateNoInitializeComponent
} from '@quickblox/components/quickblox-get-message-list/quickblox-get-message-list.component';
import {QuickbloxUserChatPageComponent} from '@quickblox/pages/quickblox-user-chat-page/quickblox-user-chat-page.component';
import {QuickbloxMessageListenerComponent} from '@quickblox/components/quickblox-message-listener/quickblox-message-listener.component';
// noinspection TsLint
import {QuickbloxMessageCreateAndListenerComponent} from '@quickblox/components/quickblox-message-create-and-listener/quickblox-message-create-and-listener.component';
// noinspection TsLint
import {QuickbloxCreateMessageXmlComponent} from '@quickblox/components/quickblox-create-message-xml/quickblox-create-message-xml.component';
import {QuickbloxTypingListenerComponent} from '@quickblox/components/quickblox-typing-listener/quickblox-typing-listener.component';
import {QuickbloxMessageDetailsComponent} from '@quickblox/components/quickblox-message-details/quickblox-message-details.component';
import {QuickbloxChatDisconnectComponent} from '@quickblox/components/quickblox-chat-disconnect/quickblox-chat-disconnect.component';
import {QuickbloxCreateMessageComponent} from '@quickblox/components/quickblox-create-message/quickblox-create-message.component';
import {QuickbloxGetDialogItemComponent} from '@quickblox/components/quickblox-get-dialog-item/quickblox-get-dialog-item.component';
// noinspection TsLint
import {QuickbloxGetOnlineUsersForDialogComponent} from '@quickblox/components/quickblox-get-online-users-for-dialog/quickblox-get-online-users-for-dialog.component';
import {QuickbloxGetUsersComponent} from '@quickblox/components/quickblox-get-users/quickblox-get-users.component';
import {
    QuickbloxListDialogsComponent,
    QuickbloxListDialogsNoTemplateComponent,
    QuickbloxListDialogsWithLastMessageComponent
} from '@quickblox/components/quickblox-list-dialogs/quickblox-list-dialogs.component';
import {QuickbloxMessageDeleteComponent} from '@quickblox/components/quickblox-message-delete/quickblox-message-delete.component';
import {RouterModule} from '@angular/router';
// noinspection TsLint
import {QuickbloxGetMessageListAndListenerComponent} from '@quickblox/components/quickblox-get-message-list-and-listener/quickblox-get-message-list-and-listener.component';
// noinspection TsLint
import {ImagesModule} from '@images/images.module';
import {
    QuickbloxCreateAndUploadFileResponseToAttachmentPipe,
    QuickbloxPlatformToNotificationChannelPipe
} from '@quickblox/quickblox.pipe';
// tslint:disable-next-line:max-line-length
import {QuickbloxCreateAndUploadFileComponent} from '@quickblox/components/quickblox-create-and-upload-file/quickblox-create-and-upload-file.component';
// tslint:disable-next-line:max-line-length
import {QuickbloxAttachmentDetailsComponent} from '@quickblox/components/quickblox-attachment-details/quickblox-attachment-details.component';
import {UsersModule} from '@users/users.module';

@NgModule({
    declarations: [
        QuickbloxGetMessageListComponent,
        QuickbloxUserChatPageComponent,
        QuickbloxMessageListenerComponent,
        QuickbloxMessageCreateAndListenerComponent,
        QuickbloxCreateMessageXmlComponent,
        QuickbloxTypingListenerComponent,
        QuickbloxMessageDetailsComponent,
        QuickbloxChatDisconnectComponent,
        QuickbloxCreateMessageComponent,
        QuickbloxGetDialogItemComponent,
        QuickbloxGetOnlineUsersForDialogComponent,
        QuickbloxGetUsersComponent,
        QuickbloxListDialogsComponent,
        QuickbloxMessageDeleteComponent,
        QuickbloxGetMessageListAndListenerComponent,
        QuickbloxGetMessageListNoTemplateComponent,
        QuickbloxPlatformToNotificationChannelPipe,
        QuickbloxCreateAndUploadFileComponent,
        QuickbloxAttachmentDetailsComponent,
        QuickbloxCreateAndUploadFileResponseToAttachmentPipe,
        QuickbloxListDialogsWithLastMessageComponent,
        QuickbloxListDialogsNoTemplateComponent,
        QuickbloxGetMessageListNoTemplateNoInitializeComponent
    ],
    exports: [
        QuickbloxGetMessageListComponent,
        QuickbloxUserChatPageComponent,
        QuickbloxMessageListenerComponent,
        QuickbloxMessageCreateAndListenerComponent,
        QuickbloxCreateMessageXmlComponent,
        QuickbloxTypingListenerComponent,
        QuickbloxMessageDetailsComponent,
        QuickbloxChatDisconnectComponent,
        QuickbloxCreateMessageComponent,
        QuickbloxGetDialogItemComponent,
        QuickbloxGetOnlineUsersForDialogComponent,
        QuickbloxGetUsersComponent,
        QuickbloxListDialogsComponent,
        QuickbloxMessageDeleteComponent,
        QuickbloxGetMessageListAndListenerComponent,
        QuickbloxGetMessageListNoTemplateComponent,
        QuickbloxPlatformToNotificationChannelPipe,
        QuickbloxCreateAndUploadFileComponent,
        QuickbloxAttachmentDetailsComponent,
        QuickbloxCreateAndUploadFileResponseToAttachmentPipe,
        QuickbloxListDialogsWithLastMessageComponent,
        QuickbloxListDialogsNoTemplateComponent,
        QuickbloxGetMessageListNoTemplateNoInitializeComponent
    ],
    imports: [
        CoreModule,
        ImagesModule,
        RouterModule,
        UsersModule
    ],
    providers: [
        QuickbloxSessionResolver,
        QuickbloxDialogItemResolver,
        QuickbloxJoinDialogResolver,
        {provide: 'QuickBlox', useFactory: provideQuickBlox}
    ]
})

export class QuickbloxModule {
}

export function provideQuickBlox() {
    return new window['QB'].QuickBlox();
}
