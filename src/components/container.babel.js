import React from 'react';

import DatePicker from './datepicker.babel.js';
import HeadLine from './headline.babel.js';
import Comments from './comments.babel.js';

const Container = React.createClass({

    render() {
        return (
            <div>
                <h1>Container</h1>
                <DatePicker/>
                <HeadLine/>
                <Comments/>
            </div>
        );
    }
});

export default Container;
