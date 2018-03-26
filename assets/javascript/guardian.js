
var queryURL = "https://cors-anywhere.herokuapp.com/http://content.guardianapis.com/search?from-date=2018-01-31&order-by=newest&production-office=us&section=science&q=science%20&api-key=8d47b853-c8aa-449b-977f-959d77e41235"


$.ajax({
    url: queryURL,
    method: "GET"
  })
  
  .then(function(response) {
for (var i = 0; i < 10; i++){
    var articleTitle = $("<h3>").html("<a href = ' "+ response.response.results[i].webUrl + " '>"+response.response.results[i].webTitle + "</a>")
    //var articleURL = $("<h4>").text(response.response.results[i].webUrl)
    // var articleURL = $("<p>").text("") 
    // articleURL.append("<a href = ' "+ response.response.results[i].webUrl + " '> Access Article </a>")
    var articleDate = response.response.results[i].webPublicationDate
    var datePretty = moment(articleDate).format("LLL")

    $("#article-div").append(articleTitle, datePretty)
}
});