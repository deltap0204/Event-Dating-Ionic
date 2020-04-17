import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {BaseComponent} from '@core/components/base.component';
import {UserPaymentRequests} from '@user-payments/user-payments.models';
import {UserPaymentsService} from '@user-payments/user-payments.service';
import {CommonsService} from '@core/commons.service';
import {UserPayments} from '@core/core.models';
import CreateUserPayment = UserPaymentRequests.CreateUserPayment;
import UserPayment = UserPayments.UserPayment;

@Component({
    selector: 'user-payments-create-user-payment',
    templateUrl: './user-payments-create-user-payment.component.html',
    styleUrls: ['./user-payments-create-user-payment.component.scss'],
})
export class UserPaymentsCreateUserPaymentComponent extends BaseComponent {

    @Input()
    amount: number;
    @Input()
    token: string;
    @Input()
    description: string;

    @Output()
    userPaymentCreated = new EventEmitter<UserPayment>();

    constructor(protected userPaymentsService: UserPaymentsService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

    createRequestData(amount?: number, token?: string, description?: string): CreateUserPayment.Request {
        const request = new CreateUserPayment.Request();
        request.amount = amount || this.amount;
        request.token = token || this.token;
        request.description = description || this.description;
        return request;
    }

    createUserPayment(request: CreateUserPayment.Request) {
        this.userPaymentsService.createUserPayment(request)
            .pipe(CommonsService.deserializeMap(CreateUserPayment.Response)).subscribe(value => {
            this.userPaymentCreated.emit(value);
        });
    }
}

@Component({
    selector: 'user-payments-create-user-payment-no-template',
    templateUrl: './user-payments-create-user-payment-no-template.component.html',
    styleUrls: ['./user-payments-create-user-payment.component.scss'],
})
export class UserPaymentsCreateUserPaymentNoTemplateComponent extends UserPaymentsCreateUserPaymentComponent {
}

