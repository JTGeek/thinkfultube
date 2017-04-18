function loadAPIClientInterfaces() {
  gapi.client.setApiKey("AIzaSyCsxyRbIpVG8tvQDYbpY97ZL762_F45QWc")
  gapi.client.load('youtube', 'v3', function () {
    handleAPILoaded();
  });
}

function handleAPILoaded() {
  $('#submitQ').on("submit", function (event) {
    event.preventDefault();
    console.log('passed submit button');

    var q = $('#searchBox').val();
    console.log(q);
    var request = gapi.client.youtube.search.list({
      q: q,
      part: 'snippet',
      type: 'video',
    });

    request.execute(function (response) {
      var str = JSON.stringify(response.result);
      $('#results').html('<pre>' + str + '</pre>');
    });
  })
};



console.log("test 1");


//gapi.client.setApiKey("AIzaSyCsxyRbIpVG8tvQDYbpY97ZL762_F45QWc");
//gapi.client.load('youtube', 'v3', function () {
//handleAPILoaded();
//});