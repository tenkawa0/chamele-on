import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import Home from './atomic_components/environments/Home';

import paths from './paths';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="container">
      <Switch>
        <Route path={paths.home} component={Home} />
        <Redirect to={paths.home} />;
      </Switch>
    </div>
  );
};

export default App;
