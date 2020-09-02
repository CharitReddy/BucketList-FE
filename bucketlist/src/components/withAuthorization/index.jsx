import React from 'react';
import ErrorPage from '../../pages/errorPage';
import {
  errorCodes,
  errorHeadings,
  errorMessages,
} from '../../pages/errorPage/errorConstants';

const WithAuthorization = (Component) => () => {
  const auth = localStorage.getItem('userToken');
  if (auth) {
    return <Component />;
  }
  return (
    <ErrorPage
      errorCode={errorCodes.unauthorized}
      errorHeading={errorHeadings.unauthorized}
      errorMessage={errorMessages.unauthorized}
      redirectToLink='/login'
      redirectToText='Login'
    />
  );
};
export default WithAuthorization;
