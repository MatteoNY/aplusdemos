import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AppService } from '../core/services/app.service';
import { AppData } from '../core/services/app-data.interface';
import { CapitalizePipe } from '../core/pipes/capitalize.pipe'; 

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
