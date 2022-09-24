import { Component, OnInit } from '@angular/core';
import { ITransaction, ITransactionList } from 'src/app/models/data.model';
import { DataService } from 'src/app/services/data.service';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router, RouterConfigOptions } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public data: ITransaction[] = [];
  public currentRoute: string = '0';
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.dataService
      .getData()
      .pipe(map((data: ITransactionList) => data.data))
      .subscribe((data: ITransaction[]) => {
        this.data = data;
      });
    // subscribe on changing queryparams and update currentRoute value, then it goes to pipe in template
    this.route.queryParams.subscribe((data: any) => {
      this.currentRoute = data['tab'];
    });
  }
}
