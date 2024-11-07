// Write a function reverseString(str) that takes a string and returns it reversed.

function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example
console.log(reverseString("hello")); // Output: "olleh"

// Write a function isPalindrome(str) that checks if a given string is a palindrome (reads the same backward and forward).

function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

// Example
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello"));   // Output: false

// Write a function factorial(n) that calculates the factorial of a given number.

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

// Example
console.log(factorial(5)); // Output: 120

// Write a function removeDuplicates(arr) that removes duplicate values from an array.

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Example
console.log(removeDuplicates([1, 2, 3, 2, 4, 5, 5])); // Output: [1, 2, 3, 4, 5]

// Write a function findLargest(arr) that returns the largest number in an array.

function findLargest(arr) {
    return Math.max(...arr);
}

// Example
console.log(findLargest([1, 2, 3, 4, 5])); // Output: 5

// Write a function fizzBuzz(n) that prints numbers from 1 to n. For multiples of 3, print "Fizz" instead of the number, for multiples of 5 print "Buzz," and for multiples of both 3 and 5 print "FizzBuzz."

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
        else if (i % 3 === 0) console.log("Fizz");
        else if (i % 5 === 0) console.log("Buzz");
        else console.log(i);
    }
}

// Example
fizzBuzz(15);

// Write a function longestWord(sentence) that takes a sentence and returns the longest word in that sentence.

function longestWord(sentence) {
    const words = sentence.split(' ');
    let longest = '';

    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}

// Example
console.log(longestWord("I am learning JavaScript programming")); // Output: "JavaScript"

// Write a function flatten(arr) that flattens a nested array.

function flatten(arr) {
    return arr.flat(Infinity);
}

// Example
console.log(flatten([1, [2, [3, [4]], 5]])); // Output: [1, 2, 3, 4, 5]

// Write a function myMap(arr, callback) that behaves like the JavaScript array map function.

function myMap(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr));
    }
    return result;
}

// Example
console.log(myMap([1, 2, 3], x => x * 2)); // Output: [2, 4, 6]

// Write a function isEmpty(obj) that returns true if an object is empty, and false otherwise.

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

// Example
console.log(isEmpty({})); // Output: true
console.log(isEmpty({ key: "value" })); // Output: false