import { PaletteColor } from './palette-color';
import { tinycolor } from '@ctrl/tinycolor';

export class SimpleMaterialPaletteColor extends PaletteColor {
    public get palette(): PaletteColor[] {
        const tc = tinycolor(this.hex);

        const accentize = (value) => tc.lighten(value / 2).saturate(value).toHexString();
        const darken = (value) => tc.darken(value).toHexString();
        const lighten = (value) => tc.lighten(value).toHexString();

        return [
            new SimpleMaterialPaletteColor(lighten(50), '50'),
            new SimpleMaterialPaletteColor(lighten(24), '100'),
            new SimpleMaterialPaletteColor(lighten(18), '200'),
            new SimpleMaterialPaletteColor(lighten(12), '300'),
            new SimpleMaterialPaletteColor(lighten(6), '400'),
            new SimpleMaterialPaletteColor(this.hex, '500'),
            new SimpleMaterialPaletteColor(darken(6), '600'),
            new SimpleMaterialPaletteColor(darken(12), '700'),
            new SimpleMaterialPaletteColor(darken(18), '800'),
            new SimpleMaterialPaletteColor(darken(24), '900'),
            new SimpleMaterialPaletteColor(accentize(50), 'A100'),
            new SimpleMaterialPaletteColor(accentize(30), 'A200'),
            new SimpleMaterialPaletteColor(accentize(15), 'A400'),
            new SimpleMaterialPaletteColor(accentize(5), 'A700'),
        ];
    }
}
