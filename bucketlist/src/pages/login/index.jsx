import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import Input from '../../components/atoms/input';
import Form from '../../components/molecules/form';
import { USER_APIs } from '../../services/apiCalls';
import './login.scss';
import LOGIN_MESSAGES from './LOGIN_MESSAGES';
import setLocalStorage from '../../helpers/setLocalStorage';
import getUserToken from '../../helpers/getUserToken';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const userToken = getUserToken();

  useEffect(() => {
    if (userToken) history.push('/');
  });

  const userLogin = (event) => {
    event.preventDefault();
    const loginDetails = { email, password };
    USER_APIs.userLogin(loginDetails)
      .then((response) => {
        const setUserData = [
          {
            key: 'userID',
            value: response.data.user._id,
          },
          {
            key: 'userName',
            value: response.data.user.name,
          },
          {
            key: 'userToken',
            value: response.data.token,
          },
        ];
        setLocalStorage(setUserData);
        history.push('/home');
      })
      .catch((error) => {
        alert(error);
      });
  };

  const LOGIN_FIELDS = [
    {
      type: 'email',
      name: 'email',
      label: 'email',
      id: 'userLoginEmailField',
      value: email,
      onChange: (event) => setEmail(event.target.value),
    },
    {
      type: 'password',
      name: 'password',
      label: 'password',
      id: 'userLoginPasswordField',
      value: password,
      onChange: (event) => setPassword(event.target.value),
    },
  ];
  return (
    <div className='login'>
      <div className='login__box'>
        <h2 className='title'>{LOGIN_MESSAGES.loginTitle}</h2>
        <span className='subtitle'>{LOGIN_MESSAGES.loginSubTitle}</span>
        <Form
          onSubmit={userLogin}
          id='userLoginForm'
          submitButtonText='Login'
          resetButtonText='Cancel'
          submitButtonClass='login-signup-button'
          resetButtonClass='hide-reset-button'>
          {LOGIN_FIELDS.map((fields) => (
            <Input
              type={fields.type}
              name={fields.name}
              value={fields.value}
              label={fields.label}
              onChange={fields.onChange}
              id={fields.id}
              autocomplete='off'
            />
          ))}
        </Form>
        <div className='sign-up-option'>
          {LOGIN_MESSAGES.signUpOption}
          <Link to='/signup'>{LOGIN_MESSAGES.signUpText}</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
