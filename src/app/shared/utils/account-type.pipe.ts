import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'accountType'
})
export class AccountTypePipe implements PipeTransform {

  transform(accTypeId: number): string {
    if(accTypeId == 1) return "Savings";
    if(accTypeId == 2) return "Current";
    return "";
  }

}
