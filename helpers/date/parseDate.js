export function parseDate(dateString) {
    // Handle ISO 8601 format
    if (Date.parse(dateString)) {
        return new Date(dateString);
    }

    // Define month names
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    // Define regular expressions for date formats
    const datePatterns = [
        /^(?<year>\d{4})-(?<month>\d{1,2})-(?<day>\d{1,2})$/,
        /^(?<month>\d{1,2})\/(?<day>\d{1,2})\/(?<year>\d{4})$/,
        /^(?<day>\d{1,2})-(?<month>\d{1,2})-(?<year>\d{4})$/,
        new RegExp(`^(?<month>${monthNames.join('|')}) (?<day>\\d{1,2}), (?<year>\\d{4})$`),
        new RegExp(`^(?<day>\\d{1,2}) (?<month>${monthNames.join('|')}) (?<year>\\d{4})$`)
    ];

    // Iterate over date patterns and try to parse the date
    for (const pattern of datePatterns) {
        const match = dateString.match(pattern);

        if (match) {
            const { year, month, day } = match.groups;

            // Convert month name to index (0-based)
            const monthIndex = monthNames.indexOf(month) !== -1 ? monthNames.indexOf(month) : parseInt(month, 10) - 1;
            const parsedDate = new Date(parseInt(year, 10), monthIndex, parseInt(day, 10));

            // Validate parsed date
            if (!isNaN(parsedDate)) {
                return parsedDate;
            }
        }
    }

    // Return null if unable to parse the date
    return null;
}