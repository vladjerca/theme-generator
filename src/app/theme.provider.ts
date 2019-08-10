import { OnDestroy, Injectable, NgZone, Inject } from '@angular/core';
import { BehaviorSubject, Subject, animationFrameScheduler, from } from 'rxjs';
import { AppState } from './app.state';
import { Palette } from './models';
import { debounceTime, tap, observeOn, switchMapTo, switchMap } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';

const SASS_OPTIONS = {
    comments: false,
    sourceMapOmitUrl: true,
    style: Sass.style.compressed,
};

interface IColorPalettes {
    primary: Palette;
    secondary: Palette;
    warn: Palette;
}

const objToScssMap = (chunk: any) => {
    let scss = '';

    if (typeof chunk === 'object' && !Array.isArray(chunk)) {
        Object.keys(chunk)
            .map((key) => {
                const value = chunk[key];
                scss += key + ': ';

                if (typeof value === 'object') {
                    if (Array.isArray(value)) {
                        scss += '(';
                        value.forEach((val1) => {
                            if (Array.isArray(val1)) {
                                val1.forEach((val2) => {
                                    scss += val2 + ' ';
                                });
                                scss = scss.slice(0, -1) + ',\n';
                            } else {
                                scss += val1 + ',\n';
                            }
                        });
                        scss = scss.slice(0, -2);
                        scss += ')';
                    } else {
                        scss += '(' + objToScssMap(value) + ')';
                    }
                } else {
                    scss += objToScssMap(value);
                }
                scss += ',\n';
            });
        scss = scss.slice(0, -2);
    } else {
        scss += chunk;
    }

    return scss;
}

const paletteToScss = ({ primary, secondary, warn, }: IColorPalettes) => `
        ${objToScssMap({ '$primary-palette': primary.toMap() })};
        ${objToScssMap({ '$secondary-palette': secondary.toMap() })};
        ${objToScssMap({ '$warn-palette': warn.toMap() })};

        $theme-generator-theme: mat-light-theme(
            mat-palette($primary-palette),
            mat-palette($secondary-palette),
            mat-palette($warn-palette)
        );

        @include angular-material-theme($theme-generator-theme);
`;

@Injectable({
    providedIn: 'root',
})
export class ThemeProvider implements OnDestroy {
    public loading$ = new BehaviorSubject(false);

    private _sass = new Sass();
    private _styleContainer: HTMLStyleElement;
    private _updateTheme$ = new Subject<IColorPalettes>();

    constructor(
        private _state: AppState,
        @Inject(DOCUMENT)
        _document: Document,
    ) {
        this._styleContainer = _document.querySelector('#theme-dump');

        this._updateTheme$
            .pipe(
                debounceTime(150),
                tap(() => this.loading$.next(true)),
                switchMap(this._sassStream),
                observeOn(animationFrameScheduler),
            ).subscribe((styles) => {
                this._styleContainer.innerHTML = styles;
                this.loading$.next(false);
            });
    }

    public updateTheme(palettes: IColorPalettes) {
        this._updateTheme$.next(palettes);
    }

    private _sassStream = (palettes: IColorPalettes) =>
        from(new Promise<string>((resolve) => {
            this._sass
                .compile(`
                    ${this._state.themeDefinition}
                    ${paletteToScss(palettes)}
                `,
                    SASS_OPTIONS,
                    (styles) => resolve(styles.text),
                );
        }));

    ngOnDestroy() {
        this._sass.destroy();
    }
}