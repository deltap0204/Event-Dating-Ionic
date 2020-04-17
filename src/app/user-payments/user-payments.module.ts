import {NgModule} from '@angular/core';
import {UserPaymentsPipe} from './user-payments.pipe';
import {CoreModule} from '@core/core.module';
import {UserPaymentsDetailsComponent} from '@user-payments/components/user-payments-details/user-payments-details.component';
// tslint:disable-next-line:max-line-length
import {
    UserPaymentsCreateUserPaymentComponent,
    UserPaymentsCreateUserPaymentNoTemplateComponent
} from '@user-payments/components/user-payments-create-user-payment/user-payments-create-user-payment.component';
// tslint:disable-next-line:max-line-length
import {UserPaymentsCreateStripChargeComponent} from '@user-payments/components/user-payments-create-strip-charge/user-payments-create-strip-charge.component';
// tslint:disable-next-line:max-line-length
import {UserPaymentsCreateStripeChargeModalContentComponent} from '@user-payments/components/user-payments-create-stripe-charge-modal/user-payments-create-stripe-charge-modal-content/user-payments-create-stripe-charge-modal-content.component';
// tslint:disable-next-line:max-line-length
import {UserPaymentsCreateStripeChargeModalComponent} from '@user-payments/components/user-payments-create-stripe-charge-modal/user-payments-create-stripe-charge-modal.component';


@NgModule({
    declarations: [
        UserPaymentsPipe,
        UserPaymentsDetailsComponent,
        UserPaymentsCreateUserPaymentComponent,
        UserPaymentsCreateStripChargeComponent,
        UserPaymentsCreateStripeChargeModalContentComponent,
        UserPaymentsCreateStripeChargeModalComponent,
        UserPaymentsCreateUserPaymentNoTemplateComponent
    ],
    imports: [
        CoreModule,
    ],
    exports: [
        UserPaymentsDetailsComponent,
        UserPaymentsCreateUserPaymentComponent,
        UserPaymentsCreateStripChargeComponent,
        UserPaymentsCreateStripeChargeModalContentComponent,
        UserPaymentsCreateStripeChargeModalComponent,
        UserPaymentsCreateUserPaymentNoTemplateComponent

    ],
    entryComponents: [
        UserPaymentsCreateStripeChargeModalContentComponent,
    ]
})
export class UserPaymentsModule {
}
