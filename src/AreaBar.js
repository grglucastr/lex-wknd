import  React  from 'react';
import PropTypes from 'prop-types';

import AreaBarItem from './AreaBarItem';

const AreaBar = ({areas}) => {
	return(
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    			<span className="navbar-toggler-icon"></span>
  		 </button>
  		 <div className="collapse navbar-collapse" id="navbarNav">
    		<ul className="navbar-nav mr-auto">
					<li className="nav-item">
							<AreaBarItem name="Home" slug=""  />
					</li>
				{
					areas.map(({name, slug}) => (
						<li className="nav-item" key={slug}>
							<AreaBarItem name={name} slug={slug}  />
						</li>
					))
				}
    		</ul>
			</div>
		</nav>
	)
}

export default AreaBar;

AreaBar.propTypes = {
	areas: PropTypes.array.isRequired
}