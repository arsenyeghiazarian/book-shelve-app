import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";

import { ApiService } from "../../../core/services/apiService";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  private isbn: number;
  public data: object;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private spinner: NgxSpinnerService
  ) {
    this.route.params.subscribe(params => {
      this.isbn = params['isbn'];
      this.getBookDetails()
    });
  }

  ngOnInit(): void {
    if(this.isbn) {
      this.getBookDetails()
    }
  }

  getBookDetails() {
    this.spinner.show()
    this.apiService.get('https://api.itbook.store/1.0/books/' + this.isbn).then(response => {
      return response.json()
    }).then(result => {
      this.data = result;
      console.log(this.data)
      this.spinner.hide();
    }).catch(err => {
      console.log(err)
    })
  }

}
