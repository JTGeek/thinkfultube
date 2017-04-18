searchFunction() {
  $("form").on("submit", function (e) {
    e.preventDefault();
    // prepare the request
    function handleAPILoaded();
  });
}


function handleAPILoaded() {
  $('#search-button').attr('disabled', false);
}

// Search for a specified string.
function search() {
  var q = $('#query').val();
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet',
    type: 'video',
  });

  request.execute(function (response) {
    var str = JSON.stringify(response.result);
    $('#results').html('<pre>' + str + '</pre>');
  });
}


gapi.client.setApiKey("AIzaSyCsxyRbIpVG8tvQDYbpY97ZL762_F45QWc");
gapi.client.load("youtube", "v3", searchFunction());
}