$(document).ready(function () {

  //variable for current time
  var currentHour = moment().hours();
  console.log(currentHour);
  //function for updating time 
  updateTime()

   //retrieving stored plans
  $("#time-block").each(function () {
    let storedPlans = localStorage.getItem("plans");
    if (storedPlans !== null) {
      $("#user-input").val("")
    } else {
      $("#user-input").val(storedPlans)
    }
    })

  // creating HTML for planner inside of container div on index.HTML page
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
    alert("test")
      //value of user input task
      var task = $(this).sibling("#user-input").val();
      var time = parseInt($(this).sibling("#hour").innerText());
      localStorage.setItem("plans", time, task);

})

 function updateTime() {
    // function within updateTime that will loop over each time-block
    $("#time-block").each(function () {
      // var hour = parseInt($(this).attr("id").split("-") [1]);
      var hour = parseInt($(this).children.attr("id",));

    // check to add color indicating time
    if (hour < currentHour) {
      $(this).addClass("past");
    } else if (hour === currentHour) {
      $(this).addClass("present");
      $(this).removeClass("past");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
   
      setTimeout(updateTime, 5000);
    }
  }

    )}
})
