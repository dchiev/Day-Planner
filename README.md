# Day-Planner
<p align="center">
<img src=".\readme_assets\app_image.png" width=50%>
<p>

Link to deployed application https://dchiev.github.io/Day-Planner

## Process

1. Using the provided styling CSS file, I used bootstrap columns and rows. Then I assigned the provided class to each row until it made visual sense. 

2. I then moved to the script and grabbed all the necessary elements via the DOM using jQuery.

3. Using Moment.js, I used `moment().format('MMMM Do YYYY, h:mm:ss a');` to display the time in the jumbotron class.

4. I then moved on to my logic if displaying colors depending on time. I first gave each element a unique ID that corresponded with the time in a 24 hour clock in the index file (i.e. 10AM is 10 and 2PM is 14).

5. From there, I used a for loop to iterate through 9-18 because of the 8 hour workday. This would check the value of each time row against my next if statements. 

6. In the same for loop, I wrapped if, else if, else statements that would display the appropiate color by adding either the past, present, or future classes. 

```javascript
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
```

7. I then used local storage to save user text of each `<textarea>`
