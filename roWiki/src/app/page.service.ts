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

  getPage(id: number): Observable<Page>{
    this.messageService.add(`PageService: fetched hero id=${id}`);
    return of (PAGES.find(page => page.id === id));
  }

  constructor(private messageService: MessageService) { }

}
