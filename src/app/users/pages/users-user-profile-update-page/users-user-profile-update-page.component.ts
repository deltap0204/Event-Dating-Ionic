import {Component, Injector} from '@angular/core';
import {PageComponent} from '@core/components/page.component';
import {SelectedFile} from '@images/images.models';

@Component({
    selector: 'users-user-profile-update-page',
    templateUrl: './users-user-profile-update-page.component.html',
    styleUrls: ['./users-user-profile-update-page.component.scss'],
})
export class UsersUserProfileUpdatePageComponent extends PageComponent {


    selected_file: any;

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

    log(value: any) {
        console.log(value);
    }


}

