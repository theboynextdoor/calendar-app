import format from 'date-fns/format';


// Converts the date to 'MMMM GGGG' string format
function formatToMonthYear(date) {
    return format(date, 'MMMM GGGG')
}

export default formatToMonthYear; 