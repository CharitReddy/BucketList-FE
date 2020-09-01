import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../../pages/login';
import SignUp from '../../pages/signup';
// import withAuthorization from '../withAuthorization';
import WithLayout from '../withLayout';

const LoginWithLayout = WithLayout(Login);

// const LoginWithAuthorization = withAuthorization(Login);
// const LoginWithLayout = WithLayout(LoginWithAuthorization);
export default function Routes() {
  return (
    <Switch>
      <Route path='/login' exact component={LoginWithLayout} />
      <Route path='/signUp' exact component={SignUp} />
    </Switch>
  );
}
