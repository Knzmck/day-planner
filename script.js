$(document).ready(function () {

  var currentHour = moment().hours();
  console.log(currentHour);
  let timeBlock = ("#time-block")

  $(timeBlock).each(function () {
    let storedPlans = localStorage.getItem("plans");
    if (storedPlans !== null) {
      planTextArr = task;
    } else {
      // this should only occur on first time the app is loaded in the browser
      // helpfully remind user that lunch is important
      planTextArr = new Array(9);
      planTextArr[4] = "Picnic lunch outside";
    }
    })

  // creating grid for planner
  for (let hour = 9; hour <= 17; hour++) {
    let index = hour - 9;
    $("#container").append(
      $("<div>").addClass("row", "time-block").attr("id", "time-block")
    );

    $("#time-block").append(
      $("<text>")
        .addClass("hour")
        .attr("id", "hour")
        .text(hour + ":00")
    );

    $("#time-block").append($("<textarea>").attr("id", "user-input").val(""));

    $("#time-block").append(
      $("<button>").addClass("saveBtn").attr("id", "saveBtn").text("save")
    );
  
    }
    
    
  //saves task/plan user types in when save button is clicked
  $(document).on("click", "#saveBtn", function () {
    $(this).each(function() {
      //value of user input task
      var task = $("#user-input").val();
      localStorage.setItem("plans", task);
})
})
})
