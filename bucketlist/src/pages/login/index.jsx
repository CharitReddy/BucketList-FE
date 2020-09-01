import React, { useState } from 'react';
import Input from '../../components/atoms/input';
import Form from '../../components/molecules/form';
import { USER_APIs } from '../../services/apiCalls';
import './login.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userLogin = (event) => {
    event.preventDefault();
    const loginDetails = { email, password };
    USER_APIs.userLogin(loginDetails);
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
      <div className='login_box'>
        <Form
          onSubmit={userLogin}
          id='userLoginForm'
          submitButtonText='Login'
          resetButtonText='Cancel'
          submitButtonClass='login-button'
          resetButtonClass='cancel-button'>
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
      </div>
    </div>
  );
};

export default Login;
