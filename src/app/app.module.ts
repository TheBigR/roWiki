import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { PageDetailComponent } from './page-detail/page-detail.component';
import {PageService} from "./Services/page.service";
import { MessagesComponent } from './messages/messages.component';
import {MessageService} from "./Services/message.service";
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HttpClientModule} from "@angular/common/http";
import { PageSearchComponent } from './page-search/page-search.component';
import { PageEditorComponent } from './page-editor/page-editor.component';
import {NgxEditorModule} from "ngx-editor";
import {AngularFontAwesomeModule} from "angular-font-awesome";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";







@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    PageDetailComponent,
    MessagesComponent,
    DashboardComponent,
    PageSearchComponent,
    PageEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxEditorModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    ButtonModule
  ],
  providers: [PageService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
