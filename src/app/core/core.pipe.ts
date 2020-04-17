import {Pipe, PipeTransform} from '@angular/core';
import {DateFormatPipe} from 'ngx-moment';
import * as moment from 'moment';
import {Moment, unitOfTime} from 'moment';
import {CommonsService} from '@core/commons.service';
import {KeyValue} from '@angular/common';
import {DynamicFormControlModel} from '@ng-dynamic-forms/core';

@Pipe({
    name: 'appDateFormat'
})
export class AppDefaultDateFormatPipe implements PipeTransform {

    dateFormatPipe = new DateFormatPipe();

    transform(value: Date | moment.Moment | string | number, format: string = 'DD MMM, YYYY', args?: any): string {
        return this.dateFormatPipe.transform(value, format);
    }

}

@Pipe({
    name: 'appShortDateFormat'
})
export class AppShortDateFormatPipe implements PipeTransform {

    transform(value: Date | moment.Moment | string | number, format: string = 'DD-MM-YY', args?: any): string {
        return CommonsService.getDateStringFromMoment(value, format);
    }

}

@Pipe({
    name: 'appMomentToDefaultDateTimeFormat'
})
export class AppMomentToDefaultDateTimeFormatPipe implements PipeTransform {

    transform(value: moment.Moment, format: string = 'YYYY-MM-DDTHH:mm:ss', args?: any): string {
        return CommonsService.getDateTimeStringFromMoment(value);
    }
}

@Pipe({
    name: 'appDefaultDateTimeFormatToMoment'
})
export class AppDefaultDateTimeFormatToMomentPipe implements PipeTransform {

    transform(value: string, args?: any): Moment {
        return CommonsService.getMomentFromDateTimeString(value);
    }
}


@Pipe({
    name: 'appTimeFormat'
})
export class AppDefaultTimeFormatPipe implements PipeTransform {

    dateFormatPipe = new DateFormatPipe();

    transform(value: Date | moment.Moment | string | number, format: string = 'hh:mm a', args?: any): string {
        return this.dateFormatPipe.transform(value, format);
    }

}

@Pipe({
    name: 'appWeekNumberToWeekStartDayNumber'
})
export class AppWeekNumberToWeekStartDayNumberPipe implements PipeTransform {

    transform(value: number, args?: any): number {
        return (value - 1) * 7;
    }

}

@Pipe({
    name: 'appStringToNumber'
})
export class AppStringToNumberPipe implements PipeTransform {

    transform(value: string, args?: any): number {
        return Number(value);
    }

}

@Pipe({
    name: 'appNonZeroDay'
})
export class AppNonZeroDayPipe implements PipeTransform {

    transform(value: number, args?: any): number {
        return value + 1;
    }

}

@Pipe({
    name: 'appSortNumberKeyValue'
})
export class AppSortNumberKeyValuePipe implements PipeTransform {

    transform(value: [KeyValue<string, any>], args?: any): any {
        if (!CommonsService.isNullOrUndefined(value)) {
            value = value.sort((a, b) => {
                return Number(a.key) - Number(b.key);
            });
        }
        return value;
    }
}

@Pipe({
    name: 'appSortDateTimeStringKeyValue'
})
export class AppSortDateTimeStringKeyValuePipe implements PipeTransform {

    transform(value: [KeyValue<string, any>], args?: any): any {
        if (!CommonsService.isNullOrUndefined(value)) {
            value = value.sort((a, b) => {
                return CommonsService.getMomentFromDateTimeString(a.key)
                    .diff(CommonsService.getMomentFromDateTimeString(b.key));
            });
        }
        return value;
    }
}

@Pipe({
    name: 'appDynamicFormControlModelArrayToDynamicFormControlModelMap'
})
export class AppDynamicFormControlModelArrayToDynamicFormControlModelMapPipe implements PipeTransform {

    transform(value: DynamicFormControlModel[],
              args?: any): { [key: string]: DynamicFormControlModel } {
        const map: { [key: string]: DynamicFormControlModel } = {};
        if (!CommonsService.isNullOrUndefined(value)) {
            value.forEach(form_model => {
                map[form_model.id] = form_model;
            });
        }
        return map;
    }
}


@Pipe({
    name: 'numberToMomentDuration'
})
export class NumberToMomentDurationPipe implements PipeTransform {
    transform(value: number, number_type: unitOfTime.Base = 'seconds', durationFormat: unitOfTime.Base = 'hours',
              ...args: any[]): number {
        const duration = moment.duration(value, number_type);
        return duration.as(durationFormat);
    }
}


@Pipe({
    name: 'appObjectArrayToPropertyArray'
})
export class AppObjectArrayToPropertyArrayPipe implements PipeTransform {
    transform(value: any[], property: string, key: string, ...args: any[]): any[] {
        return value.map(object => object[property]);
    }
}

@Pipe({
    name: 'appArrayRandomItem'
})
export class AppArrayRandomItemPipe<T> implements PipeTransform {
    transform(value: T[], ...args: any[]): T {
        return value[Math.floor(Math.random() * value.length)];
    }
}

@Pipe({
    name: 'appConvertToArray'
})
export class AppConvertToArrayPipe<T> implements PipeTransform {
    transform(value: T | T[], ...args: any[]): T[] {
        return CommonsService.convertToArray(value);
    }
}

