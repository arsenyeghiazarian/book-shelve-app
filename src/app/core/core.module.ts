import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { NgxPaginationModule } from "ngx-pagination";
import { NgxSpinnerModule } from "ngx-spinner";

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SearchBookComponent } from './components/search-book/search-book.component';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BookCardComponent } from './components/book-card/book-card.component';

@NgModule({
  declarations: [
    DashboardComponent,
    SearchBookComponent,
    HeaderComponent,
    SideBarComponent,
    BookCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  exports: [
    HeaderComponent,
    SideBarComponent,
    BookCardComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CoreModule {
}
