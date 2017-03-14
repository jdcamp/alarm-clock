$(document).ready(function() {
    setInterval(function() {
        $('#time').text(moment().format("hh:mm:ss"));
    }, 1000);

    var alarm = "9:14:00 am";

    setInterval(function(){
      var currentTime = $('#time').text();
      if (currentTime === alarm){
        $('#alarm').text("RingRIngRIng");
      }
    }, 1000);



    $('#alarm-button').submit(function(event){
      event.preventDefault();
      var alarmTime = $('input[name=time]').val();
      console.log(alarmTime);
      setInterval(function(){
        var currentTime = $('#time').text();
        if (currentTime === alarmTime){
          $('#alarm').text("RingRIngRIng");
        }
      }, 1000);
    });
});
