import React from 'react';

import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import Account from "./main/Home";
import Home from "./main/Home";
import HistoryPaths from "../enums/HistoryPaths";
import AuthorizationNew from "./main/auth/MainAuthorization";
import OAuth from "./main/auth/OAuth";

const AppRouter = (props) => {
    const { history } = props
    return (
          <Switch history={history}>
              <Route path={HistoryPaths.Home} component={Home} />
              <Route path={HistoryPaths.Registration} component={AuthorizationNew} />
              <Route path={HistoryPaths.Auth} component={AuthorizationNew} />
              <Route path={HistoryPaths.Account} component={Account} />
              <Route path={HistoryPaths.OAuth} component={OAuth} />
            <Redirect from={'/'} to={HistoryPaths.Home}/>
          </Switch>
    );
}

export default withRouter(AppRouter);