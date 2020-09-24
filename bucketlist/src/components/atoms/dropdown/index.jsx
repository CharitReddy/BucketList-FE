import React from 'react';
import './dropdown.scss';
import PropTypes from 'prop-types';

const Dropdown = ({ name, id, onChange, dropdownOptions }) => {
  return (
    <select name={name} id={id} className='dropdownMain'>
      {dropdownOptions.map((options) => {
        return (
          <option
            value={options.value}
            onChange={onChange}
            className='dropdownList'>
            {options.option}
          </option>
        );
      })}
    </select>
  );
};
Dropdown.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  dropdownOptions: PropTypes.arrayOf(PropTypes.any),
};
Dropdown.defaultProps = {
  dropdownOptions: [],
};
export default Dropdown;
