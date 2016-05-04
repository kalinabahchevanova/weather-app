$(document).ready(function(){
	$("#temp").text("15");
	$("#city").text("Sofia");
	$("#weather").text("Rainy");
	var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
	var now = new Date();
	var day = days[ now.getDay() ];
	$("#date").text(day);
});