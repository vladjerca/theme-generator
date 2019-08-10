import { OnDestroy, Injectable, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppState } from './app.state';

const SASS_OPTIONS = {
    comments: false,
    sourceMapOmitUrl: true,
    style: Sass.style.compressed,
};

@Injectable({
    providedIn: 'root',
})
export class ThemeProvider implements OnDestroy {
    public loading$ = new BehaviorSubject(false);

    private _sass = new Sass();

    constructor(
        private _state: AppState,
        private _zone: NgZone,
    ) { }

    public updateTheme(
        // TODO: extract variables from UI configuration
        _matVariables?: any,
    ) {
        this.loading$.next(true);

        this._sass
            .compile(
                this._state.themeDefinition,
                SASS_OPTIONS,
                (res) => {
                    this._zone.run(() => {
                        const themeStyleContainer = document.querySelector('#theme-dump');
                        themeStyleContainer.innerHTML = res.text;
                        this.loading$.next(false);
                    });
                }
            );
    }

    ngOnDestroy() {
        this._sass.destroy();
    }
}