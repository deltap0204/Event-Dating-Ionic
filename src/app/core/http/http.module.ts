import {Injectable, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    HTTP_INTERCEPTORS,
    HttpBackend,
    HttpClient,
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpHeaders,
    HttpInterceptor,
    HttpRequest,
    HttpResponse
} from '@angular/common/http';

import {RestangularHttp} from 'ngx-restangular';
import {environment} from '@environment/environment';
import {CommonsService} from '@core/commons.service';
import {Core} from '@core/core.models';
import * as HttpStatus from 'http-status-codes';
import {HttpNotifications} from '@core/http/http.constants';
import {Observable, throwError} from 'rxjs';
import {catchError, concatMap, filter, map} from 'rxjs/operators';
import {AmplifyService} from 'aws-amplify-angular';
import HttpError = Core.HttpError;

@Injectable()
export class DefaultRestangularHttp extends RestangularHttp {

    client: HttpClient;


    constructor(http: HttpBackend, client: HttpClient) {
        super(http);
        this.client = client;
    }

    // Code refered from
    // https://github.com/2muchcoffeecom/ngx-restangular/blob/master/projects/ngx-restangular/src/lib/ngx-restangular-http.ts
    request(request: HttpRequest<any>): Observable<HttpEvent<any>> {
        return this.client.request(request)
            .pipe(
                filter(event => event instanceof HttpResponse),
                map((response: any) => {
                    if (!response.ok) {
                        return throwError(new HttpErrorResponse(response));
                    }
                    return response;
                }),
                map(response => {
                    response.config = {params: request};
                    return response;
                }),
                catchError(err => {
                    err.request = request;
                    err.data = err.error;
                    err.repeatRequest = (newRequest?) => {
                        return this.request(newRequest || request);
                    };

                    return throwError(err);
                })
            );
    }
}

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(public amplifyService: AmplifyService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!request.url.includes('s3.amazonaws.com')) {
            return CommonsService.promiseToObservable(this.amplifyService.auth().currentSession()).pipe(concatMap(
                session => {
                    request = request.clone({
                        headers: new HttpHeaders({
                            'Authorization': `Bearer ${session.getIdToken().getJwtToken()}`
                        })
                    });
                    return next.handle(request);
                }), catchError(error => {
                return next.handle(request);
            }));
        }
        return next.handle(request);
    }
}

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
        {provide: RestangularHttp, useClass: DefaultRestangularHttp, multi: false}
    ]
})
export class HttpModule {
}

export function RestangularConfigFactory(RestangularProvider, authService, notificationsService) {

    RestangularProvider.setBaseUrl(environment.apiUrls.baseUrl);
    RestangularProvider.setPlainByDefault(true);

    RestangularProvider.addErrorInterceptor((response, subject, responseHandler) => {
        const errorMessage: HttpError = CommonsService.deserialize(
            response.data && response.data.error ? response.data.error : {},
            HttpError);
        if (errorMessage && errorMessage.error_status && errorMessage.error_status !== HttpStatus.NOT_FOUND &&
            !HttpNotifications.isInIgnoreUrl(response.url)) {
            notificationsService.error(errorMessage.message);
        }
        return true;
    });

}
