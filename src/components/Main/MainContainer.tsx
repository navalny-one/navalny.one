import { useEffect, useState } from 'react';

import getTimeDiff from './logic/getTimeDiff';
import type { TimeDiffType } from './logic/getTimeDiff';

import Main from './Main';

const MainContainer: React.FC = () => {
    const [PastTimeDiff, setPastTimeDiff] = useState<TimeDiffType | undefined>();
    const [LeftTimeDiff, setLeftTimeDiff] = useState<TimeDiffType | undefined>();

    useEffect(() => {
        // считаем от этого события https://zona.media/online/2021/01/18/navapolice#38248
        // условная дата - 18 января 2021, 16:50 МСК
        const StartDate = '2021-01-18T13:00:00.000Z';

        // TODO: уточнить дату
        // // 2 августа 2023 года
        const EndDate = '2023-08-01T19:00:00.000Z';

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
