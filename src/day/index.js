import format from 'date-fns/format'

function createDay(date) {
    return {
        date: format(date, 'YYYY-MM-DD'),
        reminders: []
    };
}

export default createDay;