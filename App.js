import React from 'react';
import {StoreProvider} from './store/store';
import ChildComponent from './ChildComponent';

function App() {
    return (
        <StoreProvider>
            <ChildComponent/>
        </StoreProvider>
    );
}
export default App;
