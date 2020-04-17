import {Component, Injector, ViewChild} from '@angular/core';
import {BaseModalContentComponent} from '@core/components/modals/base-modal-content.component';
// tslint:disable-next-line:max-line-length
import {UserPaymentsCreateUserPaymentNoTemplateComponent} from '@user-payments/components/user-payments-create-user-payment/user-payments-create-user-payment.component';
import {UserInterests} from '@core/core.models';
import {TokenResult} from 'ngx-stripe/lib/interfaces/token';
import ModalResult = UserInterests.ModalResult;

@Component({
    selector: 'user-payments-create-stripe-charge-modal-content',
    templateUrl: './user-payments-create-stripe-charge-modal-content.component.html',
    styleUrls: ['./user-payments-create-stripe-charge-modal-content.component.scss'],
})
export class UserPaymentsCreateStripeChargeModalContentComponent extends BaseModalContentComponent {

    amount: number;

    @ViewChild(UserPaymentsCreateUserPaymentNoTemplateComponent, {static: true})
    user_payments_create_user_payment_no_template_component: UserPaymentsCreateUserPaymentNoTemplateComponent;


    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

    registerEffectAndCloseModal(event: TokenResult, modal_result: ModalResult) {
        this.user_payments_create_user_payment_no_template_component.createUserPayment(
            this.user_payments_create_user_payment_no_template_component.createRequestData(undefined,
                event.token.id));
        this.effects_observable_array.push(
            this.user_payments_create_user_payment_no_template_component.userPaymentCreated.asObservable());
        this.closeModal(modal_result);
    }


}
