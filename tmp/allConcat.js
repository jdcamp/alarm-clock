var googleKey = require('./../.env').googleApiKey;


$(document).ready(function() {
    $('#linkedin-form').submit(function(event) {
        event.preventDefault();
        $.get('https://maps.googleapis.com/maps/api/place/autocomplete/json?input=Portland&types=(cities)&language=en_GB&key=' + googleKey).then(function(response){
          console.log(response);
          $('.showLinkedIn').append(response);
        })
        .fail(function(error) {
            $('.showLinkedIn').text(error.responseJSON.message);
          });
    });
});

$(document).ready(function() {
    setInterval(function() {
        $('#time').text(moment().format("hh:mm:ss"));
    }, 1000);

    $('#alarm-button').submit(function(event) {
        event.preventDefault();
        var alarmTime = $('input[name=time]').val();
        console.log(alarmTime);
        setInterval(function() {
            var currentTime = $('#time').text();
            if (currentTime === alarmTime) {
                $('#alarm').text("RingRingRing");
            }
        }, 1000);
    });
});

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
