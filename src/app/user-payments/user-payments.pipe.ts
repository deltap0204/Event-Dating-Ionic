import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userPayments'
})
export class UserPaymentsPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
