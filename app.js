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

	let parser = require ("html_template_parser_v2");

	console.log(parser);

	return true;



	// window.TParser = require("./libraries/tparser.js");

	// TParser.parse("testing", {
	// 	"title": "TParser Class",
	// 	"row": [
	// 		{ "label": "Label 1" },
	// 		{ "label": "Label 2" },
	// 		{ "label": "Label 3" }
	// 	],
	// 	"label": "Parsing a real html template",
	// });



	
	
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