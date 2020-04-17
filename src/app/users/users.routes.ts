import {Routes} from '@angular/router';
import {UsersUserSigninPageComponent} from '@users/pages/users-user-signin-page/users-user-signin-page.component';
import {UsersUserSignupPageComponent} from '@users/pages/users-user-signup-page/users-user-signup-page.component';
import {UsersUserSignupConfirmPageComponent} from '@users/pages/users-user-signup-confirm-page/users-user-signup-confirm-page.component';
import {UsersUserPreferencePageComponent} from '@users/pages/users-user-preference-page/users-user-preference-page.component';
import {UsersUserProfileUpdatePageComponent} from '@users/pages/users-user-profile-update-page/users-user-profile-update-page.component';
import {AuthGuard} from '@core/auth.guard';

export const USER_ROUTES: Routes = [
    {path: 'signin', component: UsersUserSigninPageComponent},
    {path: 'signup', component: UsersUserSignupPageComponent},
    {path: 'confirm', component: UsersUserSignupConfirmPageComponent},
    {path: 'preference', component: UsersUserPreferencePageComponent},
    {path: 'update', component: UsersUserProfileUpdatePageComponent, canActivate: [AuthGuard]},
];
