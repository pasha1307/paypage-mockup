import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'drange'
})
export class DrangePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
