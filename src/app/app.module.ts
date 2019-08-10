import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PaletteGeneratorModule } from './components/palette-generator/palette-generator.module';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { APP_INITIALIZER_PROVIDER } from './app.initializer';
import { AppButtonDemoModule } from './demos/app-button-demo/app-button-demo.module';
import { AppBadgeDemoModule } from './demos/app-badge-demo/app-badge-demo.module';
import { AppSpinnerDemoModule } from './demos/app-spinner-demo/app-spinner-demo.module';

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
    MatTabsModule,
    AppButtonDemoModule,
    AppBadgeDemoModule,
    AppSpinnerDemoModule,
  ],
  providers: [
    APP_INITIALIZER_PROVIDER,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
