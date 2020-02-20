import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'sqrt' })
export class SqrtPipe implements PipeTransform {
    transform(value: number, exponent?: number): number {
        return value ? Math.sqrt(value) : 0;
    }
}
