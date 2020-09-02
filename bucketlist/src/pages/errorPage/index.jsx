import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './errorPage.scss';

const ErrorPage = ({
  errorCode,
  errorHeading,
  errorMessage,
  redirectToLink,
  redirectToText,
}) => {
  return (
    <div className='errorPage'>
      <h1 className='statusCode'>{errorCode}</h1>
      <h3 className='errorMessage'>{errorHeading}</h3>
      <h1 className='errorMessage'>{errorMessage}</h1>
      <div className='redirect-text'>
        Take me to <Link to={redirectToLink}>{redirectToText}</Link>
      </div>
    </div>
  );
};

export default ErrorPage;

ErrorPage.propTypes = {
  errorCode: PropTypes.number,
  errorMessage: PropTypes.string,
  errorHeading: PropTypes.string,
  redirectToLink: PropTypes.string,
  redirectToText: PropTypes.string,
};
ErrorPage.defaultProps = {
  errorCode: 404,
  errorMessage: 'Some Unknown Error Occurred. Please login and try again.',
  errorHeading: 'Error.',
  redirectToLink: '/login',
  redirectToText: 'Login',
};
