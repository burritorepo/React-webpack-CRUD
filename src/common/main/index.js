import React from 'react';
import PropTypes from 'prop-types';

import './main.scss';

export function Main(props) {
  const { children } = props;
  return (
    <main>
      <div className="container">
        {children}
      </div>
    </main>
  );
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
};
