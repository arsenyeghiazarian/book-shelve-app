import { Component, OnInit } from '@angular/core';
import { UUID } from "uuid-generator-ts";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from "../../../core/services/apiService";

@Component({
  selector: 'app-shelf-details',
  templateUrl: './shelf-details.component.html',
  styleUrls: ['./shelf-details.component.scss']
})
export class ShelfDetailsComponent implements OnInit {
  private attachedImage = null;
  private uuid = new UUID();
  public selectedShelf: any;
  public bookTitle: string;
  public authorName: string;
  public isbn: string;
  public data: object;
  public imageName: string;
  public isFormOpen: boolean;
  public isEditActive = false;
  public shelfTitle: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.data = this.apiService.getData();
    this.route.params.subscribe(params => {
      let shelfId = params['id'];
      this.selectedShelf = this.apiService.getShelveDetails(shelfId);
    });
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

  onFileChange(e) {
    this.imageName = e.target.files[0].name
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0])
    reader.onload = (e) => {
      this.attachedImage = reader.result;
    }
  }

  editTitle(titleInput) {
    if(!this.isEditActive) {
      this.shelfTitle = this.selectedShelf['name'];
    } else {
      if(this.selectedShelf['name'] !== this.shelfTitle) {
        this.apiService.postData()
      }
    }
    this.isEditActive = !this.isEditActive;
    titleInput.focus()
  }

  deleteBook(shelf: object, book: object, i: number) {
    this.apiService.deleteBook(shelf, book,  i)
  }

  // check if inputs are empty
  //TODO: Form validation
  isFormValid() {
    return this.bookTitle && this.authorName && this.isbn && this.attachedImage
  }
}

