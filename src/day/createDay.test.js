import { assert } from 'chai';
import format from 'date-fns/format';
import createDay from './index.js'; 

describe('createDay(date)', () => {
    test('should create a day object', () => {
        var now = new Date(); 
        var expected = createDay(now);

        var actual = {
            date: format(now, 'YYYY-MM-DD'),
            reminders: []
        };

        assert.strictEqual(actual.date, expected.date);
    });

    test('should have an empty reminder array', () => {
        var expected = createDay(new Date());

        assert.lengthOf(expected.reminders, 0);
    });
});