import React from 'react';
import {Button} from 'react-bootstrap';
import ReactDatePicker from 'react-datepicker'
import moment from 'moment'

import TimingActions from '../actions/timing-actions.babel.js'

const DatePicker = React.createClass({

	handleDateChange(date) {
		TimingActions.storeDate(date);
	},

  render() {
    return (
      <div className="datepicker-row row">
	      <div className="col-xs-12">
		      <span className="pull-left">On</span>
		      <ReactDatePicker
			      placeholderText="Pick a date!"
			      minDate={moment().subtract(5, 'years')}
			      maxDate={moment()}
			      selected={moment().subtract(5, 'years')}
			      dateFormat="MMM D [,] YYYY"
			      onChange={this.handleDateChange}
			      />
		      <span>we read:</span>
	      </div>
      </div>
        );
  }
});

export default DatePicker;
