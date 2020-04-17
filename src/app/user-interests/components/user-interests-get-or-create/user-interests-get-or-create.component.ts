import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {BaseComponent} from '@core/components/base.component';
import {UserInterests} from '@core/core.models';
import UserInterest = UserInterests.UserInterest;

@Component({
    selector: 'user-interests-get-or-create',
    templateUrl: './user-interests-get-or-create.component.html',
    styleUrls: ['./user-interests-get-or-create.component.scss'],
})
export class UserInterestsGetOrCreateComponent extends BaseComponent {

    @Input()
    entity: string;
    @Input()
    type: string;
    @Input()
    interaction: string;

    @Output()
    userInteractionCreated = new EventEmitter<UserInterest>();
    @Output()
    userInterestsReceived = new EventEmitter<UserInterest[]>();

    user_interests: UserInterest[];

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }
}

@Component({
    selector: 'user-interests-get-or-create-with-delete',
    templateUrl: './user-interests-get-or-create-with-delete.component.html',
    styleUrls: ['./user-interests-get-or-create.component.scss'],
})
export class UserInterestsGetOrCreateWithDeleteComponent extends UserInterestsGetOrCreateComponent {
    @Output()
    userInterestDeleted = new EventEmitter<boolean>();
}

@Component({
    selector: 'user-interests-get-or-create-with-delete-heart',
    templateUrl: './user-interests-get-or-create-with-delete-heart.component.html',
    styleUrls: ['./user-interests-get-or-create.component.scss'],
})
export class UserInterestsGetOrCreateWithDeleteHeartComponent extends UserInterestsGetOrCreateComponent {
    @Output()
    userInterestDeleted = new EventEmitter<boolean>();
}
