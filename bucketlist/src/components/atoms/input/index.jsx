import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';
import useTheme from '../../../customHooks/useTheme';

const Input = ({ label, className, value, id, ...otherProps }) => {
  const theme = useTheme();
  return (
    <div className='input-container'>
      <label htmlFor={id} className={`input-label ${value ? 'shrink' : ''}`}>
        {label}
      </label>
      <input
        {...otherProps}
        className={`input-base ${className} input-${theme}`}
        id={id}
      />
      <div className={`border-line ${value ? 'stay-line' : ''}`} />
    </div>
  );
};
export default Input;

Input.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
};

Input.defaultProps = {
  label: 'Enter your input here.',
  className: '',
  id: '',
  value: '',
};
