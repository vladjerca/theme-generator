import {
    tinycolor,
    TinyColor,
    mostReadable,
    isReadable,
    readability,
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

export class Color {
    private static WHITE = new Color('#FFF');
    private static BLACK = new Color('#000');

    protected _color: TinyColor;
    protected _contrast: Color;

    private _readabilityScore: string;
    private _info: string;

    public isReadable(level: 'AA' | 'AAA') {
        return isReadable(this._color, this.contrast._color, {
            level,
        });
    }

    constructor(
        hex: string
    ) {
        this._color = tinycolor(hex);
    }

    public get contrast() {
        return this._contrast = this._contrast ||
            new Color(
                mostReadable(
                    this._color,
                    [Color.WHITE.hex, Color.BLACK.hex],
                    {
                        level: 'AAA',
                        includeFallbackColors: true,
                        size: 'small',
                    },
                ).toHexString()
            );
    }

    public get readabilityScore() {
        return this._readabilityScore =
            this._readabilityScore ||
            readability(this._color, this.contrast._color).toFixed(2);
    }

    public get hex() {
        return this._color.toHexString();
    }

    public get info() {
        return this._info = this._info || `
            BG: ${this.hex}
            FG: ${this.contrast.hex}
            AA: ${this.readabilityScore} ${this.isReadable('AA') ? '>= 4.5 ✔' : '< 4.5 ❌'}
            AAA: ${this.readabilityScore} ${this.isReadable('AAA') ? '>= 7 ✔' : '< 7 ❌'}
        `;
    }
}

export abstract class PaletteColor extends Color {
    constructor(
        hex: string,
        public readonly intensity?: PaletteIntensity,
    ) {
        super(hex);
    }

    public abstract get palette();
}