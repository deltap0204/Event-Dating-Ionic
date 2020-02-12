import {Component, EventEmitter, Injector, Input, OnInit, Output} from '@angular/core';
import {BaseComponent} from '@core/components/base.component';
import {UserInterests} from '@core/core.models';
import UserInterest = UserInterests.UserInterest;
import {UserInterestsRequests} from '@user-interests/user-interests.models';
import DeleteUserInterest = UserInterestsRequests.DeleteUserInterest;
import {UserInterestsService} from '@user-interests/user-interests.service';

@Component({
    selector: 'user-interests-delete-user-interest',
    templateUrl: './user-interests-delete-user-interest.component.html',
    styleUrls: ['./user-interests-delete-user-interest.component.scss'],
})
export class UserInterestsDeleteUserInterestComponent extends BaseComponent {

    @Input()
    userInterest: UserInterest;

    @Output()
    userInterestDeleted = new EventEmitter<boolean>();

    constructor(protected userInterestsService: UserInterestsService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

    createRequestData(user_interest?: UserInterest): DeleteUserInterest.Request {
        const request = new DeleteUserInterest.Request();
        request.userInterestId = (user_interest || this.userInterest)._id;

        return request;
    }

    deleteUserInterest(request: DeleteUserInterest.Request) {
        this.userInterestsService.deleteUserInterest(request).subscribe(value => {
            this.userInterestDeleted.emit(true);
        });
    }
}

@Component({
  selector: 'user-interests-delete-user-interest-no-template',
  templateUrl: './user-interests-delete-user-interest-no-template.component.html',
  styleUrls: ['./user-interests-delete-user-interest.component.scss'],
})
export class UserInterestsDeleteUserInterestNoTemplateComponent extends UserInterestsDeleteUserInterestComponent {
}
