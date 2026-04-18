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
Task: Given an array of integers, return the largest value.

Input: int[] nums
Output: integer
Constraints: Array will have at least one element.
Edge Case: Array with all negative numbers.
Hint: Initialize a variable with the first element of the array.
