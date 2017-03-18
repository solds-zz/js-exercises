var button = document.getElementById("submit");

button.addEventListener('click', function(event) {
	var name = document.getElementById("name").value;
	var age = document.getElementById("age").value;
	var username = document.getElementById("username").value;
  alert("Your name is " + name + ". You are " + age + ". Your username is " + username + ".");
});
