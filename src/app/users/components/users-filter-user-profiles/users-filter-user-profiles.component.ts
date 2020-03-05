import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {BaseComponent} from '@core/components/base.component';
import {UsersService} from '@users/users.service';
import {UserRequests} from '@users/users.models';
import {CommonsService} from '@core/commons.service';
import {Users} from '@core/core.models';
import FilterUserProfiles = UserRequests.FilterUserProfiles;
import UserProfile = Users.UserProfile;

@Component({
    selector: 'users-filter-user-profiles',
    templateUrl: './users-filter-user-profiles.component.html',
    styleUrls: ['./users-filter-user-profiles.component.scss'],
})
export class UsersFilterUserProfilesComponent extends BaseComponent {

    @Input()
    minAge: number;
    @Input()
    maxAge: number;
    @Input()
    latitude: number;
    @Input()
    longitude: number;
    @Input()
    distance: number;
    @Input()
    gender: string;

    @Output()
    userProfilesRecieved = new EventEmitter<UserProfile[]>();

    user_profiles: UserProfile[];

    constructor(protected usersService: UsersService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
      this.filterUserProfiles(this.createRequestData());
    }

    createRequestData(gender?: string, min_age?: number, max_age?: number, latitude?: number, longitude?: number,
                      distance?: number): FilterUserProfiles.Request {
        const request = new FilterUserProfiles.Request();
        request.distance = distance || this.distance;
        request.latitude = latitude || this.latitude;
        request.longitude = longitude || this.longitude;
        request.minAge = min_age || this.minAge;
        request.maxAge = max_age || this.maxAge;
        request.gender = gender || this.gender;

        return request;
    }

    filterUserProfiles(request: FilterUserProfiles.Request) {
        this.usersService.filterUserProfiles(request).pipe(CommonsService.deserializeMap(FilterUserProfiles.Response))
            .subscribe(value => {
                this.user_profiles = value;
                this.userProfilesRecieved.emit(value);
            });
    }

}
