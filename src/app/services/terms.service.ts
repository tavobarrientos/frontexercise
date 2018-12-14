import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TermsService {
  private searchTerms: Array<string> = ['Random', 'Real', 'Record', 'Red', 'Report'];

  constructor() { }

  /**
   * SearchTerm
   * Simulates an API Call.
   */
  public SearchTerm(input: string): Observable<Array<string>> {
    const searchtermObservable = new Observable<Array<string>>(observer => {
      setTimeout(() => {
        let termsFound = this.searchTerms.filter(value => { 
          if(value.toLowerCase().indexOf(input.toLowerCase()) > -1)
            return value;
        });
        observer.next(termsFound);
      }, 1000)
    });

    return searchtermObservable;
  }
}
