import React from 'react';

import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import MainPage from "../main/IntroductionPage";
import Registration from "../auth/Registration";
import Authorization from "../auth/Authorization";
import Account from "../main/Home";
import HistoryPaths from "../../enums/HistoryPaths";

const App = (props) => {
    const { history } = props
    return (
          <Switch history={history}>
              <Route path={HistoryPaths.Home} component={MainPage} />
              <Route path={HistoryPaths.Registration} component={Registration} />
              <Route path={HistoryPaths.Auth} component={Authorization} />
              <Route path={HistoryPaths.Account} component={Account} />
            <Redirect from={'/'} to={HistoryPaths.Home}/>
          </Switch>
    );
}

export default withRouter(App);

//$env:NODE_OPTIONS = "--openssl-legacy-provider"