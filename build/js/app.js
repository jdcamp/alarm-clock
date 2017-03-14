(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.weatherApiKey = "0c6730253cae51915d9fb2a949f1c432";
exports.clientid = "86p8b2kv7vgwkq";
exports.secret = "1uWpjOnOkeYsnS5Y";
exports.googleApiKey = "AIzaSyDCMlUdzJPToe_-5OOUq9AKL6etgolhnRs";

},{}],2:[function(require,module,exports){
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

},{"./../.env":1}]},{},[2]);
