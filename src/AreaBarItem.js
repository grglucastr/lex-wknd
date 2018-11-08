import React from 'react';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const AreaBarItem = ({name, slug}) => {
  
  const path = `/${slug}`;
  
  return (
    <div>
      <Link to={path} className="nav-link">{name}</Link>
    </div>
    
  )

}

export default AreaBarItem;

AreaBarItem.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired
}
