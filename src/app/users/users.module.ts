import {NgModule} from '@angular/core';
import {CoreModule} from '@core/core.module';
import {RouterModule} from '@angular/router';
import {USER_ROUTES} from '@users/users.routes';
import {UsersUserCognitoLoginComponent} from '@users/components/users-user-cognito-login/users-user-cognito-login.component';
import {UsersUserSigninPageComponent} from '@users/pages/users-user-signin-page/users-user-signin-page.component';
import {UsersUserCognitoSignupComponent} from '@users/components/users-user-cognito-signup/users-user-cognito-signup.component';
// tslint:disable-next-line:max-line-length
import {UsersUserCognitoConfirmSignupComponent} from '@users/components/users-user-cognito-confirm-signup/users-user-cognito-confirm-signup.component';
// tslint:disable-next-line:max-line-length
import {UsersUserCognitoForgotPasswordComponent} from '@users/components/users-user-cognito-forgot-password/users-user-cognito-forgot-password.component';
import {UsersUserSignupPageComponent} from '@users/pages/users-user-signup-page/users-user-signup-page.component';
import {UsersUserSignupConfirmPageComponent} from '@users/pages/users-user-signup-confirm-page/users-user-signup-confirm-page.component';
// tslint:disable-next-line:max-line-length
import {UsersUserCognitoResendSignupConfirmComponent} from '@users/components/users-user-cognito-resend-signup-confirm/users-user-cognito-resend-signup-confirm.component';
// tslint:disable-next-line:max-line-length
import {UsersUserProfileCreateOrUpdateComponent} from '@users/components/users-user-profile-create-or-update/users-user-profile-create-or-update.component';
// tslint:disable-next-line:max-line-length
import {
    UsersUserProfileCreateOrUpdateFormComponent,
    UsersUserProfileCreateOrUpdateSpecificFormComponent,
    UsersUserProfileCreateOrUpdateSpecificLocationFormComponent
} from '@users/components/users-user-profile-create-or-update-form/users-user-profile-create-or-update-form.component';
import {UsersUserProfileUpdatePageComponent} from '@users/pages/users-user-profile-update-page/users-user-profile-update-page.component';
import {
    UsersUserProfileValueComponent,
    UsersUserProfileValueFaIconComponent,
    UsersUserProfileValueFaIconGenderComponent,
    UsersUserProfileValueFaIconQuoteComponent
} from '@users/components/users-user-profile-value/users-user-profile-value.component';
import {
    UsersGenderToFaIconPipe,
    UsersUserProfileEntryNameToHumanReadablePipe,
    UsersUserProfileEntryNameToIconPipe,
    UsersUserProfileToUserProfileValuePipe
} from '@users/users.pipe';
import {
    UsersUserProfileComponent,
    UsersUserProfileNoTemplateComponent,
    UsersUserProfileRowComponent
} from '@users/components/users-user-profile/users-user-profile.component';
import {ImagesModule} from '@images/images.module';
import {UsersFilterUserProfilesComponent} from '@users/components/users-filter-user-profiles/users-filter-user-profiles.component';
import {
    UsersUserProfileByUserComponent,
    UsersUserProfileByUserNoTemplateComponent
} from '@users/components/users-user-profile-by-user/users-user-profile-by-user.component';
import {UsersUserCognitoLogoutComponent} from '@users/components/users-user-cognito-logout/users-user-cognito-logout.component';
// tslint:disable-next-line:max-line-length
import {UsersUserProfileCreateOrUpdateModalComponent} from '@users/components/users-user-profile-create-or-update-modal/users-user-profile-create-or-update-modal.component';
// tslint:disable-next-line:max-line-length
import {UsersUserProfileCreateOrUpdateModalContentComponent} from '@users/components/users-user-profile-create-or-update-modal/users-user-profile-create-or-update-modal-content/users-user-profile-create-or-update-modal-content.component';
import {UsersUserProfileCreateOrUpdateLocationModalComponent} from '@users/components/users-user-profile-create-or-update-location-modal/users-user-profile-create-or-update-location-modal.component';
// tslint:disable-next-line:max-line-length
import {UsersUserProfileCreateOrUpdateLocationModalContentComponent} from '@users/components/users-user-profile-create-or-update-location-modal/users-user-profile-create-or-update-location-modal-content/users-user-profile-create-or-update-location-modal-content.component';



