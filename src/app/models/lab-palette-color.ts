import { PaletteColor } from './palette-color';
import * as chroma from 'chroma-js';
import range from 'lodash-es/range';

const RANGE = 10;
export class LabPaletteColor extends PaletteColor {
    public get palette(): LabPaletteColor[] {
        const [l, a, b] = chroma(this.hex).lab();

        const max = 100 * (0.95 - 1 / RANGE);
        const step = max / (RANGE - 1);
        const min = (100 - max) * 0.5;

        const increments = range(min, min + RANGE * step, step)
            .reverse();

        let offset = Number.MAX_SAFE_INTEGER;

        increments.forEach(increment => {
            const difference = l - increment;
            if (Math.abs(difference) < Math.abs(offset)) {
                offset = difference;
            }
        });

        return increments.map(
            (increment, idx) => new LabPaletteColor(
                chroma.lab(increment + offset, a, b).hex(),
                (idx * 100 || 50).toString() as any,
            )
        );
    }
}