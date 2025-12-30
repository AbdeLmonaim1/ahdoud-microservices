import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './navbar/navbar';
import { KeynoteListComponent } from './keynotes/keynote-list/keynote-list';
import { KeynoteFormComponent } from './keynotes/keynote-form/keynote-form';
import { ConferenceListComponent } from './conferences/conference-list/conference-list';
import { ConferenceFormComponent } from './conferences/conference-form/conference-form';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    Navbar,
    KeynoteListComponent,
    KeynoteFormComponent,
    ConferenceListComponent,
    ConferenceFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
