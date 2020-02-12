import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categories'
})
export class CategoriesPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
