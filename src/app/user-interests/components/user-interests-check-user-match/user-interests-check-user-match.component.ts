import {Component, EventEmitter, Injector, Input, OnInit, Output} from '@angular/core';
import {BaseComponent} from '@core/components/base.component';
import {UserInterestsRequests} from '@user-interests/user-interests.models';
import CheckUserMatch = UserInterestsRequests.CheckUserMatch;
import {Users} from '@core/core.models';
import UserAccount = Users.UserAccount;
import {UserInterestsService} from '@user-interests/user-interests.service';
import {CommonsService} from '@core/commons.service';

@Component({
    selector: 'user-interests-check-user-match',
    templateUrl: './user-interests-check-user-match.component.html',
    styleUrls: ['./user-interests-check-user-match.component.scss'],
})
export class UserInterestsCheckUserMatchComponent extends BaseComponent {

    @Input()
    user: UserAccount;

    @Output()
    userMatchResultReceived = new EventEmitter<CheckUserMatch.Response>();

    constructor(protected userInterestsService: UserInterestsService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

    createRequestData(user_id?: string): CheckUserMatch.Request {
        const request = new CheckUserMatch.Request();
        request.user = user_id || this.user._id;

        return request;
    }

    checkUserMatch(request: CheckUserMatch.Request) {
        this.userInterestsService.checkUserMatch(request)
            .pipe(CommonsService.deserializeMap(CheckUserMatch.Response))
            .subscribe(value => {
                console.log(value);
                this.userMatchResultReceived.emit(value);
            });
    }

}


@Component({
    selector: 'user-interests-check-user-match-no-template',
    templateUrl: './user-interests-check-user-match-no-template.component.html',
    styleUrls: ['./user-interests-check-user-match.component.scss'],
})
export class UserInterestsCheckUserMatchNoTemplateComponent extends UserInterestsCheckUserMatchComponent {
}
