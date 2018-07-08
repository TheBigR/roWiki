import { Component, OnInit } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {debounceTime, distinctUntilChanged, switchMap} from "rxjs/operators";
import {Page} from "../page";
import {PageService} from "../Services/page.service";


@Component({
  selector: 'app-page-search',
  templateUrl: './page-search.component.html',
  styleUrls: ['./page-search.component.css']
})
export class PageSearchComponent implements OnInit {
  pages$: Observable<Page[]>;
  private searchTerms = new Subject<string>();

  constructor(private pageService: PageService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.pages$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.pageService.searchPages(term)),
    );
  }

}
