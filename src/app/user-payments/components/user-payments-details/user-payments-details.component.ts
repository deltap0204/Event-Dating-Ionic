import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {BaseComponent} from '@core/components/base.component';
import {UserPayments} from '@core/core.models';
import {UserPaymentRequests} from '@user-payments/user-payments.models';
import {UserPaymentsService} from '@user-payments/user-payments.service';
import {CommonsService} from '@core/commons.service';
import UserPayment = UserPayments.UserPayment;
import GetUserPayment = UserPaymentRequests.GetUserPayment;

@Component({
    selector: 'user-payments-details',
    templateUrl: './user-payments-details.component.html',
    styleUrls: ['./user-payments-details.component.scss'],
})
export class UserPaymentsDetailsComponent extends BaseComponent {

    @Input()
    userPaymentId: string;
    @Input()
    userPayment: UserPayment;

    @Output()
    userPaymentReceived = new EventEmitter<UserPayment>();

    constructor(protected userPaymentsService: UserPaymentsService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
        this.makeServiceCallWithIdIfObjectNull(this.userPayment, this.createRequestData(), this.getUserPayment);
    }

    createRequestData(user_payment_id?: string): GetUserPayment.Request {
        const request = new GetUserPayment.Request();
        request.paymentId = user_payment_id || this.userPaymentId;
        return request;
    }

    getUserPayment = (request: GetUserPayment.Request) => {
        this.userPaymentsService.getUserPayment(request).pipe(CommonsService.deserializeMap(GetUserPayment.Response))
            .subscribe(value => {
                this.userPayment = value;
                this.userPaymentReceived.emit(value);
            });
    }

}
