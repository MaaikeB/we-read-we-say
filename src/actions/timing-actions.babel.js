import $ from 'jquery'
import Dispatcher from '../dispatcher/app-dispatcher.babel.js'

const TimingActions = {

	storeDate(date) {

		Dispatcher.handleViewAction({
			type: 'STORE_DATE',
			data: date
		})
	},

	getHeadLine(date) {

		const key = '6d9cb2867def2a8f9763db12b4c0517f:12:62792867';
		date = date.format('YYYYMMDD');

		const url =
			'http://api.nytimes.com/svc/search/v2/articlesearch.json?' +
			'&begin_date=' + date + '&end_date=' + date +
			'&fl=headline' +
			'&fq=document_type:("article") AND section_name:("World")' +
			'&api-key=' + key;

		$.getJSON(url, (data) =>
				Dispatcher.handleServerAction({
					type: 'STORE_HEADLINES',
					data: data.response.docs
				})
		);

	},
}

module.exports = TimingActions
