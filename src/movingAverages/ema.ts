import Decimal from 'decimal.js';
import {add, completeArray, div, mul, sub} from 'ramda-decimal.js';
import { slice} from "ramda";

export const ema = (source: Decimal.Value[], period: number): Decimal[] => {
    const length: number = source.length;
    if (isNaN(period) || length < period) return [];
    const exponent: Decimal = div(2, add(period, 1));
    const firstAvg: Decimal = div(Decimal.sum(...slice(0, period, source)), period);


    const result: Decimal[] = [];
    result.push(firstAvg);
    for (let i = period; i<length; i++) {
        const prevEma: Decimal = result.length > 0? result[result.length - 1]: new Decimal(0);
        result.push(add(mul(sub(source[i], prevEma), exponent), prevEma));
    }

    return completeArray(length, result);
}