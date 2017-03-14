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
