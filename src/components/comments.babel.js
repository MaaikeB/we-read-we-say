import React from 'react';

const Comments = React.createClass({

	render() {
		return (
			<div className="comments row">
				<table className="table table-striped table-bordered col-xs-12">
					<tr>
						<td>Maaike says</td>
						<td>what I say...!</td>
					</tr>
					<tr>
						<td>Maaike says</td>
						<td>what I say...!</td>
					</tr>
					<tr>
						<td>Maaike says</td>
						<td>what I say...!</td>
					</tr>
				</table>
			</div>
		);
	}
});

export default Comments;
