import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../../pages/login';
import SignUp from '../../pages/signup';
import withAuthorization from '../withAuthorization';
import withLayout from '../withLayout';
import Home from '../../pages/home';
import OpenTask from '../../pages/openTask';
import AddTask from '../../pages/addTask';
import UserProfile from '../../pages/userProfile';
import AddExperience from '../../pages/addExperience';

const HomeWithLayout = withLayout(Home);
const HomeWithAuth = withAuthorization(HomeWithLayout);
const OpenTaskWithLayout = withLayout(OpenTask);
const OpenTaskWithAuth = withAuthorization(OpenTaskWithLayout);
const AddTaskWithLayout = withLayout(AddTask);
const AddTaskWithAuth = withAuthorization(AddTaskWithLayout);
const UserProfileWithLayout = withLayout(UserProfile);
const UserProfileWithAuth = withAuthorization(UserProfileWithLayout);
const AddExperienceWithLayout = withLayout(AddExperience);
const AddExperienceWithAuth = withAuthorization(AddExperienceWithLayout);

export default function Routes() {
  return (
    <Switch>
      <Route path='/login' exact component={Login} />
      <Route path='/signUp' exact component={SignUp} />
      <Route path='/profile' exact component={UserProfileWithAuth} />
      <Route path='/home' exact component={HomeWithAuth} />
      <Route path='/addTask' exact component={AddTaskWithAuth} />
      <Route path='/addExperience' exact component={AddExperienceWithAuth} />
      <Route exact path='/'>
        <Redirect to='/home' />
      </Route>
      <Route path='/openTask/:taskID' exact component={OpenTaskWithAuth} />
    </Switch>
  );
}
