import {Component, Injector, OnInit} from '@angular/core';
import {BaseComponent} from '@core/components/base.component';

@Component({
    selector: 'app-basic-routine-helper',
    templateUrl: './basic-routine-helper.component.html',
    styleUrls: ['./basic-routine-helper.component.scss'],
})
export class BasicRoutineHelperComponent extends BaseComponent {


    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
        this.router.navigateByUrl('signedin/profile/dashboard');
    }


}
