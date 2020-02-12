import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'events'
})
export class EventsPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
