import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectComponent } from './components/project/project.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/categories/:slug', component: ProjectsComponent },
  { path: 'projects/tags/:slug', component: ProjectsComponent },
  { path: 'projects/:id', component: ProjectComponent },
  { path: '**', redirectTo: '' },
];
