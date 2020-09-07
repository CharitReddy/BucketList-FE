import React from 'react';
import './card.scss';
import useTheme from '../../../customHooks/useTheme';

const Card = () => {
  const theme = useTheme();
  return <div className={`card-base card-${theme}`}>Card description</div>;
};

export default Card;
