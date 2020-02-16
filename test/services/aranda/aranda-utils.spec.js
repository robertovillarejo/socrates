const { fromFieldValueFormat, toFieldValueFormat } = require('@/services/aranda/aranda-utils');

const obj = { a: 'a', b: 'b' };
const formatoFieldValue = [
    {
        Field: 'a',
        Value: 'a'
    },
    {
        Field: 'b',
        Value: 'b'
    }
];

describe('Aranda Utils', () => {

    it('transforma nulo a formato field-value', () => {
        expect(toFieldValueFormat(null)).toBeNull();
    });

    it('transforma objeto a formato field-value', () => {
        expect(toFieldValueFormat(obj)).toEqual(formatoFieldValue);
    });

    it('transforma nulo de formato field-value a objeto', () => {
        expect(fromFieldValueFormat(null)).toBeNull();
    });

    it('transforma objeto en formato field-value a objeto', () => {
        expect(fromFieldValueFormat(formatoFieldValue)).toEqual(obj);
    })

});