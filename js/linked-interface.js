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
