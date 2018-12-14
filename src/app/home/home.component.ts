import { Component, OnInit } from '@angular/core';

import { TermsService } from '../services/terms.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  termsFound: Array<string> = [];
  currentSearchTerm: string = '';
  isSearching: boolean = false;

  constructor(private termService: TermsService) { }

  ngOnInit() {

  }

  public autoCompleteTerms(event) {
    if(this.currentSearchTerm.length > 0) {
      this.isSearching = true;
      this.termService.SearchTerm(this.currentSearchTerm).subscribe(x => {
        this.termsFound = x;
        this.isSearching = false;
      });
    } else {
      this.termsFound = [];
    }

    console.log(this.termsFound);
  }

  public selectTerm(term) {
    this.currentSearchTerm = term;
    this.termsFound = [];
  }

}
