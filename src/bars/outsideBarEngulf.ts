import {OHLCV} from "../types";

export const outsideBarEngulf = (ohlcv: OHLCV) => {
    const {low, high, close, open} = ohlcv;
    const length = low.length;
    if (length < 3) return [];

    const results = [];

    for (let i=1;  i < length; i++) {
        const bullishCond = close[i].gt(open[i]) && close[i].gt(high[i-1]) && low[i].lt(low[i-1]);
        const bearishCond = close[i].lt(open[i]) && close[i].lt(low[i-1]) && high[i].gt( high[i-1]);
        results.push({bullishCond, bearishCond});
    }

    return results;
};
