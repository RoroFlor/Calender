// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// Displays the date at the top of the page 
var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY'));


function currentHour() {

  // this tells me what time it currently is
  var currentTime = today.hour()
  console.log('The current hour is ' + currentTime);


  // grabs the hour- id and adds current time 
  var divhours = $('#hour-' + currentTime)
  console.log(divhours)

 var past = document.getElementsByClassName('past')
 var present = document.getElementsByClassName('present')
 var future = document.getElementsByClassName('future')
  
 


  // if(divhours.length < currentTime) {
  //   $('.time-block').css('background-color', 'red')
  //   console.log ('This will be red for present')
  // }else if(currentTime < divhours) {
    
  // }else if(currentTime > divhours){
    
  // }else(console.log('error'))

  // creates a for loop to represent
  // for (var hour = 0; hour < 24; hour++) {
  //   var divhours = $('<div>').attr('id', 'hour-' + currentTime);
  // }

 
}


currentHour()

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
