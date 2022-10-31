import { formatDuration } from "../../../helpers/format";

function DateDiv({ start = new Date(), end = null, duration = true }) {
    const dateOptions = { year: '2-digit', month: 'short' };
    const startStr = start.toLocaleDateString("en-US", dateOptions);
    const endStr = end ? ` - ${end.toLocaleDateString("en-US", dateOptions)}` : '';
    const diff = end ? formatDuration(start, end) : null;
    const durationStr = diff ? ` · ${diff}` : '';


    return (
        <div>{startStr}{endStr}{durationStr}</div>
    );
}

export default DateDiv;