import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { CATEGORY } from '../data/categories';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor() {}
  getCategory(): Category[] {
    return CATEGORY;
  }
}
