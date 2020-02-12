import {Component, Injector, Input} from '@angular/core';
import {BaseComponent} from '@core/components/base.component';
import {QuickbloxObjects} from '@quickblox/quickblox.models';
import QuickbloxMessage = QuickbloxObjects.QuickbloxMessage;

@Component({
    selector: 'quickblox-message-details',
    templateUrl: './quickblox-message-details.component.html',
    styleUrls: ['./quickblox-message-details.component.scss']
})
export class QuickbloxMessageDetailsComponent extends BaseComponent {

    @Input()
    quickbloxMessage: QuickbloxMessage;

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }
}
