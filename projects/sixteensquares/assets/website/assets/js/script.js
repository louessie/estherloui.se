// all JavaScript goes in this file

// 1. Make a function that adds a square to the page
// 2. Add 16 squares to the page
// 3. Style those squares (outside of class)
// 

var min;
var max = 16;

//this is called a loop!
for ( min = 1; min <= max; min++ ) {

//do stuff

ekAddSquare(min);

//increase min by a value of 1
//ex. if min = 1, min = min+1
}

function ekAddSquare(number) {

	var addClass = ""; 

	console.log('ekAddSquare ' + number );

	
	if (number <=4 && number % 2)
		{addClass = "ekbody-type-1"}

	if (number <=4 && number == 2 || number == 4)
		{addClass = "ekbody-type-2"}

	if (number <=8 && number >=4 && number % 2)
		{addClass = "ekbody-type-2"}

	if (number <=8 && number >=4 && number == 6 || number ==8)
		{addClass = "ekbody-type-1"}

	if (number <=12 && number >=8 && number % 2)
		{addClass = "ekbody-type-1"}

	if (number <=12 && number >=8 && number == 10 || number == 12)
		{addClass = "ekbody-type-2"}

	if (number <=16 && number >=12 && number % 2)
		{addClass = "ekbody-type-2"}

	if (number <=16 && number >=12 && number == 14 || number ==16)
		{addClass = "ekbody-type-1"}

	if (number == 1)
		{addClass = "ekanimate-1"}

	if (number == 2 || number == 13)
		{addClass = "ekanimate-2"}

	if (number == 3 || number == 14)
		{addClass = "ekanimate-3"}

	if (number == 4 || number == 15)
		{addClass = "ekanimate-4"}

	if (number == 5)
		{addClass = "ekanimate-5"}

	if (number == 6)
		{addClass = "ekanimate-6"}

	if (number == 7)
		{addClass = "ekanimate-7"}

	if (number == 8)
		{addClass = "ekanimate-8"}

	if (number == 9)
		{addClass = "ekanimate-9"}

	if (number == 10)
		{addClass = "ekanimate-10"}

	if (number == 11)
		{addClass = "ekanimate-11"}

	if (number == 12)
		{addClass = "ekanimate-12"}

	if (number == 16)
		{addClass = "ekanimate-16"}

	





	







	
	document.write('<div class="square ek '+ addClass +'"></div>');

}

// ekAddSquare();















