import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {BaseComponent} from '@core/components/base.component';
import {UserRequests} from '@users/users.models';
import {UsersService} from '@users/users.service';
import {CommonsService} from '@core/commons.service';
import {Users} from '@core/core.models';
import GetUserProfile = UserRequests.GetUserProfile;
import UserProfile = Users.UserProfile;

@Component({
    selector: 'users-user-profile',
    templateUrl: './users-user-profile.component.html',
    styleUrls: ['./users-user-profile.component.scss'],
})
export class UsersUserProfileComponent extends BaseComponent {

    @Input()
    userProfile: UserProfile;

    @Output()
    userProfileReceived = new EventEmitter<UserProfile>();

    constructor(protected usersService: UsersService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
        this.makeServiceCallWithIdIfObjectNull(this.userProfile, this.createRequestData(), this.getUserProfile);
    }

    createRequestData(): void {
    }

    getUserProfile = () => {
        this.usersService.getUserProfile()
            .pipe(CommonsService.deserializeMap(GetUserProfile.Response)).subscribe(response => {
            this.userProfile = response;
            this.userProfileReceived.emit(response);
        });
    }

}


@Component({
    selector: 'users-user-profile-row',
    templateUrl: './users-user-profile-row.component.html',
    styleUrls: ['./users-user-profile.component.scss'],
})
export class UsersUserProfileRowComponent extends UsersUserProfileComponent {
}

@Component({
    selector: 'users-user-profile-no-template',
    templateUrl: './users-user-profile-no-template.component.html',
    styleUrls: ['./users-user-profile.component.scss'],
})
export class UsersUserProfileNoTemplateComponent extends UsersUserProfileComponent {
}