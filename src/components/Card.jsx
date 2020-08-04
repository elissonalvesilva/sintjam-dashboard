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
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  title: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  footer: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
};

export default Card;
