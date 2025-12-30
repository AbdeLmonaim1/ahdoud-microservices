import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KeynoteListComponent } from './keynotes/keynote-list/keynote-list';
import { KeynoteFormComponent } from './keynotes/keynote-form/keynote-form';
import { ConferenceListComponent } from './conferences/conference-list/conference-list';
import { ConferenceFormComponent } from './conferences/conference-form/conference-form';

const routes: Routes = [
  { path: 'keynotes', component: KeynoteListComponent },
  { path: 'keynotes/new', component: KeynoteFormComponent },
  { path: 'keynotes/edit/:id', component: KeynoteFormComponent },
  { path: 'conferences', component: ConferenceListComponent },
  { path: 'conferences/new', component: ConferenceFormComponent },
  { path: 'conferences/edit/:id', component: ConferenceFormComponent },
  { path: '', redirectTo: '/keynotes', pathMatch: 'full' },
  { path: '**', redirectTo: '/keynotes' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
