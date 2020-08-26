import React from 'react';
import Header from '../header';

const WithLayout = (Component) => () => {
  return (
    <>
      <Header />
      <Component />
    </>
  );
};
export default WithLayout;
