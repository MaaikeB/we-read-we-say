import React from 'react';

import DatePicker from './datepicker.babel.js';
import HeadLine from './headline.babel.js';
import Location from './location.babel.js';
import Comments from './comments.babel.js';

const Container = React.createClass({

    render() {
        return (
            <div className="container">
              <h1 className="text-center">We Read We Say</h1>
              <DatePicker/>
              <HeadLine/>
	            <Location/>
	            <Comments/>
            </div>
        );
    }
});

export default Container;
