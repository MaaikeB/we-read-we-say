import React from 'react';

const Headline = React.createClass({

	getHeadLine() {
		if (this.props.headlines) {
			return this.props.headlines[0].headline.main;
		};
	},

	render() {
		return (
			<div className="headline row">
				<div className="col-xs-12">
					<h3>{this.getHeadLine()}</h3>
				</div>
			</div>
		);
	}
});

export default Headline;
