import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { CoreModule } from "../core/core.module";
import { NgxSpinnerModule } from "ngx-spinner";

const routs: Routes = [
  { path: '', component: DashboardComponent}
]

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routs),
    CoreModule,
    NgxSpinnerModule
  ]
})
export class DashboardModule { }
