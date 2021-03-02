import numberDeclension from './logic/numberDeclension';
import type { TimeDiffType } from './logic/getTimeDiff';

import './Main.scss';

type PropsType = {
    TimeDiff: TimeDiffType | undefined;
};

const Main: React.FC<PropsType> = props => {
    const { TimeDiff } = props;

    return (
        <div className="main">
            <div aria-hidden="true"></div>
            <div className="main__counter">
                <div className="main__counter__head">Алексею Навальному осталось сидеть</div>
                <div className="main__counter__dates">
                    {TimeDiff ? (
                        <>
                            <div hidden={TimeDiff.years === 0}>
                                <span>{TimeDiff.years}</span>
                                <span>{numberDeclension(TimeDiff.years, ['год', 'года', 'лет'], true)}</span>
                            </div>

                            <div hidden={TimeDiff.months === 0}>
                                <span>{TimeDiff.months}</span>
                                <span>{numberDeclension(TimeDiff.months, ['месяц', 'месяца', 'месяцев'], true)}</span>
                            </div>

                            <div hidden={TimeDiff.days === 0}>
                                <span>{TimeDiff.days}</span>
                                <span>{numberDeclension(TimeDiff.days, ['день', 'дня', 'дней'], true)}</span>
                            </div>

                            <div>
                                <span>{TimeDiff.hours}</span>
                                <span>{numberDeclension(TimeDiff.hours, ['час', 'часа', 'часов'], true)}</span>
                            </div>

                            <div>
                                <span>{TimeDiff.minutes}</span>
                                <span>{numberDeclension(TimeDiff.minutes, ['минута', 'минуты', 'минут'], true)}</span>
                            </div>

                            <div>
                                <span>{TimeDiff.seconds}</span>
                                <span>{numberDeclension(TimeDiff.seconds, ['секунда', 'секунды', 'секунд'], true)}</span>
                            </div>
                        </>
                    ) : null}
                </div>
            </div>
            <div className="main__link">
                <a href="https://github.com/navalny-one" target="_blank" rel="nofollow noopener noreferrer">
                    <img src="https://github.githubassets.com/favicons/favicon.png" alt="github logo" />
                    <span>github</span>
                </a>
            </div>
        </div>
    );
};

export default Main;
