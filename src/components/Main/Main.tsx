import numberDeclension from './logic/numberDeclension';
import type { TimeDiffType } from './logic/getTimeDiff';

import './Main.scss';

type PropsType = {
    PastTimeDiff: TimeDiffType | undefined;
    LeftTimeDiff: TimeDiffType | undefined;
};

const Main: React.FC<PropsType> = props => {
    const { PastTimeDiff, LeftTimeDiff } = props;

    return (
        <div className="main">
            <div aria-hidden="true"></div>
            <div className="main__counters">
                <div className="main__counter">
                    <div className="main__counter__head">Алексей Навальный сидит уже</div>
                    <div className="main__counter__dates">
                        {PastTimeDiff ? (
                            <>
                                <div hidden={PastTimeDiff.years === 0}>
                                    <span>{PastTimeDiff.years}</span>
                                    <span>{numberDeclension(PastTimeDiff.years, ['год', 'года', 'лет'], true)}</span>
                                </div>

                                <div hidden={PastTimeDiff.months === 0}>
                                    <span>{PastTimeDiff.months}</span>
                                    <span>{numberDeclension(PastTimeDiff.months, ['месяц', 'месяца', 'месяцев'], true)}</span>
                                </div>

                                <div hidden={PastTimeDiff.days === 0}>
                                    <span>{PastTimeDiff.days}</span>
                                    <span>{numberDeclension(PastTimeDiff.days, ['день', 'дня', 'дней'], true)}</span>
                                </div>

                                <div>
                                    <span>{PastTimeDiff.hours}</span>
                                    <span>{numberDeclension(PastTimeDiff.hours, ['час', 'часа', 'часов'], true)}</span>
                                </div>

                                <div>
                                    <span>{PastTimeDiff.minutes}</span>
                                    <span>{numberDeclension(PastTimeDiff.minutes, ['минута', 'минуты', 'минут'], true)}</span>
                                </div>

                                <div>
                                    <span>{PastTimeDiff.seconds}</span>
                                    <span>{numberDeclension(PastTimeDiff.seconds, ['секунда', 'секунды', 'секунд'], true)}</span>
                                </div>
                            </>
                        ) : null}
                    </div>
                </div>
                <div className="main__counter main__counter--left">
                    <div className="main__counter__head">осталось сидеть</div>
                    <div className="main__counter__dates">
                        {LeftTimeDiff ? (
                            <>
                                <div hidden={LeftTimeDiff.years === 0}>
                                    <span>{LeftTimeDiff.years}</span>
                                    <span>{numberDeclension(LeftTimeDiff.years, ['год', 'года', 'лет'], true)}</span>
                                </div>

                                <div hidden={LeftTimeDiff.months === 0}>
                                    <span>{LeftTimeDiff.months}</span>
                                    <span>{numberDeclension(LeftTimeDiff.months, ['месяц', 'месяца', 'месяцев'], true)}</span>
                                </div>

                                <div hidden={LeftTimeDiff.days === 0}>
                                    <span>{LeftTimeDiff.days}</span>
                                    <span>{numberDeclension(LeftTimeDiff.days, ['день', 'дня', 'дней'], true)}</span>
                                </div>

                                <div>
                                    <span>{LeftTimeDiff.hours}</span>
                                    <span>{numberDeclension(LeftTimeDiff.hours, ['час', 'часа', 'часов'], true)}</span>
                                </div>

                                <div>
                                    <span>{LeftTimeDiff.minutes}</span>
                                    <span>{numberDeclension(LeftTimeDiff.minutes, ['минута', 'минуты', 'минут'], true)}</span>
                                </div>

                                <div>
                                    <span>{LeftTimeDiff.seconds}</span>
                                    <span>{numberDeclension(LeftTimeDiff.seconds, ['секунда', 'секунды', 'секунд'], true)}</span>
                                </div>
                            </>
                        ) : null}
                    </div>
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
