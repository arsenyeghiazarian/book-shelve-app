import { Injectable } from '@angular/core';
import { UUID } from 'uuid-generator-ts';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private uuid = new UUID();
  private proxyURL = "https://cors-anywhere.herokuapp.com/";
  // get data form local storage
  private data = JSON.parse(localStorage.getItem('app-data'));
  private savedBooks = this.data['savedBooks'];

  constructor() {}

  // functionality to get details for shelve by it's id.
  getShelveDetails(id) {
    let details: object;
    this.data['shelves'].forEach(el => {
      if (el.id === id) details = el
    })
    return details
  }

  // functionality to delete shelve by it's id
  deleteShelve(id) {
    this.data['shelves'].forEach((el, i) => {
      if (el.id === id) this.data['shelves'].splice(i, 1)
    })
    this.postData()
  }

  // functionality to delete book form a given array of books by it's id.
  deleteBook(shelf: object, book: object, index: number) {
    shelf['books'].splice(index, 1)
    const indexOfShelfToDelete = this.savedBooks[book['isbn']].indexOf(shelf['id']);
    this.savedBooks[book['isbn']].splice(indexOfShelfToDelete, 1)
    if (!this.savedBooks[book['isbn']].length) delete this.savedBooks[book['isbn']]
    this.postData()
  }

  // functionality to add a book for a given shelve.
  addBook(shelf: object, book: object) {
    shelf['books'].push(book)
    if(!this.savedBooks.hasOwnProperty(book['isbn'])) {
      this.savedBooks[book['isbn']] = [shelf['id']]
    } else this.savedBooks[book['isbn']].push(shelf['id'])
    this.postData()
  }

  // functionality to add a shelve to main structure.
  addShelve(shelve: object) {
    this.data['shelves'].push(shelve);
    this.postData()
  }

  // return JSON parsed data from local storage
  getData() {
    return this.data
  }

  // add app data to local storage
  postData() {
    localStorage.setItem('app-data', JSON.stringify(this.data))
  }

  // functionality to get books form server
  searchBook(query, page) {
    return fetch(this.proxyURL + 'https://api.itbook.store/1.0/search/' + query + '/' + page)
  }
}
