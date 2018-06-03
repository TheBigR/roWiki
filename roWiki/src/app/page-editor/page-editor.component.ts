import { Component, OnInit } from '@angular/core';
import {PageService} from "../page.service";
import {Location} from "@angular/common";
import {Page} from "../page";
import {ActivatedRoute} from "@angular/router";




@Component({
  selector: 'app-page-editor',
  templateUrl: './page-editor.component.html',
  styleUrls: ['./page-editor.component.css']
})
export class PageEditorComponent implements OnInit {

  page: Page;

  save(): void {
    this.pageService.updatePage(this.page)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

  htmlContent: any;
  title: string;

  crap(){
    this.title = 'fuck off';
    this.htmlContent = 'kill em all';
  }

  kipi(){
    console.log(this.title);
    console.log(this.htmlContent.toString());
    this.page = new Page();
    this.page.title = this.title;
    this.page.body = this.htmlContent;
  }

  getPage(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pageService.getPage(id)
      .subscribe(page => this.page = page);
  }

  constructor(private route: ActivatedRoute, private pageService: PageService, private location: Location) { }

  ngOnInit(): void {
    this.getPage();
  }

}
