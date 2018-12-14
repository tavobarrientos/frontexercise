import { Component, OnInit } from '@angular/core';

import { TermsService } from '../services/terms.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchTerms: Array<string> = ['Random', 'Real', 'Record', 'Red', 'Report'];
  termsFound: Array<string> = [];
  currentSearchTerm: string = '';

  constructor(private termService: TermsService) { }

  ngOnInit() {

  }

  public autoCompleteTerms(event) {
    if(this.currentSearchTerm.length > 0) {
      this.termsFound = this.searchTerms.filter(value => { 
        if(value.toLowerCase().indexOf(this.currentSearchTerm.toLowerCase()) > -1)
          return value;
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
