var apiKey = require('./../.env').weatherApiKey;

$(document).ready(function() {

  $('#weather-form').submit(function(event) {
    event.preventDefault();
    var city = $('input[name=location]').val();
    console.log(city);

    $('.showWeather').text("The city you have chosen is " + city + ".");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey + '&units=imperial').then( function(response) {
      $('.showWeather').append('<h3>The weather in ' + response.name + ' is ' + response.main.temp + ' degrees farenheit</h3');

    })

    .fail(function(error) {
        $('.showWeather').text(error.responseJSON.message);
      });


  });
});
