import {JsonConverter, JsonCustomConvert, JsonObject, JsonProperty} from 'json2typescript';
import {ModelsConverters} from '@core/models.converters';
import {Moment} from 'moment';

export namespace Core {

    import DateTimeConverter = ModelsConverters.DateTimeConverter;

    @JsonObject()
    export class HttpError {
        @JsonProperty('statusCode', Number, true)
        error_status: number = undefined;
        @JsonProperty('code', String, true)
        title: string = undefined;
        @JsonProperty('description', String, true)
        message: string = undefined;

    }

    @JsonObject()
    export class PaginatedRequest {
        @JsonProperty('first', Number, true)
        first: number = undefined;
        @JsonProperty('count', Number, true)
        count: number = undefined;
    }

    @JsonObject()
    export class SortedPaginatedRequest extends PaginatedRequest {
        @JsonProperty('column_name', String, true)
        column_name: string = undefined;
        @JsonProperty('column_order', String, true)
        column_order: string = undefined;
    }

    @JsonObject()
    export class Entity {
        @JsonProperty('createdAt', DateTimeConverter, true)
        created_at: Moment = undefined;
        @JsonProperty('updatedAt', DateTimeConverter, true)
        updated_at: Moment = undefined;
    }

    @JsonObject()
    export class CoreEntity extends Entity {
        @JsonProperty('_id', String, true)
        _id: string = undefined;
    }

}


export namespace Users {

    import CoreEntity = Core.CoreEntity;
    import StringOrNumberConverter = ModelsConverters.StringOrNumberConverter;

    @JsonObject()
    export class UserAccount extends CoreEntity {
        @JsonProperty('quickbloxId', Number)
        quickbloxId: number = undefined;
    }

    @JsonObject()
    export class UserProfileValue {
        @JsonProperty('entryType', String, true)
        entryType: string = undefined;
        @JsonProperty('privacy', String, true)
        privacy: string = undefined;
        @JsonProperty('value', StringOrNumberConverter, true)
        value: string | number = undefined;
    }

    @JsonObject()
    export class LocationValue {
        @JsonProperty('latitude', Number, true)
        latitude: number = undefined;
        @JsonProperty('longitude', Number, true)
        longitude: number = undefined;
    }

    @JsonConverter
    export class ArrayToLocationValueConverter implements JsonCustomConvert<LocationValue> {
        serialize(time: LocationValue): number[] {
            return [time.longitude,
                time.latitude];
        }

        deserialize(time: number[]): LocationValue {
            const value = new LocationValue();
            value.longitude = time[0];
            value.latitude = time[1];
            return value;
        }
    }


    @JsonObject()
    export class UserProfile extends CoreEntity {
        @JsonProperty('profileEntries', [UserProfileValue], true)
        profile: UserProfileValue[] = undefined;
        @JsonProperty('location', ArrayToLocationValueConverter, true)
        location: LocationValue = undefined;
        @JsonProperty('userAccount', UserAccount)
        userAccount: UserAccount = undefined;
    }
}

export namespace Files {
    import CoreEntity = Core.CoreEntity;

    @JsonObject()
    export class UploadedFile extends CoreEntity {
        @JsonProperty('fileUploadUrl', String)
        fileUploadUrl: string = undefined;
        @JsonProperty('fileUploadUrl', String)
        entityType: string = undefined;
        @JsonProperty('entityId', String)
        entityId: string = undefined;
        @JsonProperty('fileUrl', String)
        fileUrl: string = undefined;
        @JsonProperty('fileLocation', String)
        fileLocation: string = undefined;
        @JsonProperty('status', String)
        status: string = undefined;
    }
}

export namespace Chats {
    import CoreEntity = Core.CoreEntity;
    import UserAccount = Users.UserAccount;

    export class UserChat extends CoreEntity {
        @JsonProperty('connectyCubeId', String, true)
        connectyCubeId: string = undefined;
        @JsonProperty('quickbloxId', String, true)
        quickbloxId: string = undefined;
        @JsonProperty('userAccounts', [UserAccount], true)
        userAccounts: UserAccount[] = undefined;
    }
}

export namespace Events {

    import CoreEntity = Core.CoreEntity;
    import DateTimeConverter = ModelsConverters.DateTimeConverter;
    import LocationValue = Users.LocationValue;
    import ArrayToLocationValueConverter = Users.ArrayToLocationValueConverter;
    import UserAccount = Users.UserAccount;

    @JsonObject()
    export class Event extends CoreEntity {
        @JsonProperty('eventName', String)
        eventName: string = undefined;
        @JsonProperty('eventDescription', String, true)
        eventDescription: string = undefined;
        @JsonProperty('_eventStartTime', DateTimeConverter, true)
        eventStartTime: Moment = undefined;
        @JsonProperty('_eventEndTime', DateTimeConverter, true)
        eventEndTime: Moment = undefined;
        @JsonProperty('eventType', String, true)
        eventType: string = undefined;
        @JsonProperty('location', ArrayToLocationValueConverter, true)
        location: LocationValue = undefined;

    }

    export class EventInvite extends CoreEntity {

        @JsonProperty('inviteeAccount', UserAccount)
        public inviteeAccount: UserAccount = undefined;
        @JsonProperty('invitedByAccount', UserAccount)
        public invitedByAccount: UserAccount = undefined;
        @JsonProperty('status', String, true)
        public status: string = undefined;
        @JsonProperty('message', String, true)
        public message: string = undefined;
        @JsonProperty('event', Event, true)
        public event: Event = undefined;
    }

}

export namespace Categories {
    import CoreEntity = Core.CoreEntity;
    import Event = Events.Event;

    @JsonObject()
    export class Category extends CoreEntity {
        @JsonProperty('name', String)
        public name: string = undefined;
        @JsonProperty('description', String)
        public description: string = undefined;
        @JsonProperty('categoryType', [String])
        public categoryType: string[] = undefined;
    }

    @JsonObject()
    export class CategoryEntity extends CoreEntity {
        @JsonProperty('category', Category, true)
        public category: Category = undefined;
        @JsonProperty('eventBrite', String, true)
        public eventBrite: string = undefined;
        @JsonProperty('entityType', String)
        public entityType: string[] = undefined;
        @JsonProperty('event', Event, true)
        public event: Event = undefined;
    }
}

export namespace UserInterests {
    import CoreEntity = Core.CoreEntity;
    import UserAccount = Users.UserAccount;
    import Event = Events.Event;

    @JsonObject()
    export class UserInterest extends CoreEntity {
        @JsonProperty('eventBriteId', String, true)
        eventBriteId: string = undefined;
        @JsonProperty('otherAccount', UserAccount, true)
        otherAccount: UserAccount = undefined;
        @JsonProperty('entityType', String, true)
        entityType: string = undefined;
        @JsonProperty('userAccount', UserAccount, true)
        userAccount: UserAccount = undefined;
        @JsonProperty('interaction', String, true)
        interaction: string = undefined;
        @JsonProperty('event', Event, true)
        event: Event = undefined;
    }

    export interface ModalResult {
        reason?: string;
        status: string;
        data: any;
    }

}

export namespace UserPayments {
    import CoreEntity = Core.CoreEntity;
    import UserAccount = Users.UserAccount;

    @JsonObject()
    export class UserPayment extends CoreEntity {
        @JsonProperty('userAccount', UserAccount)
        userAccount: UserAccount = undefined;
        @JsonProperty('stripeResponse', String)
        stripeResponse: string = undefined;

    }
}