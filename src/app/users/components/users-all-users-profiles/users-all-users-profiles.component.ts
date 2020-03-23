import {Component, EventEmitter, Injector, Output} from '@angular/core';
import {BaseComponent} from '@core/components/base.component';
import {UsersService} from '@users/users.service';
import {UserRequests} from '@users/users.models';
import {Users} from '@core/core.models';
import {CommonsService} from '@core/commons.service';
import GetAllUserProfiles = UserRequests.GetAllUserProfiles;
import UserProfile = Users.UserProfile;

@Component({
    selector: 'users-all-users-profiles',
    templateUrl: './users-all-users-profiles.component.html',
    styleUrls: ['./users-all-users-profiles.component.scss'],
})
export class UsersAllUsersProfilesComponent extends BaseComponent {

    @Output()
    userProfilesReceived = new EventEmitter<UserProfile[]>();

    user_profiles: UserProfile[];

    constructor(protected usersService: UsersService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
        this.getAllUserProfiles(this.createRequestData());
    }

    createRequestData(): GetAllUserProfiles.Request {
        return new GetAllUserProfiles.Request();
    }

    getAllUserProfiles(request: GetAllUserProfiles.Request) {
        this.usersService.getAllUserProfiles(request).pipe(CommonsService.deserializeMap(UserProfile))
            .subscribe(value => {
                this.user_profiles = value;
                this.userProfilesReceived.emit(value);
            });
    }
}

@Component({
    selector: 'users-all-users-profiles-no-template',
    templateUrl: './users-all-users-profiles-no-template.component.html',
    styleUrls: ['./users-all-users-profiles.component.scss'],
})
export class UsersAllUsersProfilesNoTemplateComponent extends UsersAllUsersProfilesComponent {
}
