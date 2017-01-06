// Random Quote Generator
var url = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";
var getQuote = function(data) {
  $(".quote-text").text(data.quoteText);
  var quot = 'https://twitter.com/intent/tweet?text=' + data.quoteText + ' Author ' + data.quoteAuthor + ' @leanjunio';
  if (data.quoteAuthor === '') {
    data.quoteAuthor = 'Unknown';
  }
  $(".author-Name").text('Author: ' + data.quoteAuthor);
  $(".twitter-share-button").attr("href", quot);
};

$(document).ready(function() {
  $.getJSON(url, getQuote, 'jsonp');

});
$("#new-quote").click(function() {
  $.getJSON(url, getQuote, 'jsonp');
});


//animation stuff
$(document).ready(function() {
  $('.button').click(function() {
    $('body').css('background', '#' + random_colour());
  });
});

$(document).ready(function() {
  $('.button').click(function() {
    $('.quoteBox').css('background', '#' + random_colour());
  });
});

function random_colour() {
  return Math.floor(Math.random() * 16777215).toString(16);
}

$(document).ready(function() {
  $("#theBox").fadeIn();
});