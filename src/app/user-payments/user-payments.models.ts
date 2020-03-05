import {JsonObject, JsonProperty} from 'json2typescript';
import {UserPayments} from '@core/core.models';
import {Element as StripeElement} from 'ngx-stripe/lib/interfaces/element';

export namespace UserPaymentRequests {

    export namespace CreateUserPayment {

        import UserPayment = UserPayments.UserPayment;

        @JsonObject()
        export class Request {
            @JsonProperty('amount', Number)
            amount: number = undefined;
            @JsonProperty('currency', String)
            currency = 'USD';
            @JsonProperty('token', String)
            token: string = undefined;
            @JsonProperty('description', String)
            description: string = undefined;
        }

        @JsonObject()
        export class Response extends UserPayment {

        }
    }

    export namespace GetUserPayment {

        import UserPayment = UserPayments.UserPayment;

        @JsonObject()
        export class Request {
            paymentId: string;
        }

        @JsonObject()
        export class Response extends UserPayment {

        }
    }
}

export namespace StripeRequests {
    export namespace CreateStripeToken {
        @JsonObject()
        export class Request {
            @JsonProperty('name', String, true)
            name: string = undefined;
            @JsonProperty('description', String, true)
            description: string = undefined;
            card: StripeElement;
        }
    }
}
