//1. Reverse a String
function reverseString(s) {
    var _a;
    var arr = s.split('');
    var left = 0;
    var right = arr.length - 1;
    while (left < right) {
        _a = [arr[right], arr[left]], arr[left] = _a[0], arr[right] = _a[1];
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
function fizzBuzz(n) {
    var result = [];
    for (var i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        }
        else if (i % 3 === 0) {
            result.push("Fizz");
        }
        else if (i % 5 === 0) {
            result.push("Buzz");
        }
        else {
            result.push(i.toString());
        }
    }
    return result;
}
// test
var n = 15;
var output = fizzBuzz(n);
// print output
console.log(output.join("\n"));
