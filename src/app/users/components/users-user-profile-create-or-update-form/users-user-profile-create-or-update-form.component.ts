import { Component, EventEmitter, Injector, Input, Output, ViewChild } from '@angular/core';
import { FormComponent } from '@core/components/form.component';
import { DynamicFormControlModel } from '@ng-dynamic-forms/core';
import { USER_PROFILE_CREATE_OR_UPDATE } from '@users/users.form.models';
import { Users } from '@core/core.models';
// tslint:disable-next-line:max-line-length
import { UsersUserProfileCreateOrUpdateComponent } from '@users/components/users-user-profile-create-or-update/users-user-profile-create-or-update.component';
import { UserConstants } from '@users/users.constants';
import UserProfileValue = Users.UserProfileValue;
import UserProfile = Users.UserProfile;
import LocationValue = Users.LocationValue;

@Component({
    selector: 'users-user-profile-create-or-update-form',
    templateUrl: './users-user-profile-create-or-update-form.component.html',
    styleUrls: ['./users-user-profile-create-or-update-form.component.scss'],
})
export class UsersUserProfileCreateOrUpdateFormComponent extends FormComponent {

    @Output()
    userProfileChanged = new EventEmitter<UserProfile>();

    @ViewChild(UsersUserProfileCreateOrUpdateComponent, { static: true })
    users_user_profile_create_or_update_component: UsersUserProfileCreateOrUpdateComponent;



    constructor(injector: Injector) {
        super(injector);
    }

    afterInitializeComponent() {
    }

    getFormModel(): DynamicFormControlModel[] {
        return USER_PROFILE_CREATE_OR_UPDATE;
    }

    initializeComponent() {
        this.users_user_profile_create_or_update_component.userProfileCreated.subscribe(value => {
            this.userProfileChanged.emit(value);
        });
    }

    createRequestData(): UserProfileValue[] {
        const array = [];
        array.push(this.users_user_profile_create_or_update_component.createProfileEntry('WORK',
            this.getInputModelValueAsString(UserConstants.USER_PROFILE_ENTRY_NAME.WORK), 'PUBLIC'));
        array.push(this.users_user_profile_create_or_update_component.createProfileEntry(
            UserConstants.USER_PROFILE_ENTRY_NAME.NAME,
            this.getInputModelValueAsString(UserConstants.USER_PROFILE_ENTRY_NAME.NAME), 'PUBLIC'));
        array.push(this.users_user_profile_create_or_update_component.createProfileEntry(
            UserConstants.USER_PROFILE_ENTRY_NAME.AGE,
            this.getInputModelValueAsString(UserConstants.USER_PROFILE_ENTRY_NAME.AGE), 'PUBLIC'));
        array.push(this.users_user_profile_create_or_update_component.createProfileEntry(
            UserConstants.USER_PROFILE_ENTRY_NAME.GENDER,
            this.getInputModelValueAsString(UserConstants.USER_PROFILE_ENTRY_NAME.GENDER), 'PUBLIC'));

        array.push(this.users_user_profile_create_or_update_component.createProfileEntry(
            UserConstants.USER_PROFILE_ENTRY_NAME.KIDS,
            this.getInputModelValueAsString(UserConstants.USER_PROFILE_ENTRY_NAME.KIDS), 'PUBLIC'));
        array.push(this.users_user_profile_create_or_update_component.createProfileEntry(
            UserConstants.USER_PROFILE_ENTRY_NAME.FAMILY_PLANS,
            this.getInputModelValueAsString(UserConstants.USER_PROFILE_ENTRY_NAME.FAMILY_PLANS), 'PUBLIC'));
        array.push(this.users_user_profile_create_or_update_component.createProfileEntry(
            UserConstants.USER_PROFILE_ENTRY_NAME.DRINKING,
            this.getInputModelValueAsString(UserConstants.USER_PROFILE_ENTRY_NAME.DRINKING), 'PUBLIC'));
        array.push(this.users_user_profile_create_or_update_component.createProfileEntry(
            UserConstants.USER_PROFILE_ENTRY_NAME.SMOKING,
            this.getInputModelValueAsString(UserConstants.USER_PROFILE_ENTRY_NAME.SMOKING), 'PUBLIC'));
        array.push(this.users_user_profile_create_or_update_component.createProfileEntry(
            UserConstants.USER_PROFILE_ENTRY_NAME.MARIJUANA,
            this.getInputModelValueAsString(UserConstants.USER_PROFILE_ENTRY_NAME.MARIJUANA), 'PUBLIC'));
        array.push(this.users_user_profile_create_or_update_component.createProfileEntry(
            UserConstants.USER_PROFILE_ENTRY_NAME.DRUGS,
            this.getInputModelValueAsString(UserConstants.USER_PROFILE_ENTRY_NAME.DRUGS), 'PUBLIC'));


        return array;
    }

}

@Component({
    selector: 'users-user-profile-create-or-update-specific-form',
    templateUrl: './users-user-profile-create-or-update-specific-form.component.html',
    styleUrls: ['./users-user-profile-create-or-update-form.component.scss'],
})
export class UsersUserProfileCreateOrUpdateSpecificFormComponent extends UsersUserProfileCreateOrUpdateFormComponent {

    @Input()
    entityType: string;
    @Input()
    userProfileValue: UserProfileValue;


    createRequestData(entity_type?: string): Users.UserProfileValue[] {
        const array = [];
        entity_type = entity_type || this.entityType;
        array.push(
            this.users_user_profile_create_or_update_component.createProfileEntry(entity_type,
                this.getInputModelValueAsString(entity_type), 'PUBLIC'));
        return array;
    }
}

@Component({
    selector: 'users-user-profile-create-or-update-specific-location-form',
    templateUrl: './users-user-profile-create-or-update-specific-location-form.component.html',
    styleUrls: ['./users-user-profile-create-or-update-form.component.scss'],
})
export class UsersUserProfileCreateOrUpdateSpecificLocationFormComponent extends UsersUserProfileCreateOrUpdateFormComponent {

    @Input()
    entityType: string;
    @Input()
    locationValue: LocationValue;

    latitude: number;
    longitude: number;


    createRequestLocationData(): Users.LocationValue {
        return this.users_user_profile_create_or_update_component.createLocationEntry(this.latitude, this.longitude);
    }

    getAddress(place: object) {
        this.latitude = Number(place['geometry'].location.lat());
        this.longitude = Number(place['geometry'].location.lng());
    }
}
