document.getElementById("calc").onclick = function (event) {
	var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  document.getElementById("result").value = parseInt(num1) + parseInt(num2);
};
