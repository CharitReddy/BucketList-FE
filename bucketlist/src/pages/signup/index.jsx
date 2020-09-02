import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/atoms/input';
import Form from '../../components/molecules/form';
import { USER_APIs } from '../../services/apiCalls';
import './signup.scss';
import SIGNUP_MESSAGES from './SIGNUP_MESSAGES';

const SignUp = () => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const todayDate = new Date().toISOString().slice(0, 10);

  function calculateAge(birthday) {
    // Birthday -> Date entered by User.
    const ageDifMs = Date.now() - birthday.getTime();
    const ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  const age = calculateAge(new Date(dob));

  const userSignUp = (event) => {
    event.preventDefault();

    const signUpDetails = { name, dob, email, password, age };
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
    <div className='signup'>
      <div className='signup__box'>
        <h2 className='title'>{SIGNUP_MESSAGES.signUpTitle}</h2>
        <span className='subtitle'>{SIGNUP_MESSAGES.signUpSubTitle}</span>
        <Form
          onSubmit={userSignUp}
          id='userSignUpForm'
          submitButtonText='Create Profile'
          resetButtonText='Cancel'
          submitButtonClass='login-signup-button'
          resetButtonClass='hide-reset-button'>
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
        <div className='login-option'>
          {SIGNUP_MESSAGES.loginOption}
          <Link to='/login'>{SIGNUP_MESSAGES.loginText}</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
