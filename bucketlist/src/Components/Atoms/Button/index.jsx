import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './Button.css';
import { Context as themeContext } from '../../../context/ThemeContext';

const Button = ({ buttonText, onClick, type }) => {
  const { state: { theme } } = useContext(themeContext);

  return (
    <>
      <button className={`${theme}`} type={type} onClick={onClick}>{buttonText}</button>
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