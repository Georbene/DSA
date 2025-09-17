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


// section 2   1
for (let n = 1; n <= 100; n++) {
  if (n % 3 === 0 && n % 5 === 0) {
    console.log(n + " is PDC NID");
  } else if (n % 3 === 0) {
    console.log(n + " is PDC");
  } else if (n % 5 === 0) {
    console.log(n + " is NID");
  } else {
    console.log(n + " is neither PDC nor NID");
  }
}


// section 2 2
function factorial(n) {
  let result = 1;
  for (let i = n; i > 0; i--) {
    result *= i;
  }
  return result;
}

console.log(factorial(3)); // 6
console.log(factorial(4)); // 24


// section 2 3
function sumFactorial(n) {
  let sum = 0;
  for (let i = n; i > 0; i--) {
    sum += i;
  }
  return sum;
}

console.log(sumFactorial(3)); // 6
console.log(sumFactorial(4)); // 10


// section 2 4
function arrange(x, y) {
  for (let i = 1; i <= x; i++) {
    for (let j = 1; j <= y; j++) {
      console.log("Carton " + i + " - Noodle " + j);
    }
  }
}

arrange(3, 2);

// No 4









// section 2 5
function isPalindrome(word) {
  let lower = word.toLowerCase();
  let reversed = lower.split("").reverse().join("");

  if (lower === reversed) {
    return "It is a palindrome";
  } else {
    return "It is not a palindrome";
  }
}

console.log(isPalindrome("racecar")); // It is a palindrome
console.log(isPalindrome("mum"));     // It is a palindrome
console.log(isPalindrome("noon"));    // It is a palindrome
console.log(isPalindrome("hello"));   // It is not a palindrome

// section 2 6
function evaluateGrade(score) {
  if (score >= 97) {
    return 'A+';
  } else if (score >= 93) {
    return 'A';
  } else if (score >= 90) {
    return 'A-';
  } else if (score >= 87) {
    return 'B+';
  } else if (score >= 83) {
    return 'B';
  } else if (score >= 80) {
    return 'B-';
  } else if (score >= 77) {
    return 'C+';
  } else if (score >= 73) {
    return 'C';
  } else if (score >= 70) {
    return 'C-';
  } else if (score >= 67) {
    return 'D+';
  } else if (score >= 63) {
    return 'D';
  } else if (score >= 60) {
    return 'D-';
  } else {
    return 'F';
  }
}

// Example usage
console.log(evaluateGrade(85)); // Outputs: B
console.log(evaluateGrade(97)); // Outputs: A+

// section 2 7
function evaluateArray(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = arr.reduce((acc, num) => acc + num, 0);
  let average = sum / arr.length;

  return {
    minimum: min,
    maximum: max,
    sum: sum,
    average: average.toFixed(3) // 3 decimal places
  };
}

let result = evaluateArray([2, 1, 7, 3, 2, 9, 5]);
console.log(result);