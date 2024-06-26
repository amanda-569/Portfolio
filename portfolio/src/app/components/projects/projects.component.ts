import { Component, Input, Output, EventEmitter, OnInit, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CategoriesComponent } from '../categories/categories.component';
import { TagsComponent } from '../tags/tags.component';

import { Category } from '../../models/category';
import { CATEGORY, getCategoryNameBySlug } from '../../data/categories';
import { Tag } from '../../models/tag';
import { TAGS, getTagNameBySlug } from '../../data/tags';

import { ProjectFilterPipe } from '../../pipes/project-filter.pipe';

import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project';

// import the component so that we can use it in the template
import { ProjectComponent } from '../project/project.component';
import { ActivatedRoute } from '@angular/router';

import { RouterModule } from '@angular/router';
import {NgTiltModule} from '@geometricpanda/angular-tilt';

@Component({
  selector: 'app-projects',
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
    NgTiltModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute
  ) {}

  title = 'Portfolio';
  date = new Date();
  author = 'Amanda Mar';
  categories: Category[] = CATEGORY;
  filterString?: string
  tagFilter: Tag | undefined;
  tags: Tag[] = TAGS;

  projects: Project[] = [];
  getProjects(): void {
    this.projectService
      .getProjects()
      .subscribe((projects) => (this.projects = projects));
  }

  getProjectsByCategory(categorySlug: string): void {
    this.projectService
      .getProjectsByCategory(categorySlug)
      .subscribe((data) => (this.projects = data));
  }

  openNav(): void {
    const navContainer = document.querySelector('.nav-container') as HTMLElement;
    if (navContainer) {
      navContainer.style.width = '250px';
    }
  }
  
  closeNav(): void {
    const navContainer = document.querySelector('.nav-container') as HTMLElement;
    if (navContainer) {
      navContainer.style.width = '0';
    }
  }
  

  getProjectsByTag(tagSlug : string): void {
    this.projectService
      .getProjectsByTag(tagSlug)
      .subscribe((data) => (this.projects = data));
  }
  
  ngOnInit(): void {
    // this.categoryFilter = this.categories[0];
    this.route.params.subscribe((params) => {
      console.log(params);
      const segment: string = this.route.snapshot.url[1]?.path;
      if (segment === 'categories') {
        const categorySlug = String(this.route.snapshot.paramMap.get('slug'));
        const categoryName = getCategoryNameBySlug(categorySlug)?.name;
        this.filterString = categoryName;
        this.getProjectsByCategory(categorySlug);
      } else if (segment === 'tags') {
        const tagSlug = String(this.route.snapshot.paramMap.get('slug'));
        const tagName = getTagNameBySlug(tagSlug)?.name;
        this.filterString = tagName;
        this.getProjectsByTag(tagSlug);
      }
      else {
        this.getProjects();
      }
    });
  }

  // @Input() categoryFilter: Category | undefined;
  // @Output() newCategoryFilterEvent = new EventEmitter<Category>();
  // @Input() tagFilter: Tag | undefined;
  // @Output() newTagFilterEvent = new EventEmitter<Tag>();

  // setCategoryFilter(category: Category) {
  //   this.categoryFilter = category;
  //   console.log("category:", category);
  //   // this.newCategoryFilterEvent.emit(category);
  //   this.tagFilter = undefined;
  // }

  setTagFilter(tag: Tag) {
    this.tagFilter = tag;
    console.log("tag:", tag);
  }

  clearFilters() {
    // this.categoryFilter = undefined;
    this.tagFilter = undefined;
  }

  selectedProject?: Project;

  @Output() newSelectedProjectEvent = new EventEmitter<Project>();

  setSelectedProject(project: Project): void {
    this.newSelectedProjectEvent.emit(project);
    this.selectedProject = project;
  }

  clearSelectedProject() {
    this.selectedProject = undefined;
  }
}
