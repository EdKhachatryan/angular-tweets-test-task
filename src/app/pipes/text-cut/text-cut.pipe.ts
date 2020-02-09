import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'textCut'
})
export class TextCutPipe implements PipeTransform {

  transform(value: string): string {
    let result: string;
    if (value.length > 50) {
      result = value.slice(0, 51) + ' ...';
    } else {
      result = value;
    }
    return result;
  }

}
