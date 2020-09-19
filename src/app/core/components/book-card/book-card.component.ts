import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from "../../services/apiService";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {
  @Input() index: number;
  @Input() bookDetails: any;

  private shelfId: string;
  public shelfDetails: object;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.shelfId = this.route.snapshot.params.id;
    this.shelfDetails = this.apiService.getShelveDetails(this.shelfId)
  }

  deleteBook(books, i) {
    this.apiService.deleteBook(this.shelfDetails['books'], i)
  }
}
