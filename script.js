var currentDay = $("#currentDay");
var rows = $(".row");
var saveButtons =  $("button");
var userText = $("textarea");
var userInput = "";
var timeBlocksHour= $(".time-block").attr("data-id")


var timeBlocksArray = [];

// for loop to grab eat data-id from the row that corresponds with the current time. 



console.log(timeBlocksArray)

// Show Time
var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
currentDay.text(currentTime)

console.log(currentTime)


// Time Block Colors = present/ past/ future checking against time


const now = new Date();
var currentHour = now.getHours();

console.log(currentHour)

for (let i = 9; i < 18; i++) {
    console.log(currentHour < i);

    if (currentHour < i) {
        $("#" + i).addClass("future");
    }
    else if (currentHour > i) {
        $("#" + i).addClass("past");
    }
    
    else {(currentHour == i) 
        $("#" + i).addClass("present");
    }
}

 


// Saving text area to local storage + prevent default.



var savedText = localStorage.getItem (userText);
$(saveButtons).on("click", function (event){
    event.preventDefault();
    userInput = userText.val();
    localStorag.setItem("text", userInput);
});