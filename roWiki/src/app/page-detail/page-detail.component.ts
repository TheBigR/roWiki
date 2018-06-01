import { Component, OnInit} from '@angular/core';
import {Page} from "../page";
import {ActivatedRoute} from "@angular/router";
import {PageService} from "../page.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.css']
})
export class PageDetailComponent implements OnInit {

  page: Page;

  constructor(private route: ActivatedRoute, private pageService: PageService, private location: Location) { }

  ngOnInit(): void {
    this.getPage();
  }

  getPage(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pageService.getPage(id)
      .subscribe(page => this.page = page);
  }

  goBack(): void {
    this.location.back();
  }

}
