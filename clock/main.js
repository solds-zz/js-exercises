function updateTime() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var period = hours < 12 ? "AM" : "PM";
  if (hours > 12) hours += -12;
  if (hours < 10) {
    if (hours == 0) {
      hours = "12";
    } else {
      hours = "0" + hours;
    }
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  document.getElementById("output").innerHTML = hours + ":" + minutes + ":" +
    seconds + " " + period;
}
updateTime();
setInterval(updateTime, 1000);