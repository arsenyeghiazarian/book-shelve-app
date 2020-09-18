import { Component } from '@angular/core';

import * as debounce from 'lodash/debounce'

import { ApiService } from "../../services/apiService";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public searchValue: string;
  public searchResult: object;
  public showResult: boolean;

  constructor(
    private apiService: ApiService,
    private spinner: NgxSpinnerService) { }

  private debouncedFetchCall = debounce(() => this.fetchCall(), 1000, {});

  // functionality for search on input key press
  onSearchInputChange() {
    if (this.searchValue.length) {
      this.debouncedFetchCall()
    }
  }

  // api request by typed query
  fetchCall() {
    this.spinner.show();
    this.apiService.searchBook(this.searchValue, 1).then(response => {
      return response.json()
    }).then(result => {
      this.searchResult = result;
      this.showResult = true;
      this.spinner.hide();
    }).catch(err => {
      this.spinner.hide();
      console.log(err)
    })
  }
}
