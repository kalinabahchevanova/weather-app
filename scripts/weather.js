$(document).ready(function(){
	$("#searchButton").click(function(){
		var searchCity=$("#searchCity").val();
		var api="http://api.openweathermap.org/data/2.5/weather?q="+searchCity+"&units=metric&appid=effc043e317bfe1280e0d6f0b72fa509";
		$.getJSON( api, function(data){
			$("#temp").text(data.main.temp);
			$("#weather").text(data.weather[0].main);
		});
		var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
		var now = new Date();
		var day = days[ now.getDay() ];
		$("#date").text(day);
	});
	
});