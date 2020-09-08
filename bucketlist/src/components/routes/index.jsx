import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../../pages/login';
import SignUp from '../../pages/signup';
import withAuthorization from '../withAuthorization';
import withLayout from '../withLayout';
import Home from '../../pages/home';
import OpenTask from '../../pages/openTask';

const LoginWithLayout = withLayout(Login);
const HomeWithLayout = withLayout(Home);
const HomeWithAuth = withAuthorization(HomeWithLayout);
const OpenTaskWithLayout = withLayout(OpenTask);
const OpenTaskWithAuth = withAuthorization(OpenTaskWithLayout);

export default function Routes() {
  return (
    <Switch>
      <Route path='/login' exact component={LoginWithLayout} />
      <Route path='/signUp' exact component={SignUp} />
      <Route path='/home' exact component={HomeWithAuth} />
      <Route exact path='/'>
        <Redirect to='/home' />
      </Route>
      <Route path='/openTask/:taskID' exact component={OpenTaskWithAuth} />
    </Switch>
  );
}
