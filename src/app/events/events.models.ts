import {JsonObject, JsonProperty} from 'json2typescript';
import {ModelsConverters} from '@core/models.converters';
import {Events, Users} from '@core/core.models';
import {Moment} from 'moment';

export namespace EventRequests {

    export namespace CreateEvent {

        import DateTimeConverter = ModelsConverters.DateTimeConverter;
        import ArrayToLocationValueConverter = Users.ArrayToLocationValueConverter;
        import LocationValue = Users.LocationValue;
        import Event = Events.Event;
        @JsonObject()
        export class Request {
            @JsonProperty('eventDescription', String, true)
            eventDescription: string = undefined;
            @JsonProperty('eventEndTime', DateTimeConverter)
            eventEndTime: Moment = undefined;
            @JsonProperty('eventName', String, true)
            eventName: string = undefined;
            @JsonProperty('eventStartTime', DateTimeConverter)
            eventStartTime: Moment = undefined;
            @JsonProperty('location', LocationValue, true)
            location: LocationValue = undefined;
            @JsonProperty('eventType', String, true)
            eventType: string = undefined;
        }

        export class Response extends Event {

        }
    }

    export namespace GetEvent {
        import Event = Events.Event;

        @JsonObject()
        export class Request {
            eventId: string;
        }

        @JsonObject()
        export class Response extends Event {

        }
    }

    export namespace GetEvents {
        import Event = Events.Event;

        @JsonObject()
        export class Request {
        }

        @JsonObject()
        export class Response extends Event {

        }
    }

    export namespace CreateEventInvite {
        import EventInvite = Events.EventInvite;

        @JsonObject()
        export class Request {

            @JsonProperty('event', String)
            event: string = undefined;
            @JsonProperty('message', String)
            message: string = undefined;
            @JsonProperty('invitee', String)
            invitee: string = undefined;
        }

        @JsonObject()
        export class Response extends EventInvite {

        }
    }

    export namespace GetEventInvite {
        import EventInvite = Events.EventInvite;

        @JsonObject()
        export class Request {

            eventInviteId: string;
        }

        @JsonObject()
        export class Response extends EventInvite {

        }
    }

    export namespace GetEventInvites {
        import EventInvite = Events.EventInvite;

        @JsonObject()
        export class Request {
            @JsonProperty('event', String)
            event: string = undefined;
            @JsonProperty('invitee', String)
            invitee: string = undefined;
        }

        @JsonObject()
        export class Response extends EventInvite {

        }
    }

}
