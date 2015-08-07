
import $ from 'jquery'
import EventEmitter from 'events'
import AppDispatcher from '../dispatcher/app-dispatcher.babel.js'

var _headlines;

const HeadlinesStore = $.extend({}, EventEmitter.prototype, {

		emitChange(changeEvent) {
			this.emit(changeEvent);
		},

		addChangeListener(changeEvent, callback) {
			this.on(changeEvent, callback);
		},

		removeChangeListener(changeEvent, callback) {
			this.removeListener(changeEvent, callback);
		},

		getHeadlines() {
			return _headlines;
		}
	}
)

HeadlinesStore.dispatchToken = AppDispatcher.register(function(payload) {
	var action = payload.action;

	switch (action.type) {

		case 'STORE_HEADLINES':
			_headlines = action.data;
			HeadlinesStore.emitChange('STORED_HEADLINES');
			break;

	}
});

export default HeadlinesStore;




