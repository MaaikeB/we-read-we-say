import React from 'react';
import {Button} from 'react-bootstrap';

const DatePicker = React.createClass({

  render() {
    return (
      <div className="datepicker row">
	      <div className="col-xs-12">
		      On <Button className="btn-success">Pick a date!</Button> we read:
	      </div>
      </div>
        );
  }
});

export default DatePicker;
