import {Routes} from '@angular/router';
import {EventsEventPageComponent} from '@events/pages/events-event-page/events-event-page.component';
import {EventResolver} from '@events/events.resolver';

export const EVENTS_ROUTES: Routes = [
    {
        path: 'event', children: [
            {
                path: ':eventId', component: EventsEventPageComponent, resolve: {event: EventResolver}
            }
        ]
    }

];
