import { lazy as lazyComponentImport, Suspense } from 'react';

const Main = lazyComponentImport(() => import('../Main/MainContainer'));

const App: React.FC = () => {
    return (
        <Suspense fallback={<>загрузка...</>}>
            <Main />
        </Suspense>
    );
};

export default App;