import {
    UsersAllUsersProfilesComponent,
    UsersAllUsersProfilesNoTemplateComponent
} from '@users/components/users-all-users-profiles/users-all-users-profiles.component';
import {AutocompleteComponent} from '@basic/components/google-places/google-places.component';

@NgModule({
    declarations: [
        UsersUserCognitoLoginComponent,
        UsersUserSigninPageComponent,
        UsersUserCognitoSignupComponent,
        UsersUserCognitoConfirmSignupComponent,
        UsersUserCognitoForgotPasswordComponent,
        UsersUserSignupPageComponent,
        UsersUserSignupConfirmPageComponent,
        UsersUserCognitoResendSignupConfirmComponent,
        UsersUserProfileCreateOrUpdateComponent,
        UsersUserProfileCreateOrUpdateFormComponent,
        UsersUserProfileUpdatePageComponent,
        UsersUserProfileValueComponent,
        UsersUserProfileEntryNameToIconPipe,
        UsersUserProfileComponent,
        UsersUserProfileValueFaIconComponent,
        UsersFilterUserProfilesComponent,
        UsersUserProfileToUserProfileValuePipe,
        UsersUserProfileRowComponent,
        UsersGenderToFaIconPipe,
        UsersUserProfileValueFaIconGenderComponent,
        UsersUserProfileValueFaIconQuoteComponent,
        UsersUserProfileByUserComponent,
        UsersUserProfileByUserNoTemplateComponent,
        UsersUserProfileNoTemplateComponent,
        UsersUserCognitoLogoutComponent,
        UsersUserProfileCreateOrUpdateModalComponent,
        UsersUserProfileCreateOrUpdateModalContentComponent,

        UsersUserProfileCreateOrUpdateLocationModalComponent,
        UsersUserProfileCreateOrUpdateLocationModalContentComponent,
        UsersUserProfileEntryNameToHumanReadablePipe,
        UsersUserProfileCreateOrUpdateSpecificFormComponent,
        UsersUserProfileCreateOrUpdateSpecificLocationFormComponent,
        UsersAllUsersProfilesComponent,
        UsersAllUsersProfilesNoTemplateComponent,
        AutocompleteComponent
    ],
    imports: [
        CoreModule,
        RouterModule.forChild(USER_ROUTES),
        ImagesModule
    ],
    exports: [
        UsersUserCognitoLoginComponent,
        UsersUserSigninPageComponent,
        UsersUserCognitoSignupComponent,
        UsersUserCognitoConfirmSignupComponent,
        UsersUserCognitoForgotPasswordComponent,
        UsersUserSignupPageComponent,
        UsersUserSignupConfirmPageComponent,
        UsersUserCognitoResendSignupConfirmComponent,
        UsersUserProfileCreateOrUpdateComponent,
        UsersUserProfileCreateOrUpdateFormComponent,
        UsersUserProfileUpdatePageComponent,
        UsersUserProfileValueComponent,
        UsersUserProfileEntryNameToIconPipe,
        UsersUserProfileComponent,
        UsersUserProfileValueFaIconComponent,
        UsersFilterUserProfilesComponent,
        UsersUserProfileToUserProfileValuePipe,
        UsersUserProfileRowComponent,
        UsersGenderToFaIconPipe,
        UsersUserProfileValueFaIconGenderComponent,
        UsersUserProfileValueFaIconQuoteComponent,
        UsersUserProfileByUserComponent,
        UsersUserProfileByUserNoTemplateComponent,
        UsersUserProfileNoTemplateComponent,
        UsersUserCognitoLogoutComponent,
        UsersUserProfileCreateOrUpdateModalComponent,
        UsersUserProfileCreateOrUpdateModalContentComponent,

        UsersUserProfileCreateOrUpdateLocationModalComponent,
        UsersUserProfileCreateOrUpdateLocationModalContentComponent,
        UsersUserProfileEntryNameToHumanReadablePipe,
        UsersUserProfileCreateOrUpdateSpecificFormComponent,
        UsersUserProfileCreateOrUpdateSpecificLocationFormComponent,
        UsersAllUsersProfilesComponent,
        UsersAllUsersProfilesNoTemplateComponent,
        AutocompleteComponent

    ],
    entryComponents: [UsersUserProfileCreateOrUpdateModalContentComponent,UsersUserProfileCreateOrUpdateLocationModalContentComponent]
})
export class UsersModule {
}
