import React, { useState } from 'react';
import Input from '../../components/atoms/input';
import Form from '../../components/molecules/form';
import { USER_APIs } from '../../services/apiCalls';

const SignUp = () => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const todayDate = new Date().toISOString().slice(0, 10);
  console.log(todayDate);

  const userSignUp = (event) => {
    event.preventDefault();
    const signUpDetails = { name, dob, email, password };
    USER_APIs.userSignUp(signUpDetails);
  };

  const SIGNUP_FIELDS = [
    {
      type: 'text',
      name: 'user name',
      label: 'Name',
      id: 'userNameSignUpField',
      value: name,
      onChange: (event) => setName(event.target.value.trim()),
    },
    {
      type: 'date',
      name: 'User Date of Birth',
      label: 'Date of Birth',
      id: 'userDOBSignUpField',
      value: dob,
      max: todayDate,
      onChange: (event) => setDob(event.target.value),
    },
    {
      type: 'email',
      name: 'email',
      label: 'email',
      id: 'userSignUpEmailField',
      value: email,
      onChange: (event) => setEmail(event.target.value),
    },
    {
      type: 'password',
      name: 'password',
      label: 'password',
      id: 'userSignUpPasswordField',
      value: password,
      onChange: (event) => setPassword(event.target.value),
    },
  ];
  return (
    <div className='login'>
      <div className='login_box'>
        <Form
          onSubmit={userSignUp}
          id='userSignUpForm'
          submitButtonText='Create Profile'
          resetButtonText='Cancel'>
          {SIGNUP_FIELDS.map((fields) => (
            <Input
              type={fields.type}
              name={fields.name}
              value={fields.value}
              label={fields.label}
              onChange={fields.onChange}
              id={fields.id}
              autocomplete='off'
              max={fields.max}
            />
          ))}
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
