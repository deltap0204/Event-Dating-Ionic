import {Routes} from '@angular/router';
import {SignedinMainPageComponent} from '@signedin/pages/signedin-main-page/signedin-main-page.component';
import {AuthGuard} from '@core/auth.guard';
import {QuickbloxSessionResolver} from '@quickblox/quickblox.resolver';

export const SIGNEDIN_ROUTES: Routes = [
    {
        path: '',
        component: SignedinMainPageComponent,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        children: [
            {path: 'profile', loadChildren: '@user-profiles/user-profiles.module#UserProfilesModule'},
            {path: 'events', loadChildren: '@events/events.module#EventsModule'},
            {
                path: 'chats',
                loadChildren: '@chat/chat.module#ChatModule',
                resolve: {quickbloxSession: QuickbloxSessionResolver}
            },
        ]
    }
];
