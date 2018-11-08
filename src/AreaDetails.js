import React from 'react';
import SubAreas from './SubAreas';

const AreaDetails = ({area}) => {

  return(
    <div>
      <h3>{area.name}</h3>

      <div className="row">
        <div className="col-sm-3">
          <SubAreas subareas={area.subareas} />
        </div>
      </div>

      
      

    </div>
  )

}

export default AreaDetails;
