import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { PageDetailComponent } from './page-detail/page-detail.component';
import {PageService} from "./page.service";
import { MessagesComponent } from './messages/messages.component';
import {MessageService} from "./message.service";


@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    PageDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [PageService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
