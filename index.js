// Problem 1: Reverse a String
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log("Problem 1:", reverseString("hello"));


// Problem 2: Count Vowels in a String
function countVowels(str) {
    let vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log("Problem 2:", countVowels("programming"));




// Problem 3: Check for Palindrome
function isPalindrome(str) {
    let reversed = str.split("").reverse().join("");
    return str === reversed;
}
console.log("Problem 3:", isPalindrome("madam"));
console.log("Problem 3:", isPalindrome("hello"));


// Problem 4: Find the Maximum Number
function findMax(arr) {
    let max = arr[0];
    for (let num of arr) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}
console.log("Problem 4:", findMax([5, 1, 9, 3])); 