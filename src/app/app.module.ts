import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {IonicStorageModule} from '@ionic/storage';
import {PROMISE_BUTTON_MODULE_OPTIONS, STORAGE_CONFIGURATION} from '@core/core.constants';
import {RestangularModule} from 'ngx-restangular';
import {RestangularConfigFactory} from '@core/http/http.module';
import {CoreModule} from '@core/core.module';
import {Angular2PromiseButtonModule} from 'angular2-promise-buttons';
import {QuickbloxModule} from '@quickblox/quickblox.module';
import {SignedinModule} from '@signedin/signedin.module';
import {BasicRoutineHelperComponent} from '@basic/components/basic-routine-helper/basic-routine-helper.component';
import {NgxStripeModule} from 'ngx-stripe';
import {environment} from '@environment/environment';

@NgModule({
    declarations: [AppComponent,
        BasicRoutineHelperComponent,],
    entryComponents: [],
    imports: [BrowserModule,
        BrowserAnimationsModule,
        IonicStorageModule.forRoot(STORAGE_CONFIGURATION),
        RestangularModule.forRoot(RestangularConfigFactory),
        Angular2PromiseButtonModule.forRoot(PROMISE_BUTTON_MODULE_OPTIONS),
        IonicModule.forRoot(),
        NgxStripeModule.forRoot(environment.stripePublicKey),
        CoreModule,
        QuickbloxModule,
        SignedinModule,

        AppRoutingModule],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
