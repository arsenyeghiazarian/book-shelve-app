import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { NgxSpinnerModule } from "ngx-spinner";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { BookCardComponent } from './components/book-card/book-card.component';

@NgModule({
  declarations: [

    HeaderComponent,
    SideBarComponent,
    BookCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    SideBarComponent,
    BookCardComponent
  ]
})
export class CoreModule {
}
