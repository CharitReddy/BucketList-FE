import React from 'react';
import PropTypes from 'prop-types';
import useTheme from '../../../customHooks/useTheme';
import Button from '../../atoms/button';
import './form.scss';

const Form = ({
  className,
  formHeader,
  children,
  submitButtonText,
  resetButtonText,
  id,
  submitButtonClass,
  resetButtonClass,

  ...otherProps
}) => {
  const theme = useTheme();
  return (
    <div>
      <form
        className={`form form-${theme} ${className}`}
        {...otherProps}
        id={id}>
        <span>{formHeader}</span>
        {children}

        <Button
          type='submit'
          buttonText={submitButtonText}
          id={`submit${id}`}
          className={submitButtonClass}
        />
        <Button
          type='reset'
          buttonText={resetButtonText}
          id={`reset${id}`}
          className={resetButtonClass}
        />
      </form>
    </div>
  );
};

export default Form;

Form.propTypes = {
  className: PropTypes.string,
  formHeader: PropTypes.string,
  children: PropTypes.element.isRequired,
  submitButtonText: PropTypes.string,
  resetButtonText: PropTypes.string,
  id: PropTypes.string,
  submitButtonClass: PropTypes.string,
  resetButtonClass: PropTypes.string,
};

Form.defaultProps = {
  className: '',
  formHeader: '',
  submitButtonText: 'Submit',
  resetButtonText: 'Reset',
  id: '',
  submitButtonClass: '',
  resetButtonClass: '',
};
