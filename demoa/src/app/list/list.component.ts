import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AppService } from '../core/model/app.service';
import { AppData } from '../core/model/app-data.interface';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public appData$:Observable<AppData[]>;
  private selectItem:any = '';

  constructor(private appService: AppService) { }

  ngOnInit() {

    console.log ("init...");
    this.appData$ = this.appService.fetch();

  }

  onSelect(e, item:any) {
    console.log ("item got click", item);
    this.selectItem = item;
  }

}
