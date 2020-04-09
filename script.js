$(document).ready(function() {

    // const moment = require("moment");
    // console.log(moment())


// creating grid for planner
for (let hour = 9; hour <= 17; hour++) {
    let index = hour - 9;
    $("#container").append(
        $('<div>')
            .addClass("row", "time-block")
            .attr("id", "time-block")
    );

    $("#time-block").append(
        $('<text>')
            .addClass("hour")
            .attr("id", "hour")
            .text(hour + ":00"));

    $("#time-block").append(
        $('<textarea>'));

    $("#time-block").append(
        $('<button>')
            .addClass("saveBtn")
            .attr("id", "saveBtn")
            .text("save"));
    
}
// Current hour is red 
// When user types in plans and presses save button
    // Checks for input and if not input error message, if else append text to div


//variable and function for current time
// var date = new Date();
// var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
// console.log(time);

    // if time is 9:00-9:59.59 current background red .present
    // if time is greater than time value- current background is green .future

})
