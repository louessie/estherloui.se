// wait until the entire page has loaded
// then call the "init" function
$(document).ready(function() {



	// This is where all your project code will go
	function parseWeather( weather ) {

		

		//2nd circle's color based on wind direction???????????

		//weather variables
		var temp = weather.main.temp;
			console.log( temp );

			var extremeTemp = $('#extremeTemp');
			var temp01 = $('#temp01');
			var temp02 = $('#temp02');
			var temp03 = $('#temp03');
			var temp04 = $('#temp04');
			var temp05 = $('#temp05');
			var temp06 = $('#temp06');
			var temp07 = $('#temp07');
			var temp08 = $('#temp08');
			var temp09 = $('#temp09');
			var temp10 = $('#temp10');
			var temp11 = $('#temp11');
			var temp12 = $('#temp12');
			var centerCircle = $('#centerCirlce');
			var middleCircle = $('#middleCircle');
			var windCircle = $('#windCircle');
			

		var forecast = weather.weather[0].main;
			console.log( forecast );

		var windSpeed = weather.wind.speed;
			console.log( windSpeed );

		

		var allWeather = weather.weather[0].id; {

			//fog
			if ( allWeather == "701" ) {
				$('#fog').show();
			}

			else if ( allWeather == "711" ) {
				$('#fog').show();
			}

			else if ( allWeather == "721" ) {
				$('#fog').show();
			}

			else if ( allWeather == "741" ) {
				$('#fog').show();
			}

			else {
				$('#fog').remove();
			}

			//cloudy
			if ( allWeather == "801") {
				$('#clouds').show();
			}

			else if ( allWeather == "802") {
				$('#clouds').show();
			}

			else if ( allWeather == "803") {
				$('#clouds').show();
			}

			else if ( allWeather == "804") {
				$('#clouds').show();
			}

			else {
				$('#clouds').remove();
				
			}

			//rain and drizzle
			if ( allWeather == "300") {
				$('#rain').show();
			}

			else if ( allWeather == "301") {
				$('#rain').show();
			}


			else if ( allWeather == "302") {
				$('#rain').show();
			}


			else if ( allWeather == "310") {
				$('#rain').show();
			}


			else if ( allWeather == "311") {
				$('#rain').show();
			}


			else if ( allWeather == "312") {
				$('#rain').show();
			}


			else if ( allWeather == "321") {
				$('#rain').show();
			}

			else if ( allWeather == "500" ) {
				$('#rain').show();
			}

			else if ( allWeather == "501" ) {
				$('#rain').show();
			}

			else if ( allWeather == "502" ) {
				$('#rain').show();
			}

			else if ( allWeather == "503" ) {
				$('#rain').show();
			}

			else if ( allWeather == "504" ) {
				$('#rain').show();
			}

			else if ( allWeather == "511" ) {
				$('#rain').show();
			}

			else if ( allWeather == "520" ) {
				$('#rain').show();
			}

			else if ( allWeather == "521" ) {
				$('#rain').show();
			}

			else if ( allWeather == "522" ) {
				$('#rain').show();
			}

			else {
				$('#rain').remove();
			}

			//hurricane and tropical storm
			if ( allWeather == "902" ) {
				$('#clouds').show(); 
				$('#rain').show();
				$('#tornado').show();
			}

			else {
				$('#tornado').remove();
			}

			//thunderstorm
			if ( allWeather == "200" ) {
				
				$('#clouds').show();
				$('#rain').show();

			}

			if ( allWeather == "201" ) {
				
				$('#clouds').show();
				$('#rain').show();

			}

			if ( allWeather == "202" ) {
				
				$('#clouds').show();
				$('#rain').show();

			}

			if ( allWeather == "210" ) {
				
				$('#clouds').show();
				$('#rain').show();

			}

			if ( allWeather == "211" ) {
				
				$('#clouds').show();
				$('#rain').show();

			}

			if ( allWeather == "212" ) {
				
				$('#clouds').show();
				$('#rain').show();

			}

			if ( allWeather == "221" ) {
				
				$('#clouds').show();
				$('#rain').show();

			}

			if ( allWeather == "230" ) {
				
				$('#clouds').show();
				$('#rain').show();

			}

			if ( allWeather == "231" ) {
				
				$('#clouds').show();
				$('#rain').show();

			}

			if ( allWeather == "232" ) {
				
				$('#clouds').show();
				$('#rain').show();

			}

			//snow
			if ( allWeather == "600") {
				$('#snow').show();
			}

			else if ( allWeather == "601") {
				$('#snow').show();
			}

			else if ( allWeather == "602") {
				$('#snow').show();
			}

			else if ( allWeather == "611") {
				$('#snow').show();
			}

			else if ( allWeather == "621") {
				$('#snow').show();
			}

			else {
				$('#snow').remove();
			}

		}//end allWeather

	








	




		var cloudOpacity = weather.clouds.all; 

			var opacity = $('#cloudOpacity').css("opacity");
				console.log( opacity );

				if ( cloudOpacity == 0 ) {

					$("#cloudOpacity").css("opacity", "0");
			
				}

				if ( cloudOpacity >=1 && cloudOpacity <=10 ) {

					$("#cloudOpacity").css("opacity", "0.1");

				}

				if ( cloudOpacity >=11 && cloudOpacity <=20 ) {

					$("#cloudOpacity").css("opacity", "0.2");

				}

				if ( cloudOpacity >=21 && cloudOpacity <=30 ) {

					$("#cloudOpacity").css("opacity", "0.3");

				}

				if ( cloudOpacity >=31 && cloudOpacity <=40 ) {

					$("#cloudOpacity").css("opacity", "0.4");

				}

				if ( cloudOpacity >=41 && cloudOpacity <=50 ) {

					$("#cloudOpacity").css("opacity", "0.5");

				}

				if ( cloudOpacity >=51 && cloudOpacity <=60 ) {

					$("#cloudOpacity").css("opacity", "0.6");

				}

				if ( cloudOpacity >=61 && cloudOpacity <=70 ) {

					$("#cloudOpacity").css("opacity", "0.7");

				}

				if ( cloudOpacity >=71 && cloudOpacity <=80 ) {

					$("#cloudOpacity").css("opacity", "0.8");

				}

				if ( cloudOpacity >=81 && cloudOpacity <=90 ) {

					$("#cloudOpacity").css("opacity", "0.9");

				}

				if ( cloudOpacity >=91 && cloudOpacity <=100 ) {

					$("#cloudOpacity").css("opacity", "1");

				}



			var windDirection = weather.wind.deg;
				console.log( windDirection );

			if ( windSpeed >= "100") {
				$('#windCircle').css("animation-duration", "1s")
			}

			if ( windSpeed >= "90" && windSpeed <= "99.99") {
				$('#windCircle').css("animation-duration", "2s")
			}

			if ( windSpeed >= "80" && windSpeed <= "89.99") {
				$('#windCircle').css("animation-duration", "3s")
			}

			if ( windSpeed >= "70" && windSpeed <= "79.99") {
				$('#windCircle').css("animation-duration", "4s")
			}

			if ( windSpeed >= "60" && windSpeed <= "69.99") {
				$('#windCircle').css("animation-duration", "5s")
			}

			if ( windSpeed >= "50" && windSpeed <= "59.99") {
				$('#windCircle').css("animation-duration", "6s")
			}

			if ( windSpeed >= "40" && windSpeed <= "49.99") {
				$('#windCircle').css("animation-duration", "7s")
			}

			if ( windSpeed >= "30" && windSpeed <= "39.99") {
				$('#windCircle').css("animation-duration", "8s")
			}

			if ( windSpeed >= "20" && windSpeed <= "29.99") {
				$('#windCircle').css("animation-duration", "9s")
			}

			if ( windSpeed >= "10" && windSpeed <= "19.99") {
				$('#windCircle').css("animation-duration", "10s")
			}

			if ( windSpeed >= "0.01" && windSpeed <= "9.99") {
				$('#windCircle').css("animation-duration", "11s")
			}

			if ( windSpeed == "0") {
				$('#windCircle').css("animation-duration", "0");
			}











			








		


			if ( windDirection >="0" && windDirection <="22" ) {
				windDirection = "N"; 
				$('#windCircle').css("background", "rgb(0, 51, 204)");
			}


			if ( windDirection >="23" && windDirection <= "67") {
				windDirection = "NE";
				$('#windCircle').css("background", "rgb(51, 204, 204)");
			}

			if ( windDirection >="68" && windDirection <= "114") {
				windDirection = "E";
				$('#windCircle').css("background", "rgb(0, 204, 0)");
			}

			if ( windDirection >="115" && windDirection <= "158") {
				windDirection = "SE";
				$('#windCircle').css("background", "rgb(255, 255, 0)");
			}

			if ( windDirection >="159" && windDirection <= "203") {
				windDirection = "S";
				$('#windCircle').css("background", "rgb(255, 51, 0)");
			}

			if ( windDirection >="204" && windDirection <= "248") {
				windDirection = "SW";
				$('#windCircle').css("background", "rgb(255, 153, 102)");
			}

			if ( windDirection >="249" && windDirection <= "293") {
				windDirection = "W";
				$('#windCircle').css("background", "rgb(255, 102, 0)");
			}

			if ( windDirection >="294" && windDirection <= "338") {
				windDirection = "NW";
				$('#windCircle').css("background", "rgb(204, 0, 204)");
			}

			if ( windDirection >="339" && windDirection <= "360") {
				windDirection = "N";
				$('#windCircle').css("background", "rgb(0, 51, 204)");
			}

			

		if ( temp <="-12" || temp >="101" ) {
			extremeTemp.html('<p>The current temperature in New York City is '+temp+'º F. Stay safe! <br> The current forecast is '+forecast+'. <br> The current wind speed is '+windSpeed+' mph ' +windDirection+'.</p>');
			$("#temp01").hide();
			$("#temp02").hide();
			$("#temp03").hide();
			$("#temp04").hide();
			$("#temp05").hide();
			$("#temp06").hide();
			$("#temp07").hide();
			$("#temp08").hide();
			$("#temp09").hide();
			$("#temp10").hide();
			$("#temp11").hide();
			$("#temp12").hide();
		}	
			
		else if ( temp <= "-11" && temp <= "0") {
			temp01.html('<p>The current temperature in New York City is '+temp+'º F.<br> The current forecast is '+forecast+'. <br> The current wind speed is '+windSpeed+' mph ' +windDirection+'.</p>');
			$("#temp02").hide();
			$("#temp03").hide();
			$("#temp04").hide();
			$("#temp05").hide();
			$("#temp06").hide();
			$("#temp07").hide();
			$("#temp08").hide();
			$("#temp09").hide();
			$("#temp10").hide();
			$("#temp11").hide();
			$("#temp12").hide();
		}

		else if ( temp >= "-10.01" && temp <= "0") {
			temp02.html('<p>The current temperature in New York City is '+temp+'º F.<br> The current forecast is '+forecast+'. <br> The current wind speed is '+windSpeed+' mph ' +windDirection+'.</p>');
			$("#temp03").hide();
			$("#temp04").hide();
			$("#temp05").hide();
			$("#temp06").hide();
			$("#temp07").hide();
			$("#temp08").hide();
			$("#temp09").hide();
			$("#temp10").hide();
			$("#temp11").hide();
			$("#temp12").hide();
		}

		else if ( temp >="1.01" && temp <="10") {
			temp03.html('<p>The current temperature in New York City is '+temp+'º F.<br> The current forecast is '+forecast+'. <br> The current wind speed is '+windSpeed+' mph ' +windDirection+'.</p>');
			$("#temp04").hide();
			$("#temp05").hide();
			$("#temp06").hide();
			$("#temp07").hide();
			$("#temp08").hide();
			$("#temp09").hide();
			$("#temp10").hide();
			$("#temp11").hide();
			$("#temp12").hide();
		}

		else if ( temp >="11.01" && temp <="20") {
			temp04.html('<p>The current temperature in New York City is '+temp+'º F.<br> The current forecast is '+forecast+'. <br> The current wind speed is '+windSpeed+' mph ' +windDirection+'.</p>');
			$("#temp05").hide();
			$("#temp06").hide();
			$("#temp07").hide();
			$("#temp08").hide();
			$("#temp09").hide();
			$("#temp10").hide();
			$("#temp11").hide();
			$("#temp12").hide();
		} 

		else if ( temp >="21.01" && temp <="30") {
			temp05.html('<p>The current temperature in New York City is '+temp+'º F.<br> The current forecast is '+forecast+'. <br> The current wind speed is '+windSpeed+' mph ' +windDirection+'.</p>');
			$("#temp06").hide();
			$("#temp07").hide();
			$("#temp08").hide();
			$("#temp09").hide();
			$("#temp10").hide();
			$("#temp11").hide();
			$("#temp12").hide();
		}

		else if (temp >="31.01" && temp <="40") {
			temp06.html('<p>The current temperature in New York City is '+temp+'º F.<br> The current forecast is '+forecast+'. <br> The current wind speed is '+windSpeed+' mph ' +windDirection+'.</p>');
			$("#temp07").hide();
			$("#temp08").hide();
			$("#temp09").hide();
			$("#temp10").hide();
			$("#temp11").hide();
			$("#temp12").hide();
		}

		else if ( temp >="41.01" && temp<="50") {
			temp07.html('<p>The current temperature in New York City is '+temp+'º F.<br> The current forecast is '+forecast+'. <br> The current wind speed is '+windSpeed+' mph ' +windDirection+'.</p>');
			$("#temp08").hide();
			$("#temp09").hide();
			$("#temp10").hide();
			$("#temp11").hide();
			$("#temp12").hide();
		}

		else if (temp >="50.01" && temp<="60") {
			temp08.html('<p>The current temperature in New York City is '+temp+'º F.<br> The current forecast is '+forecast+'. <br> The current wind speed is '+windSpeed+' mph ' +windDirection+'.</p>');
			$("#temp09").hide();
			$("#temp10").hide();
			$("#temp11").hide();
			$("#temp12").hide();
		}

		else if (temp >="61.01" && temp<="70") {
			temp09.html('<p>The current temperature in New York City is '+temp+'º F.<br> The current forecast is '+forecast+'. <br> The current wind speed is '+windSpeed+' mph ' +windDirection+'.</p>');
			$("#temp10").hide();
			$("#temp11").hide();
			$("#temp12").hide();
		}

		else if ( temp >= "71.01" && temp <= "80" ) {
			temp10.html('<p>The current temperature in New York City is '+temp+'º F.<br> The current forecast is '+forecast+'. <br> The current wind speed is '+windSpeed+' mph ' +windDirection+'.</p>');
			$("#temp11").hide();
			$("#temp12").hide();
		}

		else if ( temp >= "81.01" && temp <= "90" ) {
			temp11.html('<p>The current temperature in New York City is '+temp+'º F.<br> The current forecast is '+forecast+'. <br> The current wind speed is '+windSpeed+' mph ' +windDirection+'.</p>');
			$("#temp12").hide();
		}

		else if ( temp >= "91.01" && temp <= "100" ) {
			temp12.html('<p>The current temperature in New York City is '+temp+'º F.<br>The current forecast is '+forecast+'. <br>The current wind speed is '+windSpeed+' mph ' +windDirection+'.</p>');
		}

		else {
			temp12.html('<p>Unable to get current temperature. </p>')
		}

		//END TEMPERATURE


		//FORECAST
		

		

		




		






		
		

		


		// log the entire weather object to the console
		console.log(weather);













		

	}

	//load example data for testing purposes. comment this out when you are ready to use live data, and uncomment $.ajax
	/*parseWeather( exampleData );




	// get the current weather conditions
	// aside from changing your API key, do not edit this
	//Comment out live data (*//*) to use static data (example_weather.json). Other wise, keep $.ajax uncommented out. */
	
	$.ajax({

		// replace "YOUR_APP_ID" with your app ID
		url : "http://api.openweathermap.org/data/2.5/weather?zip=10011,us&units=imperial&appid=ee7a841143ed5f466ab503cffa24d061",
		dataType : "jsonp",

		// if the query returns results ...
		success : function( weatherData ) {

			// call our function to parse the weather
			// pass the data we receive from openweathermap.org
			parseWeather( weatherData );

			console.log(weatherData)

		},

		error : function() {

			console.log('Something went wrong with your request :(  Check that you\'re using the correct API key (your App ID)');

		}

	}); //end ajax request */
	

}); // end document.ready












