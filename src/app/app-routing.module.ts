import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from "./core/components/dashboard/dashboard.component";
import {SearchBookComponent} from "./pages/components/search-book/search-book.component";
import { ShelfDetailsComponent } from "./pages/components/shelf-details/shelf-details.component";

const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'shelf-details/:id', component: ShelfDetailsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'search', component: SearchBookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
