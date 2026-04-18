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

//