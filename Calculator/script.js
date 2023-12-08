function appendToAnswer(value) {
    document.calculator.answer.value += value;
  }
  
  function calculateResult() {
    document.calculator.answer.value = eval(document.calculator.answer.value);
  }
  
  document.addEventListener('keypress', function (event) {
    const keyValue = String.fromCharCode(event.keyCode);
  
    // Check if the pressed key is a number, operator, or Enter key
    if (/[\d\+\-\*\/\=]/.test(keyValue)) {
      appendToAnswer(keyValue);
    } else if (event.key === 'Enter') {
      calculateResult();
    }
  });
  