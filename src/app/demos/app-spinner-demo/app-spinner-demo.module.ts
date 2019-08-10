import { NgModule } from '@angular/core';
import { AppSpinnerDemoComponent } from './app-spinner-demo.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        MatProgressSpinnerModule,
        MatCheckboxModule,
        MatRadioModule,
        MatSliderModule,
        FormsModule,
    ],
    declarations: [AppSpinnerDemoComponent],
    exports: [AppSpinnerDemoComponent],
})
export class AppSpinnerDemoModule { }