import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {BaseComponent} from '@core/components/base.component';
import {UserInterestsService} from '@user-interests/user-interests.service';
import {CommonsService} from '@core/commons.service';
import {UserInterests} from '@core/core.models';
import {UserInterestsRequests} from '@user-interests/user-interests.models';
import UserInterest = UserInterests.UserInterest;
import GetUserInterestsByEntityMultiple = UserInterestsRequests.GetUserInterestsByEntityMultiple;

@Component({
    selector: 'user-interests-by-entity-multiple',
    templateUrl: './user-interests-by-entity-multiple.component.html',
    styleUrls: ['./user-interests-by-entity-multiple.component.scss'],
})
export class UserInterestsByEntityMultipleComponent extends BaseComponent {

    @Input()
    entity: string;
    @Input()
    type: string;
    @Input()
    userId: string | string[];
    @Input()
    interaction: string;


    @Output()
    userInterestsReceived = new EventEmitter<UserInterest[]>();

    user_interests: UserInterest[];

    constructor(protected userInterestsService: UserInterestsService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
        this.getUserInterestsByEntityMultiple(this.createRequestData());
    }

    createRequestData(entity?: string, type?: string, user_ids?: string | string[],
                      interaction?: string): GetUserInterestsByEntityMultiple.Request {
        const request = new GetUserInterestsByEntityMultiple.Request();
        request.entity = entity || this.entity;
        request.type = type || this.type;
        request.userIds = CommonsService.convertToArray(user_ids || this.userId);
        request.interaction = interaction || this.interaction;

        return request;
    }

    getUserInterestsByEntityMultiple(request: GetUserInterestsByEntityMultiple.Request) {
        this.userInterestsService.getUserInterestsByEntityMultiple(request)
            .pipe(CommonsService.deserializeMap(UserInterest))
            .subscribe(value => {
                this.user_interests = value;
                this.userInterestsReceived.emit(value);
            });
    }

}

@Component({
    selector: 'user-interests-by-entity-multiple-no-template',
    templateUrl: './user-interests-by-entity-multiple-no-template.component.html',
    styleUrls: ['./user-interests-by-entity-multiple.component.scss'],
})
export class UserInterestsByEntityMultipleNoTemplateComponent extends UserInterestsByEntityMultipleComponent {
}
