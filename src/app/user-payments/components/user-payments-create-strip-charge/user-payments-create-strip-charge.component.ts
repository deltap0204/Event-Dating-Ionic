import {Component, EventEmitter, Injector, Output, ViewChild} from '@angular/core';
import {FormComponent} from '@core/components/form.component';
import {DynamicFormControlModel} from '@ng-dynamic-forms/core';
import {AppStripeService} from '@user-payments/user-payments.service';
import {Element as StripeElement, ElementOptions} from 'ngx-stripe/lib/interfaces/element';
import {StripeRequests} from '@user-payments/user-payments.models';
import {ElementsOptions, StripeCardComponent} from 'ngx-stripe';
import {TokenResult} from 'ngx-stripe/lib/interfaces/token';
import CreateStripeToken = StripeRequests.CreateStripeToken;
import {Subscription} from 'rxjs';

@Component({
    selector: 'user-payments-create-strip-charge',
    templateUrl: './user-payments-create-strip-charge.component.html',
    styleUrls: ['./user-payments-create-strip-charge.component.scss'],
})
export class UserPaymentsCreateStripChargeComponent extends FormComponent {

    @ViewChild(StripeCardComponent, {static: true})
    stripe_card_component: StripeCardComponent;

    @Output()
    stripeTokenReceived = new EventEmitter<TokenResult>();
    create_stripe_token$: Subscription;


    cardOptions: ElementOptions = {
        style: {
            base: {
                iconColor: '#666EE8',
                color: '#31325F',
                lineHeight: '40px',
                fontWeight: 300,
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSize: '18px',
                '::placeholder': {
                    color: '#CFD7E0'
                }
            }
        }
    };

    elementsOptions: ElementsOptions = {
        locale: 'en'
    };

    constructor(protected appStripeService: AppStripeService, injector: Injector) {
        super(injector);
    }

    afterInitializeComponent() {
    }

    getFormModel(): DynamicFormControlModel[] {
        return [];
    }

    initializeComponent() {
    }

    createRequestData(card?: StripeElement): CreateStripeToken.Request {
        const request = new CreateStripeToken.Request();
        request.card = card || this.stripe_card_component.getCard();

        return request;
    }

    createStripeToken(request: CreateStripeToken.Request) {
        this.create_stripe_token$ = this.appStripeService.createToken(request).subscribe(value => {
            this.stripeTokenReceived.emit(value);
            console.log(value);
        });
    }

}
