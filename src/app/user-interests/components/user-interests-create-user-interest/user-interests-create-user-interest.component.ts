import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {BaseComponent} from '@core/components/base.component';
import {UserInterestsService} from '@user-interests/user-interests.service';
import {UserInterestsRequests} from '@user-interests/user-interests.models';
import {UserInterests} from '@core/core.models';
import {CommonsService} from '@core/commons.service';
import CreateUserInterest = UserInterestsRequests.CreateUserInterest;
import UserInterest = UserInterests.UserInterest;

@Component({
    selector: 'user-interests-create-user-interest',
    templateUrl: './user-interests-create-user-interest.component.html',
    styleUrls: ['./user-interests-create-user-interest.component.scss'],
})
export class UserInterestsCreateUserInterestComponent extends BaseComponent {

    @Input()
    entity: string;
    @Input()
    type: string;
    @Input()
    interaction: string;

    @Output()
    userInteractionCreated = new EventEmitter<UserInterest>();


    constructor(protected userInterestsService: UserInterestsService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

    createRequestData(interaction?: string, entity?: string, type?: string): CreateUserInterest.Request {
        const request = new CreateUserInterest.Request();
        request.interaction = interaction || this.interaction;
        request.entity = entity || this.entity;
        request.type = type || this.type;

        return request;
    }

    createUserInterest(request: CreateUserInterest.Request) {
        this.userInterestsService.createUserInterest(request).pipe(CommonsService.deserializeMap(UserInterest))
            .subscribe(value => {
                this.userInteractionCreated.emit(value);
            });
    }
}

@Component({
    selector: 'user-interests-create-user-interest-no-template',
    templateUrl: './user-interests-create-user-interest-no-template.component.html',
    styleUrls: ['./user-interests-create-user-interest.component.scss'],
})
export class UserInterestsCreateUserInterestNoTemplateComponent extends UserInterestsCreateUserInterestComponent {
}