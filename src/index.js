import React from 'react';
import ReactDOM from 'react-dom';
import Root  from './Root';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { Store } from './redux/store'
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <Provider store={Store}>  
        <BrowserRouter>
            <Root />
          </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root')
);
reportWebVitals();
