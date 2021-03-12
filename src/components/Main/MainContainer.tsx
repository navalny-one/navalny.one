import { useEffect, useState } from 'react';

import getTimeDiff from './logic/getTimeDiff';
import type { TimeDiffType } from './logic/getTimeDiff';

import Main from './Main';

const MainContainer: React.FC = () => {
    const StartDate = '2021-02-01T19:00:00Z'; // 2 февраля 2021 гоа
    const EndDate = '2023-08-01T19:00:00.000Z'; // 2 августа 2023 года

    const [PastTimeDiff, setPastTimeDiff] = useState<TimeDiffType | undefined>();
    const [LeftTimeDiff, setLeftTimeDiff] = useState<TimeDiffType | undefined>();

    useEffect(() => {
        const setter = () => {
            setPastTimeDiff(getTimeDiff(StartDate, new Date().toISOString()));
            setLeftTimeDiff(getTimeDiff(new Date().toISOString(), EndDate));
        };

        setter();

        const Timer = setInterval(() => setter(), 1000);

        return () => {
            clearInterval(Timer);
        };
    }, []);

    return <Main {...{ PastTimeDiff, LeftTimeDiff }} />;
};

export default MainContainer;
