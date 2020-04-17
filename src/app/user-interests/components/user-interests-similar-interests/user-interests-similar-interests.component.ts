import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {BaseComponent} from '@core/components/base.component';
import {UserInterestsService} from '@user-interests/user-interests.service';
import {CommonsService} from '@core/commons.service';
import {UserInterests} from '@core/core.models';
import {UserInterestsRequests} from '@user-interests/user-interests.models';
import UserInterest = UserInterests.UserInterest;
import GetUserSimilarInterests = UserInterestsRequests.GetUserSimilarInterests;

@Component({
    selector: 'user-interests-similar-interests',
    templateUrl: './user-interests-similar-interests.component.html',
    styleUrls: ['./user-interests-similar-interests.component.scss'],
})
export class UserInterestsSimilarInterestsComponent extends BaseComponent {

    @Input()
    entity: string;
    @Input()
    type: string;
    @Input()
    minAge: number;
    @Input()
    maxAge: number;
    @Input()
    gender: string;

    @Output()
    userInterestsReceived = new EventEmitter<UserInterest[]>();

    user_interests: UserInterest[];

    constructor(protected userInterestsService: UserInterestsService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
        this.getUserSimilarInterests(this.createRequestData());
    }

    createRequestData(entity?: string, type?: string, min_age?: number, max_age?: number,
                      gender?: string): GetUserSimilarInterests.Request {
        const request = new GetUserSimilarInterests.Request();
        request.entity = entity || this.entity;
        request.type = type || this.type;
        request.minAge = min_age || this.minAge;
        request.maxAge = max_age || this.maxAge;
        request.gender = gender || this.gender;

        return request;
    }

    getUserSimilarInterests(request: GetUserSimilarInterests.Request) {
        this.userInterestsService.getUserSimilarInterests(request).pipe(CommonsService.deserializeMap(UserInterest))
            .subscribe(value => {
                this.user_interests = value;
                this.userInterestsReceived.emit(value);
            });
    }

}

@Component({
    selector: 'user-interests-similar-interests-no-template',
    templateUrl: './user-interests-similar-interests-no-template.component.html',
    styleUrls: ['./user-interests-similar-interests.component.scss'],
})
export class UserInterestsSimilarInterestsNoTemplateComponent extends UserInterestsSimilarInterestsComponent {
}
