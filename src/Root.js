import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import { PredictionContainer } from './app/pages/predicion/PredictionContainer'
import { createBrowserHistory } from 'history';

const alertOptions = {
    timeout: 3000,
    position: 'top center',
  };


export default class Root extends Component {
    render() {
        return (
            <AlertProvider template={AlertTemplate} {...alertOptions}>
            <Router history={createBrowserHistory()}>
              <Fragment>
                  <Switch>
                    <Route exact path="/" component={PredictionContainer} />
                    {/* <Route path="/login" component={LoginContainer} /> */}
                  </Switch>
              </Fragment>
            </Router>
          </AlertProvider>
        )
    }
}
