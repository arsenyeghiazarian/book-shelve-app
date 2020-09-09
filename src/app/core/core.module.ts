import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookShelveComponent } from './components/book-shelve/book-shelve.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [BookShelveComponent, DashboardComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ]
})
export class CoreModule { }
