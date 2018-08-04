import { Injectable } from '@angular/core';
import {Page} from '../page';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {MessageService} from './message.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError,  tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()

export class PageService {

  private pagesUrl = 'api/pages';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {
  }


  getPages(): Observable<Page[]> {
    return this.http.get<Page[]>(this.pagesUrl)
      .pipe(
        tap(pages => this.log(`fetched pages`)),
        catchError(this.handleError('getHeroes', []))
      );
  }

  getPage(id: string): Observable<Page> {
    const url = `${this.pagesUrl}/${id}`;
    return this.http.get<Page>(url).pipe(
      tap(_ => this.log(`fetched page id=${id}`)),
      catchError(this.handleError<Page>(`getPage id=${id}`))
      );
  }

  addPage (page: Page): Observable<Page> {
    return this.http.post<Page>(this.pagesUrl, page, httpOptions).pipe(
      tap((page: Page) => this.log(`added page w/ id=${page._id}`)),
      catchError(this.handleError<Page>('addPage'))
    );
  }

  deletePage (page: Page | string ): Observable<Page> {
    const id = typeof page === 'string' ? page : page._id;
    const url = `${this.pagesUrl}/${id}`;
    return this.http.delete<Page>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted page id=${id}`)),
      catchError(this.handleError<Page>('deletePage'))
    );
  }

  private  log(message: string) {
    this.messageService.add('PageService: ' + message);
  }

  private  handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of (result as T);
    };
  }

  updatePage (page: Page): Observable<any> {
    return this.http.put(this.pagesUrl, page, httpOptions).pipe(
      tap(_ => this.log(`updated page id=${page._id}`)),
      catchError(this.handleError<any>('updatePage'))
    );
  }

  searchPages(term: string): Observable<Page[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Page[]>(`${this.pagesUrl}/?title=${term}`).pipe(
      tap(_ => this.log(`found pages matching "${term}"`)),
      catchError(this.handleError<Page[]>('searchPages', []))
    );
  }



}
