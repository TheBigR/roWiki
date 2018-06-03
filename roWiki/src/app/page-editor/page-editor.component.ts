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
  pages:  Page[];

  save(): void {
    this.pageService.updatePage(this.page)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

  title: string;

  getPages(): void {
    this.pageService.getPages()
      .subscribe(pages => this.pages = pages);
  }

  createPage(title: string){
    this.getPages();
    title = title.trim();
    if (!title) {return;}
    this.pageService.addPage(this.page)
      .subscribe(page => this.pages.push(page))
  }

  getPage(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.page = new Page();
    }
    else {
      this.pageService.getPage(id)
        .subscribe(page => this.page = page)
    }
  }

  constructor(private route: ActivatedRoute, private pageService: PageService, private location: Location) { }

  ngOnInit(): void {
    this.getPage();
  }

}
