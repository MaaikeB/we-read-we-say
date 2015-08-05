import Dispatcher from '../dispatcher/app-dispatcher.babel.js'

const TimingActions = {

	storeDate(date) {

		Dispatcher.handleViewAction({
			type: 'STORE_DATE',
			data: date
		})
	}
}

module.exports = TimingActions
