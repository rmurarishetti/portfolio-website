import { parseDate } from "./parseDate";

export function isDateInRange(startDate, endDate, query) {
    // Parse input dates
    const start = new Date(startDate);
    const end = new Date(endDate);

    // Check if the query starts with an apostrophe followed by digits (or no digits)
    const apostrophePattern = /^'(\d*)/;
    const apostropheMatch = query.match(apostrophePattern);

    // Check if the query starts with digits
    const digitsPattern = /^\d+/;
    const digitsMatch = query.match(digitsPattern);

    const startYear = start.getFullYear();
    const endYear = end.getFullYear();

    if (apostropheMatch) {
        const queryDigits = apostropheMatch[1];
        const queryNumber = queryDigits.length > 0 ? parseInt('20' + queryDigits, 10) : 20;

        for (let year = startYear; year <= endYear; year++) {
            if (year.toString().startsWith(queryNumber.toString())) {
                return true;
            }
        }
    } else if (digitsMatch) {
        const queryNumber = parseInt(digitsMatch[0], 10);

        for (let year = startYear; year <= endYear; year++) {
            if (year.toString().startsWith(queryNumber.toString())) {
                return true;
            }
        }
    }

    // Parse query date
    const queryDate = parseDate(query);

    // Validate query date
    if (!queryDate || isNaN(queryDate)) {
        return false;
    }

    // Check if the query date is within the range
    return queryDate >= start && queryDate <= end;
}