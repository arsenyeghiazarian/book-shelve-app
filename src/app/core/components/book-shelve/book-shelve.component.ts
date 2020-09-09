import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from "@angular/router";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-book-shelve',
  templateUrl: './book-shelve.component.html',
  styleUrls: ['./book-shelve.component.scss']
})
export class BookShelveComponent implements OnInit {
  shelveId: string;
  selectedShelve: any;
  constructor(
    private route: ActivatedRoute,
    private data: DataService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.shelveId = this.route.snapshot.params.id;
    this.selectedShelve = this.data.getShelveDetails(+this.shelveId)
    setTimeout(() => {
      console.log(this.selectedShelve)
    },2000)
  }
  goBack() {
    this.location.back()
  }
}
