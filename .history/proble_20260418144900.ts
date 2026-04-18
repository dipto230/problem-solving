//1. Reverse a String
function reverseString(s: string): string {
  const arr: string[] = s.split('');
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr.join('');
}


// const input1: string = "hello";
// const input2: string = "abc";
// const input3: string = "";
// const input4: string = "a";


// console.log(reverseString(input1));
// console.log(reverseString(input2));
// console.log(reverseString(input3));
// console.log(reverseString(input4));






//2. FizzBuzz
function fizzBuzz(n: number): string[] {
  const result: string[] = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i.toString());
    }
  }

  return result;
}


// const n: number = 15;
// const output = fizzBuzz(n);


// console.log(output.join("\n"));






//3. Find the Largest Number in an Array
function findLargest(nums: number[]): number {
  let max = nums[0]; 

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }

  return max;
}


// const arr1: number[] = [3, 7, 2, 9, 5];
// const arr2: number[] = [-10, -3, -50, -1];

// console.log(findLargest(arr1));
// console.log(findLargest(arr2));



//4. Check for Palindrome
function isPalindrome(s: string): boolean {
  const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');

  let left = 0;
  let right = cleaned.length - 1;

  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}


// console.log(isPalindrome("racecar")); // true
// console.log(isPalindrome("hello"));   // false
// console.log(isPalindrome("A man, a plan, a canal: Panama"));


//5. Sum of Array Elements
function sumArray(nums: number[]): number {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  return sum;
}


// const arr1: number[] = [1, 2, 3, 4, 5];
// const arr2: number[] = [];
// const arr3: number[] = [-1, -2, 3];

// console.log(sumArray(arr1));
// console.log(sumArray(arr2));
// console.log(sumArray(arr3));

// 6. Count Vowels
function countVowels(s: string): number {
  const vowelSet = new Set(['a','e','i','o','u','A','E','I','O','U']);
  let count = 0;

  for (const char of s) {
    if (vowelSet.has(char)) {
      count++;
    }
  }

  return count;
}


// console.log(countVowels("hello"));
// console.log(countVowels("TypeScript"));
// console.log(countVowels("bcdfg"));


// 7. Factorial Calculation
function factorial(n: number): number {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}


// console.log(factorial(5));
// console.log(factorial(0));

//8. Even or Odd List
function getEvenNumbers(nums: number[]): number[] {
  const result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      result.push(nums[i]);
    }
  }

  return result;
}


//9. Fibonacci Sequence
function fibonacci(n: number): number[] {
  if (n === 1) return [0];

  const result: number[] = [0, 1];

  for (let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }

  return result;
}

// test
console.log(fibonacci(1)); // [0]
console.log(fibonacci(5)); // [0, 1, 1, 2, 3]
console.log(fibonacci(10)); // [0,1,1,2,3,5,8,13,21,34]

