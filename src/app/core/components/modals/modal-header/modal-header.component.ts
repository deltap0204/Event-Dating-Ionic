import {
    Component,
    EventEmitter,
    Injector,
    Input,
    Output
} from '@angular/core';
import {BaseComponent} from '@core/components/base.component';

@Component({
    selector: 'core-modal-header',
    templateUrl: './modal-header.component.html',
    styleUrls: ['./modal-header.component.scss']
})
export class ModalHeaderComponent extends BaseComponent {

    @Input()
    title;

    @Output()
    closeClicked = new EventEmitter();

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

    onCloseClicked(reason?: string, status?: string, data?: any) {
        this.closeClicked.emit({reason: reason, status: status || 'CLOSE', data: data});
    }
}
