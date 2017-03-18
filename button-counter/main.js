var myButton = document.form1.myButton;
var numberOfClicks = 0;
function myButtonClick() {
	numberOfClicks++;
	myButton.value = "Button clicked " + numberOfClicks + " times";
}
myButton.addEventListener("click", myButtonClick);
