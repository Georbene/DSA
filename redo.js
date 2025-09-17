// strings
"Hello".length  // 5
"hello".toUpperCase()  // "HELLO"
"HELLO".toLowerCase()  // "hello"
"JavaScript".includes("Script")  // true
"Hello World".slice(0, 5)  // "Hello"

// arrays
let arr = [1, 2];
arr.push(3);  // [1, 2, 3]

let pop = [1, 2, 3];
pop.pop();  // [1, 2]

let shift = [1, 2, 3];
shift.shift();  // [2, 3]

let unshift = [2, 3];
unshift.unshift(1);  // [1, 2, 3]

let numbers = [1, 2, 3];
let squared = numbers.map(x => x * x);  
// [1, 4, 9]






//1. Display numbers from 1 to 100 with conditions

function displayNumbers() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("PDC NID");
    } else if (i % 3 === 0) {
      console.log("PDC");
    } else if (i % 5 === 0) {
      console.log("NID");
    } else {
      console.log("neither PDC nor NID");
    }
  }
}


// 2. Calculate the factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}



// 3. Sum of all integers from 1 to n
function sumFactorial(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}




// 4. Arrange noodles in cartons
function arrangeNoodles(x, y) {
  if (x <= 0 || y <= 0) {
    return "Invalid input: x and y must be positive integers.";
  }

  const cartons = Array.from({ length: y }, (_, i) => i + 1);
  const noodlesPerCarton = Math.ceil(x / y);
  const remainingNoodles = x % y;

  const result = [];
  let cartonIndex = 0;

  for (let i = 1; i <= x; i++) {
    result.push(`Carton ${cartons[cartonIndex]} - noodle ${i}`);

    cartonIndex = (cartonIndex + 1) % cartons.length;
    if ((i + 1) % noodlesPerCarton === 0) {
      cartonIndex = (cartonIndex + 1) % cartons.length;
    }
  }

  return result;
}





// 5. Check if a word is a palindrome
function isPalindrome(word) {
  const reversedWord = word.split("").reverse().join("");
  if (word.toLowerCase() === reversedWord.toLowerCase()) {
    return "it is a palindrome";
  } else {
    return "it is not a palindrome";
  }
}



// 6. Evaluate grade based on score
function evaluateGrade(score) {
  if (score >= 97 && score <= 100) {
    return "A+";
  } else if (score >= 93 && score <= 96) {
    return "A";
  } else if (score >= 90 && score <= 92) {
    return "A-";
  } else if (score >= 87 && score <= 89) {
    return "B+";
  } else if (score >= 83 && score <= 86) {
    return "B";
  } else if (score >= 80 && score <= 82) {
    return "B-";
  } else if (score >= 77 && score <= 79) {
    return "C+";
  } else if (score >= 73 && score <= 76) {
    return "C";
  } else if (score >= 70 && score <= 72) {
    return "C-";
  } else if (score >= 67 && score <= 69) {
    return "D+";
  } else if (score >= 63 && score <= 66) {
    return "D";
  } else if (score >= 60 && score <= 62) {
    return "D-";
  } else if (score >= 0 && score <= 59) {
    return "F";
  }
}

// 7. Evaluate an array of numbers
function evaluateArrayNumbers(array) {
  if (array.length === 0) {
    return "Array is empty.";
  }

  let minimum = array[0];
  let maximum = array[0];
  let sum = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i] < minimum) {
      minimum = array[i];
    }
    if (array[i] > maximum) {
      maximum = array[i];
    }
    sum += array[i];
  }

  const average = sum / array.length;

  return {
    minimum,
    maximum,
    average,
    sum,
  };
}


// 8. Check days and meals
function checkDays(days, meals) {
  let result = "";

  for (let i = 1; i <= days; i++) {
    for (let j = 1; j <= meals; j++) {
      result += `Day ${i} Meal ${j}\n`;
    }
  }

  return result;
}


// 9. Add meal to list if not already present
function addMealToList(list, meal) {
  if (list.includes(meal)) {
    return `You don't cook ${meal} already, I can't add it again, cook something else abeg.`;
  } else {
    list.push(meal);
    return `${meal} cooked successfully.`;
  }
}