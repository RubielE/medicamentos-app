import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterquimica'
})
export class FilterquimicaPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg.length < 3 ) return value;
    const resultItems =[];
      for(const item of value){
        if (item.reactivo.toLowerCase().indexOf(arg.toLowerCase()) > -1 ){
          console.log('sip');
          resultItems.push(item);
        };
      };
      return resultItems;
  }  

}
