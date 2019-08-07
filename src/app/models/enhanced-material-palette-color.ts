import {
    PaletteColor,
    PaletteIntensity,
} from './palette-color';
import { tinycolor } from '@ctrl/tinycolor';

interface MixDefinition {
    mixWith: 'black' | 'white';
    value: number;
    intensity: PaletteIntensity;
}

interface AccentDefinition {
    value: number;
    intensity: PaletteIntensity;
}

const INTENSITY_MAP: MixDefinition[] = [
    {
        mixWith: 'white',
        value: 15,
        intensity: '50',
    },
    {
        mixWith: 'white',
        value: 30,
        intensity: '100',
    },
    {
        mixWith: 'white',
        value: 50,
        intensity: '200',
    },
    {
        mixWith: 'white',
        value: 70,
        intensity: '300',
    },
    {
        mixWith: 'white',
        value: 85,
        intensity: '400',
    },
    {
        mixWith: 'white',
        value: 100,
        intensity: '500',
    },
    {
        mixWith: 'black',
        value: 85,
        intensity: '600',
    },
    {
        mixWith: 'black',
        value: 70,
        intensity: '700',
    },
    {
        mixWith: 'black',
        value: 50,
        intensity: '800',
    },
    {
        mixWith: 'black',
        value: 40,
        intensity: '900',
    },
];

const ACCENT_MAP: AccentDefinition[] = [
    {
        value: 45,
        intensity: 'A100',
    },
    {
        value: 30,
        intensity: 'A200',
    },
    {
        value: 15,
        intensity: 'A400',
    },
    {
        value: 5,
        intensity: 'A700',
    },
];

export class EnhancedMaterialPaletteColor extends PaletteColor {
    public get palette(): PaletteColor[] {
        const mainPalette: PaletteColor[] = INTENSITY_MAP
            .map(intensityDefintion =>
                new EnhancedMaterialPaletteColor(
                    tinycolor(intensityDefintion.mixWith)
                        .mix(
                            this._color,
                            intensityDefintion.value,
                        ).toHexString(),
                    intensityDefintion.intensity,
                ),
            );

        const accentPalette: EnhancedMaterialPaletteColor[] = ACCENT_MAP
            .map(accentDefinition =>
                new EnhancedMaterialPaletteColor(
                    this._color
                        .lighten(accentDefinition.value / 2)
                        .saturate(accentDefinition.value)
                        .toHexString(),
                    accentDefinition.intensity,
                ),
            );


        return [
            ...mainPalette,
            ...accentPalette,
        ];
    }
}