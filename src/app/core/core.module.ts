import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { NgxSpinnerModule } from "ngx-spinner";

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BookCardComponent } from './components/book-card/book-card.component';
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    DashboardComponent,
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
