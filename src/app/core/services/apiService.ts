import { Injectable } from '@angular/core';
import {UUID} from 'uuid-generator-ts';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  uuid = new UUID();
  proxyURL = "https://cors-anywhere.herokuapp.com/";
  data = JSON.parse(localStorage.getItem('app-data'));

  constructor() { }

  getShelveDetails(id) {
    let details: object;
    this.data['shelves'].forEach(el => {
      if(el.id === id) details = el
    })
    return details
  }

  deleteShelve(id) {
    this.data['shelves'].forEach((el, i) => {
      if(el.id === id) this.data['shelves'].splice(i,1)
    })
    this.postData()
  }

  deleteBook(books, index) {
    books?.forEach((el, i) => {
      if(i === index) books.splice(i,1)
    })
    this.postData()
  }

  addBook(shelve: object, book: object) {
    shelve['books'].push(book)
    this.postData()
  }

  addShelve(obj) {
    this.data['shelves'].push(obj);
    this.postData()
  }

  getData() {
    return this.data
  }

  postData() {
    localStorage.setItem('app-data', JSON.stringify(this.data))
  }

  searchBook(query, page) {
    return fetch(this.proxyURL + 'https://api.itbook.store/1.0/search/' + query + '/' + page)
  }
}
