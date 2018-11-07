import React from 'react';

const AreaItem = ({name}) => {

  return (
    <a className="list-group-item list-group-item-action" href="#">
      {name}
    </a>
  )

}

export default AreaItem;
