import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {BaseComponent} from '@core/components/base.component';
import {Events, Users} from '@core/core.models';
import {EventsService} from '@events/events.service';
import {EventRequests} from '@events/events.models';
import {CommonsService} from '@core/commons.service';
import UserAccount = Users.UserAccount;
import Event = Events.Event;
import EventInvite = Events.EventInvite;
import GetEventInvites = EventRequests.GetEventInvites;

@Component({
    selector: 'events-event-invites',
    templateUrl: './events-event-invites.component.html',
    styleUrls: ['./events-event-invites.component.scss'],
})
export class EventsEventInvitesComponent extends BaseComponent {

    @Input()
    invitee: UserAccount;
    @Input()
    event: Event;

    @Output()
    eventInvitesRecieved = new EventEmitter<EventInvite[]>();

    event_invites: EventInvite[];


    constructor(protected eventsService: EventsService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
        this.getEventInvites(this.createRequestData());
    }

    createRequestData(invitee?: UserAccount, event?: Event): GetEventInvites.Request {
        const request = new GetEventInvites.Request();
        request.invitee = (invitee || this.invitee || new UserAccount())._id;
        request.event = (event || this.event || new Event())._id;

        return request;
    }

    getEventInvites(request: GetEventInvites.Request) {
        this.eventsService.getEventInvites(request).pipe(CommonsService.deserializeMap(GetEventInvites.Response))
            .subscribe(value => {
                this.event_invites = value;
                this.eventInvitesRecieved.emit(value);
            });
    }
}
