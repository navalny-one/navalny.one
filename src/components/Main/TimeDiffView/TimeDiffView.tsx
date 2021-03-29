import numberDeclension from '../logic/numberDeclension';
import type { TimeDiffType } from '../logic/getTimeDiff';

type PropsType = {
    timeDiff: TimeDiffType;
};

const TimeDiffView: React.FC<PropsType> = ({ timeDiff }) => (
    <>
        <div hidden={timeDiff.years === 0}>
            <span>{timeDiff.years}</span>
            <span>{numberDeclension(timeDiff.years, ['год', 'года', 'лет'], true)}</span>
        </div>

        <div hidden={timeDiff.months === 0}>
            <span>{timeDiff.months}</span>
            <span>{numberDeclension(timeDiff.months, ['месяц', 'месяца', 'месяцев'], true)}</span>
        </div>

        <div hidden={timeDiff.days === 0}>
            <span>{timeDiff.days}</span>
            <span>{numberDeclension(timeDiff.days, ['день', 'дня', 'дней'], true)}</span>
        </div>

        <div>
            <span>{timeDiff.hours}</span>
            <span>{numberDeclension(timeDiff.hours, ['час', 'часа', 'часов'], true)}</span>
        </div>

        <div>
            <span>{timeDiff.minutes}</span>
            <span>{numberDeclension(timeDiff.minutes, ['минута', 'минуты', 'минут'], true)}</span>
        </div>

        <div>
            <span>{timeDiff.seconds}</span>
            <span>{numberDeclension(timeDiff.seconds, ['секунда', 'секунды', 'секунд'], true)}</span>
        </div>
    </>
);

export default TimeDiffView;
