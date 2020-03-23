import {Injectable} from '@angular/core';
import {RestService} from '@core/http/rest.service';
import {Restangular} from 'ngx-restangular';
import {UserRequests} from '@users/users.models';
import {UserConstants} from '@users/users.constants';
import {catchError, flatMap} from 'rxjs/operators';
import {throwError} from 'rxjs';
import CreateUserProfile = UserRequests.CreateUserProfile;
import UpdateUserProfile = UserRequests.UpdateUserProfile;
import FilterUserProfiles = UserRequests.FilterUserProfiles;
import GetUserProfileByUser = UserRequests.GetUserProfileByUser;
import GetAllUserProfiles = UserRequests.GetAllUserProfiles;

@Injectable({
    providedIn: 'root'
})
export class UsersService extends RestService {

    usersService: Restangular;

    constructor(restangular: Restangular) {
        super(restangular);
        this.usersService = this.getService(UserConstants.USERS_ENDPOINT);
    }

    createUserProfile(request: CreateUserProfile.Request) {
        return this.usersService.one('profile').customPOST(super.serialize(request));
    }

    updateUserProfile(request: UpdateUserProfile.Request) {
        return this.usersService.one('profile').customPUT(this.serialize(request));
    }

    getUserProfile() {
        return this.usersService.one('profile').get();
    }

    createOrUpdateUserProfile(request: CreateUserProfile.Request) {
        return this.getUserProfile()
            .pipe(flatMap(response => {
                
                return this.updateUserProfile(request);
            }), catchError(error => {
                if (error.status === 404) {
                    return this.createUserProfile(request);
                } else {
                    return throwError(error);
                }
            }));
    }

    filterUserProfiles(request: FilterUserProfiles.Request) {
        return this.usersService.one('profile').one('filter').customGET('', this.serialize(request));
    }

    getUserProfileByUser(request: GetUserProfileByUser.Request) {
        return this.usersService.one('profile').one('users').customGET('', this.serialize(request));
    }

    getAllUserProfiles(request: GetAllUserProfiles.Request) {
        return this.usersService.one('profile').one('all').customGET('', this.serialize(request));
    }
}
