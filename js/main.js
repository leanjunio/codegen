var twitterQuote = '';

$(document).ready(function() {

	// Get quotes on load...
   newQuote();
   twitterQuote = 'empty';

   // As well as when the button is clicked...
   $('.new-quote').click(function()	{
   	newQuote();
   })

   $('.tweet').click(function() {
      window.open("https://twitter.com/intent/tweet?text=" + twitterQuote + ' App by @leanjunio');
      //console.log(twitterQuote);
   })
});

function newQuote(quote) {
	$.ajax({
    	type: 'GET',
    	dataType:'JSON',
    	async: false,
    	url: 'http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?',
    	success: function(data)	{
    		$('.quote-container').text(data.quoteText);

        if(!data.quoteAuthor) {
          $('.author-container').text('Anonymous');
        } else  {
          $('.author-container').text(data.quoteAuthor);
        }
        twitterQuote = data.quoteText + ' by: ' + data.quoteAuthor;
    	}
    });
}