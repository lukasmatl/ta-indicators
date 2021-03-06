import Decimal from 'decimal.js';
import {ema} from '../ema';

const testSrc: number[] = [22.27,22.19,22.08,22.17,22.18,22.13,22.23,22.43,22.24,22.29,22.15,22.39,22.38,22.61,23.36,24.05,23.75,23.83,23.95,
    23.63,23.82,23.87,23.65,23.19,23.10,23.33,22.68,23.10,22.40,22.17
];

const expectedResult: string[] = ['0','0','0','0','0','0','0','0','0','22.22','22.21','22.24','22.27','22.33','22.52','22.8','22.97','23.13','23.28','23.34','23.43','23.51',
    '23.54','23.48','23.41','23.4','23.27','23.24','23.09','22.92'
];


test('ema', () => {
    Decimal.set({precision: 4})
    const result: any = ema(testSrc, 10);
    for (let i=0; i<result.length; i++) {
        expect(result[i].toString()).toBe(expectedResult[i]);
    }
});


