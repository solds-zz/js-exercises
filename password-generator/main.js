function generatePassword(length) {
	var possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890+/'.split("");
  var password = [];
  for (var i = 0; i < length; i++) {
  	var random = Math.floor((Math.random() * possibleChars.length));
    password.push(possibleChars[random]);
  }
  return password.join("");
}

document.body.innerHTML = generatePassword(10);
