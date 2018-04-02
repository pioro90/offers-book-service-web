import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';


const routes: Routes = [
  {path: 'categories', loadChildren: 'app/category/category.module#CategoryModule'},
  {path: '', redirectTo: 'categories', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
