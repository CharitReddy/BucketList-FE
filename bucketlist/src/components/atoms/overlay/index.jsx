import React from 'react';
import './overlay.scss';
import PropTypes from 'prop-types';

const Overlay = ({ isVisible, onClick }) =>
  isVisible ? (
    <div
      className='overlay'
      onClick={onClick}
      role='button'
      tabIndex={0}
      onKeyDown={onClick}
      label=' '
    />
  ) : null;

export default Overlay;

Overlay.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};

Overlay.defaultProps = {
  onClick: () => {},
};
