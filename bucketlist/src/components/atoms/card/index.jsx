import React from 'react';
import './card.scss';
import PropTypes from 'prop-types';
import useTheme from '../../../customHooks/useTheme';
import { ReactComponent as RightArrow } from '../../../assets/icons/rightArrow.svg';

const Card = ({ cardTitle, onClick, tabIndex }) => {
  const theme = useTheme();
  return (
    <div
      className={`card-base card-${theme}`}
      onClick={onClick}
      role='button'
      tabIndex={tabIndex}
      onKeyUp={(event) => {
        if (event.keyCode === 13) onClick();
      }}>
      <p className={`card-title-base card-title-${theme}`}>{cardTitle}</p>
      <RightArrow className='right-arrow' />
    </div>
  );
};

export default Card;

Card.propTypes = {
  cardTitle: PropTypes.string,
  onClick: PropTypes.func,
  tabIndex: PropTypes.number,
};

Card.defaultProps = {
  cardTitle: '<Task>',
  onClick: () => {},
  tabIndex: 1,
};
