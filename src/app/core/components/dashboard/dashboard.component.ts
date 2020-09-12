import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import {ApiService} from "../../services/apiService";
import {UUID} from 'uuid-generator-ts';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  shelveName: string;
  visibleIndex = -1;
  data: any;

  @ViewChild('shelveNameInput') shelveNameInput: ElementRef;

  constructor( public apiService: ApiService ) { }

  ngOnInit(): void {
    this.data = this.apiService.getData();
  }

  editShelve(shelve, ind) {
    if (this.visibleIndex === ind) {
      this.visibleIndex = -1;
      this.apiService.postData()
    } else {
      this.visibleIndex = ind;
    }
  }

  addShelve() {
    const uuid = new UUID()
    const obj:any = {
      id: uuid.getDashFreeUUID(),
      name: this.shelveName,
      books: []
    }
    this.apiService.addShelve(obj)
    this.shelveName = ''
  }

  deleteShelve(shelveId) {
    this.apiService.deleteShelve(shelveId)
  }
}
