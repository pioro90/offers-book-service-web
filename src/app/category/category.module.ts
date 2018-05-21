import { NgModule } from '@angular/core';

import { CategoryRoutingModule } from './category-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CategoryComponent } from './category.component';
import { CategoryTreeComponent } from './category-tree/category-tree.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';

@NgModule({
  imports: [
    SharedModule,
    CategoryRoutingModule
  ],
  declarations: [CategoryComponent, CategoryTreeComponent, CategoryDetailsComponent]
})
export class CategoryModule {
}
