import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { NgxSpinnerModule } from "ngx-spinner";
import { RouterModule } from "@angular/router";

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
