import { Component, OnInit } from '@angular/core';
import {Page} from "../page";
import {PageService} from "../Services/page.service";

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







}
