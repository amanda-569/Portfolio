import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../models/project';
import { PROJECTS } from '../data/projects';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor() {}
  getProjects(): Observable<Project[]> {
    const projects = of(PROJECTS);
    return projects;
  }
  getProject(id: number): Project {
    return PROJECTS.find((project) => project.id === id)!;
  }
  getProjectsByCategory(slug: string): Observable<Project[]> {
    const projects = PROJECTS.filter(
      (project) => project.category?.slug === slug
    )!;
    return of(projects);
  }
  getProjectsByTag(slug: string): Observable<Project[]> {
    const projects = PROJECTS.filter(project =>
      project.tags?.some(tag => tag.slug === slug)
    );
    return of(projects);
  }
}
