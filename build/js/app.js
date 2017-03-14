(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.weatherApiKey = "0c6730253cae51915d9fb2a949f1c432";
exports.indeedApiKey = "3003404012334777";
exports.trimetApiKey = "2E7EC6E46969391EDE94B5650";

},{}],2:[function(require,module,exports){
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
