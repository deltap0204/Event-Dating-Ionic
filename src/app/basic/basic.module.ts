import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {BASIC_ROUTES} from '@basic/basic.routes';
@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(BASIC_ROUTES)
    ]
})
export class BasicModule {
}
