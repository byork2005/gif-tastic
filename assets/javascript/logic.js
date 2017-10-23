$(document).ready(function()
{

var topics = ["Superman","Batman","Flash","Wonder Woman","Aquaman"];

function makeButtons() 
{
    $(".topicButtons").empty();
    for (var i = 0; i < topics.length; i++)
    {
        var newButton = $("<button class='buttons'>");
        newButton.text(topics[i]);
        $(".topicButtons").append(newButton);
    }    
}













makeButtons();

});