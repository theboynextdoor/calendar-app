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

export function getState() {
    let s = { 
        days: {
        '2018-11-01': {
          date: '2018-11-01',
          reminders: [
            'r-jnyr7zyo'
          ]
        },
        '2018-11-02': {
          date: '2018-11-02',
          reminders: []
        },
        '2018-11-03': {
          date: '2018-11-03',
          reminders: []
        },
        '2018-11-04': {
          date: '2018-11-04',
          reminders: []
        },
        '2018-11-05': {
          date: '2018-11-05',
          reminders: []
        },
        '2018-11-06': {
          date: '2018-11-06',
          reminders: []
        },
        '2018-11-07': {
          date: '2018-11-07',
          reminders: []
        },
        '2018-11-08': {
          date: '2018-11-08',
          reminders: []
        },
        '2018-11-09': {
          date: '2018-11-09',
          reminders: []
        },
        '2018-11-10': {
          date: '2018-11-10',
          reminders: []
        },
        '2018-11-11': {
          date: '2018-11-11',
          reminders: []
        },
        '2018-11-12': {
          date: '2018-11-12',
          reminders: []
        },
        '2018-11-13': {
          date: '2018-11-13',
          reminders: []
        },
        '2018-11-14': {
          date: '2018-11-14',
          reminders: []
        },
        '2018-11-15': {
          date: '2018-11-15',
          reminders: []
        },
        '2018-11-16': {
          date: '2018-11-16',
          reminders: []
        },
        '2018-11-17': {
          date: '2018-11-17',
          reminders: []
        },
        '2018-11-18': {
          date: '2018-11-18',
          reminders: []
        },
        '2018-11-19': {
          date: '2018-11-19',
          reminders: []
        },
        '2018-11-20': {
          date: '2018-11-20',
          reminders: []
        },
        '2018-11-21': {
          date: '2018-11-21',
          reminders: []
        },
        '2018-11-22': {
          date: '2018-11-22',
          reminders: []
        },
        '2018-11-23': {
          date: '2018-11-23',
          reminders: []
        },
        '2018-11-24': {
          date: '2018-11-24',
          reminders: []
        },
        '2018-11-25': {
          date: '2018-11-25',
          reminders: []
        },
        '2018-11-26': {
          date: '2018-11-26',
          reminders: []
        },
        '2018-11-27': {
          date: '2018-11-27',
          reminders: []
        },
        '2018-11-28': {
          date: '2018-11-28',
          reminders: []
        },
        '2018-11-29': {
          date: '2018-11-29',
          reminders: []
        },
        '2018-11-30': {
          date: '2018-11-30',
          reminders: []
        }
      },
      reminders: {
        'r-jnyr7zyo': {
          title: 'fsfsafas',
          date: '2018-11-12',
          startTime: '2018-11-12T00:00:00.000-06:00',
          endTime: '2018-11-12T11:08:00.000-06:00',
          color: {
            hex: '#8f9779',
            name: 'Sage'
          },
          id: 'r-jnyr7zyo'
        }
      }
    }; 
    
    return s; 
}