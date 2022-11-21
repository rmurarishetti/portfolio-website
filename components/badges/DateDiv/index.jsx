import { formatDuration } from "../../../helpers/format";
import { isDateSame } from "../../../helpers/date";

function DateDiv({ start = new Date(), end = null, duration = true, longDate = false, children }) {
    const dateOptions = { year: longDate ? 'numeric' : '2-digit', month: 'short' };
    let startStr = start.toLocaleDateString("en-US", dateOptions);
    let endStr = end && !isDateSame(end) ? end.toLocaleDateString("en-US", dateOptions) : '';
    const joiner = end ? ' - ' : '';
    const diff = end ? formatDuration(start, end) : null;
    const durationStr = diff ? ` · ${diff}` : '';

    if (isDateSame(end)) { endStr = 'Present' }

    if (!longDate) {
        startStr = startStr.replace(/\s/g, " '")
        endStr = endStr.replace(/\s/g, " '")
    }


    return (
        <div>{children} {startStr}{joiner}{endStr}{durationStr}</div>
    );
}

export default DateDiv;