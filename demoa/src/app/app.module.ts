import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';

import { AppService } from './core/services/app.service';
import { CapitalizePipe } from './core/pipes/capitalize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ AppService ],
  bootstrap: [ AppComponent] ,
  entryComponents: [],
  exports: []
})
export class AppModule { }
