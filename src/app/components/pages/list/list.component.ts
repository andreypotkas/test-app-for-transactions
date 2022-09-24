import { Component, OnInit } from '@angular/core';
import { ITransaction, ITransactionList } from 'src/app/models/data.model';
import { DataService } from 'src/app/services/data.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public data!: ITransaction[];
  public firstNavAction: boolean = false;

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.dataService
      .getData()
      .pipe(map((data: ITransactionList) => data.data))
      .subscribe((data: ITransaction[]) => {
        this.data = data;
      });
  }
}
