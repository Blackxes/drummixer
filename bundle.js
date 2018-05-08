(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
//_____________________________________________________________________________________________
/**********************************************************************************************

	main js file

	@Author: Alexander Bassov
	@Email: blackxes@gmx.de
	@Github: https://www.github.com/Blackxes

/*********************************************************************************************/



//_____________________________________________________________________________________________
// convenient function
class SoundClass {
	
	constructor(id, file) {
		this.id = id;
		this.file = file;
	}
	
	// plays sound
	play() {

		if (!this.file)
			return false;
		
		let sound = new Audio(this.file);
		return sound.play();
	}

}
var Sound = (id, file) => { return new SoundClass(id, file); }

// //_____________________________________________________________________________________________
// // controller / configuration
// var DrumMixer = new class {
	
// 	constructor() {

// 		this.active = false;

// 		this.bpm = 120;
// 		this.speed = 1.0;
// 		// this.timing = new TimeClass();

// 		this.sounds = {};
// 	}

// 	// initializes mixer
// 	Init(bpm, speed) {
		
// 		this.bpm = bpm;
// 		this.speed = speed;

// 		if (TrackManager.Init()) return false;

// 		this.timing.addCallback(TrackManager.update.bind(TrackManager));
		
// 		return true;
// 	}
	
// 	// updates the board sequence
// 	update() {
		

// 	}
// }

// //_____________________________________________________________________________________________
// // sound manager
// var TrackManager = new class {
	
// 	constructor() {

// 		this.sounds = {};
// 		this.board = {};
// 	}
	
// 	// loads the sounds from the dom
// 	Init() {

// 		document.querySelectorAll("#sounds [sound-id]").forEach( (el) => {
			
// 		});

// 		return true;
// 	}
	
// 	// updates the board
// 	update() {

// 	}

// 	//_________________________________________________________________________________________
// 	//

// }

// //_____________________________________________________________________________________________
// var Run = new class {

// 	constructor() {

// 		this.active = false;		
// 		this.lastUpdate = 0;

// 		this._beat = 0;
// 		this._speed = 10.0;
// 	}

// 	update(timestamp) {

// 		if (!this.active) {
// 			window.requestAnimationFrame(this.update.bind(this));
// 			return true;
// 		}
		
// 		let dt = timestamp - this.lastUpdate;
// 		// console.log(dt / 1000 * this.speed, dt / 1000);
// 		// console.log(dt / 1000, 60 / DrumMixer.bpm * this.speed);

// 		if ( (dt * this.speed / 1000) > (60 / DrumMixer.bpm) ) {
// 			this.parseNextTrackLine();
// 			this.lastUpdate = timestamp;
// 		}

// 		window.requestAnimationFrame(this.update.bind(this));
// 	}

// 	parseNextTrackLine() {
		
// 		document.querySelector(".current-beat").innerHTML = this.beat;
// 		document.querySelector(".current-speed").innerHTML = this.speed * 100;
		
// 		// trigger sound when activated
// 		document.querySelectorAll(".track-container .track-line").forEach( (el) => {
			
// 			let soundid = el.getAttribute("sound-id");
// 			let item = el.querySelector(`[dm-beat="${this.beat}"]`);

// 			if (!item.classList.contains("activated"))
// 				return true;
			
// 			let sound = new Audio(DrumMixer.sounds[soundid].file);
// 			sound.play();

// 			console.log(soundid);
// 		});
		

// 		this.beat = (this.beat + 1 >= DrumMixer.bpm) ? 0 : this.beat + 1;
// 	}

// 	reset() {
// 		this.beat = 0;
// 		this.active = false;

// 		document.querySelector(".current-beat").innerHTML = this.beat + 1;
// 		document.querySelectorAll(".track-container .activated").forEach( (el) => {
// 			el.classList.remove("activated");
// 		})
// 	}

// 	get beat() { return this._beat; }
// 	get speed() { return this._speed; }
// 	set beat(value) { this._beat = value; }
// 	set speed(value) { this._speed = value; this.beat = 1; }
	
// }



//_____________________________________________________________________________________________
document.addEventListener("DOMContentLoaded", function() {
	
	// initialization
	window.TParser = require("./libraries/tparser.js");

	TParser.parse("testing", {
		"title": "TParser Class",
		"row": [
			{ "label": "Label 1" },
			{ "label": "Label 2" },
			{ "label": "Label 3" }
		],
		"label": "Parsing a real html template",
	});



	
	
	// TParser.Init();

	// console.log("end");

	

	// initializations
	// DrumMixer.Init();
	

	// if (evt.target.readyState != "complete")
	// 	return true;

	// let con = document.getElementById("app");
	// let sounds = DrumMixer.sounds;

	// // initialize sounds
	// document.querySelectorAll("#sounds audio").forEach( (el) => {
	// 	let id = el.getAttribute("sound-id");
	// 	DrumMixer.sounds[id] = Sound(id, el.src);
	// })

	// // build track
	// let trackContainer = document.querySelector(".track-container");

	// for (let index in sounds) {
		
	// 	let sound = sounds[index];
	// 	let trackLine = document.createElement("div");

	// 	for (let col = 0; col < DrumMixer.bpm; col++) {

	// 		let soundSpot = document.createElement("button");

	// 		soundSpot.setAttribute("dm-beat", col);
	// 		soundSpot.setAttribute("dm-volume", "1");
	// 		soundSpot.classList.add("track-item");
	// 		soundSpot.innerHTML = sound.id.charAt(0).toUpperCase();
	// 		trackLine.appendChild(soundSpot);
	// 	}

	// 	trackLine.classList.add("track-line", "row-clean");
	// 	trackLine.setAttribute("sound-id", sound.id);
	// 	trackContainer.appendChild(trackLine);
	// }
	
	// // apply sound activation
	// document.querySelectorAll(".track-item").forEach( (el) => {
	// 	el.addEventListener("click", (evt) => {
			
	// 		let el = evt.target;
	// 		let func = el.classList.contains("activated") ? "remove" : "add";

	// 		el.classList[func]("activated");
	// 	});
	// });

	// var SettingsPlaceholder = function() {
	// 	document.querySelector("form.settings .dm-settings-bpm").setAttribute("placeholder", DrumMixer.bpm);
	// 	document.querySelector("form.settings .dm-settings-speed").setAttribute("placeholder", Run.speed);
	// }
	// SettingsPlaceholder();
	
	// bind settings
	// document.querySelector(".settings").addEventListener("submit", (evt) => {

	// 	evt.preventDefault();

	// 	let form = evt.target;
	// 	let bpm = form.querySelector(".dm-settings-bpm").value;
	// 	let speed = form.querySelector(".dm-settings-speed").value;

	// 	form.querySelector(".dm-settings-bpm").removeAttribute("value");
	// 	form.querySelector(".dm-settings-speed").removeAttribute("value");

	// 	Run.speed = speed;
	// 	DrumMixer.bpm = bpm;
	// 	Run.reset();

	// 	Run.active = true;

	// 	SettingsPlaceholder();
	// });

	// bind controls
	// document.querySelector(".dm-start").addEventListener("click", (evt) => {
	// 	Run.active = true;
	// });

	// document.querySelector(".dm-stop").addEventListener("click", (evt) => {
	// 	Run.active = false;
	// });

	// document.querySelector(".dm-reset").addEventListener("click", (evt) => {
	// 	Run.reset();
	// });
	

	// window.requestAnimationFrame(Run.update.bind(Run));

	// loop through sounds and apply handler
	// document.querySelectorAll(".dm-sound").forEach( (el) => {

	// 	let sound = sounds[el.getAttribute("dm-sound")];
	// 	let audio = document.querySelector(`#${sound.id}`);



	// 	// el.addEventListener("click", () => {
	// 		// audio.play();
	// 	// })
	// });
});

//_____________________________________________________________________________________________
//
},{"./libraries/tparser.js":2}],2:[function(require,module,exports){
//_____________________________________________________________________________________________
/**********************************************************************************************

	html template parsing class

	@Author: Alexander Bassov
	@Email: blackxes@gmx.de
	@Github: https://www.github.com/Blackxes

/*********************************************************************************************/



//_____________________________________________________________________________________________
class HTMLParser {

	//_________________________________________________________________________________________
	constructor() {

		this.templates = {};
		this.processingMarkup;

		this.loadTemplates();
	}

	//_________________________________________________________________________________________
	// loads templates from the dom / must be accessable with this selector
	// template#templates
	//
	loadTemplates() {

		let raw = document.querySelector("template#templates").content.children;

		for (let index in raw) {

			if (!raw.hasOwnProperty(index))
				continue;
			
			let el = raw[index];
			let templateid = el.getAttribute("template-id");

			if (!templateid)
				continue;
			
			this.templates [templateid] = el.innerHTML.replace(/\s{2,}/g, "");
		}
	}

	//_________________________________________________________________________________________
	// user entrance function to handle the params correctly
	parse(templateid, markup) {

		if ( !templateid || markup && markup.constructor !== Object || this.templates[templateid] === undefined )
			return false;

		let content = this._parse(this.templates[templateid], markup);
		
		console.log("Content: \n%s", content);
		
		return content;
	}

	//_________________________________________________________________________________________
	// actual parsing
	_parse(givenTemplate, givenMarkup) {
		
		if ( !givenTemplate )
			return "";
		
		let template = givenTemplate;
		let markup = this._prepareMarkup( (givenMarkup) ? givenMarkup : {} );

		let regex = /{{\s*([\w\:\s]*)\s*}}/g;
		let marker = regex.exec(template);
		let match;

		while ( match = regex.exec(template) )
			console.log(match[1]);
		
		for (let key in markup) {

			let item = markup[key];
			let content = "";

			// if (item.constructor === Array || item.constructor === Object)
				// content = this._parse( this._getSubpart(key),  )


			// console.log(key);

			// if (item && item.constructor === Array)
			// 	this._parse(template, item);
		}

		return "";
	}

	//_________________________________________________________________________________________
	// prepares the markup to be more safe to parse
	// rows needs to be placed at the beginning of the array because they can contain marker
	// which are samely labeled as the ones "above" the row config.
	// and since the template is being replaced with the configuration globaly to reduce
	// uneccessary string cut rows, deeep rows are being parsed first
	//
	_prepareMarkup(givenMarkup) {

		if ( !givenMarkup || givenMarkup && givenMarkup.constructor !== Array && givenMarkup.constructor !== Object )
			return {};
		
		let prepared = {};
		let markup = Object.assign({}, givenMarkup);

		for (let index in markup) {

			let item = markup[index];

			if (item.constructor !== Array && item.constructor !== Object)
				continue;

			prepared[index] = item;
		}
		prepared = Object.assign(prepared, markup);
		
		return prepared;
	}

	//_________________________________________________________________________________________
	// builds the actual element from a html string
	buildTemplate(templateid, givenMarkup = false, insert = null, givenSelector = null) {

		if ( !templateid || (givenMarkup && givenMarkup.constructor !== Object) || !this.templates[templateid] )
			return false;
		
		let template = this.templates[templateid];
		let markup = ( !givenMarkup || givenMarkup.constructor !== Object) ? {} : givenMarkup;
		let content = this.parse(template, markup);

		let wrapper = document.createElement("div");
		wrapper.innerHTML = content;
		
		if ( (insert !== null) && !insert || (insert === null) && !this.insert )
			return wrapper.children;
		
		if (!givenSelector && !this.selector)
			return false;

		let selector = givenSelector || this.selector;
		let container = document.querySelector(selector);
		let items = wrapper.children;

		for (let prop in items) {

			if (!items.hasOwnProperty(prop))
				continue;
			
			container.appendChild(items.item(prop));
		}
		
		return true;
	}

	//_________________________________________________________________________________________
	// 


}
module.exports = new HTMLParser();

//_____________________________________________________________________________________________
//
},{}]},{},[1]);
