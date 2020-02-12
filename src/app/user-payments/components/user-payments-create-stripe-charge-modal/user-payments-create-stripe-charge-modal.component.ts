import {Component, Injector, Input} from '@angular/core';
import {BaseModalComponent} from '@core/components/modals/base-modal.component';
// tslint:disable-next-line:max-line-length
import {UserPaymentsCreateStripeChargeModalContentComponent} from '@user-payments/components/user-payments-create-stripe-charge-modal/user-payments-create-stripe-charge-modal-content/user-payments-create-stripe-charge-modal-content.component';

@Component({
    selector: 'user-payments-create-stripe-charge-modal',
    templateUrl: './user-payments-create-stripe-charge-modal.component.html',
    styleUrls: ['./user-payments-create-stripe-charge-modal.component.scss'],
})
export class UserPaymentsCreateStripeChargeModalComponent extends BaseModalComponent {

    @Input()
    amount: number;

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

    async openModal() {
        this.setModalData('amount', this.amount);
        await super.open(UserPaymentsCreateStripeChargeModalContentComponent);
    }


}
