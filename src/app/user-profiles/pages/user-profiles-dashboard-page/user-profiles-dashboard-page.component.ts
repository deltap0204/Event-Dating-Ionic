import {Component, Injector} from '@angular/core';
import {PageComponent} from '@core/components/page.component';

@Component({
    selector: 'user-profiles-dashboard-page',
    templateUrl: './user-profiles-dashboard-page.component.html',
    styleUrls: ['./user-profiles-dashboard-page.component.scss'],
})
export class UserProfilesDashboardPageComponent extends PageComponent {

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }
}
