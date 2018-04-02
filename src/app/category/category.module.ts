import { NgModule } from '@angular/core';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryComponent } from './category.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CategoryRoutingModule
  ],
  declarations: [CategoryComponent, CategoryListComponent, CategoryDetailsComponent]
})
export class CategoryModule {
}
