import Decimal from 'decimal.js';

export type OHLCV = {
    open: Decimal[],
    high: Decimal[],
    low: Decimal[],
    close: Decimal[],
    volume: Decimal[],
}