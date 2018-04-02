import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../core/category/category.service';
import { Observable } from 'rxjs/Observable';
import { Category } from '../../core/category/category';

@Component({
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  categories$: Observable<Category[]>;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categories$ = this.categoryService.getSubCategories();
  }

}
