import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'percentageRoundOf' })
export class PercentageRoundOfPipe implements PipeTransform {
    transform(value: number): number {
        let rounded = Math.round(value * 10) / 10;
        return rounded;
    }
}
