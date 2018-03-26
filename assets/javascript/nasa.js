var url = "https://cors-anywhere.herokuapp.com/https://api.nasa.gov/planetary/apod?api_key=z885ogKVjU8Rs3eOOlDNmgPn077x48SOwi4szdmg";

// build up your div

var wrapper = $("<div class='card-wrapper' id='nasa-card'>")
var row = $("<div class='row'>")
var col1 = $("<div class='col-md-4'>")
var col2 = $("<div class='col-md-8'>")
var hrefLink = $("<a id='apod_img_link' target='_blank'>")
var img = $('<img id="apod_img_id" width="250px">')
var vid = $('<iframe id="apod_vid_id" type="text/html" width="640" height="385" frameborder="0"></iframe>')
var copyRightP = $('<p id="copyright"></p>')
var title = $('<h3 id="apod_title"></h3>')
var explP = $(' <p id="apod_explanation"></p>')


apiCall()
wrapper.append(row)
row.append(col1)
row.append(col2)
col1.append(hrefLink)
hrefLink.append(img)
col1.append(vid)
col2.append(title)
col2.append(explP)
wrapper.append(copyRightP)

$('#potd-card').append(wrapper)





function apiCall() {
    $.ajax({
        url: url,
        success: function (result) {
            if ("copyright" in result) {
                $("#copyright").text("Image Credits: " + result.copyright);
            } else {
                $("#copyright").text("Image Credits: " + "Public Domain");
            }

            if (result.media_type == "video") {
                $("#apod_img_id").css("display", "none");
                $("#apod_vid_id").attr("src", result.url);
            } else {
                $("#apod_vid_id").css("display", "none");
                $("#apod_img_id").attr("src", result.url)
                $("#apod_img_link").attr("href", result.url);
            }
            $("#returnObject").text(JSON.stringify(result, null, 4));
            $("#apod_explanation").text(result.explanation);
            $("#apod_title").text(result.title);
        }
    })
}
