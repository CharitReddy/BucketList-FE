import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';
import useTheme from '../../../customHooks/useTheme';

const Input = ({
  accept,
  alt,
  autoComplete,
  disabled,
  form,
  formEnctype,
  maxLength,
  minLength,
  name,
  pattern,
  placeholder,
  required,
  readOnly,
  type,
  value,
  className,
}) => {
  const theme = useTheme();
  return (
    <>
      <input
        accept={accept}
        alt={alt}
        autoComplete={autoComplete}
        disabled={disabled}
        form={form}
        formEncType={formEnctype}
        maxLength={maxLength}
        minLength={minLength}
        name={name}
        pattern={pattern}
        placeholder={placeholder}
        required={required}
        readOnly={readOnly}
        type={type}
        value={value}
        className={`${className} input-${theme}`}
      />
    </>
  );
};
export default Input;
