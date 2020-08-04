import React from 'react';
import PropTypes from 'prop-types';

function Card({children, title, footer}) {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <div className="card-body">
        {children}
      </div>
      <div className="card-footer">
        {footer}
      </div>
    </div>
  );
}

Card.defaultProps = {
  children: '',
  title: '',
  footer: '',
};

Card.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  title: PropTypes.arrayOf(PropTypes.element),
  footer: PropTypes.arrayOf(PropTypes.element),
};

export default Card;
