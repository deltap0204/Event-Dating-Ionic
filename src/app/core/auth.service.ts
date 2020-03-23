import {Injectable, Injector} from '@angular/core';
import {Users} from '@core/core.models';
import {Params} from '@angular/router';
import {StorageService} from '@core/storage.service';
import {CommonsService} from '@core/commons.service';
import UserProfile = Users.UserProfile;

export const SESSION_KEYS = {
    'SESSION_USER_PROFILE': 'user_profile',
    'SESSION_STORAGE_NAMESPACE': 'com.hhlife',
};

@Injectable({
    providedIn: 'root'
})
export class AuthService {


    userProfile: UserProfile;
    redirectState: RedirectState;

    protected storageService: StorageService;

    constructor(injector: Injector) {
        this.storageService = injector.get(StorageService);
    }

    clearAll() {
        this.storageService.clear();
        this.redirectState = null;
        this.userProfile = null;
        this.setLoggedProfile(null);
    }

    setLoggedProfile(user_profile: Users.UserProfile): Promise<any> {
        this.userProfile = user_profile;
        return this.storageService.set(SESSION_KEYS.SESSION_USER_PROFILE, CommonsService.serialize(user_profile));
    }

    getLoggedProfile(): Promise<UserProfile> {
        return this.storageService.get(SESSION_KEYS.SESSION_USER_PROFILE)
            .then(success => {
                return CommonsService.deserialize(success, UserProfile);
            });
    }

    setRedirectState(redirect_state: RedirectState) {
        this.redirectState = redirect_state;
    }

    getRedirectState(): RedirectState {
        return this.redirectState;
    }
}

export class RedirectState {
    url: string;
    queryParams: Params;


    constructor(url?: string, queryParams?: Params) {
        this.url = url;
        this.queryParams = queryParams;
    }
}
