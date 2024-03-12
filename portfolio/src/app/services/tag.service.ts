import { Injectable } from '@angular/core';
import { Tag } from '../models/tag';
import { TAGS } from '../data/tags';

@Injectable({
  providedIn: 'root',
})
export class TagService {
  constructor() {}
  getTags(): Tag[] {
    return TAGS;
  }
}
