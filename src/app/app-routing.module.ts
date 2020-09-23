import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchBookComponent } from "./pages/components/search-book/search-book.component";
import { ShelfDetailsComponent } from "./pages/components/shelf-details/shelf-details.component";
import { BookDetailsComponent } from "./pages/components/book-details/book-details.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'shelf-details/:id', component: ShelfDetailsComponent },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  { path: 'search', component: SearchBookComponent },
  { path: 'details/:isbn', component: BookDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
