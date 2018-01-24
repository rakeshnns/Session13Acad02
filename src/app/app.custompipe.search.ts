import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
    name: 'FilterPipe'
})
export class FilterPIPE implements PipeTransform {

  transform(value: any, input: string) {
      console.log(value);  /*Object value*/
      console.log(input);  /*Input string*/
    if (input) {
      input = input.toLowerCase();
      return value.filter( function (sl: any){
        console.log(sl);
        return sl.Firstname.toLowerCase().indexOf(input) > -1;
      });
    }
      return value;
  }
}
