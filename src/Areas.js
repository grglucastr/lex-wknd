import  React  from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Areas = (props) => {
	return(
		<div className="row">
			<div className="col">
				<div className="row">
					<h3 className="col-sm-12">Areas</h3>
				</div>

				<div className="row">
					<div className="col">
						<table className="table table-striped">
							<thead>
								<tr><th>Area Name</th></tr>
							</thead>

							<tbody>
								{
									props.areas.map(({name, slug}) => (
										<tr key={slug}>
											<td>
												<Link to={slug}>{name}</Link>
											</td>
										</tr>
									))
								}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	)

}

export default Areas;

Areas.propTypes = {
	areas: PropTypes.array.isRequired
}