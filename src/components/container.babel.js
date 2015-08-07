import React from 'react';

import TimingStore from '../stores/timing-store.babel.js'
import HeadlineStore from '../stores/headlines-store.babel.js'
import TimingActions from '../actions/timing-actions.babel.js'

import DatePicker from './datepicker.babel.js';
import HeadLine from './headline.babel.js';
import Location from './location.babel.js';
import Comments from './comments.babel.js';

const Container = React.createClass({

		getInitialState() {
			return {
				date: null
			};
		},

		componentDidMount() {
			TimingStore.addChangeListener('STORED_DATE', this._onDateChange);
			HeadlineStore.addChangeListener('STORED_HEADLINES', this._onHeadlinesChange);
		},

		_onDateChange() {
			TimingActions.getHeadLine(TimingStore.getDate());
		},

		_onHeadlinesChange() {
			this.setState({
				headlines: HeadlineStore.getHeadlines()
			})
		},

    render() {
        return (
            <div className="container">
              <h1 className="text-center">We Read We Say</h1>
              <DatePicker/>
              <HeadLine headlines={this.state.headlines}/>
	            <Location/>
	            <Comments/>
            </div>
        );
    }
});

export default Container;
