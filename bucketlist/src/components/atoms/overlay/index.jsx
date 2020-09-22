import React from 'react';
import './overlay.scss';
import PropTypes from 'prop-types';

const Overlay = ({ isVisible, onClick, modalVisible, children }) =>
  isVisible ? (
    <div
      className='overlay'
      onClick={onClick}
      role='button'
      tabIndex={0}
      onKeyDown={onClick}
      label=' '>
      {modalVisible ? <div className='modal-content'>{children}</div> : null}
    </div>
  ) : null;

export default Overlay;

Overlay.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
  modalVisible: PropTypes.bool,
  children: PropTypes.element,
};

Overlay.defaultProps = {
  onClick: () => {},
  modalVisible: false,
  children: null,
};
