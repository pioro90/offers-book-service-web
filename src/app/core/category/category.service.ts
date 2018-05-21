import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import { Category } from './category';
import { CategoryAttribute } from './category-attribute';

@Injectable()
export class CategoryService {

  constructor(private httpClient: HttpClient) {
  }

  getCategories(parentId?: string): Observable<Category[]> {
    const categories = [];

    for (let i = 0; i < 3; i++) {
      categories.push({
        id: `id-${i}`,
        name: `Category - ${i}`
      });
    }

    return of(categories);
  }

  getCategoryAttributes(id: string): Observable<CategoryAttribute[]> {
    return of([{
      id: '234',
      name: 'Brand',
      type: 'dictionary'
    }]);
  }

}
