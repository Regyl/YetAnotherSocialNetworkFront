import React from 'react';
import ReactDOM from 'react-dom';
import StylesProvider from '@material-ui/styles/StylesProvider'
import reportWebVitals from './reportWebVitals';
import MainPage from "./components/mainPage/MainPage";



ReactDOM.render(
    <StylesProvider injectFirst>
        <MainPage/>
    </StylesProvider>,
  document.getElementById('root')
);

reportWebVitals();
