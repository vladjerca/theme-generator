import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import { PaletteColor, EnhancedMaterialPaletteColor } from 'src/app/models';

@Component({
  selector: 'app-palette-generator',
  templateUrl: './palette-generator.component.html',
  styleUrls: ['./palette-generator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaletteGeneratorComponent implements OnInit {
  @Input()
  public label: string;

  @Input()
  public default: string;

  public color: PaletteColor;

  public palette: PaletteColor[];

  ngOnInit() {
    this._initialize(this.default);
  }

  switchColor(color: string) {
    if (color === this.color.hex) { return; }

    this._initialize(color);
  }

  private _initialize(hex: string) {
    this.color = new EnhancedMaterialPaletteColor(hex);
    this.palette = this.color.palette;
  }
}
