import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShelfDetailsComponent } from './components/shelf-details/shelf-details.component';
import { FormsModule } from "@angular/forms";
import { CoreModule } from "../core/core.module";
import { RouterModule } from "@angular/router";
import { AutoSizeInputModule } from "ngx-autosize-input";



@NgModule({
  declarations: [
    ShelfDetailsComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        CoreModule,
        RouterModule,
        AutoSizeInputModule
    ]
})
export class PagesModule { }
