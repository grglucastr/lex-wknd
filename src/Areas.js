import  React  from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Areas = ({areas}) => {

	return(
		<div>
			<h3>Areas</h3>
			<ul className="list-group">
			{
				areas.map(({name, slug}) => (
					<a key={slug} 
						 className="list-group-item list-group-item-action">
						 {name}
					</a>
				))
			}
			</ul>
		</div>
	)

}

export default Areas;

Areas.propTypes = {
	areas: PropTypes.array.isRequired
}