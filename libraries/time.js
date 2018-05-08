//_____________________________________________________________________________________________
/**********************************************************************************************

	time management

	@Author: Alexander Bassov
	@Email: blackxes@gmx.de
	@Github: https://www.github.com/Blackxes

/*********************************************************************************************/



//_____________________________________________________________________________________________
// controls update timing
class TimeClass {

	//_________________________________________________________________________________________
	constructor() {

		this.active;

		this.dt = 0;
		this.lastUpdate = 0;
		this.fps = 0;

		this.callbacks = {};
	}

	//_________________________________________________________________________________________
	// initialization
	Init(fps, updateCallbacks = null) {

		this.fps = fps;
		this.callbacks = updateCallbacks;

		return this;
	}

	//_________________________________________________________________________________________
	// update
	update(ts) {

		if (!this.active)
			return true;

		let dt = (ts - this.lastUpdate) / 1000;

		if (dt > 1 / this.fps) {

			if (this.callbacks)
				for (let id in this.callbacks)	
					this.callbacks[id]();

			this.lastUpdate = ts;
		}
		
		window.requestAnimationFrame(this.update.bind(this));
	}

	//_________________________________________________________________________________________
	// starts the update clock
	start() {
		this.active = true;
		window.requestAnimationFrame(this.update.bind(this));
	}

	//_________________________________________________________________________________________
	// stops the clock
	stop() {
		this.active = false;
	}

	//_________________________________________________________________________________________
	// depending on the given params it removes/adds or returns a callback
	//
	// param1 (string) expects the callback id
	// param2 (function) expects the actual callback function
	//
	// param1/param2 - adds callback
	// param1/param2 (true) - removes callback
	// param1 - returns callback
	//
	callback(id, cb) {
		
		if ( !id || id.constructor !== String )
			return false;
		
		// adding
		if ( id && cb && cb.constructor === Function )
			return this._addCallback(id, cb);
		
		// remove
		if ( id && cb && cb.constructor === Boolean )
			return this._removeCallback(id);

		// return callback
		if ( id && cb === undefined )
			return this._getCallback(id);
		
		return null;
	}

	//_________________________________________________________________________________________
	// adds a callback
	_addCallback(id, callback) {

		if ( !id || !callback || callback.constructor !== Function )
			return false;
		
		this.callbacks[id] = callback;
		
		return true;
	}

	//_________________________________________________________________________________________
	// removes a callback
	_removeCallback(id) {

		if (!this.callbacks[id])
			return false;
		
		return delete this.callbacks[id];
	}

	//_________________________________________________________________________________________
	// returns a callback
	_getCallback(id) {

		if ( !id || !this.callbacks[id] )
			return false;
		
		return this.callbacks[id];
	}

	//_________________________________________________________________________________________
	//

}
module.exports = new TimeClass();

//_____________________________________________________________________________________________
//