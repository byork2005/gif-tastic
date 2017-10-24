$(document).ready(function()
{

    var topics = ["Superman","Batman","The Flash","Wonder Woman","Aquaman"];

    // Pulls entries from the topics array. Deletes old and makes new buttons.
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
    
    // Click event to call Giphy with button data-value as search parameter. Filter out rated PG and lower. Then create 10 gifs with appropriate attributes.
    $(".topicButtons").on("click", ".buttons", function()
    {
        console.log(this);
        $(".content").empty();
        var buttonTopic = $(this).attr("data-value");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + buttonTopic + "&api_key=dc6zaTOxFJmzC&limit=10&rating=pg";

        $.ajax (
        {
            url: queryURL,
            method: "GET"
        })
        .done(function(response) 
        {
            console.log(response)
            var results = response.data;
            for (var i = 0; i < results.length; i++)
            {
                var newGifDiv = $("<div class='gifDiv'>");
                var rating = results[i].rating;
                var ratingPara = $("<p>").text("Rated " + rating);
                var gifImg = $("<img class='gif'>");
                gifImg.attr("src", results[i].images.fixed_height_still.url);
                gifImg.attr("data-state", "still");
                gifImg.attr("data-still", results[i].images.fixed_height_still.url);
                gifImg.attr("data-animated", results[i].images.fixed_height.url);
                newGifDiv.append(gifImg);
                newGifDiv.append(rating);
            
                $(".content").append(newGifDiv);
            }
        });
    });

    // Click event to pause/unpause the gifs
    $(".content").on("click",".gif", function()
    {
        var currentState = $(this).attr("data-state")
        if (currentState === "still") 
        {
            $(this).attr("src", $(this).attr("data-animated"));
            $(this).attr("data-state", "animated")
        } else 
        {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    });

    // Add input to topic array, remake buttons
    $(".textBox").on("click","#submit", function()
    {
        event.preventDefault();
        topics.push($("#newHero").val().trim());
        makeButtons();
    });

});