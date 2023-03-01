window.onload = runClock;

function runClock() {

	var now = new Date();
	var pageTitle = document.head.getElementsByTagName('title')[0];
	var container = document.getElementById('container');
	var currentTime = document.getElementById('currentTime');
	var body = document.getElementsByTagName('body')[0];

	var currentDay = getDay(checkTime());

	setInterval( function() {

		now = checkTime();
		updateTitle( now );
		getCurrentTime( now );
		
	}, 1000 )

	function getCurrentTime( now ) {

		currentTime.innerHTML = now.excuse;	
		
	}

	function getDay( now ) {

		var day = "";
		return day; 
		meridien; 

	}

	function updateTitle( now ) {

		 pageTitle.innerText = now.hours+":"+now.minutes+":"+
		 	now.seconds+" "+now.currentMood;

	}

	function checkTime() {

		now = new Date();
		var meridien = "AM";
		var hours = now.getHours();
		var minutes = now.getMinutes();
		var seconds = now.getSeconds();
		var day = now.getDay();

		if (day == 1) {
			
			body.className = "monday";

			if (hours <=5) {
				excuse = "You should be sleeping!";
			}

			if (hours == 6) {
				excuse = "It's Monday morning. The world is practically your oyster.";
			}

			if (hours == 7) {
				excuse = "Get some coffee to help you wake up!";
			}

			if (hours == 8) {
				excuse = "Shouldn't you be eating breakfast?";
			}

			if (hours == 9) {
				excuse = "Give your brain some time to wake up!";
			}

			if (hours == 10) {
				excuse = "Did you make sure the plants are watered?";
			}

			if (hours == 11) {
				excuse = "Lunch is in an hour...do you really think you'll be able to do enough work in such a short amount of time?";
			}

			if (hours == 12) {
				excuse = "You should be eating lunch!";
			}

			if (hours == 13) {
				excuse = "Give yourself some time to digest your lunch!";
			}

			if (hours == 14) {
				excuse = "Seriously, you have the entire week do it.";
			}

			if (hours == 15) {
				excuse = "Just say you had food poisoning.";
			}

			if (hours == 16) {
				excuse = "Naps have been shown to really increase productivity.";
			}

			if (hours == 17) {
				excuse = "Did you remember to go grocery shopping?";
			
			}

			if (hours == 18) {
				excuse = "Dinner time!";
			}

			if (hours == 19) {
				excuse = "Isn't your show on?";
			}

			if (hours == 20) {
				excuse = "When's the last time you've had a heart-to-heart with your best friend?";
			}

			if (hours == 21) {
				excuse = "No one produces their best results when they're tired.";
			}

			if (hours == 22) {
				excuse = "Aren't you tired?";
			}

			if (hours == 23) {
				excuse = "You should be sleeping!";
			}

		}

		if (day == 2) {

			body.className = "tuesday";
			
			if (hours <= 5) {
				excuse = "You should be sleeping!";
			}

			if (day == 2 && hours == 6) {
				excuse = "Has the sun even come up yet?";
			}

			if (day == 2 && hours == 7) {
				excuse = "Has anything important ever happened at 7 in the morning?";
			}

			if (day == 2 && hours == 8) {
				excuse = "Breakfast is the most important meal of the day!";
			}

			if (day == 2 && hours == 9) {
				excuse = "Did you remember to unplug the iron?";
			}

			if (day == 2 && hours == 10) {
				excuse = "Have you checked out the new stuff on Netflix yet?";
			}

			if (day == 2 && hours == 11) {
				excuse = "Have you ever thought about how time is merely a human construct?";
			}

			if (day == 2 && hours == 12) {
				excuse = "When's the last time you flossed?";
			}

			if (day == 2 && hours == 13) {
				excuse = "You should really eat lunch.";
			}

			if (day == 2 && hours == 14) {
				excuse = "You should call your parents. It would make their day.";
			}

			if (day == 2 && hours == 15) {
				excuse = "Do you think that there are any world records you could beat?";
			}

			if (day == 2 && hours == 16) {
				excuse = "Doctors recommend at least one hour of exercise a day.";
			}

			if (day == 2 && hours == 17) {
				excuse = "Everyone's finising work now...why should you have to be the exception?";
			
			}

			if (day == 2 && hours == 18) {
				excuse = "The day is practically over now. What could you really get done?";
			}

			if (day == 2 && hours == 19) {
				excuse = "Getting into fights on the Youtube comments section can actually be really rewarding.";
			}

			if (day == 2 && hours == 20) {
				excuse = "When's the last time you've gone in your basement?";
			}

			if (day == 2 && hours == 21) {
				excuse = "You should treat yourself to take out!";
			}

			if (day == 2 && hours == 22) {
				excuse = "That book has been sitting on your shelf for weeks now...";
			}

			if (day == 2 && hours == 23) {
				excuse = "You should be sleeping!";
			}

		}

		if (day == 3) {

			body.className = "wednesday"
			
			if (hours <= 5) {
				excuse = "You should be sleeping!"
			}

			if (day == 3 && hours == 6) {
				excuse = "Actually, the early bird does NOT get the worm."
			}

			if (day == 3 && hours == 7) {
				excuse = "Have you backed up all your files yet?"
			}

			if (day == 3 && hours == 8) {
				excuse = "Showering can really help you wake up and get focused."
			}

			if (day == 3 && hours == 9) {
				excuse = "Breakfast is brain food!"
			}

			if (day == 3 && hours == 10) {
				excuse = "Do you think you overanalyzed that text message enough?"
			}

			if (day == 3 && hours == 11) {
				excuse = "It would probably look really nice if you color-coded your bookshelf."
			}

			if (day == 3 && hours == 12) {
				excuse = "No point in denying yourself a much-needed lunch break."
			}

			if (day == 3 && hours == 13) {
				excuse = "Siestas are actually a thing in a lot of places."
			}

			if (day == 3 && hours == 14) {
				excuse = "It's really important to check for termites, before it's too late."
			}

			if (day == 3 && hours == 15) {
				excuse = "Have you ever started a collection of anything?"
			}

			if (day == 3 && hours == 16) {
				excuse = "Fresh air is good for overall well-being."
			}

			if (day == 3 && hours == 17) {
				excuse = "Have you ever watched a sunset?"
			}

			if (day == 3 && hours == 18) {
				excuse = "Aimlessly browsing the internet can be a great inspiration for new ideas."
			}

			if (day == 3 && hours == 19) {
				excuse = "Dinner time!"
			}

			if (day == 3 && hours == 20) {
				excuse = "You made it halfway through the week! You should reward yourself."
			}

			if (day == 3 && hours == 21) {
				excuse = "Why would you work all week on something when you could get it done in a day?"
			}

			if (day == 3 && hours == 22) {
				excuse = "It's too late to start anything now."
			}

			if (day == 3 && hours == 23) {
				excuse = "You should be sleeping!"
			}

		}

		if (day == 4) {

			body.className = "thursday"
			
			if (hours <=5) {
				excuse = "You should be sleeping!"
			}

			if (day == 4 && hours == 6) {
				excuse = "You managed to wake up this early. At least that's something."
			}

			if (day == 4 && hours == 7) {
				excuse = "Be real, when's the last time you just chilled out?"
			}

			if (day == 4 && hours == 8) {
				excuse = "There's almost nothing as important as eating breakfast."
			}

			if (day == 4 && hours == 9) {
				excuse = "Do you think you could actually burn stuff with a magnifying glass?"
			}

			if (day == 4 && hours == 10) {
				excuse = "Go to a fortune teller. They'll tell you have more time to do your work too."
			}

			if (day == 4 && hours == 11) {
				excuse = "How long do you think you can stare directly into the sun?"
			}

			if (day == 4 && hours == 12) {
				excuse = "Noon was made for eating lunch."
			}

			if (day == 4 && hours == 13) {
				excuse = "Spend this time to rationalize your procrastination habits."
			}

			if (day == 4 && hours == 14) {
				excuse = "Something really important might happen today. You should set aside all your obligations, just in case."
			}

			if (day == 4 && hours == 15) {
				excuse = "Have you checked all the expiration dates on your food?"
			}

			if (day == 4 && hours == 16) {
				excuse = "Why do you even need an excuse to enjoy your life?!"
			}

			if (day == 4 && hours == 17) {
				excuse = "Make a playlist to help you concentrate for when you do your work."
			}

			if (day == 4 && hours == 18) {
				excuse = "When's the last time you went out for dinner?"
			}

			if (day == 4 && hours == 19) {
				excuse = "Extended periods of meditation can really help you clear your mind and focus."
			}

			if (day == 4 && hours == 20) {
				excuse = "The evening is a time for relaxation."
			}

			if (day == 4 && hours == 21) {
				excuse = "Friday is in a few hours...who doesn't enjoy themselves on Fridays?"
			}

			if (day == 4 && hours == 22) {
				excuse = "Take a relaxing bath to help you get a good night's sleep!"
			}

			if (day == 4 && hours == 23) {
				excuse = "You should be sleeping!"
			}

		}

		if (day == 5)  {
			
			body.className = "friday"

			if (hours <=5) {
				excuse = "You should be sleeping!"
			}

			if (day == 5 && hours == 6) {
				excuse = "Everyone takes it easy on Fridays. Why should you have to be the exception?"
			}

			if (day == 5 && hours == 7) {
				excuse = "Have you tried that new...place?"
			}

			if (day == 5 && hours == 8) {
				excuse = "Life can go so fast. Don't feel guilty about moving at your own pace."
			}

			if (day == 5 && hours == 9) {
				excuse = "Have you eaten?"
			}

			if (day == 5 && hours == 10) {
				excuse = "The only excuse you need today is that it's Friday."
			}

			if (day == 5 && hours == 11) {
				excuse = "Take an extended lunch. Whatever.";
			}

			if (day == 5 && hours == 12) {
				excuse = "Enjoying your much-needed and well-deserved lunch break?"
			}

			if (day == 5 && hours == 13) {
				excuse = "Take a little time to reward yourself for all the hard work you've done this week!"
			}

			if (day == 5 && hours == 14) {
				excuse = "One...more...episode..."
			}

			if (day == 5 && hours == 15) {
				excuse = "Is it a crime to relax?"
			}

			if (day == 5 && hours == 16) {
				excuse = "Damn. It's already four. I guess you can't start till tomorrow."
			}

			if (day == 5 && hours == 17) {
				excuse = "Not doing it for another hour won't make any difference."
			}

			if (day == 5 && hours == 18) {
				excuse = "Have you had dinner?"
			}

			if (day == 5 && hours == 19) {
				excuse = "If you got paid today, you should treat yourself to something special!"
			}

			if (day == 5 && hours >= 20) {
				excuse = "Party time!"
			}

		}

		if (day == 6) {
			
			body.className = "saturday"

			if (hours <=2) {
				excuse = "Party time!"
			}

			if (day == 6 && hours ==3) {
				excuse = "You should be sleeping!"
			}

			if (day == 6 && hours == 4) {
				excuse = "You should be sleeping!"
			}

			if (day == 6 && hours == 5) {
				excuse = "You should be sleeping!"
			}

			if (day == 6 && hours == 6) {
				excuse = "You should be sleeping (in)!"
			}

			if (day == 6 && hours == 7) {
				excuse = "You should be sleeping (in)!"
			}

			if (day == 6 && hours == 8) {
				excuse = "You should be sleeping (in)!"
			}

			if (day == 6 && hours == 9) {
				excuse = "You should be sleeping (in)!"
			}

			if (day == 6 && hours == 10) {
				excuse = "You should be sleeping (in)!"
			}

			if (day == 6 && hours == 11) {
				excuse = "Saturday is the best day of the week. Don't waste it."
			}

			if (day == 6 && hours == 12) {
				excuse = "Have a leisurely brunch with some friends!"
			}

			if (day == 6 && hours == 13) {
				excuse = "Take a nap. Who cares?"
			}

			if (day == 6 && hours == 14) {
				excuse = "You've had such a long week..."
			}

			if (day == 6 && hours == 15) {
				excuse = "You have all of tomorrow to do it."
			}

			if (day == 6 && hours == 16) {
				excuse = "Just do it tomorrow."
			}

			if (day == 6 && hours == 17) {
				excuse = "If you're hungover, take it easy. Otherwise, just take it easy."
			}

			if (day == 6 && hours == 18) {
				excuse = "Make sure you have a full stomach before you get wasted!"
			}

			if (day == 6 && hours == 19) {
				excuse = "Make some plans with your friends!"
			}

			if (day == 6 && hours >= 20) {
				excuse = "Party time!"
			}

		}	

		if ( day == 0 ) {

			body.className = "sunday";
			
			if (hours <= 2) {
				excuse = "Party time!";	
			}

			if (hours == 3) {
				excuse = "You should be sleeping!"
			}

			if (hours == 4) {
				excuse = "You should be sleeping!"
			}

			if (hours == 5) {
				excuse = "You should be sleeping!"
			}

			if (hours == 6) {
				excuse = "You should be sleeping (in)!"
			}

			if (hours == 7) {
				excuse = "You should be sleeping (in)!"
			}

			if (hours == 8) {
				excuse = "You should be sleeping (in)!"
			}

			if (hours == 9) {
				excuse = "You should be sleeping (in)!"
			}

			if (hours == 10) {
				excuse = "You should be sleeping (in)!"
			}

			if (hours == 11) {
				excuse = "If you can't finish it in time, just say you had a family emergency. No one's going to accuse you of lying about that."
			}

			if (hours == 12) {
				excuse = "Did you know that the smarter you are, the more time you spend daydreaming?"
			}

			if (hours == 13) {
				excuse = "Get some brain food!"
			}

			if (hours == 14) {
				excuse = "!T'$ $0 FUN 2 TYP3 L!K3 TH!$!!!!!"
			}

			if (hours == 15) {
				excuse = "You haven't checked Facebook in 5 minutes. That's a problem.";
			}

			if (hours == 16) {
				excuse = "It's never the end of the world. Just remember that."
			}

			if (hours == 17) {
				excuse = "Honestly, you're kind of fucked."
			}

			if (hours >= 18) {
				excuse = "WHY DIDN'T YOU DO YOUR WORK?!?!?!!?!?!?"
			}

		}

		return {
			day : day,
			hours : hours,
			minutes : minutes,
			seconds : seconds,
			meridien : meridien,
			currentMood : "Excuse the Time",
			excuse : excuse
		}

	}

	fadeIn();

	function fadeIn() {

		document.getElementById('project-wrapper').className += "fade-in";
	
	} 

}





















