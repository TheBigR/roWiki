import { Component, OnInit } from '@angular/core';
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

  constructor(private pageService: PageService) { }

  ngOnInit() {
    this.getPages();
  }

  add(title: string): void {
    title = title.trim();
    if (!title) {return;}
    this.pageService.addPage({title} as Page)
      .subscribe(page => {
        this.pages.push(page);
      });
  }

  delete(page: Page): void {
    this.pages = this.pages.filter(p => p !== page);
    this.pageService.deletePage(page).subscribe();
  }



}
