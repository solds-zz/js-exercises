var username = "skyler";
var password = "loves2code";
var submit = document.getElementById('submit');

submit.addEventListener('click', function (e) {
	e.preventDefault();
  var currentUser = document.getElementById('username').value;
  var currentPword = document.getElementById('password').value;
  var status = document.getElementById('status');
  if (currentUser === username && currentPword === password) {
    status.className = 'success';
    status.innerHTML = "You've successfully logged in";
  } else {
  	status.className = 'failure';
    status.innerHTML = 'Username or password is incorrect';
  }
});
