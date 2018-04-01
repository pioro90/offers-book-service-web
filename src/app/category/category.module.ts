import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryComponent } from './category.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';

@NgModule({
  imports: [
    CommonModule,
    CategoryRoutingModule
  ],
  declarations: [CategoryComponent, CategoryListComponent, CategoryDetailsComponent]
})
export class CategoryModule { }
