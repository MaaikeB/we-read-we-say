
import Dispatcher from 'flux/lib/Dispatcher'
import $ from 'jquery'

const AppDispatcher = $.extend({}, new Dispatcher(), {

		handleViewAction(action) {
			let payload = {
				source: "VIEW_ACTION",
				action: action
			}
			this.dispatch(payload);
		},

		handleServerAction(action) {
			let payload = {
				source: "VIEW_ACTION",
				action: action
			}
			this.dispatch(payload);
		}
	}
)


export default AppDispatcher;
