export const formatDuration = (start, end = new Date()) => {
    const ms = Math.floor(end.getTime() - start.getTime());
    if (ms < 0) ms = -ms;
    const time = {
        yr: Math.floor(ms / 31536000000),
        mo: Math.floor(ms / 2592000000) % 12
    };
    return Object.entries(time)
        .filter(val => val[1] !== 0)
        .map(([key, val]) => `${val} ${key}${val !== 1 ? 's' : ''}`)
        .join(' ');
};
