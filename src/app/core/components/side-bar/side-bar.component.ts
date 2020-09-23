import { Component, OnInit } from '@angular/core';
import { UUID } from "uuid-generator-ts";
import { ApiService } from "../../services/apiService";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  public shelfName: string;
  public data: any;
  public createBtnActive = true;

  constructor(public apiService: ApiService) { }

  ngOnInit(): void {
    this.data = this.apiService.getData();
  }

  public createShelf(input) {
    this.createBtnActive = false;
    input.focus()
  }

  public addShelf() {
    const uuid = new UUID()
    const obj: any = {
      id: uuid.getDashFreeUUID(),
      name: this.shelfName,
      books: []
    }
    this.apiService.addShelve(obj)
    this.shelfName = '';
    this.createBtnActive = true;
  }

  public deleteShelf(i) {
    this.apiService.deleteShelf(i)
  }
}
