import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AppState {
    public readonly themeDefinition: string;

    public setTheme(themeDefinition: string) {
        (this.themeDefinition as any) = themeDefinition;
    }
}