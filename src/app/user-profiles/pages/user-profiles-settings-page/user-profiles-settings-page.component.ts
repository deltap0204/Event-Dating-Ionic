import {Component, Injector} from '@angular/core';
import {PageComponent} from '@core/components/page.component';

@Component({
    selector: 'user-profiles-settings-page',
    templateUrl: './user-profiles-settings-page.component.html',
    styleUrls: ['./user-profiles-settings-page.component.scss'],
})
export class UserProfilesSettingsPageComponent extends PageComponent {


    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

    navigateToSignInPage() {
        this.router.navigateByUrl('basic/user/signin');
    }

}
