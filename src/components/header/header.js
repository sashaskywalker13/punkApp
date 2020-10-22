import React from 'react';
import { connect } from 'react-redux';

import { loadProducts } from '../../redux/actions';

const Header = ({ loadProducts }) => {
  return (
    <div>
      <h1>PunkApp</h1>
      <button onClick={() => loadProducts()}>загрузить</button>
    </div>
  );
}

export default connect(null, { loadProducts })(Header);