import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {

    if(arg === '' || arg.length < 3) return value;
    const resultAirline = [];

    for(const airline of value){
      if(airline.name.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultAirline.push(airline);
      }
    }

    console.log(resultAirline);
    return resultAirline;
  }

}