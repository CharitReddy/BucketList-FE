import React from 'react';
import './overlay.scss';

const Overlay = ({ isVisible, onClick }) =>
  isVisible ? <div className='overlay' onClick={onClick} /> : null;

export default Overlay;
