import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {FormComponent} from '@core/components/form.component';
import {DynamicFormControlModel, DynamicFormLayout} from '@ng-dynamic-forms/core';
import {EventRequests} from '@events/events.models';
import {Moment} from 'moment';
import {Users} from '@core/core.models';
import {CommonsService} from '@core/commons.service';
import {EventsService} from '@events/events.service';
import {EVENTS_CREATE_EVENT_FORM_LAYOUT, EVENTS_CREATE_EVENT_FORM_MODEL} from '@events/events.form.models';
import {Subscription} from 'rxjs';
import CreateEvent = EventRequests.CreateEvent;
import LocationValue = Users.LocationValue;

@Component({
    selector: 'events-create-event',
    templateUrl: './events-create-event.component.html',
    styleUrls: ['./events-create-event.component.scss'],
})
export class EventsCreateEventComponent extends FormComponent {

    @Input()
    type: string;
    @Output()
    eventCreated = new EventEmitter<Event>();

    formLayout: DynamicFormLayout = EVENTS_CREATE_EVENT_FORM_LAYOUT;

    create_event_subscription$: Subscription;
    lat: number;
    long: number;

    constructor(protected eventsService: EventsService, injector: Injector) {
        super(injector);
    }

    getFormModel(): DynamicFormControlModel[] {
        return EVENTS_CREATE_EVENT_FORM_MODEL;
    }

    initializeComponent() {
    }

    afterInitializeComponent() {
        this.getInputModel('event_type').value = 'ACTIVITY';
    }

    createRequestData(event_name?: string, event_description?: string, event_type?: string, event_start_time?: Moment,
                      event_end_time?: Moment, location?: LocationValue): CreateEvent.Request {
        const request = new CreateEvent.Request();
        request.eventName = event_name || this.getInputModelValueAsString('event_name');
        request.eventDescription = event_description || this.getInputModelValueAsString('event_description');
        request.eventType = event_type || this.getInputModelValueAsString('event_type');
        request.eventStartTime = event_start_time || this.getDateModelValue('event_start_time');
        request.eventEndTime = event_end_time || this.getDateModelValue('event_end_time');
        location = new LocationValue();
        location.latitude = location.latitude || this.lat;
        location.longitude = location.longitude || this.long;
        request.location = location;
        return request;
    }

    createEvent(request: CreateEvent.Request) {
        this.create_event_subscription$ =
            this.eventsService.createEvent(request).pipe(CommonsService.deserializeMap(CreateEvent.Response))
                .subscribe(value => {
                    this.eventCreated.emit(value);
                    this.notificationsService.success('Event created');
                });
    }

    getAddress(place: object) {
        this.lat = Number(place['geometry'].location.lat());
        this.long = Number(place['geometry'].location.lng());
    }

}
