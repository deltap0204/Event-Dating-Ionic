import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {QuickbloxSessionResolver} from '@quickblox/quickblox.resolver';
import {AuthGuard} from '@core/auth.guard';
import {environment} from '@environment/environment';
import {BasicRoutineHelperComponent} from '@basic/components/basic-routine-helper/basic-routine-helper.component';

const routes: Routes = [
    {path: 'basic', loadChildren: '@basic/basic.module#BasicModule'},
    {
        path: 'signedin',
        loadChildren: '@signedin/signedin.module#SignedinModule'
    },
    {
        path: 'chat',
        loadChildren: '@chat/chat.module#ChatModule',
        resolve: {quickbloxSession: QuickbloxSessionResolver},
        canActivate: [AuthGuard]
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules, enableTracing: environment.routeTracing})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
