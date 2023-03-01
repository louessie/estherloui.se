//initiate code when page loads
window.onload = runClock;

//clock function
function runClock() {

	//global variables
	var now = new Date();
	var pageTitle = document.head.getElementsByTagName('title')[0];
	var container = document.getElementById('container');
	var currentTime = document.getElementById('currentTime');
	var body = document.getElementsByTagName('body')[0];
	var currentDay = getDay(checkTime());
	var dayName = getDay(checkTime());

	//console.log vars
	console.log( now );
	console.log( pageTitle );
	console.log( container );
	console.log( checkTime () );
	console.log( currentDay );


	//update page in real time
	setInterval( function() {

		now = checkTime();

		//call all the functions
		updateTitle( now );
		getCurrentTime( now );

	}, 1000 )//end setInterval
		//1000 updates the function every second

	//call the current time
	function getCurrentTime ( now ) {

		console.log('getting current time');
		currentTime.innerHTML = now.hours+":"+now.minutes+":"+now.seconds+", "+now.day+", "+now.month;

	}//end getCurrentTime function


	//get the current day
	function getDay( now ) {

		var day = "";
		return day;
		meridien;

	}//end getDay function

	function updateTitle ( now ) {

		pageTitle.innerText = now.hours+":"+now.minutes+":"+now.seconds+" Automaton";

	}//end updateTitle function


	//tool that gets the current time
	function checkTime() {

		now = new Date();
		var meridien = "AM";
		var hours = now.getHours();
		var minutes = now.getMinutes();
		var seconds = now.getSeconds();
		var day = now.getDay();
		var month = now.getMonth();

		//GOALS
		//1. Make the seconds div blink
		//COMPLETE; ANIMATION IN CSS

		//2.Make the minutes div increase in opacity as each second passes (so at 0 seconds, opacity will be 0, at 30 seconds opacity will be 0.5, and at 60 seconds opacity will be 1)
		//0.0166 increase in opacity per second
		//COMPLETE; LOGIC STATEMENTS IN JAVASCRIPT:

		
			if (seconds == 1) {
			document.getElementById('minute').style.opacity = 0.0166;
			}
 
			if (seconds == 2) {
			document.getElementById('minute').style.opacity = 0.0332;
			}

			if (seconds == 3) {
			document.getElementById('minute').style.opacity = 0.0498;
			}

			if (seconds == 4) {
			document.getElementById('minute').style.opacity = 0.0664;
			}

			if (seconds == 5) {
			document.getElementById('minute').style.opacity = 0.083;
			}

			if (seconds == 6) {
			document.getElementById('minute').style.opacity = 0.0996;
			}

			if (seconds == 7) {
			document.getElementById('minute').style.opacity = 0.1162;
			}

			if (seconds == 8) {
			document.getElementById('minute').style.opacity = 0.1328;
			}

			if (seconds == 9) {
			document.getElementById('minute').style.opacity = 0.1494;
			}

			if (seconds == 10) {
			document.getElementById('minute').style.opacity = 0.166;
			}

			if (seconds == 11) {
			document.getElementById('minute').style.opacity = 0.1826;
			}

			if (seconds == 12) {
			document.getElementById('minute').style.opacity = 0.1992;
			}

			if (seconds == 13) {
			document.getElementById('minute').style.opacity = 0.2158;
			}

			if (seconds == 14) {
			document.getElementById('minute').style.opacity = 0.2324;
			}

			if (seconds == 15) {
			document.getElementById('minute').style.opacity = 0.249;
			}

			if (seconds == 16) {
			document.getElementById('minute').style.opacity = 0.2656;
			}

			if (seconds == 17) {
			document.getElementById('minute').style.opacity = 0.2822;
			}

			if (seconds == 18) {
			document.getElementById('minute').style.opacity = 0.2988;
			}

			if (seconds == 19) {
			document.getElementById('minute').style.opacity = 0.3154;
			}

			if (seconds == 20) {
			document.getElementById('minute').style.opacity = 0.332;
			}

			if (seconds == 21) {
			document.getElementById('minute').style.opacity = 0.3486;
			}

			if (seconds == 22) {
			document.getElementById('minute').style.opacity = 0.3652;
			}

			if (seconds == 23) {
			document.getElementById('minute').style.opacity = 0.3818;
			}

			if (seconds == 24) {
			document.getElementById('minute').style.opacity = 0.3984;
			}

			if (seconds == 25) {
			document.getElementById('minute').style.opacity = 0.415;
			}

			if (seconds == 26) {
			document.getElementById('minute').style.opacity = 0.4316;
			}

			if (seconds == 27) {
			document.getElementById('minute').style.opacity = 0.4482;
			}

			if (seconds == 28) {
			document.getElementById('minute').style.opacity = 0.4648;
			}

			if (seconds == 29) {
			document.getElementById('minute').style.opacity = 0.4814;
			}

			if (seconds == 30) {
			document.getElementById('minute').style.opacity = 0.498;
			}

			if (seconds == 31) {
			document.getElementById('minute').style.opacity = 0.5146;
			}

			if (seconds == 32) {
			document.getElementById('minute').style.opacity = 0.5312;
			}

			if (seconds == 33) {
			document.getElementById('minute').style.opacity = 0.5478;
			}

			if (seconds == 34) {
			document.getElementById('minute').style.opacity = 0.5644;
			}

			if (seconds == 35) {
			document.getElementById('minute').style.opacity = 0.581;
			}

			if (seconds == 36) {
			document.getElementById('minute').style.opacity = 0.5976;
			}

			if (seconds == 37) {
			document.getElementById('minute').style.opacity = 0.6142;
			}

			if (seconds == 38) {
			document.getElementById('minute').style.opacity = 0.6308;
			}

			if (seconds == 39) {
			document.getElementById('minute').style.opacity = 0.6474;
			}

			if (seconds == 40) {
			document.getElementById('minute').style.opacity = 0.664;
			}

			if (seconds == 41) {
			document.getElementById('minute').style.opacity = 0.6806;
			}

			if (seconds == 42) {
			document.getElementById('minute').style.opacity = 0.6972;
			}

			if (seconds == 43) {
			document.getElementById('minute').style.opacity = 0.7138;
			}

			if (seconds == 44) {
			document.getElementById('minute').style.opacity = 0.7304;
			}

			if (seconds == 45) {
			document.getElementById('minute').style.opacity = 0.747;
			}

			if (seconds == 46) {
			document.getElementById('minute').style.opacity = 0.7636;
			}

			if (seconds == 47) {
			document.getElementById('minute').style.opacity = 0.7802;
			}

			if (seconds == 48) {
			document.getElementById('minute').style.opacity = 0.7968;
			}

			if (seconds == 49) {
			document.getElementById('minute').style.opacity = 0.8134;
			}

			if (seconds == 50) {
			document.getElementById('minute').style.opacity = 0.83;
			}

			if (seconds == 51) {
			document.getElementById('minute').style.opacity = 0.8466;
			}

			if (seconds == 52) {
			document.getElementById('minute').style.opacity = 0.8632;
			}

			if (seconds == 53) {
			document.getElementById('minute').style.opacity = 0.8798;
			}

			if (seconds == 54) {
			document.getElementById('minute').style.opacity = 0.8964;
			}

			if (seconds == 55) {
			document.getElementById('minute').style.opacity = 0.913;
			}

			if (seconds == 56) {
			document.getElementById('minute').style.opacity = 0.9296;
			}

			if (seconds == 57) {
			document.getElementById('minute').style.opacity = 0.9462;
			}

			if (seconds == 58) {
			document.getElementById('minute').style.opacity = 0.9628;
			}

			if (seconds == 59) {
			document.getElementById('minute').style.opacity = 0.9794;
			}

			if (seconds == 0) {
			document.getElementById('minute').style.opacity = 0.996;
			}//

		//3. Make the hour div increase in opacity as each hour passes (1-24, not 12-12)
		//COMPLETE; LOGIC STATEMENTS IN JAVASCRIPT:

			//0.0416 increase in opacity per hour
			if (hours == 0) {
				document.getElementById('hour').style.opacity = 0;
			}


			if (hours == 1) {
				document.getElementById('hour').style.opacity = 0.0416;
			}


			if (hours == 2) {
				document.getElementById('hour').style.opacity = 0.0832;
			}


			if (hours == 3) {
				document.getElementById('hour').style.opacity = 0.1248;
			}


			if (hours == 4) {
				document.getElementById('hour').style.opacity = 0.1664;
			}


			if (hours == 5) {
				document.getElementById('hour').style.opacity = 0.208;
			}


			if (hours == 6) {
				document.getElementById('hour').style.opacity = 0.2496;
			}


			if (hours == 7) {
				document.getElementById('hour').style.opacity = 0.2912;
			}


			if (hours == 8) {
				document.getElementById('hour').style.opacity = 0.3328;
			}


			if (hours == 9) {
				document.getElementById('hour').style.opacity = 0.3744;
			}


			if (hours == 10) {
				document.getElementById('hour').style.opacity = 0.416;
			}


			if (hours == 11) {
				document.getElementById('hour').style.opacity = 0.4576;
			}


			if (hours == 12) {
				document.getElementById('hour').style.opacity = 0.4992;
			}


			if (hours == 13) {
				document.getElementById('hour').style.opacity = 0.5408;
			}


			if (hours == 14) {
				document.getElementById('hour').style.opacity = 0.5824;
			}


			if (hours == 15) {
				document.getElementById('hour').style.opacity = 0.624;
			}


			if (hours == 16) {
				document.getElementById('hour').style.opacity = 0.6656;
			}


			if (hours == 17) {
				document.getElementById('hour').style.opacity = 0.7072;
			}


			if (hours == 18) {
				document.getElementById('hour').style.opacity = 0.7488;
			}


			if (hours == 19) {
				document.getElementById('hour').style.opacity = 0.7904;
			}


			if (hours == 20) {
				document.getElementById('hour').style.opacity = 0.832;
			}


			if (hours == 21) {
				document.getElementById('hour').style.opacity = 0.8736;
			}


			if (hours == 22) {
				document.getElementById('hour').style.opacity = 0.9156;
			}


			if (hours == 23) {
				document.getElementById('hour').style.opacity = 0.9568;
			}

		//4. Make the right face change color based on the day of the week
		//COMPLETE; LOGIC STATEMENTS IN JAVASCRIPT:
	
			//Sunday: Bright yellow
			if (day == 0) {
			document.getElementById('rightFace').style.backgroundColor = "yellow";
			}	

			//Monday: Blue
			if (day == 1) {
			document.getElementById('rightFace').style.backgroundColor = "rgb(0, 92, 230)";
			}	

			//Tuesday: Dark(er) green than Wednesday but very little d	ifference 
			if (day == 2) {
				document.getElementById('rightFace').style.backgroundColor = "rgb(0, 230, 0)";
			}

			//Wednesday: Green
			if (day == 3) {
				document.getElementById('rightFace').style.backgroundColor = "rgb(26, 255, 26)";
			}	

			//Thursday: Dark green
			if (day == 4) {
				document.getElementById('rightFace').style.backgroundColor = "rgb(51, 204, 51)";
			}	

			//Friday: Orange (make sure it's d	ifferent than minute color)
			if (day == 5) {
				document.getElementById('rightFace').style.backgroundColor = "rgb(255, 102, 0)	";
			}

			//Saturday: Darkish orange/yellow (similar to minute color but not the exact same)
			if (day == 6) {
				document.getElementById('rightFace').style.backgroundColor = "rgb(255, 255, 102)";
			}	

		//5. Make the bottom face change color based on the month
		//COMPLETE; LOGIC STATEMENTS IN JAVASCRIPT:

			//January: light blue-- not bright though
			if (month == 0) {
				document.getElementById('bottomFace').style.backgroundColor = "rgb(0, 204, 255)"
			}

			//February: bright blue-- but light and bright
			if (month == 1) {
				document.getElementById('bottomFace').style.backgroundColor = "rgb(0, 255, 255)"
			}

			//March: Dark brownish purple
			if (month == 2) {
				document.getElementById('bottomFace').style.backgroundColor = "rgb(77, 0, 24)"
			}

			//April: Purple
			if (month == 3) {
				document.getElementById('bottomFace').style.backgroundColor = "rgb(128, 0, 128)"
			}

			//May: periwinkle
			if (month == 4) {
				document.getElementById('bottomFace').style.backgroundColor = "rgb(153, 173, 255)"
			}

			//June: light blue, but darker than January
			if (month == 5) {
				document.getElementById('bottomFace').style.backgroundColor = "rgb(0, 153, 255)"
			}

			//July: Red
			if (month == 6) {
				document.getElementById('bottomFace').style.backgroundColor = "red"
			}

			//August: darkish green
			if (month == 7) {
				document.getElementById('bottomFace').style.backgroundColor = "rgb(51, 204, 51)"
			}

			//September: blood red-- but brighter?
			if (month == 8) {
				document.getElementById('bottomFace').style.backgroundColor = "rgb(204, 0, 0)"
			}

			//October: orange, but not the same color as the hour
			if (month == 9) {
				document.getElementById('bottomFace').style.backgroundColor = "rgb(255, 102, 0)"
			}

			//November: Brown
			if (month == 10) {
				document.getElementById('bottomFace').style.backgroundColor = "rgb(147, 51, 0)"
			}

			//December: really dark red
			if (month == 11) {
				document.getElementById('bottomFace').style.backgroundColor = "rgb(102, 0, 0)"
			}

		//6. Make the left face change based on the time of day (an img of dawn, early morning, midday, etc.)
		//COMPLETE; LOGIC STATEMENTS IN JAVASCRIPT: 

				//dawn = 6AM - 7AM
				if (hours >= 6 && hours < 7) {

				document.getElementById('dawn').style.visibility = 'visible';

				document.getElementById('earlyMorning').style.display = 'none';

				document.getElementById('lateMorning').style.display = 'none';

				document.getElementById('noon').style.display = 'none';

				document.getElementById('afternoon').style.display = 'none';

				document.getElementById('lateAfternoon').style.display = 'none';

				document.getElementById('evening').style.display = 'none';

				document.getElementById('sunset').style.display = 'none';

				document.getElementById('night').style.display = 'none';
				}

				//early morning = 7:01 AM - 9:00 AM
				if (hours >= 7 && hours < 9) {

				document.getElementById('dawn').style.display = 'none';

				document.getElementById('earlyMorning').style.visibility = 'visible';

				document.getElementById('lateMorning').style.display = 'none';

				document.getElementById('noon').style.display = 'none';

				document.getElementById('afternoon').style.display = 'none';

				document.getElementById('lateAfternoon').style.display = 'none';

				document.getElementById('evening').style.display = 'none';

				document.getElementById('sunset').style.display = 'none';

				document.getElementById('night').style.display = 'none';
				}

				//late morning = 9:01 AM - 11:59 AM
				if (hours >= 9 && hours < 12) {

				document.getElementById('dawn').style.display = 'none';

				document.getElementById('earlyMorning').style.display = 'none';

				document.getElementById('lateMorning').style.visibility = 'visible';

				document.getElementById('noon').style.display = 'none';

				document.getElementById('afternoon').style.display = 'none';

				document.getElementById('lateAfternoon').style.display = 'none';

				document.getElementById('evening').style.display = 'none';

				document.getElementById('sunset').style.display = 'none';

				document.getElementById('night').style.display = 'none';
				}

				//noon = 12:00PM - 1:00PM
				if (hours >= 12 && hours < 13) {

				document.getElementById('dawn').style.display = 'none';

				document.getElementById('earlyMorning').style.display = 'none';

				document.getElementById('lateMorning').style.display= 'none';

				document.getElementById('noon').style.visibility = 'visible';

				document.getElementById('afternoon').style.display = 'none';

				document.getElementById('lateAfternoon').style.display = 'none';

				document.getElementById('evening').style.display = 'none';

				document.getElementById('sunset').style.display = 'none';

				document.getElementById('night').style.display = 'none';

				}

				//afternoon = 1:01 PM - 2:59 PM 
				if (hours >= 13 && hours < 15) {

				document.getElementById('dawn').style.display = 'none';

				document.getElementById('earlyMorning').style.display = 'none';

				document.getElementById('lateMorning').style.display= 'none';

				document.getElementById('noon').style.display = 'none';

				document.getElementById('afternoon').style.visibility = 'visible';

				document.getElementById('lateAfternoon').style.display = 'none';

				document.getElementById('evening').style.display = 'none';

				document.getElementById('sunset').style.display = 'none';

				document.getElementById('night').style.display = 'none';

				}

				//late afternoon = 3:00 PM - 5:00 PM 
				if (hours >= 15 && hours < 17) {

				document.getElementById('dawn').style.display = 'none';

				document.getElementById('earlyMorning').style.display = 'none';

				document.getElementById('lateMorning').style.display= 'none';

				document.getElementById('noon').style.display = 'none';

				document.getElementById('afternoon').style.display = 'none';

				document.getElementById('lateAfternoon').style.visibility = 'visible';

				document.getElementById('evening').style.display = 'none';

				document.getElementById('sunset').style.display = 'none';

				document.getElementById('night').style.display = 'none';

				}

				//evening = 5:01 PM - 7:00 PM
				if (hours >= 17 && hours < 19) {

				document.getElementById('dawn').style.display = 'none';

				document.getElementById('earlyMorning').style.display = 'none';

				document.getElementById('lateMorning').style.display= 'none';

				document.getElementById('noon').style.display = 'none';

				document.getElementById('afternoon').style.display = 'none';

				document.getElementById('lateAfternoon').style.display = 'none';

				document.getElementById('evening').style.visibility = 'visible';

				document.getElementById('sunset').style.display = 'none';

				document.getElementById('night').style.display = 'none';
				} 

				//sunset = 7:00 PM - 8:00 PM
				if (hours >= 19 && hours < 20) {

				document.getElementById('dawn').style.display = 'none';

				document.getElementById('earlyMorning').style.display = 'none';

				document.getElementById('lateMorning').style.display= 'none';

				document.getElementById('noon').style.display = 'none';

				document.getElementById('afternoon').style.display = 'none';

				document.getElementById('lateAfternoon').style.display = 'none';

				document.getElementById('evening').style.display = 'none';

				document.getElementById('sunset').style.visibility = 'visible';

				document.getElementById('night').style.display = 'none';

				}

				//nighttime
				if (hours >= 20 && hours <= 0 || hours > 0 && hours < 6) {

				document.getElementById('dawn').style.display = 'none';

				document.getElementById('earlyMorning').style.display = 'none';

				document.getElementById('lateMorning').style.display= 'none';

				document.getElementById('noon').style.display = 'none';

				document.getElementById('afternoon').style.display = 'none';

				document.getElementById('lateAfternoon').style.display = 'none';

				document.getElementById('evening').style.display = 'none';

				document.getElementById('sunset').style.display = 'none';

				document.getElementById('night').style.visibility = 'visible';

				} 

		return {

			day : day,
			hours : hours,
			minutes : minutes,
			seconds : seconds,
			meridien : meridien,
			month : month

		}//end return

	}//end checkTime function

}//end function runClock