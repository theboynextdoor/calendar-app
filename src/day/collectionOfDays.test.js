import { assert } from 'chai';
import format from 'date-fns/format';
import eachDay from 'date-fns/each_day';
import collectionOfDays from './collectionOfDays.js'; 

describe('collectionOfDays(startDate, endDate)', () => {
    var startDate; 
    var endDate; 

    beforeEach(() => {
        startDate = "09-01-2018"; 
        endDate = "09-30-2018";
    });

    test('should return a list of days', () => {
        var september = collectionOfDays(startDate, endDate);
        console.log(september);
        assert.lengthOf(september, 30);
    });

});