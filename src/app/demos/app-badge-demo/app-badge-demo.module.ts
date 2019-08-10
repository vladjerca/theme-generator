import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { AppBadgeDemoComponent } from './app-badge-demo.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports: [
        MatBadgeModule,
        MatIconModule,
        MatButtonModule,
    ],
    declarations: [AppBadgeDemoComponent],
    exports: [AppBadgeDemoComponent],
})
export class AppBadgeDemoModule { }