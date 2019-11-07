$( "document" ).ready(function() { //this helps your jQuery to work. Write all of your JS code in this function.
    let input= $(".input").val();
    var firstcharacter = input.charAt(0);

    $("#button").click(function() {
        console.log ("11");
        $("output").text("Hello");
    });
});
var order= []

$("#button").click(function() {
    console.log ("11");
    $("output").text("Bye");
});