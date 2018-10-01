import { assert } from 'chai';
import format from 'date-fns/format';
import reminder from './index.js'; 

describe('reminder()', () => {
    test('should return a reminder object', () => {
        var expect = {
            title: 'This is a title',
            date: '2018-09-02',
            time: '12:30:00'
        };
        var actual = reminder('This is a title', '2018-09-02', '12:30:00');

        assert.strictEqual(actual.title, expect.title);
    })
});