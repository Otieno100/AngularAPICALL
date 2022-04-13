import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GetdataService } from './getdata.service';
import { ApiReqComponent } from './api-req/api-req.component';


@NgModule({
  declarations: [
    AppComponent,
    ApiReqComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [GetdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
