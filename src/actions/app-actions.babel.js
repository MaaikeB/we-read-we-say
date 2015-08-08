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

	getFirstTwoWords(headline) {
		var wordsArray = headline.split(" ");
		var result = wordsArray[0] + wordsArray[1];
		return result.toLowerCase();
	},

	getPictures(headline, date) {

		let tag = this.getFirstTwoWords(headline);

		let url = 'https://api.instagram.com/v1/tags/' +
			tag +
			'/media/recent?' +
			'client_id=062b90422f7c486ea4e3ef36b165de16';

		$.ajax({
			type: "GET",
			dataType: 'jsonp',
			url: url
		}).done(function(response) {
			Dispatcher.handleServerAction({
				type: 'STORE_PICTURES',
				data: response.data
			})
		});
	}
}

module.exports = TimingActions
