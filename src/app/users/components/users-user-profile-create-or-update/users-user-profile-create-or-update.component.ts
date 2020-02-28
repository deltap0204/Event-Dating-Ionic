import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {BaseComponent} from '@core/components/base.component';
import {UsersService} from '@users/users.service';
import {UserRequests} from '@users/users.models';
import {CommonsService} from '@core/commons.service';
import {Users} from '@core/core.models';
import {Subscription} from 'rxjs';
import CreateUserProfile = UserRequests.CreateUserProfile;
import UserProfileValue = Users.UserProfileValue;
import LocationValue = Users.LocationValue;

@Component({
    selector: 'users-user-profile-create-or-update',
    templateUrl: './users-user-profile-create-or-update.component.html',
    styleUrls: ['./users-user-profile-create-or-update.component.scss'],
})
export class UsersUserProfileCreateOrUpdateComponent extends BaseComponent {
    @Input()
    entryType: string;
    @Input()
    value: string;
    @Input()
    privacy: string;

    @Output()
    userProfileCreated = new EventEmitter<CreateUserProfile.Response>();

    user_profile_create$: Subscription;

    constructor(protected usersService: UsersService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

    createProfileEntry(entry_type?: string, value?: string, privacy?: string): UserProfileValue {
        const profile_entry = new UserProfileValue();
        profile_entry.entryType = entry_type || this.entryType;
        profile_entry.value = value || this.value;
        profile_entry.privacy = privacy || this.privacy;

        return profile_entry;
    }

    createRequestData(profile_value: UserProfileValue | UserProfileValue[],
                      location?: LocationValue): CreateUserProfile.Request {
        const request = new CreateUserProfile.Request();
        request.profile = CommonsService.convertToArray(profile_value);
        return request;
    }

    createRequestLocationData(location: LocationValue): CreateUserProfile.Request {
            const request = new CreateUserProfile.Request();
            request.location = location[0];
            return request;
    }

    createUserProfile(request: CreateUserProfile.Request) {
        this.user_profile_create$ = this.usersService.createOrUpdateUserProfile(request)
            .pipe( CommonsService.deserializeMap(CreateUserProfile.Response))
            .subscribe(value => {
                this.userProfileCreated.emit(value);
            });
    }

    createLocationEntry(entry_type?: string, lat?: string, long?: string): LocationValue {
       
        const location = new LocationValue();
        location.latitude = location.latitude || lat;
        location.longitude = location.longitude || long;
        // console.log(location)
        return location;
    }
}
