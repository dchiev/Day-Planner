var currentDay = $("#currentDay");
var rows = $(".row");
var saveButtons =  $("button");
var userText = $("textareas");
var userInput = "";
var timeBlocksHour= $(".hour").attr("data-id")
console.log(timeBlocksHour);

// Show Time
var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
currentDay.text(currentTime)


// Time Block Colors = present/ past/ future

var currentHour = moment().format();
console.log(currentHour);

if (currentHour < timeBlocksHour) {
    $(".row").addClass(".future");
}
else if (currentHour > timeBlocksHour) {
    $(".row").addClass(".past");
}

else {(currentHour == timeBlocksHour) 
    $(".row").addClass(".past");
}






// Saving text area to local storage + prevent default.



var savedText = localStorage.getItem (userText);
$(saveButtons).on("click", function (){
    userText.text = savedText;
    localStorag.setItem("text", userText);
});