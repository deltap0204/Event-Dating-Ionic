import {NgModule} from '@angular/core';
import {CoreModule} from '@core/core.module';
import {RouterModule} from '@angular/router';
import {USER_PROFILES_ROUTES} from '@user-profiles/user-profiles.routes';
import {UserProfilesMainPageComponent} from '@user-profiles/pages/user-profiles-main-page/user-profiles-main-page.component';
import {UserProfilesDashboardPageComponent} from '@user-profiles/pages/user-profiles-dashboard-page/user-profiles-dashboard-page.component';
import {UserProfilesProfilePageComponent} from '@user-profiles/pages/user-profiles-profile-page/user-profiles-profile-page.component';
import {UserProfilesChatsPageComponent} from '@user-profiles/pages/user-profiles-chats-page/user-profiles-chats-page.component';
import {UsersModule} from '@users/users.module';
import {ImagesModule} from '@images/images.module';
import {EventsModule} from '@events/events.module';
import {ChatModule} from '@chat/chat.module';
import {UserProfilesSettingsPageComponent} from '@user-profiles/pages/user-profiles-settings-page/user-profiles-settings-page.component';
import {UserProfilesEditProfilePageComponent} from '@user-profiles/pages/user-profiles-edit-profile-page/user-profiles-edit-profile-page.component';
import {UserPaymentsModule} from '@user-payments/user-payments.module';
import {UserInterestsModule} from '@user-interests/user-interests.module';


@NgModule({
    declarations: [
        UserProfilesMainPageComponent,
        UserProfilesDashboardPageComponent,
        UserProfilesProfilePageComponent,
        UserProfilesChatsPageComponent,
        UserProfilesSettingsPageComponent,
        UserProfilesEditProfilePageComponent
    ],
    imports: [
        CoreModule,
        RouterModule.forChild(USER_PROFILES_ROUTES),
        UsersModule,
        ImagesModule,
        EventsModule,
        ChatModule,
        UserPaymentsModule,
        UserInterestsModule
    ],
    exports: [
        UserProfilesMainPageComponent,
        UserProfilesDashboardPageComponent,
        UserProfilesProfilePageComponent,
        UserProfilesChatsPageComponent,
        UserProfilesSettingsPageComponent,
        UserProfilesEditProfilePageComponent
    ],
})
export class UserProfilesModule {
}
