import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/home';
import Sindicalizados from '../pages/sindicalizados';


function AppRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/sindicalizados" component={Sindicalizados}/>
    </Switch>
  );
}

export default AppRoutes;
