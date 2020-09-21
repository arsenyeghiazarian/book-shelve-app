import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from "@angular/forms";
import { CoreModule } from "../core/core.module";
import { RouterModule } from "@angular/router";
import { AutoSizeInputModule } from "ngx-autosize-input";
import { NgxPaginationModule } from "ngx-pagination";
import { NgxSpinnerModule } from "ngx-spinner";

import { ShelfDetailsComponent } from './components/shelf-details/shelf-details.component';
import { SearchBookComponent } from "./components/search-book/search-book.component";

@NgModule({
  declarations: [
    ShelfDetailsComponent,
    SearchBookComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CoreModule,
    RouterModule,
    AutoSizeInputModule,
    NgxPaginationModule,
    NgxSpinnerModule
  ]
})
export class PagesModule {
}
