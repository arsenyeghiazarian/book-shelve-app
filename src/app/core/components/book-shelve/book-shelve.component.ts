import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from "@angular/router";

import { ApiService } from "../../services/apiService";

import { UUID } from 'uuid-generator-ts';

@Component({
  selector: 'app-book-shelve',
  templateUrl: './book-shelve.component.html',
  styleUrls: ['./book-shelve.component.scss']
})
export class BookShelveComponent implements OnInit {
  shelveId: string;
  selectedShelve: any;
  title: string;
  authorName: string;
  isbn: string;
  selectedFile = null;
  uuid = new UUID();
  data: object;

  constructor(
    private route: ActivatedRoute,
    public apiService: ApiService,
    private location: Location
  ) {}

  ngOnInit(): void {

    this.data = this.apiService.getData();
    this.shelveId = this.route.snapshot.params.id;
    this.selectedShelve = this.apiService.getShelveDetails(this.shelveId)
  }

  goBack() {
    this.location.back()
  }

  addBook(bookForm) {
    const obj = {
      id: this.uuid.getDashFreeUUID(),
      title: this.title,
      image: this.selectedFile,
      name: this.authorName,
      isbn: this.isbn
    }
    this.apiService.addBook(this.selectedShelve, obj);
    bookForm.reset()
  }

  deleteBook(books, i) {
    this.apiService.deleteBook(books, i)
  }

  onFileChange(e) {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0])
    reader.onload = (e) => {
      this.selectedFile = reader.result;
    }
  }

  // check if inputs are empty
  isFormValid() {
    return this.title && this.authorName && this.isbn && this.selectedFile
  }
}
