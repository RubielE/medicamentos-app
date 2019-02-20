import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(items: any, filtro: any, isAnd: boolean): any {
    if (filtro && Array.isArray(items)) {
      let filtroKeys = Object.keys(filtro);
      if (isAnd) {
        return items.filter(item =>
            filtroKeys.reduce((memo, keyName) =>
                (memo && new RegExp(filtro[keyName], 'gi').test(item[keyName])) || filtro[keyName] === "", true));
      } else {
        return items.filter(item => {
          return filtroKeys.some((keyName) => {
            console.log(keyName);
            return new RegExp(filtro[keyName], 'gi').test(item[keyName]) || filtro[keyName] === "";
          });
        });
      }
    } else {
      return items;
    }
  }
}
