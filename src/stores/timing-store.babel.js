
import EventEmitter from 'events'
import AppDispatcher from '../dispatcher/app-dispatcher.babel.js'
import $ from 'jquery'

const CHANGE_EVENT = 'CHANGE'

var _date;
var _location;

const TimingStore = $.extend({}, EventEmitter.prototype, {

			emitChange() {
				this.emit(CHANGE_EVENT);
			},

			addChangeListener(callback) {
				this.on(CHANGE_EVENT, callback);
			},

			removeChangeListener(callback) {
				this.removeListener(CHANGE_EVENT, callback);
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
			_date = action.date;
			TimingStore.emitChange()
			break;
	}
});

export default TimingStore;




