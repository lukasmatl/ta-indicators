import {OHLCV} from "../types";

export const doubleInsideBar = (ohlcv: OHLCV) => {
    const {low, high, volume} = ohlcv;
    const length = low.length;
    if (length < 3) return [];

    const results = [];

    for (let i=2;  i < length; i++) {
        const cond1 = high[i-2].gte(high[i-1])  && low[i-2].lte(low[i-1]);
        const cond2 = high[i-1].gte(high[i]) && low[i-1].lte(low[i]);

        const volumeCond = volume[i-2].gt(volume[i-1]) && volume[i-1].gt(volume[i]);

        const isCond = cond1 && cond2 && volumeCond;
        const rangeHigh = isCond? high[i-1]: null;
        const rangeLow = isCond? low[i-1]: null;
        results.push({isCond, rangeHigh, rangeLow});
    }

    return results;
};
