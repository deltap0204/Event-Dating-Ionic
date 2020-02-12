import {Routes} from '@angular/router';
import {UserProfilesMainPageComponent} from '@user-profiles/pages/user-profiles-main-page/user-profiles-main-page.component';
import {UserProfilesDashboardPageComponent} from '@user-profiles/pages/user-profiles-dashboard-page/user-profiles-dashboard-page.component';
import {UserProfilesChatsPageComponent} from '@user-profiles/pages/user-profiles-chats-page/user-profiles-chats-page.component';
import {UserProfilesProfilePageComponent} from '@user-profiles/pages/user-profiles-profile-page/user-profiles-profile-page.component';
import {QuickbloxSessionResolver} from '@quickblox/quickblox.resolver';
import {UserProfilesSettingsPageComponent} from '@user-profiles/pages/user-profiles-settings-page/user-profiles-settings-page.component';
import {UserProfilesEditProfilePageComponent} from '@user-profiles/pages/user-profiles-edit-profile-page/user-profiles-edit-profile-page.component';

export const USER_PROFILES_ROUTES: Routes = [
    {
        path: '', component: UserProfilesMainPageComponent, children: [
            {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
            {path: 'dashboard', component: UserProfilesDashboardPageComponent},
            {path: 'settings', component: UserProfilesSettingsPageComponent},
            {path: 'edit', component: UserProfilesEditProfilePageComponent},
            {
                path: 'chats',
                component: UserProfilesChatsPageComponent, resolve: {quickbloxSession: QuickbloxSessionResolver}
            },
            {path: 'profile', component: UserProfilesProfilePageComponent},
        ]
    }
];
