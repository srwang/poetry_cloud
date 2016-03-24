var request = require("request"),
	cheerio = require("cheerio"),
	url = "http://www.poetryfoundation.org/poetrymagazine/poem/" + 252078;
  
request(url, function (error, response, body) {
	if (!error) {
		var $ = cheerio.load(body),
			title = $('#poem-top > h1').text(),
			author = $('#poemwrapper > span.author > a').text(),
			bodyHtml = $('#poem > div.poem').html();
		  
		console.log(title);
		console.log(author);  
		console.log(bodyHtml);
	} else {
		console.log("We’ve encountered an error: " + error);
	}
});