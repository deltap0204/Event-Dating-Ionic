import {Component, Injector, Input} from '@angular/core';
import {BaseComponent} from '@core/components/base.component';
import {QuickbloxRequests} from '@quickblox/quickblox.models';
import DialogItem = QuickbloxRequests.ListDialogs.DialogItem;

@Component({
    selector: 'quickblox-get-dialog-item',
    templateUrl: './quickblox-get-dialog-item.component.html',
    styleUrls: ['./quickblox-get-dialog-item.component.scss']
})
export class QuickbloxGetDialogItemComponent extends BaseComponent {

    @Input() dialogItem: DialogItem;

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }
}
