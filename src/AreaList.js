import  React  from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import AreaItem from './AreaItem';

const AreaList = ({areas}) => {

	return(
		<div>
			<h3>Areas</h3>
			<ul className="list-group">
			{
				areas.map(({name, slug}) => (
					<AreaItem name={name} key={slug} />
				))
			}
			</ul>
		</div>
	)

}

export default AreaList;

AreaList.propTypes = {
	areas: PropTypes.array.isRequired
}