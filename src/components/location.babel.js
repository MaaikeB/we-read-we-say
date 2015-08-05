import React from 'react';
import {Button} from 'react-bootstrap';

const Location = React.createClass({

	render() {
		return (
			<div className="location row">
				<div className="col-xs-12">
					In <Button className="btn-success">Pick a country</Button> we say:
				</div>
			</div>
		);
	}
});

export default Location;
