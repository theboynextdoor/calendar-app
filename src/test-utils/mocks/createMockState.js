export function createMockDays() {
    return {
        "2018-10-01": {
            date: '2018-10-01',
            reminders: ['d123', 'd124']
        },
        "2018-10-02": {
            date: '2018-10-02',
            reminders: []
        },
        "2018-10-03": {
            date: '2018-10-03',
            reminders: ['d122']
        }
    };
}

export function createMockReminders() {
    return {
        "d122": {
            id: 'd122',
            title: 'Interview',
            date: '2018-10-03',
            time: '12:30:00',
            color: 'BLUE'
        },
        "d123": {
            id: 'd123',
            title: 'This is a title',
            date: '2018-10-01',
            time: '12:30:00',
            color: 'BLUE'
        },
        "d124": {
            id: 'd124',
            title: 'This is a new item',
            date: '2018-10-01',
            time: '1:00:00',
            color: 'RED'
        }
    };
}

export function createMockExpansionFilter() {
    return {
        expansionFilter: 'BY_MONTH'  
    };
}

export default function createMockState() {
    return {
        expansionFilter: 'BY_MONTH',
        days: {
            "2018-10-01": {
                date: '2018-10-01',
                reminders: ['d123', 'd124']
            },
            "2018-10-02": {
                date: '2018-10-02',
                reminders: []
            },
            "2018-10-03": {
                date: '2018-10-03',
                reminders: ['d122']
            }
        },
        reminders: {
            "d122": {
                id: 'd122',
                title: 'Interview',
                date: '2018-10-03',
                time: '12:30:00',
                color: 'BLUE'
            },
            "d123": {
                id: 'd123',
                title: 'This is a title',
                date: '2018-10-01',
                time: '12:30:00',
                color: 'BLUE'
            },
            "d124": {
                id: 'd124',
                title: 'This is a new item',
                date: '2018-10-01',
                time: '1:00:00',
                color: 'RED'
            },
        }
    };
}