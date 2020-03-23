import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {BaseComponent} from '@core/components/base.component';
import {UserInterests} from '@core/core.models';
import {UserInterestsRequests} from '@user-interests/user-interests.models';
import {UserInterestsService} from '@user-interests/user-interests.service';
import {CommonsService} from '@core/commons.service';
import UserInterest = UserInterests.UserInterest;
import GetUserInterestsByEntity = UserInterestsRequests.GetUserInterestsByEntity;

@Component({
    selector: 'user-interests-by-entity',
    templateUrl: './user-interests-by-entity.component.html',
    styleUrls: ['./user-interests-by-entity.component.scss'],
})
export class UserInterestsByEntityComponent extends BaseComponent {

    @Input()
    entity: string;
    @Input()
    type: string;

    @Output()
    userInterestsReceived = new EventEmitter<UserInterest[]>();

    user_interests: UserInterest[];

    constructor(protected userInterestsService: UserInterestsService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
        this.getUserInterestsByEntity(this.createRequestData());
    }

    createRequestData(entity?: string, type?: string): GetUserInterestsByEntity.Request {
        const request = new GetUserInterestsByEntity.Request();
        request.entity = entity || this.entity;
        request.type = type || this.type;

        return request;
    }

    getUserInterestsByEntity(request: GetUserInterestsByEntity.Request) {
        this.userInterestsService.getUserInterestsByEntity(request).pipe(CommonsService.deserializeMap(UserInterest))
            .subscribe(value => {
                this.user_interests = value;
                this.userInterestsReceived.emit(value);
            });
    }

}
