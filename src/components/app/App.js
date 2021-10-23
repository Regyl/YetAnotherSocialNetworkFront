import React from 'react';

import {Route, Switch, Redirect, withRouter} from "react-router-dom";
import MainPage from "../mainPage/MainPage";
import Registration from "../registration/Registration";
import Authorisation from "../authorisation/Authorisation";
import Account from "../lk/Account";
import HistoryPaths from "../../utils/HistoryPaths";

const App = (props) => {
    const { history } = props
    return (
          <Switch history={history}>
              <Route path={HistoryPaths.Home} component={MainPage} />
              <Route path={HistoryPaths.Registration} component={Registration} />
              <Route path={HistoryPaths.Auth} component={Authorisation} />
              <Route path={HistoryPaths.Account} component={Account} />
            <Redirect from='/' to={HistoryPaths.Home}/>
          </Switch>
    );
}

export default withRouter(App);
