import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {BaseComponent} from '@core/components/base.component';
import {EventRequests} from '@events/events.models';
import {Events} from '@core/core.models';
import {EventsService} from '@events/events.service';
import {CommonsService} from '@core/commons.service';
import GetEvent = EventRequests.GetEvent;
import Event = Events.Event;

@Component({
    selector: 'events-event-details',
    templateUrl: './events-event-details.component.html',
    styleUrls: ['./events-event-details.component.scss'],
})
export class EventsEventDetailsComponent extends BaseComponent {

    @Input()
    eventId: string;
    @Input()
    event: Event;

    @Output()
    eventReceived = new EventEmitter<Event>();

    constructor(protected eventService: EventsService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
        this.makeServiceCallWithIdIfObjectNull(this.event, this.createRequestData(), this.getEvent);
    }

    createRequestData(event_id?: string): GetEvent.Request {
        const request = new GetEvent.Request();
        request.eventId = event_id || this.eventId;

        return request;
    }

    getEvent = (request: GetEvent.Request) => {
        this.eventService.getEvent(request).pipe(CommonsService.deserializeMap(Event)).subscribe(value => {
            this.event = value;
            this.eventReceived.emit(value);
        });
    }

}
