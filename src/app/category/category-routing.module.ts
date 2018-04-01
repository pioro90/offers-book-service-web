import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryComponent,
    children: [{
      path: '',
      component: CategoryListComponent,
      children: [{
        path: ':id',
        component: CategoryDetailsComponent
      }]
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule {
}
