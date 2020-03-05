import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {QuickbloxService} from '@quickblox/quickblox.service';
import {CommonsService} from '@core/commons.service';
import {map} from 'rxjs/operators';
import {Events} from '@core/core.models';
import Event = Events.Event;
import {EventsService} from '@events/events.service';
import {EventRequests} from '@events/events.models';
import GetEvent = EventRequests.GetEvent;

@Injectable()
export class EventResolver implements Resolve<Observable<Event>> {

    constructor(private eventService: EventsService) {
    }

    resolve(route: ActivatedRouteSnapshot) {
        const request = new GetEvent.Request();
        request.eventId = route.paramMap.get('eventId');
        return this.eventService.getEvent(request)
            .pipe(CommonsService.deserializeMap(Event));
    }
}
