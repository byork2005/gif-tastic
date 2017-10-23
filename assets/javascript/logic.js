$(document).ready(function()
{

    var topics = ["Superman","Batman","The Flash","Wonder Woman","Aquaman"];

    function makeButtons() 
    {
        $(".topicButtons").empty();
        for (var i = 0; i < topics.length; i++)
        {
            var newButton = $("<button class='buttons'>");
            newButton.attr("data-value", topics[i])
            newButton.text(topics[i]);
            $(".topicButtons").append(newButton);
        }    
    }

    makeButtons();

    $(".buttons").on("click", function()
    {
        console.log("event")
        var buttonTopic = $(this).attr("data-value")
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        buttonTopic + "&api_key=dc6zaTOxFJmzC&limit=10";


        $.ajax
        ({
            url: queryURL,
            method: "GET"
        })

        .done(function(response) 
        {
            console.log(response)
        })

        // $( "#dataTable tbody" ).on( "click", "tr", function() {
        //     console.log( $( this ).text() );
        //   });    -example of jQuery on() handler










    });



});