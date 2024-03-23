import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectComponent } from './components/project/project.component';

import { CategoriesComponent } from './components/categories/categories.component';
import { TagsComponent } from './components/tags/tags.component';

import { Category } from './models/category';
import { CATEGORY } from './data/categories';
import { Tag } from './models/tag';
import { TAGS } from './data/tags';
import { Project } from './models/project';


import { ProjectFilterPipe } from './pipes/project-filter.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    ProjectFilterPipe,
    ProjectsComponent,
    ProjectComponent,
    CategoriesComponent,
    TagsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Portfolio';
  date = new Date();
  author = 'Amanda Mar';
  categories: Category[] = CATEGORY;
  categoryFilter: Category | undefined;
  tagFilter: Tag | undefined;
  tags: Tag[] = TAGS;

  setCategoryFilter(category: Category) {
    this.categoryFilter = category;
    this.tagFilter = undefined;
  }

  setTagFilter(tag: Tag) {
    this.tagFilter = tag;
    this.categoryFilter = undefined;
  }

  clearFilters() {
    this.categoryFilter = undefined;
    this.tagFilter = undefined;
  }

  selectedProject?: Project;

  setSelectedProject(project: Project) {
    this.selectedProject = project;
  }

  clearSelectedProject() {
    this.selectedProject = undefined;
  }
}
