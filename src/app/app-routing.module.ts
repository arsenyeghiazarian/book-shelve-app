import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookShelveComponent } from "./core/components/book-shelve/book-shelve.component";
import { DashboardComponent } from "./core/components/dashboard/dashboard.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'book-shelve/:id', component: BookShelveComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
