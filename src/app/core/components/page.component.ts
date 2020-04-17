import {ActivatedRoute, Data, Params, QueryParamsHandling} from '@angular/router';
import {BaseComponent} from '@core/components/base.component';
import {Injector} from '@angular/core';
import {Observable} from 'rxjs';
import {pluck} from 'rxjs/operators';
import {NavigationOptions} from '@ionic/angular/dist/providers/nav-controller';

export abstract class PageComponent extends BaseComponent {

    activatedRoute: ActivatedRoute;
    routeParams: any;


    constructor(injector: Injector) {
        super(injector);
        this.activatedRoute = injector.get(ActivatedRoute);
        this.routeParams = {};
    }

    getRouterParameterObservable<T>(name: string, route?: ActivatedRoute): Observable<T> {
        route = route || this.activatedRoute;
        return route.data.pipe(pluck<Data, T>(name));
    }

    getRouterParameterFromParentObservable<T>(name: string, parentLevel: number): Observable<T> {
        let currentParent: ActivatedRoute = this.activatedRoute;
        for (let i = 0; i < parentLevel; i++) {
            currentParent = currentParent.parent;
            if (currentParent == null) {
                throw new Error('No more parents after the level ' + parentLevel);
            }
        }
        return this.getRouterParameterObservable(name, currentParent);
    }

    reloadPage() {
        this.redirectToDummyPageAndReturn();
    }

    redirectToDummyPageAndReturn() {
        // This is needed to maintain navigation history.
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        const url = this.router.url;
        this.router.navigateByUrl('/signedin/usertabnav/dummy', {skipLocationChange: true}).then(succes => {
            this.navCtrl.navigateForward(url);
        });
    }

    getQueryParameterObservable<T>(name: string): Observable<T> {
        return this.activatedRoute.queryParams.pipe(pluck<Data, T>(name));
    }

    updateQueryParams(queryParams: Params, queryParamsHandling: QueryParamsHandling = 'merge') {
        this.router.navigate(
            [],
            {
                relativeTo: this.activatedRoute,
                queryParams: queryParams,
                queryParamsHandling: queryParamsHandling
            });
    }

    // noinspection TsLint
    ngOnInit() {
        this.routeParams = this.activatedRoute.snapshot.data;
        super.ngOnInit();
    }

    navigateToViaUrl(url: string) {
        this.router.navigateByUrl(url);
    }

    navigateAndSetRoot(url: string, option?: NavigationOptions) {
        this.navCtrl.navigateRoot(url, option);
    }
}
