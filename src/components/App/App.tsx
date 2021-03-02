import { lazy as lazyComponentImport, Suspense as ReactSuspense } from 'react';

import './App.scss';

const Main = lazyComponentImport(() => import('../Main/MainContainer'));

const App: React.FC = () => {
    return (
        <div className="app">
            <ReactSuspense fallback={<>загрузка...</>}>
                <Main />
            </ReactSuspense>
        </div>
    );
};

export default App;
