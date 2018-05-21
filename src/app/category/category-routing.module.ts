import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { CategoryTreeComponent } from './category-tree/category-tree.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryComponent,
    children: [
      {
        path: '',
        component: CategoryTreeComponent,
        children: [
          {
            path: ':id',
            component: CategoryDetailsComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule {
}
