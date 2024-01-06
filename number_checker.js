function numberChecker(numbers) {
    return function (num) {
      return numbers.includes(num);
    };
  }
  
  // Expected Result:
  const arr = [1, 2, 3, 4, 5];
  const checkNum = numberChecker(arr);
  
  console.log(checkNum(2)); // true
  console.log(checkNum(10)); // false
  