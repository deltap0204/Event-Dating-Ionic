import {Injectable} from '@angular/core';
import {JsonConvert, OperationMode, ValueCheckingMode} from 'json2typescript';
import {map} from 'rxjs/operators';
import {from, Observable, of} from 'rxjs';
import * as moment from 'moment';
import {DurationInputArg1, DurationInputArg2, Moment} from 'moment';

@Injectable({
    providedIn: 'root'
})
export class CommonsService {

    constructor() {
    }

    static DEFAULT_DATE_TIME_FORMAT = 'YYYY-MM-DDTHH:mm:ss.S';
    static DEFAULT_TIME_FORMAT = 'HH:mm:ss';
    static DEFAULT_MOBILE_TIME_FORMAT = 'hh:mm A';
    static DEFAULT_DATE_FORMAT = 'YYYY-MM-DD';

    private static _JSON_CONVERTER: JsonConvert = new JsonConvert(OperationMode.ENABLE, ValueCheckingMode.ALLOW_NULL,
        false);


    static logResponse = map(value => {
        console.log(value);
        return value;
    });

    static convertToJson = map((value: string) => {
        return CommonsService.parseJson(value);
    });

    // noinspection TsLint
    static addMissingKeys = (ids, value?) => map(response => {
        ids.forEach(id => {
            response[id] = response[id] || value;
        });
        return response;
    });

    static parseToJson(data: any) {
        return JSON.parse(data);
    }

    static isNumber(value: any): boolean {
        return !isNaN(value);
    }

    static stringify(data: any) {
        return JSON.stringify(data);
    }

    static convertToArray<T>(object: T | T[]): T[] {
        if (!object) {
            return [];
        }
        let array: T[] = [];
        if (!Array.isArray(object)) {
            array = [object];
        } else {
            array = object;
        }
        return array;
    }

    // tslint:disable-next-line:callable-types
    static deserialize(json: any, classReference: { new(): any }): any {
        if (Object.keys(json).length === 0) {
            return null;
        }
        return CommonsService._JSON_CONVERTER.deserialize(json, classReference);
    }

    static serialize(data: any): any {
        return CommonsService._JSON_CONVERTER.serialize(data);
    }

    static promiseToObservable<T>(promise: Promise<T>): Observable<T> {
        return from(Promise.resolve(promise));
    }

    static objectToObservable<T>(object: T): Observable<T> {
        return of(object);
    }

    static removeFromArray(items: any[], model: any): any[] {
        const index = items.indexOf(model);
        if (index > -1) {
            items.splice(index, 1);
        }
        return items;
    }

    static toPayload<T>(action: { payload: T }) {
        return action.payload;
    }

    static deserializeMap = classReference => map(value => CommonsService.deserialize(value, classReference));

    static getDateTimeStringFromMoment(time: moment.Moment): string {
        if (time) {
            return time.format(this.DEFAULT_DATE_TIME_FORMAT);
        }
        return undefined;
    }

    static getMomentFromDateTimeString(timeString: string): Moment {
        if (timeString) {
            return moment(timeString)
                .clone();
        }
        return undefined;
    }

    static getMomentFromDate(date: Date): Moment {
        if (date) {
            return moment(date)
                .clone();
        }
        return undefined;
    }


    static getTimeStringFromMoment(time: moment.Moment): string {
        if (time) {
            return time.clone()
                .format(this.DEFAULT_TIME_FORMAT);
        }
        return undefined;
    }


    static getTimeStringFromJSON(time: any): any {
        if (time) {
            const timeFormat = '' + time.hour + ':' + time.minute + ':' + time.second;
            return this.getTimeStringFromMoment(moment(timeFormat, this.DEFAULT_TIME_FORMAT));
        }
        return undefined;
    }

    static getMomentFromTimeString(timeString: string): Moment {
        if (timeString) {
            return moment(timeString, this.DEFAULT_TIME_FORMAT)
                .clone();
        }
        return undefined;
    }


    static getDateStringFromMoment(time: Date | moment.Moment | string | number, format?: string): string {
        if (time) {
            return moment(time)
                .clone()
                .format(format || this.DEFAULT_DATE_FORMAT);
        }
        return undefined;
    }

    static getMomentFromDateString(dateString: string, format?: string): Moment {
        if (dateString) {
            return moment(dateString, format || this.DEFAULT_DATE_FORMAT).endOf('day')
                .clone();
        }
        return undefined;
    }

    static isNullOrUndefined(object: any): boolean {
        if (object === undefined || object == null) {
            return true;
        } else {
            return false;
        }
    }

    static getCurrentTimeAsMoment(): Moment {
        return moment()
            .clone();
    }

    static getDateFromMoment(dateMoment: moment.Moment) {
        if (dateMoment) {
            return dateMoment.clone().toDate();
        }
        return undefined;
    }

    static getPreviousDateAsMoment(amount: DurationInputArg1, units: DurationInputArg2): Moment {
        return moment()
            .clone()
            .subtract(amount, units);
    }

    static getPreviousDateAsString(amount: DurationInputArg1, units: DurationInputArg2): string {
        return moment()
            .clone()
            .subtract(amount, units)
            .format(this.DEFAULT_DATE_FORMAT);
    }

    static getNextDateFromDateAsMoment(dateMoment: moment.Moment,
                                       amount: DurationInputArg1, units: DurationInputArg2,
                                       format?: string): Moment {
        return dateMoment.clone()
            .add(amount, units);
    }

    static isBefore(moment1: Moment, moment2: Moment): boolean {
        return moment1.isBefore(moment2);
    }


    static getTimestampFromMoment(timestamp: Moment): number {
        if (timestamp) {
            return moment(timestamp)
                .clone()
                .valueOf();
        }
        return undefined;
    }

    static getMomentFromTimestamp(timestamp: number): Moment {
        if (timestamp) {
            return moment.unix(timestamp)
                .clone();
        }
        return undefined;
    }

    static parseJson(data: string) {
        return JSON.parse(data);
    }

    static parseFilePath(filePath: string): any {
        // @ts-ignore
        const parseFilePath = require('parse-filepath');
        return parseFilePath(filePath);
    }

    static getFileContentType(file_path: string): string {
        const mime = require('mime-types');
        return mime.contentType(file_path);
    }


}
