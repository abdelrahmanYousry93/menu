import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'markedStatusPipe'
  })
  export class MarkedStatusPipe implements PipeTransform {
    transform(data: any) {
        switch(data){
            case 0:
                return "No";
            case 1:
                return "Yes";
            case 2:
                return "Partial";
            default:
                return "";

        }
    }
  }