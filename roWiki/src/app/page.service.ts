import { Injectable } from '@angular/core';
import {Page} from "./page";
import {PAGES} from "./mock-pages";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";
import {MessageService} from "./message.service";

@Injectable()

export class PageService {

  getPages(): Observable<Page[]> {
    this.messageService.add('PageService: fetched pages');
    return of (PAGES);
  }

  constructor(private messageService: MessageService) { }

}
