import { Component, OnInit } from '@angular/core';
import {PageService} from "../page.service";
import {Page} from "../page";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  pages: Page[] = [];

  constructor(private pageService: PageService) { }

  ngOnInit() {
    this.getPages();
  }

  getPages(): void {
    this.pageService.getPages()
      .subscribe(pages => this.pages = pages.slice(1,5));
  }
}
