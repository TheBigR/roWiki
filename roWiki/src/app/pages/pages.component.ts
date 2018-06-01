import { Component, OnInit } from '@angular/core';
import {PAGES} from "../mock-pages";
import {Page} from "../page";
import {PageService} from "../page.service";

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  pages:  Page[];

  getPages(): void {
    this.pageService.getPages()
      .subscribe(pages => this.pages = pages);
  }

  selectedPage : Page;

  onSelect(page: Page): void {
    this.selectedPage = page;
  }

  constructor(private pageService: PageService) { }

  ngOnInit() {
    this.getPages();
  }



}
