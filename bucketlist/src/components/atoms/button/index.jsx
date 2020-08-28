import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';
import useTheme from '../../../customHooks/useTheme';

const Button = ({ buttonText, onClick, type }) => {
  const theme = useTheme();

  return (
    <>
      <button className={`${theme}`} type={type} onClick={onClick}>
        {buttonText}
      </button>
    </>
  );
};
Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
};
Button.defaultProps = {
  type: 'button',
};
export default Button;
