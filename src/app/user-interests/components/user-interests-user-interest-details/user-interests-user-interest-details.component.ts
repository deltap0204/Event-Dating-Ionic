import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {BaseComponent} from '@core/components/base.component';
import {UserInterests} from '@core/core.models';
import {UserInterestsRequests} from '@user-interests/user-interests.models';
import {UserInterestsService} from '@user-interests/user-interests.service';
import {CommonsService} from '@core/commons.service';
import UserInterest = UserInterests.UserInterest;
import GetUserInterest = UserInterestsRequests.GetUserInterest;

@Component({
    selector: 'user-interests-user-interest-details',
    templateUrl: './user-interests-user-interest-details.component.html',
    styleUrls: ['./user-interests-user-interest-details.component.scss'],
})
export class UserInterestsUserInterestDetailsComponent extends BaseComponent {

    @Input()
    userInterest: UserInterest;
    @Input()
    userInterestId: string;

    @Output()
    userInterestReceived = new EventEmitter<UserInterest>();

    constructor(protected userInterestsService: UserInterestsService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
        this.makeServiceCallWithIdIfObjectNull(this.userInterest, this.createRequestData(), this.getUserInterest);
    }

    createRequestData(user_interest_id?: string): GetUserInterest.Request {
        const request = new GetUserInterest.Request();
        request.userInterestId = user_interest_id || this.userInterestId;

        return request;
    }

    getUserInterest = (request: GetUserInterest.Request) => {
        this.userInterestsService.getUserInterest(request).pipe(CommonsService.deserializeMap(UserInterest))
            .subscribe(value => {
                this.userInterest = value;
                this.userInterestReceived.emit(value);
            });
    }

}
