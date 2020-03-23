import {Component, EventEmitter, Injector, Input, OnInit, Output} from '@angular/core';
import {BaseComponent} from '@core/components/base.component';
import {Core} from '@core/core.models';
import HttpError = Core.HttpError;
import {CognitoService} from '@users/cognito.service';
import {StorageService} from '@core/storage.service';

@Component({
    selector: 'users-user-cognito-logout',
    templateUrl: './users-user-cognito-logout.component.html',
    styleUrls: ['./users-user-cognito-logout.component.scss'],
})
export class UsersUserCognitoLogoutComponent extends BaseComponent {

    @Input() global: boolean;

    @Output() signOutSuccess = new EventEmitter<boolean>();
    @Output() signOutError = new EventEmitter<HttpError>();

    constructor(protected cognitoService: CognitoService, protected storageService: StorageService,
                injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

    signOut(value: boolean) {
        this.cognitoService.signOut(this.global || value)
            .subscribe(success => {
                this.authService.clearAll();
                this.signOutSuccess.emit(true);
            }, error => {
                this.signOutError.emit(error);
            });
    }


}
