import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookShelveComponent } from './components/book-shelve/book-shelve.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';



@NgModule({
  declarations: [BookShelveComponent, DashboardComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
