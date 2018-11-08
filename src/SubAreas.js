import React  from 'react';
import PropTypes from 'prop-types';

function SubAreas ({subareas}) {
  return(
    <ul className="list-group">
    {
      subareas.map((subarea) => (
        <a href="#" className="list-group-item list-group-item-action" key={subarea.slug}>
          {subarea.name}
        </a>
      ))
    }
            
    </ul>
  )
}

export default SubAreas;

SubAreas.propTypes = {
  subareas: PropTypes.array.isRequired
}