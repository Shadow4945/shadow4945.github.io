$(document).ready(function () {
    $.getJSON("/scripts/quote.json", function (data) {
        //console.log(data.quote1.message);
        var numQuotes = 0;
        $.each(data, function (i, e) {
            numQuotes++;
        });
        //console.log(numQuotes);

        var quoteChoice = Math.floor((Math.random() * numQuotes) + 1);
        console.log(quoteChoice);
        $.each(data, function (i, e) {
            //console.log("In each loop");
            var quoteNum = i.replace(/^\D+/g, '');
            if (quoteNum == quoteChoice) {
                console.log(e.message);
                $(".motd").append("<h3>Message Of The Day</h3>");
                $(".motd").append("<q>" + e.message + "</q>");
            }
        });
    });
});