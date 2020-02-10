import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayCut'
})
export class ArrayCutPipe implements PipeTransform {

  transform(value: string[]): string[] {
    return value.slice(0, 2);
  }

}
