import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'zeroToChar'
})
export class ZeroToCharPipe implements PipeTransform {

  transform(value: number): string | number {
    let result;
    if (value === 0) {
      result = '-';
    } else {
      result = value;
    }
    return result;
  }

}
