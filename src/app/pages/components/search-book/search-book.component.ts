import { Component, OnInit } from '@angular/core';

import { ApiService } from "../../../core/services/apiService";
import { NgxSpinnerService } from "ngx-spinner";

import { UUID } from "uuid-generator-ts";
import * as debounce from 'lodash/debounce'
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.scss']
})
export class SearchBookComponent implements OnInit {
  public searchValue: string;
  public result: object;
  public currentPage = 1;
  public shelves: [];
  public data: object;
  private uuid = new UUID();

  constructor(
    public apiService: ApiService,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getData()
    if(this.route.snapshot.params.hasOwnProperty('value')) {
      this.searchValue = this.route.snapshot.params.value;
      this.fetchCall(1)
    }
  }

  getData() {
    this.data = this.apiService.getData()
  }

  filterShelves(isbn) {
    this.getData()
    return this.data['shelves'].filter(shelf => {
      if(this.data['savedBooks'].hasOwnProperty(isbn)) {
        return !this.data['savedBooks'][isbn].includes(shelf.id)
      }
      return true
    })
  }

  toggleBtn(e,dropdown) {
    dropdown.hidden = !dropdown.hidden
    e.stopPropagation()
    e.preventDefault()
  }

  private debouncedFetchCall = debounce(() => this.fetchCall(1), 1000, {});

  // functionality for search input key press
  onSearchInputChange() {
    if(this.searchValue.length) {
      this.debouncedFetchCall()
    }
  }

  // api request by typed query
  fetchCall(pageNumber) {
    this.spinner.show();
    this.apiService.searchBook(this.searchValue, pageNumber).then(response => {
      return response.json()
    }).then(result => {
      this.result = result;
      this.spinner.hide();
    }).catch(err => {
      console.log(err)
    })
  }

  // pagination page change functionality
  changePage(event) {
    this.currentPage = event;
    this.fetchCall(event)
  }

  // functionality to add searched book to selected shelve
  addBook(book, shelf, dropdown) {
    const obj = {
      id: this.uuid.getDashFreeUUID(),
      title: book.title,
      image: book.image,
      name: book.subtitle,
      isbn: book.isbn13
    }
    this.apiService.addBook(shelf, obj);
    dropdown.hidden = true
  }
}
