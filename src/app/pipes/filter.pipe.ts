import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
      if (arg.length < 3 ) return value;
      const resultItems =[];
        for(const item of value){
          if (item.medicamento.toLowerCase().indexOf(arg.toLowerCase()) > -1 ){
            console.log('sip');
            resultItems.push(item);
          };
        };
        return resultItems;
    }                                                                                                                             

}
