import { Component, OnInit } from '@angular/core';

import { ApiService } from "../../core/services/apiService";
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit  {
  public result: any;
  constructor(
    private apiService: ApiService,
    private spinner: NgxSpinnerService) {  }

  ngOnInit(): void {
    this.getNewBooks()
  }

  getNewBooks() {
    this.spinner.show()
    this.apiService.get('https://api.itbook.store/1.0/new').then(response => {
      return response.json()
    }).then(result => {
      this.result = result;
      this.spinner.hide();
    }).catch(err => {
      console.log(err)
    })
  }
}
