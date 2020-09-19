import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShelfDetailsComponent } from './components/shelf-details/shelf-details.component';
import { FormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    ShelfDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PagesModule { }
