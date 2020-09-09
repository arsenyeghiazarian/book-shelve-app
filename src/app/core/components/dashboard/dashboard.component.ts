import { Component, OnInit } from '@angular/core';

import {DataService} from "../../services/data.service";
import {UUID} from 'uuid-generator-ts';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  shelveName: string;
  constructor( public data: DataService ) { }

  ngOnInit(): void {  }

  addShelve() {
    const uuid = new UUID()
    const obj:any = {
      id: uuid.getDashFreeUUID(),
      name: this.shelveName,
      books: []
    }
    this.data.shelves.push(obj)
    this.shelveName = ''
  }
}
