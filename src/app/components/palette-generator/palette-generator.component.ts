import { Component, ChangeDetectionStrategy, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { PaletteColor, EnhancedMaterialPaletteColor, Palette } from 'src/app/models';

@Component({
  selector: 'app-palette-generator',
  templateUrl: './palette-generator.component.html',
  styleUrls: ['./palette-generator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaletteGeneratorComponent implements OnInit {
  @Input()
  public id: string;

  @Input()
  public default: string;

  @Output()
  public paletteChange = new EventEmitter<Palette>();

  public color: PaletteColor;

  public palette: Palette;

  ngOnInit() {
    this._initialize(this.default);
  }

  switchColor(color: string) {
    if (color === this.color.hex) { return; }

    this._initialize(color);
  }

  private _initialize(hex: string) {
    this.color = new EnhancedMaterialPaletteColor(hex);
    this.palette = new Palette(this.color.palette);
    this.paletteChange.emit(this.palette);
  }
}
