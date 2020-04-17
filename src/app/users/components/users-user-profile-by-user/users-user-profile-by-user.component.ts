import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {Users} from '@core/core.models';
import {BaseComponent} from '@core/components/base.component';
import {UserRequests} from '@users/users.models';
import {UsersService} from '@users/users.service';
import {CommonsService} from '@core/commons.service';
import UserAccount = Users.UserAccount;
import UserProfile = Users.UserProfile;
import GetUserProfileByUser = UserRequests.GetUserProfileByUser;

@Component({
    selector: 'users-user-profile-by-user',
    templateUrl: './users-user-profile-by-user.component.html',
    styleUrls: ['./users-user-profile-by-user.component.scss'],
})
export class UsersUserProfileByUserComponent extends BaseComponent {

    @Input()
    userAccount: UserAccount;

    @Output()
    userProfileReceived = new EventEmitter<UserProfile>();

    user_profile: UserProfile;


    constructor(protected usersService: UsersService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
        this.getUserProfileByUser(this.createRequestData());
    }

    createRequestData(user_account?: UserAccount): GetUserProfileByUser.Request {
        const request = new GetUserProfileByUser.Request();
        request.user = (user_account || this.userAccount)._id;

        return request;
    }

    getUserProfileByUser(request: GetUserProfileByUser.Request) {
        this.usersService.getUserProfileByUser(request).pipe(CommonsService.deserializeMap(UserProfile))
            .subscribe(value => {
                this.user_profile = value;
                this.userProfileReceived.emit(value);
            });
    }
}

@Component({
    selector: 'users-user-profile-by-user-no-template',
    templateUrl: './users-user-profile-by-user-no-template.component.html',
    styleUrls: ['./users-user-profile-by-user.component.scss'],
})
export class UsersUserProfileByUserNoTemplateComponent extends UsersUserProfileByUserComponent {
}
