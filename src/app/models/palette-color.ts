import {
    tinycolor,
    TinyColor,
} from '@ctrl/tinycolor';

export type PaletteIntensity = '900'
    | '800'
    | '700'
    | '600'
    | '500'
    | '400'
    | '300'
    | '200'
    | '100'
    | '50'
    | 'A100'
    | 'A200'
    | 'A400'
    | 'A700';

export abstract class PaletteColor {
    protected _color: TinyColor;

    constructor(
        hex: string,
        public readonly intensity?: PaletteIntensity,
    ) {
        this._color = tinycolor(hex);
    }

    public abstract get palette();

    public get hex() {
        return this._color.toHexString();
    }
}