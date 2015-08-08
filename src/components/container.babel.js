import React from 'react';

import TimingStore from '../stores/timing-store.babel.js'
import HeadlineStore from '../stores/headlines-store.babel.js'
import PicturesStore from '../stores/pictures-store.babel.js'
import AppActions from '../actions/app-actions.babel.js'

import DatePicker from './datepicker.babel.js';
import HeadLine from './headline.babel.js';
import Pictures from './pictures.babel.js';

const Container = React.createClass({

		getInitialState() {
			return {}
		},

		componentDidMount() {
			TimingStore.addChangeListener('STORED_DATE', this._onDateChange);
			HeadlineStore.addChangeListener('STORED_HEADLINES', this._onHeadlinesChange);
			PicturesStore.addChangeListener('CHANGE', this.onStoreChange);
		},

		_onDateChange() {
			let date = TimingStore.getDate();
			AppActions.getHeadLine(date);
			this.setState({date: date});
		},

		_onHeadlinesChange() {
			let headLine = HeadlineStore.getHeadline();
			AppActions.getPictures(headLine, this.state.date);
			this.setState({
				headlines: HeadlineStore.getHeadlines()
			});
		},

		onStoreChange() {
			this.setState({
				pictures: PicturesStore.getPictures()
			});
		},

    render() {
        return (
            <div className="container">
              <h1 className="text-center">We Read We Picture</h1>
              <DatePicker/>
              <HeadLine headlines={this.state.headlines}/>
	            <Pictures pictures={this.state.pictures || []}/>
            </div>
        );
    }
});

export default Container;
