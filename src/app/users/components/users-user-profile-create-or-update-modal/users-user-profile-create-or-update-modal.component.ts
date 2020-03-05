import {Component, Injector, Input} from '@angular/core';
import {BaseModalComponent} from '@core/components/modals/base-modal.component';
import {Users} from '@core/core.models';
import {UsersUserProfileCreateOrUpdateModalContentComponent} from '@users/components/users-user-profile-create-or-update-modal/users-user-profile-create-or-update-modal-content/users-user-profile-create-or-update-modal-content.component';
import UserProfile = Users.UserProfile;

@Component({
    selector: 'users-user-profile-create-or-update-modal',
    templateUrl: './users-user-profile-create-or-update-modal.component.html',
    styleUrls: ['./users-user-profile-create-or-update-modal.component.scss'],
})
export class UsersUserProfileCreateOrUpdateModalComponent extends BaseModalComponent {

    @Input()
    entityType: string;
    @Input()
    userProfile: UserProfile;

    constructor(injector: Injector) {
        super(injector);
    }

    async openModal() {
        this.setModalData('entityType', this.entityType);
        this.setModalData('userProfile', this.userProfile);
        await super.open(UsersUserProfileCreateOrUpdateModalContentComponent);
    }

    initializeComponent() {
    }


}
