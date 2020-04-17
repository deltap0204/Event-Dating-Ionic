import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {QuickbloxService} from '@quickblox/quickblox.service';
import {AuthService} from '@core/auth.service';
import {QuickbloxObjects, QuickbloxRequests} from '@quickblox/quickblox.models';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {CommonsService} from '@core/commons.service';
import ListDialogs = QuickbloxRequests.ListDialogs;
import QuickbloxSession = QuickbloxObjects.QuickbloxSession;

@Injectable()
export class QuickbloxSessionResolver implements Resolve<Observable<{}>> {

    constructor(private quickbloxService: QuickbloxService, public authService: AuthService) {
    }

    resolve() {
        return this.quickbloxService.createSessionAndConnect()
            .pipe(CommonsService.deserializeMap(QuickbloxSession),
                map((success: QuickbloxSession) => {
                    return success;
                }));
    }
}

@Injectable()
export class QuickbloxDialogItemResolver implements Resolve<Observable<{}>> {

    constructor(private quickbloxService: QuickbloxService) {
    }

    resolve(route_or_dialogId: ActivatedRouteSnapshot | string) {
        const request = new ListDialogs.Request();
        request.id = typeof route_or_dialogId === 'string' ? route_or_dialogId : route_or_dialogId.paramMap.get('dialogId');
        return this.quickbloxService.listDialogs(request)
            .pipe(CommonsService.deserializeMap(ListDialogs.Response), map(success => success.items[0]));
    }
}

@Injectable()
export class QuickbloxJoinDialogResolver implements Resolve<Observable<{}>> {

    constructor(private quickbloxService: QuickbloxService) {
    }

    resolve(route_or_dialogId: ActivatedRouteSnapshot | string) {
        const dialog_id = typeof route_or_dialogId === 'string' ? route_or_dialogId : route_or_dialogId.paramMap.get('dialogId');
        return this.quickbloxService.joinGroup(dialog_id);
    }
}
