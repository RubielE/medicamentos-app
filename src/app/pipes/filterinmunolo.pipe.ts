import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterinmunolo'
})
export class FilterinmunoloPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg.length < 2 ) return value;
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
