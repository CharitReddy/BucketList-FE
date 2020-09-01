import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';
import useTheme from '../../../customHooks/useTheme';

const Button = ({ buttonText, onClick, type, className, id }) => {
  const theme = useTheme();

  return (
    <>
      <button
        className={`button-base ${theme} ${className} ${className}-${theme}`}
        type={type}
        onClick={onClick}
        id={id}>
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
  id: PropTypes.string,
};
Button.defaultProps = {
  type: 'button',
  className: '',
  id: '',
};
export default Button;
