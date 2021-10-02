import React from 'react';
import ReactDOM from 'react-dom';
import StylesProvider from '@material-ui/styles/StylesProvider'
import reportWebVitals from './reportWebVitals';
import {createBrowserHistory} from 'history'
import {BrowserRouter, Router} from "react-router-dom";
import App from "./components/app/App";

const history = createBrowserHistory()

ReactDOM.render(
    <BrowserRouter history={history}>
        <StylesProvider injectFirst>
            <App/>
        </StylesProvider>
    </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
