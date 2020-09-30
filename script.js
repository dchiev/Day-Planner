var currentDay = $("#currentDay");
var rows = $(".row");
var saveButtons =  $("button");
var userText = $("textareas");
var userInput = "";
var timeBlocksHour= $(".hour").attr("time-value");
console.log(timeBlocksHour);

// Show Time
var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
currentDay.text(currentTime)


// Time Block Colors = present/ past/ future

var currentHour = moment().format();
console.log(currentHour);

if (currentHour < timeBlocksHour) {
    $(".time-block").addClass(".future");
}
if (currentHour > timeBlocksHour) {
    $(".time-block").addClass(".past");
}

if (currentHour == timeBlocksHour) {
    $(".time-block").addClass(".present");
}








// Saving text area to local storage + prevent default.



var savedText = localStorage.getItem (userText);
$(saveButtons).on("click", function (){
    userText.text = savedText;
    localStorag.setItem("text", userText);
});