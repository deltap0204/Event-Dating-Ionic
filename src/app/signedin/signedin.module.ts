import {NgModule} from '@angular/core';
import {CoreModule} from '@core/core.module';
import {SignedinMainPageComponent} from '@signedin/pages/signedin-main-page/signedin-main-page.component';
import {SIGNEDIN_ROUTES} from '@signedin/signedin.routes';
import {RouterModule} from '@angular/router';


@NgModule({
    declarations: [
        SignedinMainPageComponent
    ],
    imports: [
        CoreModule,
        RouterModule.forChild(SIGNEDIN_ROUTES)
    ],
    exports: [
        SignedinMainPageComponent
    ],

})
export class SignedinModule {
}
