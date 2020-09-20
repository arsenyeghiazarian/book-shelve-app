import { Component, OnInit } from '@angular/core';

import * as debounce from 'lodash/debounce'

import { ApiService } from "../../services/apiService";
import { NgxSpinnerService } from "ngx-spinner";
import { NavigationEnd, Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  public searchValue: string;
  public searchResult: object;
  public showResult: boolean;
  public routerUrl: any;

  constructor(
    private apiService: ApiService,
    private spinner: NgxSpinnerService,
    private router: Router) {
      router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.routerUrl = event.url
        }
      })
  }

  private debouncedFetchCall = debounce(() => this.fetchCall(), 1000, {});

  ngOnInit() {

  }

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
