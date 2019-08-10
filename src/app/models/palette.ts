import { PaletteColor } from './palette-color';

export class Palette {
    constructor(
        private _palette: PaletteColor[],
    ) { }

    public get variants() {
        return this._palette;
    }

    public toMap() {
        const paletteMap = this._palette.reduce((palette, color) => {
            palette[color.intensity] = color.hex;
            return palette;
        }, {});

        const contrastMap = this._palette.reduce((contrast, color) => {
            contrast[color.intensity] = color.contrast.hex;
            return contrast;
        }, {});

        return {
            ...paletteMap,
            contrast: contrastMap,
        };
    }
}
