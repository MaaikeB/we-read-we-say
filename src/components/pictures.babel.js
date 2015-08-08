import React from 'react';

const Pictures = React.createClass({

	render() {

		return (
			<div className="pictures row">
		    {this.props.pictures.map(function(picture, i) {
          return <img src={picture.images.low_resolution.url} key={i} />;
        })}
			</div>
		);
	}
});

export default Pictures;
