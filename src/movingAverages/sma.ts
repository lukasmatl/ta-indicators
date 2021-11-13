import Decimal from 'decimal.js';
import {completeArray, div} from 'ramda-decimal.js';
import { slice} from 'ramda';

export const sma = (source: Decimal.Value[], period: number): Decimal[] => {
    const length: number = source.length;
    if (isNaN(period) || length < period) return [];

    const result: Decimal[] = [];
    for (let i = period; i<=length; i++) {
        result.push(div(Decimal.sum(...slice(i-period, i, source)), period));
    }

    return completeArray(length, result);
}