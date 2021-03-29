import type { TimeDiffType } from './logic/getTimeDiff';

import TimeDiffView from './TimeDiffView/TimeDiffView';

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
                    <div className="main__counter__dates">{PastTimeDiff ? <TimeDiffView timeDiff={PastTimeDiff} /> : null}</div>
                </div>
                <div className="main__counter main__counter--left">
                    <div className="main__counter__head">осталось сидеть</div>
                    <div className="main__counter__dates">{LeftTimeDiff ? <TimeDiffView timeDiff={LeftTimeDiff} /> : null}</div>
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
