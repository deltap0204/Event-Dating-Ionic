import {Injectable} from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    CanActivateChild,
    Router,
    RouterStateSnapshot,
    UrlTree
} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '@core/auth.service';
import {StorageService} from '@core/storage.service';
import {AmplifyService} from 'aws-amplify-angular';
import {CognitoService} from '@users/cognito.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(protected authService: AuthService, protected cognitoService: CognitoService,
                protected amplifyService: AmplifyService, protected storageService: StorageService,
                protected router: Router) {
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const _AuthGuard = this;
        return this.amplifyService.auth()
            .currentSession()
            .then(session => {
                // console.log('here');
                return this.authService.getLoggedProfile().then(success => {
                    // Doing it to initialize everything properly
                    this.authService.setLoggedProfile(success);
                    if (success) {
                        if (session.isValid()) {
                            return Promise.resolve(true);
                        } else {
                            _AuthGuard.authService.clearAll();
                            _AuthGuard.router.navigateByUrl('/basic/user/signin');
                            return Promise.resolve(false);
                        }
                    } else {
                        return this.cognitoService.signOut(true)
                            .toPromise()
                            .then(function (success2) {
                                _AuthGuard.authService.clearAll();
                                _AuthGuard.router.navigateByUrl('/basic/user/signin');
                                return Promise.resolve(false);
                            })
                            .catch(error => {
                                _AuthGuard.authService.clearAll();
                                _AuthGuard.router.navigateByUrl('/basic/user/signin');
                                return Promise.resolve(false);
                            });

                    }
                });
            })
            .catch(error => {
                _AuthGuard.authService.clearAll();
                _AuthGuard.router.navigateByUrl('/basic/user/signin');
                return Promise.resolve(false);
            });
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot,
                     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.canActivate(childRoute, state);
    }

}
