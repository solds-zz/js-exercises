var num1, num2, sign, result;

$('#btn').click(function (e) {
  e.preventDefault();
  num1 = $('#num1').val();
  num2 = $('#num2').val();
  sign = $('#sign').val();
  switch (sign) {
    case '+':
      result = parseInt(num1) + parseInt(num2);
      break;
    case '-':
      result = parseInt(num1) - parseInt(num2);
      break;
    case '*':
      result = parseInt(num1) * parseInt(num2);
      break;
    case '/':
      result = parseInt(num1) / parseInt(num2);
      break;
  }
  $('#result').val(result);
});