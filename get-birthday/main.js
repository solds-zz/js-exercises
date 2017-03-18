var validInput = /\d{2}\/\d{2}\/\d{4}/i;
var notValid = true;
while (notValid) {
  var birth = prompt("Enter your date of birth (MM/DD/YYYY): ");
  if (validInput.test(birth)) {
    notValid = false;
  } else {
    alert("You did not enter a valid date.");
  }
}
var month = birth.match(/^\d{2}/i);
var day = birth.match(/\/(\d{2})\//i);
day = day[1];
var year = birth.match(/\d{4}$/i);
var date = new Date();
date.setMonth(month - 1);
date.setDate(day);
date.setYear(year);
var day = date.getDay();
var dayStr = "";
switch (day) {
  case 0:
    dayStr = "Sunday";
    break;
  case 1:
    dayStr = "Monday";
    break;
  case 2:
    dayStr = "Tuesday";
    break;
  case 3:
    dayStr = "Wednesday";
    break;
  case 4:
    dayStr = "Thursday";
    break;
  case 5:
    dayStr = "Friday";
    break;
  case 6:
    dayStr = "Saturday";
    break;
}
document.body.innerHTML = "You were born on a " + dayStr + ".";