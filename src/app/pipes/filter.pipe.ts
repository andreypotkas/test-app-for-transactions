import { Pipe, PipeTransform } from '@angular/core';
import { ITransaction } from '../models/data.model';
import { ActivatedRoute } from '@angular/router';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  constructor(private route: ActivatedRoute) {}

  transform(value: ITransaction[], args: string): ITransaction[] {
    let filtredValue: ITransaction[] = [];

    if (value) {
      switch (args) {
        case '0':
          filtredValue = value.filter(
            (item: ITransaction) => item.type === 'income'
          );
          break;
        case '1':
          filtredValue = value.filter(
            (item: ITransaction) => item.type === 'outcome'
          );
          break;
        case '2':
          filtredValue = value.filter(
            (item: ITransaction) => item.type === 'loan'
          );
          break;
        case '3':
          filtredValue = value.filter(
            (item: ITransaction) => item.type === 'investment'
          );
          break;
        default:
          filtredValue = value;
      }
    }
    return filtredValue;
  }
}
