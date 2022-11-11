import { formatDuration } from "../../../helpers/format";

function DateDiv({ start = new Date(), end = null, duration = true, longDate = false }) {
    const dateOptions = { year: longDate ? 'numeric' : '2-digit', month: 'short' };
    let startStr = start.toLocaleDateString("en-US", dateOptions);
    let endStr = end ? end.toLocaleDateString("en-US", dateOptions) : '';
    const joiner = end ? ' - ' : '';
    const diff = end ? formatDuration(start, end) : null;
    const durationStr = diff ? ` · ${diff}` : '';

    if (!longDate) {
        startStr = startStr.replace(/\s/g, " '")
        endStr = endStr.replace(/\s/g, " '")
    }


    return (
        <div>{startStr}{joiner}{endStr}{durationStr}</div>
    );
}

export default DateDiv;