import React from "react";
//import { useSelector } from 'react-redux';

import { Route, Switch, BrowserRouter } from "react-router-dom";
import { userSlice } from "../store/slices/index";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {userSlice.map((item, index) => (
          <Route key={index} path={item.route} component={item.component} />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
