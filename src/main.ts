import './polyfills';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSlideToggleModule,
  MatToolbarModule,
  MatPaginatorModule
  } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import * as demo from './demo';

const demoArray = Object.values(demo);

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatRadioModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatCardModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA'
    })
  ],
  declarations: [...demoArray],
  bootstrap: [demoArray[demoArray.length - 1]]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule).then((ref) => {
  if (window['ngRef']) {
    window['ngRef'].destroy();
  }
  window['ngRef'] = ref;
}).catch((err) => console.error(err));
