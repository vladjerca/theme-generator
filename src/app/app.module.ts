import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PaletteGeneratorModule } from './components/palette-generator/palette-generator.module';
import { MatCardModule } from '@angular/material/card';
import { APP_INITIALIZER_PROVIDER } from './app.initializer';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    PaletteGeneratorModule,
    MatCardModule,
  ],
  providers: [
    APP_INITIALIZER_PROVIDER,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
