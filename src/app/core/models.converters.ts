import {JsonConverter, JsonCustomConvert} from 'json2typescript';
import {CommonsService} from '@core/commons.service';
import {Moment} from 'moment';
import {Users} from '@core/core.models';

export namespace ModelsConverters {


    import LocationValue = Users.LocationValue;

    @JsonConverter
    export class DateConverter implements JsonCustomConvert<Moment> {
        serialize(date: Moment): any {
            return CommonsService.getDateStringFromMoment(date);
        }

        deserialize(date: any): Moment {
            return CommonsService.getMomentFromDateString(date);
        }
    }

    @JsonConverter
    export class IntToStringConverter implements JsonCustomConvert<string> {
        serialize(int_as_string: string): number {
            return parseInt(int_as_string, 10);
        }

        deserialize(int_as_number: number): string {
            return '' + int_as_number;
        }
    }

    @JsonConverter
    export class StringOrNumberConverter implements JsonCustomConvert<string | number> {
        serialize(int_as_string: string | number): string | number {
            return CommonsService.isNumber(int_as_string) ? Number(int_as_string) : int_as_string;
        }

        deserialize(int_as_string: string): string | number {
            return CommonsService.isNumber(int_as_string) ? Number(int_as_string) : int_as_string;
        }
    }

    @JsonConverter
    export class DateTimeConverter implements JsonCustomConvert<Moment> {
        serialize(time: Moment): string {
            return CommonsService.getDateTimeStringFromMoment(time);
        }

        deserialize(time: any): Moment {
            return CommonsService.getMomentFromDateTimeString(time);
        }
    }


    @JsonConverter
    export class TimestampConverter implements JsonCustomConvert<Moment> {
        serialize(time: Moment): number {
            return CommonsService.getTimestampFromMoment(time);
        }

        deserialize(time: number): Moment {
            return CommonsService.getMomentFromTimestamp(time);
        }
    }

    @JsonConverter
    export class TimeConverter implements JsonCustomConvert<Moment> {
        serialize(time: Moment): any {
            return CommonsService.getTimeStringFromMoment(time);
        }

        deserialize(time: any): Moment {
            return CommonsService.getMomentFromTimeString(time);
        }
    }

    @JsonConverter
    export class ArrayToStringConverter implements JsonCustomConvert<string[]> {
        serialize(time: string[]): string {
            return time.join(',');
        }

        deserialize(time: string): string[] {
            return time.split(',');
        }
    }

    @JsonConverter
    export class ArrayToLongitudeConverter implements JsonCustomConvert<number> {
        serialize(time: number): string[] {
            throw new Error('We dont use this for serialize');
        }

        deserialize(time: string[]): number {
            return parseFloat(time[0]);
        }
    }

    @JsonConverter
    export class ArrayToLatitudeConverter implements JsonCustomConvert<number> {
        serialize(time: number): string[] {
            throw new Error('We dont use this for serialize');
        }

        deserialize(time: string[]): number {
            return parseFloat(time[1]);
        }
    }
}
