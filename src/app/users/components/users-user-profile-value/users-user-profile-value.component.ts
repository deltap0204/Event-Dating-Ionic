import {Component, Input} from '@angular/core';
import {BaseComponent} from '@core/components/base.component';
import {Users} from '@core/core.models';
import UserProfileValue = Users.UserProfileValue;

@Component({
    selector: 'users-user-profile-value',
    templateUrl: './users-user-profile-value.component.html',
    styleUrls: ['./users-user-profile-value.component.scss'],
})
export class UsersUserProfileValueComponent extends BaseComponent {

    @Input()
    userProfileValue: UserProfileValue;

    initializeComponent() {
    }

}

@Component({
    selector: 'users-user-profile-value-fa-icon',
    templateUrl: './users-user-profile-value-fa-icon.component.html',
    styleUrls: ['./users-user-profile-value.component.scss'],
})
export class UsersUserProfileValueFaIconComponent extends UsersUserProfileValueComponent {
}

@Component({
    selector: 'users-user-profile-value-fa-icon-gender',
    templateUrl: './users-user-profile-value-fa-icon-gender.component.html',
    styleUrls: ['./users-user-profile-value.component.scss'],
})
export class UsersUserProfileValueFaIconGenderComponent extends UsersUserProfileValueComponent {

}

@Component({
    selector: 'users-user-profile-value-fa-icon-quote',
    templateUrl: './users-user-profile-value-fa-icon-quote.component.html',
    styleUrls: ['./users-user-profile-value.component.scss'],
})
export class UsersUserProfileValueFaIconQuoteComponent extends UsersUserProfileValueComponent {

}

