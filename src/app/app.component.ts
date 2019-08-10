import { Component, ChangeDetectionStrategy, OnInit, HostBinding, ViewEncapsulation } from '@angular/core';
import { ThemeProvider } from './theme.provider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  @HostBinding('class.app-theme-loading')
  public get themeLoading() {
    return this._theme.loading$.value;
  }

  constructor(private _theme: ThemeProvider) { }

  ngOnInit() {
    this._theme.updateTheme();
  }
}
