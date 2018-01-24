import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
    name: 'firstCharCaps'
})
export class FirstCHARCAPS implements PipeTransform {
  transform(value: string): string {
    let FC = value.substr(0, 1).toUpperCase();
    let result = FC.concat(value.substr(1));
    return result;
  }
}
