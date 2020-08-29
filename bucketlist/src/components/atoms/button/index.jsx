import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';
import useTheme from '../../../customHooks/useTheme';

const Button = ({ buttonText, onClick, type, className }) => {
  const theme = useTheme();

  return (
    <>
      <button className={`${theme} ${className}`} type={type} onClick={onClick}>
        {buttonText}
      </button>
    </>
  );
};
Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
};
Button.defaultProps = {
  type: 'button',
  className: '',
};
export default Button;
