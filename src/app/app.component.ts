import { Component, ChangeDetectionStrategy, OnInit, HostBinding, ViewEncapsulation } from '@angular/core';
import { ThemeProvider } from './theme.provider';
import { combineLatest, Subject } from 'rxjs';
import { PaletteColor, Palette } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  public appColorTheme = {
    primary: new Subject<Palette>(),
    secondary: new Subject<Palette>(),
    warn: new Subject<Palette>(),
  };

  @HostBinding('class.app-theme-loading')
  public get themeLoading() {
    return this._theme.loading$.value;
  }

  constructor(private _theme: ThemeProvider) { }

  ngOnInit() {
    combineLatest([
      this.appColorTheme.primary,
      this.appColorTheme.secondary,
      this.appColorTheme.warn,
    ]).subscribe(([primary, secondary, warn]) => {
      this._theme.updateTheme({
        primary,
        secondary,
        warn,
      });
    });
  }
}
