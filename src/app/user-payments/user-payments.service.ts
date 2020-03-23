import {Injectable} from '@angular/core';
import {RestService} from '@core/http/rest.service';
import {Restangular} from 'ngx-restangular';
import {UserPaymentsConstants} from '@user-payments/user-payments.constants';
import {StripeRequests, UserPaymentRequests} from '@user-payments/user-payments.models';
import CreateUserPayment = UserPaymentRequests.CreateUserPayment;
import GetUserPayment = UserPaymentRequests.GetUserPayment;
import {StripeService} from 'ngx-stripe';
import CreateStripeToken = StripeRequests.CreateStripeToken;

@Injectable({
    providedIn: 'root'
})
export class UserPaymentsService extends RestService {

    userPaymentsService: Restangular;

    constructor(restangular: Restangular) {
        super(restangular);
        this.userPaymentsService = this.getService(UserPaymentsConstants.USERS_PAYMENTS_ENDPOINT);
    }

    createUserPayment(request: CreateUserPayment.Request) {
        return this.userPaymentsService.one('').customPOST(this.serialize(request));
    }

    getUserPayment(request: GetUserPayment.Request) {
        return this.userPaymentsService.one(request.paymentId).get();
    }
}

@Injectable({
    providedIn: 'root'
})
export class AppStripeService extends RestService {

    constructor(protected stripeService: StripeService, restangular: Restangular) {
        super(restangular);
    }

    createToken(request: CreateStripeToken.Request) {
        return this.stripeService.createToken(request.card, this.serialize(request));
    }
}
