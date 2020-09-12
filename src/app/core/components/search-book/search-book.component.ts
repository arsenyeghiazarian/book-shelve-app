import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";

import { ApiService } from "../../services/apiService";
import { NgxSpinnerService } from "ngx-spinner";

import { UUID } from "uuid-generator-ts";
import * as debounce from 'lodash/debounce'



@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.scss']
})
export class SearchBookComponent implements OnInit {
  searchInput: string;
  selectedShelve: object;
  dataFromServer: object;
  currentPage = 1;
  uuid = new UUID();

  constructor(
    private location: Location,
    public apiService: ApiService,
    private rout: ActivatedRoute,
    private spinner: NgxSpinnerService) {
  }

  ngOnInit(): void {
    this.apiService.getData().shelves.forEach(el => {
      if (el.id === this.rout.snapshot.params.id) this.selectedShelve = el
    })
  }


  private debouncedFetchCall = debounce(() => this.fetchCall(1), 1000, {});

  // functionality for search input key press
  onSearchInputChange() {
    if (this.searchInput.length) {
      this.debouncedFetchCall()
    }
  }

  // api request by typed query
  fetchCall(pageNumber) {
    this.spinner.show();
    this.apiService.searchBook(this.searchInput, pageNumber).then(response => {
      return response.json()
    }).then(result => {
      this.dataFromServer = result;
      this.spinner.hide();
    }).catch(err => {
      console.log(err)
    })
  }

  // pagination page change functionality
  changePage(event) {
    this.currentPage = event;
    this.fetchCall(this.searchInput)
  }

  // functionality to add searched book to selected shelve
  addBook(book, i) {
    const obj = {
      id: this.uuid.getDashFreeUUID(),
      title: book.title,
      image: book.image,
      name: book.subtitle,
      isbn: book.isbn13
    }
    this.apiService.addBook(this.selectedShelve, obj);
    this.dataFromServer['books'].splice(i, 1)
  }

  goBack() {
    this.location.back()
  }
}
