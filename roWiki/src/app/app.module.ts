import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { PageDetailComponent } from './page-detail/page-detail.component';
import {PageService} from "./page.service";
import { MessagesComponent } from './messages/messages.component';
import {MessageService} from "./message.service";
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./in-memory-data.service";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    PageDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService,{dataEncapsulation: false}
    )

  ],
  providers: [PageService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
