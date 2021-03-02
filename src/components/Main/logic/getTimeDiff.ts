export type TimeDiffType = {
    years: number;
    months: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

const getTimeDiff = (startTime: string, endTime: string): TimeDiffType => {
    const TimeDelta = Math.round((new Date(endTime).getTime() - new Date(startTime).getTime()) / 1000);

    const SecondsInMinute = 60;
    const SecondsInHour = SecondsInMinute * 60;
    const SecondsInDay = SecondsInHour * 24;
    const SecondsInMonth = SecondsInDay * (365 / 12);
    const SecondsInYear = SecondsInMonth * 12;

    const Years = Math.floor(TimeDelta / SecondsInYear);
    const Months = Math.floor((TimeDelta - SecondsInYear * Years) / SecondsInMonth);
    const Days = Math.floor((TimeDelta - SecondsInYear * Years - SecondsInMonth * Months) / SecondsInDay);

    // https://stackoverflow.com/a/8211778

    const Hours = Math.floor(((TimeDelta % SecondsInYear) % SecondsInDay) / SecondsInHour);
    const Minutes = Math.floor((((TimeDelta % SecondsInYear) % SecondsInDay) % SecondsInHour) / SecondsInMinute);
    const Seconds = (((TimeDelta % SecondsInYear) % SecondsInDay) % SecondsInHour) % SecondsInMinute;

    return {
        years: Years,
        months: Months,
        days: Days,
        hours: Hours,
        minutes: Minutes,
        seconds: Seconds,
    };
};

export default getTimeDiff;
