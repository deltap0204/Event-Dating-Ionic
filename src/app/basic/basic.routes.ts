import {Routes} from '@angular/router';

export const BASIC_ROUTES: Routes = [
    {path: 'user', loadChildren: '@users/users.module#UsersModule'}
];
