import { Component, OnInit} from '@angular/core';
import { UUID } from "uuid-generator-ts";
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "../../../core/services/apiService";

@Component({
  selector: 'app-shelf-details',
  templateUrl: './shelf-details.component.html',
  styleUrls: ['./shelf-details.component.scss']
})
export class ShelfDetailsComponent implements OnInit {
  private shelfId: string;
  private attachedImage = null;
  private uuid = new UUID();
  public selectedShelf: any;
  public bookTitle: string;
  public authorName: string;
  public isbn: string;
  public data: object;
  public imageName: string;
  public isFormOpen: boolean;

  constructor(
    private route: ActivatedRoute,
    public apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.data = this.apiService.getData();
    this.shelfId = this.route.snapshot.params.id;
    this.selectedShelf = this.apiService.getShelveDetails(this.shelfId)
  }

  addBook(bookForm) {
    const obj = {
      id: this.uuid.getDashFreeUUID(),
      title: this.bookTitle,
      image: this.attachedImage,
      name: this.authorName,
      isbn: this.isbn
    }
    this.apiService.addBook(this.selectedShelf, obj);
    bookForm.reset()
  }

  deleteBook(books, i) {
    this.apiService.deleteBook(books, i)
  }

  onFileChange(e) {
    this.imageName = e.target.files[0].name
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0])
    reader.onload = (e) => {
      this.attachedImage = reader.result;
    }
  }

  // check if inputs are empty
  isFormValid() {
    return this.bookTitle && this.authorName && this.isbn && this.attachedImage
  }
}

