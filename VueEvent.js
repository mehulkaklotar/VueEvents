import Vue from 'vue';
export default class VueEvent {

	constructor() {
		this.vue = new Vue();
	}

	/**
	 * this function invokes all functions attached to action hook `event`
	 *
	 * @param event
	 * @param data
	 * @returns {boolean}
	 */
	do_action(event, data = null) {
		if(typeof event === 'undefined' || event == '' || event == null){
			return false;
		}
		this.vue.$emit(event,data);
	}

	/**
	 * this function adds/registers the event for execution
	 *
	 * @param event
	 * @param callback
	 * @returns {boolean}
	 */
	add_action(event, callback) {
		if(typeof event === 'undefined' || event == '' || event == null || typeof callback !== 'function'){
			return false;
		}
		this.vue.$on(event,callback);
	}

	/**
	 * this function invokes all functions attached to filter and returns data
	 *
	 * @param event
	 * @param data
	 * @returns {*}
	 */
	apply_filter( event, data = null ) {
		if(typeof event === 'undefined' || event == '' || event == null){
			return false;
		}
		var custom_event = new CustomEvent(event, {'detail': data });
		document.dispatchEvent(custom_event);
		var data = custom_event.detail;
		return data;
	}

	/**
	 * this function adds/registers the event for execution
	 *
	 * @param event
	 * @param callback
	 * @returns {boolean}
	 */
	add_filter( event, callback ) {
		if(typeof event === 'undefined' || event == '' || event == null || typeof callback !== 'function'){
			return false;
		}
		document.addEventListener(event,callback);
	}

	/**
	 * this function removes event registered
	 *
	 * @param event
	 * @returns {boolean}
	 */
	remove_filter( event ) {
		if(typeof event === 'undefined' || event == '' || event == null){
			return false;
		}
		document.removeEventListener(event);
	}

}