import React, { useState } from 'react';
import Input from '../../components/atoms/input';
import Form from '../../components/molecules/form';
import { USER_APIs } from '../../services/apiCalls';
import './login.scss';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userLogin = (event) => {
    event.preventDefault();
    const loginDetails = { email, password };
    USER_APIs.userLogin(loginDetails);
  };
  return (
    <div className='login'>
      <div className='login_box'>
        <Form
          onSubmit={userLogin}
          id='userLoginForm'
          submitButtonText='Login'
          resetButtonText='Cancel'>
          <Input
            type='email'
            name='email'
            value={email}
            label='email'
            onChange={(event) => setEmail(event.target.value)}
            id='userLoginEmailField'
          />
          <Input
            type='password'
            name='password'
            value={password}
            label='password'
            onChange={(event) => setPassword(event.target.value)}
            id='userLoginPasswordField'
          />
        </Form>
      </div>
    </div>
  );
}
