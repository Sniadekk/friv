import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Homepage } from "./homepage";

export const Router = (): JSX.Element => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Homepage} />
    </Switch>
  </BrowserRouter>
);
