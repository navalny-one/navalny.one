import { StrictMode as ReactStrictMode } from 'react';
import { render } from 'react-dom';

import App from './components/App/App';

render(
    <ReactStrictMode>
        <App />
    </ReactStrictMode>,
    document.getElementById('root')
);
