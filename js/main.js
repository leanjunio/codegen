$(document).ready(function() {

	// Get quotes on load...
   newQuote();

   // As well as when the button is clicked...
   $('.new-quote').click(function()	{
   	newQuote();
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
    		$('.author-container').text(data.quoteAuthor);
    	}
    });
}