import {Injectable} from '@angular/core';
import {RestService} from '@core/http/rest.service';
import {Restangular} from 'ngx-restangular';
import {EventsConstants} from '@events/events.constants';
import {EventRequests} from '@events/events.models';
import CreateEvent = EventRequests.CreateEvent;
import GetEvent = EventRequests.GetEvent;
import GetEvents = EventRequests.GetEvents;
import CreateEventInvite = EventRequests.CreateEventInvite;
import GetEventInvites = EventRequests.GetEventInvites;
import GetEventInvite = EventRequests.GetEventInvite;

@Injectable({
    providedIn: 'root'
})
export class EventsService extends RestService {

    eventsService: Restangular;

    constructor(restangular: Restangular) {
        super(restangular);
        this.eventsService = this.getService(EventsConstants.EVENTS_ENDPOINT);
    }

    createEvent(request: CreateEvent.Request) {
        return this.eventsService.one('').customPOST(this.serialize(request));
    }

    getEvent(request: GetEvent.Request) {
        return this.eventsService.one(request.eventId).get();
    }

    getEvents(request: GetEvents.Request) {
        return this.eventsService.one('').get();
    }

    createEventInvite(request: CreateEventInvite.Request) {
        return this.eventsService.one('invite').customPOST(this.serialize(request));
    }

    getEventInvites(request: GetEventInvites.Request) {
        return this.eventsService.one('invites').customGET('', this.serialize(request));
    }

    getEventInvite(request: GetEventInvite.Request) {
        return this.eventsService.one('invites').one(request.eventInviteId).get();
    }
}
