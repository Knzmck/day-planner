$(document).ready(function() {

//create divs for timeslots 9-5 (9) rows with three columns. event space for user to type in. save button
// Current hour is red 
// When user types in plans and presses save button
    // Checks for input and if not input error message, if else append text to div


var hours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]
for (var i = 0; i < hours.length; i ++) {
    var rowDiv = $("<div>")

    rowDiv.addClass("row");

    rowDiv.text(hours[i]);

    $("#row").append(rowDiv);
}


//variable and function for current time
var date = new Date();
var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
console.log(time);

})
