import {Injectable} from '@angular/core';
import {RestService} from '@core/http/rest.service';
import {Restangular} from 'ngx-restangular';
import {UserInterestsConstants} from '@user-interests/user-interests.constants';
import {UserInterestsRequests} from '@user-interests/user-interests.models';
import CreateUserInterest = UserInterestsRequests.CreateUserInterest;
import GetUserInterest = UserInterestsRequests.GetUserInterest;
import GetUserInterestsByEntity = UserInterestsRequests.GetUserInterestsByEntity;
import GetUserInterestsByEntityCount = UserInterestsRequests.GetUserInterestsByEntityCount;
import GetUserInterestsByEntityMultiple = UserInterestsRequests.GetUserInterestsByEntityMultiple;
import GetUserSimilarInterests = UserInterestsRequests.GetUserSimilarInterests;
import DeleteUserInterest = UserInterestsRequests.DeleteUserInterest;

@Injectable({
    providedIn: 'root'
})
export class UserInterestsService extends RestService {

    userInterestsService: Restangular;

    constructor(restangular: Restangular) {
        super(restangular);
        this.userInterestsService = this.getService(UserInterestsConstants.USER_INTERESTS_ENDPOINT);
    }

    createUserInterest(request: CreateUserInterest.Request) {
        return this.userInterestsService.one('').customPOST(this.serialize(request));
    }

    getUserInterest(request: GetUserInterest.Request) {
        return this.userInterestsService.one(request.userInterestId).get();
    }

    deleteUserInterest(request: DeleteUserInterest.Request) {
        return this.userInterestsService.one(request.userInterestId).customDELETE();
    }

    getUserInterestsByEntity(request: GetUserInterestsByEntity.Request) {
        return this.userInterestsService.one('entity').customGET('', this.serialize(request));
    }

    getUserInterestsByEntityCount(request: GetUserInterestsByEntityCount.Request) {
        return this.userInterestsService.one('entity').one('count').customGET('', this.serialize(request));
    }

    getUserInterestsByEntityMultiple(request: GetUserInterestsByEntityMultiple.Request) {
        return this.userInterestsService.one('entity').one('multiple').customGET('', this.serialize(request));
    }

    getUserSimilarInterests(request: GetUserSimilarInterests.Request) {
        return this.userInterestsService.one('similar').customGET('', this.serialize(request));
    }


}
