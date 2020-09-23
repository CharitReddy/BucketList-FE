import React from 'react';
import './loader.scss';

const Loader = () => {
  return (
    <div className='loader-section'>
      <div className='loader-section__Loader'>
        <div className='spinner'>
          <div className='rect1' />
          <div className='rect2' />
          <div className='rect3' />
          <div className='rect4' />
          <div className='rect5' />
        </div>
      </div>
    </div>
  );
};

export default Loader;
