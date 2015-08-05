import React from 'react';
import ReactDatePicker from 'react-datepicker'
import moment from 'moment'

const DatePicker = React.createClass({

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
			      />
		      <span>we read:</span>
	      </div>
      </div>
        );
  }
});

export default DatePicker;
