import { Component, OnInit } from '@angular/core';
import {
  ITransaction,
  ITransactionList,
  Type,
} from 'src/app/models/data.model';
import { DataService } from 'src/app/services/data.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {
  public data: ITransaction[] = [];

  public types: string[] = ['Income', 'Outcome', 'Loans', 'Investments'];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService
      .getData()
      .pipe(map((data: ITransactionList) => data.data))
      .subscribe((data: ITransaction[]) => {
        this.data = data;
      });
  }
}
