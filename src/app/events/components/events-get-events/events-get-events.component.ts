import {Component, EventEmitter, Injector, Input, OnInit, Output} from '@angular/core';
import {BaseComponent} from '@core/components/base.component';
import {EventsService} from '@events/events.service';
import {CommonsService} from '@core/commons.service';
import {EventRequests} from '@events/events.models';
import GetEvents = EventRequests.GetEvents;
import {Events} from '@core/core.models';
import Event = Events.Event;

@Component({
    selector: 'events-get-events',
    templateUrl: './events-get-events.component.html',
    styleUrls: ['./events-get-events.component.scss'],
})
export class EventsGetEventsComponent extends BaseComponent {

    @Output()
    eventsReceived = new EventEmitter<Event[]>();

    events_list: Event[];

    constructor(protected eventService: EventsService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
        this.getEvents(this.createRequestData());
    }

    createRequestData(): GetEvents.Request {
        const request = new GetEvents.Request();

        return request;
    }

    getEvents(request: GetEvents.Request) {
        this.eventService.getEvents(request).pipe(CommonsService.deserializeMap(Event))
            .subscribe(value => {
                this.events_list = value;
                this.eventsReceived.emit(value);
            });
    }
}
