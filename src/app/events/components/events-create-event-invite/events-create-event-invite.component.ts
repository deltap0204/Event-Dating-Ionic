import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {FormComponent} from '@core/components/form.component';
import {DynamicFormControlModel} from '@ng-dynamic-forms/core';
import {Events, Users} from '@core/core.models';
import {EventRequests} from '@events/events.models';
import {EventsService} from '@events/events.service';
import {CommonsService} from '@core/commons.service';
import UserAccount = Users.UserAccount;
import EventInvite = Events.EventInvite;
import CreateEventInvite = EventRequests.CreateEventInvite;
import Event = Events.Event;

@Component({
    selector: 'events-create-event-invite',
    templateUrl: './events-create-event-invite.component.html',
    styleUrls: ['./events-create-event-invite.component.scss'],
})
export class EventsCreateEventInviteComponent extends FormComponent {

    @Input()
    event: Event;
    @Input()
    invitee: UserAccount;
    @Input()
    message: string;

    @Output()
    eventInviteCreated = new EventEmitter<EventInvite>();

    constructor(protected eventService: EventsService, injector: Injector) {
        super(injector);
    }

    afterInitializeComponent() {
    }

    getFormModel(): DynamicFormControlModel[] {
        return [];
    }

    initializeComponent() {
    }

    createRequestData(message?: string, invitee?: UserAccount, event?: Event): CreateEventInvite.Request {
        const request = new CreateEventInvite.Request();
        request.event =
            (event || new Event())._id || (this.event || new Event())._id;
        request.invitee = (invitee || new UserAccount())._id || (this.invitee || new UserAccount())._id;
        request.message = message || this.message;

        return request;
    }

    createEventInvite(request: CreateEventInvite.Request) {
        this.eventService.createEventInvite(request).pipe(CommonsService.deserializeMap(EventInvite))
            .subscribe(value => {
                this.eventInviteCreated.emit(value);
                this.notificationsService.success('Successfully invited');
            });
    }

}

@Component({
    selector: 'events-create-event-invite-no-template',
    templateUrl: './events-create-event-invite-no-template.component.html',
    styleUrls: ['./events-create-event-invite.component.scss'],
})
export class EventsCreateEventInviteNoTemplateComponent extends EventsCreateEventInviteComponent {
}