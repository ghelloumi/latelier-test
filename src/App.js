import React from 'react';
import {Provider} from 'react-redux'

import configureStore from "./Redux/configureStore"
import {TEXTS} from "./utils/constants"

import './styles/App.scss';
import Routes from "./Routes";

const store = configureStore()

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <h3>{TEXTS.APP_TITLE}</h3>
                <Routes/>
            </div>
        </Provider>
    );
}

export default App
