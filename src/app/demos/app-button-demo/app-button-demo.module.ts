import { NgModule } from '@angular/core';
import { AppButtonDemoComponent } from './app-button-demo.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports: [
        MatButtonModule,
        MatIconModule,
    ],
    declarations: [AppButtonDemoComponent],
    exports: [AppButtonDemoComponent],
})
export class AppButtonDemoModule { }