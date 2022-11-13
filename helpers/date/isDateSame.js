export const isDateSame = (dateA, dateB = new Date()) => {
    if (!dateA || !dateB) {
        return false
    }
    if (dateA.getYear() === dateB.getYear()) {
        if (dateA.getMonth() === dateB.getMonth()) {
            if (dateA.getDay() === dateB.getDay()) {
                return true
            }
            return false
        }
        return false
    }
    return false
}