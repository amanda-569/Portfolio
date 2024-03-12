import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Tag } from '../../models/tag';
// import { TAGS } from '../data/tags';
import { TagService } from '../../services/tag.service';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.scss',
})
export class TagsComponent {
  // tags = TAGS;
  constructor(private tagService: TagService) {}

  // themes = THEMES;
  tags: Tag[] = [];
  getTags(): void {
    this.tags = this.tagService.getTags();
  }
  ngOnInit(): void {
    this.getTags();
  }

  @Input() tagFilter: Tag | undefined;
  @Output() newTagFilterEvent = new EventEmitter<Tag>();

  setTagFilter(tag: Tag) {
    this.tagFilter = tag;
    this.newTagFilterEvent.emit(tag);
  }
}
