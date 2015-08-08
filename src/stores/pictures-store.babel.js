
import $ from 'jquery'
import EventEmitter from 'events'
import AppDispatcher from '../dispatcher/app-dispatcher.babel.js'

var _pictures;

const PicturesStore = $.extend({}, EventEmitter.prototype, {

		emitChange(changeEvent) {
			this.emit(changeEvent);
		},

		addChangeListener(changeEvent, callback) {
			this.on(changeEvent, callback);
		},

		removeChangeListener(changeEvent, callback) {
			this.removeListener(changeEvent, callback);
		},

		getPictures() {
			return _pictures;
		}
	}
)

PicturesStore.dispatchToken = AppDispatcher.register(function(payload) {
	var action = payload.action;

	switch (action.type) {

		case 'STORE_PICTURES':
			_pictures = action.data;
			PicturesStore.emitChange('CHANGE');
			break;
	}
});

export default PicturesStore;




