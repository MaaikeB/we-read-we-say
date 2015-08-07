
import $ from 'jquery'
import EventEmitter from 'events'
import AppDispatcher from '../dispatcher/app-dispatcher.babel.js'

var _date;
var _location;

const TimingStore = $.extend({}, EventEmitter.prototype, {

			emitChange(changeEvent) {
				this.emit(changeEvent);
			},

			addChangeListener(changeEvent, callback) {
				this.on(changeEvent, callback);
			},

			removeChangeListener(changeEvent, callback) {
				this.removeListener(changeEvent, callback);
			},

			getDate() {
				return _date;
			},

			getLocation() {
				return _location;
			}

		}
)

TimingStore.dispatchToken = AppDispatcher.register(function(payload) {
	var action = payload.action;

	switch (action.type) {

		case 'STORE_DATE':
			_date = action.data;
			TimingStore.emitChange('STORED_DATE');
			break;
	}
});

export default TimingStore;




