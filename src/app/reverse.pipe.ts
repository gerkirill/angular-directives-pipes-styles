import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any, arg1?: any, arg2?: any): any {
    console.log(arg1, arg2);
    return value.split('').reverse().join('');
  }

}
