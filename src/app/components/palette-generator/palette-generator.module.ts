import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PaletteGeneratorComponent } from './palette-generator.component';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
    imports: [
        CommonModule,
        MatTooltipModule,
        ColorPickerModule,
    ],
    declarations: [PaletteGeneratorComponent],
    exports: [PaletteGeneratorComponent],
})
export class PaletteGeneratorModule { }