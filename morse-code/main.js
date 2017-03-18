var morseArr = '.-,-...,-.-.,-..,.,..-.,--.,....,..,.---,-.-,.-..,--,-.,---,.--.,--.-,.-.,...,-,..-,...-,.--,-..-,-.--,--..,-----,.----,..---,...--,....-,.....,-....,--...,---..,----.'.split(',');
var alphaStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
var sourceArea = document.getElementById('source');
var translationArea = document.getElementById('translation');

function getTranslation(source) {
	var words = source.split(' / ');
  for (var i = 0; i < words.length; i++) {
  	var letters = words[i].split(' ');
    for (var j = 0; j < letters.length; j++) {
    	var letter = morseArr.indexOf(letters[j]);
      letters[j] = alphaStr.charAt(letter);
    }
    words[i] = letters.join('');
  }
  return words.join(' ');
}

window.setInterval(function () { 
	translationArea.innerHTML = getTranslation(sourceArea.value); 
}, 10);
