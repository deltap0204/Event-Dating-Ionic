import {Pipe, PipeTransform} from '@angular/core';
import {UserConstants} from '@users/users.constants';
import {Users} from '@core/core.models';
import UserProfileValue = Users.UserProfileValue;
import UserProfile = Users.UserProfile;

@Pipe({
    name: 'usersUserProfileEntryNameToIcon'
})
export class UsersUserProfileEntryNameToIconPipe implements PipeTransform {

    transform(value: UserProfileValue, ...args: any[]): string {
        return UserConstants.PROFILE_ENTRY_NAME_TO_ICON[value.entryType];
    }

}

@Pipe({
    name: 'usersUserProfileEntryNameToHumanReadable'
})
export class UsersUserProfileEntryNameToHumanReadablePipe implements PipeTransform {

    transform(value: string, ...args: any[]): string {
        return UserConstants.PROFILE_ENTRY_NAME_TO_HUMAN_READABLE[value];
    }

}

@Pipe({
    name: 'usersUserProfileToUserProfileValue'
})
export class UsersUserProfileToUserProfileValuePipe implements PipeTransform {

    transform(value: UserProfile, profile_name: string, ...args: any[]): UserProfileValue {
        return value.profile.find(profile => profile.entryType === profile_name);
    }

}

@Pipe({
    name: 'usersGenderToFaIcon'
})
export class UsersGenderToFaIconPipe implements PipeTransform {

    transform(value: UserProfileValue, ...args: any[]): string {
        return UserConstants.GENDER_TO_ICON[value.value];
    }

}
