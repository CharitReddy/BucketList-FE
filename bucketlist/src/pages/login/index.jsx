import React, { useState, useEffect } from 'react';
import Input from '../../components/atoms/input';
import Form from '../../components/molecules/form';
import { USER_APIs } from '../../services/apiCalls';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userLogin = () => {
    USER_APIs.userLogin(password, email);
  };
  return (
    <div>
      <Form onSubmit={userLogin}>
        <Input
          placeholder='Test'
          onChange={(event) => setEmail(event.target.value)}
        />
      </Form>
    </div>
  );
}
