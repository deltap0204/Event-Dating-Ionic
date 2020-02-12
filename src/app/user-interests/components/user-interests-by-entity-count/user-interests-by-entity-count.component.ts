import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {BaseComponent} from '@core/components/base.component';
import {UserInterestsService} from '@user-interests/user-interests.service';
import {UserInterestsRequests} from '@user-interests/user-interests.models';
import GetUserInterestsByEntityCount = UserInterestsRequests.GetUserInterestsByEntityCount;

@Component({
    selector: 'user-interests-by-entity-count',
    templateUrl: './user-interests-by-entity-count.component.html',
    styleUrls: ['./user-interests-by-entity-count.component.scss'],
})
export class UserInterestsByEntityCountComponent extends BaseComponent {

    @Input()
    entity: string;
    @Input()
    type: string;

    @Output()
    userInterestsCountReceived = new EventEmitter<number>();

    user_interests_count: number;

    constructor(protected userInterestsService: UserInterestsService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
        this.getUserInterestsByEntityCount(this.createRequestData());
    }

    createRequestData(entity?: string, type?: string): GetUserInterestsByEntityCount.Request {
        const request = new GetUserInterestsByEntityCount.Request();
        request.entity = entity || this.entity;
        request.type = type || this.type;

        return request;
    }

    getUserInterestsByEntityCount(request: GetUserInterestsByEntityCount.Request) {
        this.userInterestsService.getUserInterestsByEntityCount(request)
            .subscribe(value => {
                this.user_interests_count = isNaN(value) ? 0 : value;
                this.userInterestsCountReceived.emit(this.user_interests_count);
            });
    }

}
