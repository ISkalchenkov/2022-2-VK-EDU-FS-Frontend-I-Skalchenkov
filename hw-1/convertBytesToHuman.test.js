/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

import convertBytesToHuman from './convertBytesToHuman';

test('Возвращает false для неправильного типа данных', () => {
    expect(convertBytesToHuman(null)).toBe(false);
    expect(convertBytesToHuman(undefined)).toBe(false);
    expect(convertBytesToHuman(true)).toBe(false);
    expect(convertBytesToHuman(1000n)).toBe(false);
    expect(convertBytesToHuman("string")).toBe(false);
    expect(convertBytesToHuman(Symbol())).toBe(false);
    expect(convertBytesToHuman(function(){})).toBe(false);
});

test('Возвращает false для дробного числа', () => {
    expect(convertBytesToHuman(0.1)).toBe(false);
    expect(convertBytesToHuman(1.5)).toBe(false);
    expect(convertBytesToHuman(128.999)).toBe(false);
});

test('Возвращает false для отрицательного числа', () => {
    expect(convertBytesToHuman(-1)).toBe(false);
    expect(convertBytesToHuman(-1024)).toBe(false);
    expect(convertBytesToHuman(-2048)).toBe(false);
    expect(convertBytesToHuman(-4096.5)).toBe(false);
});

test('Возвращает корректное значение без дробной части', () => {
    const METRIC_PRIFIX = {
        0 :  "B",
        1 : "KB",
        2 : "MB",
        3 : "GB",
        4 : "TB",
        5 : "PB",
        6 : "EB",
        7 : "ZB",
        8 : "YB"
    };

    expect(convertBytesToHuman(0)).toBe("0 B");
    for (const n in METRIC_PRIFIX) {
        expect(convertBytesToHuman(Math.pow(1024, n))).toBe(`1 ${METRIC_PRIFIX[n]}`);
    }
});

test('Возвращает корректное значение с дробной частью', () => {
    expect(convertBytesToHuman(10000)).toBe("9.77 KB");
    expect(convertBytesToHuman(10000000)).toBe("9.54 MB");
    expect(convertBytesToHuman(10000000000)).toBe("9.31 GB");
    expect(convertBytesToHuman(10000000000000)).toBe("9.09 TB");
    expect(convertBytesToHuman(10000000000000000)).toBe("8.88 PB");
});
