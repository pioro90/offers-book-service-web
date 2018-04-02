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

  getSubCategories(parentId?: string): Observable<Category[]> {
    return of([{
      id: '1234',
      name: 'Cars'
    }]);
  }

  getCategoryAttributes(id: string): Observable<CategoryAttribute[]> {
    return of([{
      id: '234',
      name: 'Brand',
      type: 'dictionary'
    }]);
  }

}
