import {Component, EventEmitter, Injector, Input, OnInit, Output} from '@angular/core';
import {BaseComponent} from '@core/components/base.component';
import {Events} from '@core/core.models';
import EventInvite = Events.EventInvite;
import {EventsService} from '@events/events.service';
import {EventRequests} from '@events/events.models';
import GetEventInvite = EventRequests.GetEventInvite;
import {CommonsService} from '@core/commons.service';

@Component({
    selector: 'events-event-invite-details',
    templateUrl: './events-event-invite-details.component.html',
    styleUrls: ['./events-event-invite-details.component.scss'],
})
export class EventsEventInviteDetailsComponent extends BaseComponent {

    @Input()
    eventInvite: EventInvite;
    @Input()
    eventInviteId: string;

    @Output()
    eventInviteRecieved = new EventEmitter<EventInvite>();


    constructor(protected eventsService: EventsService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
        this.makeServiceCallWithIdIfObjectNull(this.eventInvite, this.createRequestData(), this.getEventInvite);
    }


    createRequestData(event_invite_id?: string): GetEventInvite.Request {
        const request = new GetEventInvite.Request();
        request.eventInviteId = event_invite_id || this.eventInviteId;
        return request;
    }

    getEventInvite = (request: GetEventInvite.Request) => {
        this.eventsService.getEventInvite(request).pipe(CommonsService.deserializeMap(EventInvite))
            .subscribe(value => {
                this.eventInvite = value;
                this.eventInviteRecieved.emit(value);
            });
    }
}
