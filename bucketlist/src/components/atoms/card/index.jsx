import React from 'react';
import './card.scss';
import useTheme from '../../../customHooks/useTheme';

const Card = ({ cardTitle }) => {
  const theme = useTheme();
  return <div className={`card-base card-${theme}`}>{cardTitle}</div>;
};

export default Card;
