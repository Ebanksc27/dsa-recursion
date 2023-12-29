// Recursive functions for various tasks

/** product: calculate the product of an array of numbers. */
function product(nums) {
  // Base case: if array is empty, return 1
  if (nums.length === 0) return 1;
  // Recursive step: Multiply the first number with the product of the rest
  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */
function longest(words) {
  // Base case: if array is empty, return 0
  if (words.length === 0) return 0;
  // Determine the length of the first word
  const lengthOfFirst = words[0].length;
  // Recursive step: Get the max of the first word's length and the longest of the rest
  return Math.max(lengthOfFirst, longest(words.slice(1)));
}

/** everyOther: return a string with every other letter. */
function everyOther(str) {
  // Base case: if string is empty, return empty string
  if (str === '') return '';
  // Recursive step: Append the first char and every other char of the rest
  return str[0] + (str.length > 1 ? everyOther(str.slice(2)) : '');
}

/** isPalindrome: checks whether a string is a palindrome or not. */
function isPalindrome(str) {
  // Base case: if string is 1 char or empty, it's a palindrome
  if (str.length <= 1) return true;
  // Check if the first and last chars are different
  if (str[0] !== str[str.length - 1]) return false;
  // Recursive step: Check the palindrome status of the remaining substring
  return isPalindrome(str.slice(1, -1));
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */
function findIndex(arr, val, currentIndex = 0) {
  // Base case: if array is empty, val is not present
  if (arr.length === 0) return -1;
  // If the first element is the value, return its index
  if (arr[0] === val) return currentIndex;
  // Recursive step: Check the rest of the array
  return findIndex(arr.slice(1), val, currentIndex + 1);
}

/** revString: return a copy of a string, but in reverse. */
function revString(str) {
  // Base case: if string is empty, return empty string
  if (str === '') return '';
  // Recursive step: Place the first char at the end and recurse with the rest
  return revString(str.substr(1)) + str[0];
}

/** gatherStrings: given an object, return an array of all of the string values. */
function gatherStrings(obj) {
  let strings = [];
  for (let key in obj) {
      // Check if the property is a string
      if (typeof obj[key] === 'string') {
          strings.push(obj[key]);
      // If the property is an object, concatenate its string values
      } else if (typeof obj[key] === 'object' && obj[key] !== null) {
          strings = strings.concat(gatherStrings(obj[key]));
      }
  }
  return strings;
}

/** binarySearch: given a sorted array of numbers, and a value,
* return the index of that value (or -1 if val is not present). */
function binarySearch(arr, val, low = 0, high = arr.length - 1) {
  // Base case: value not found
  if (low > high) return -1;
  // Calculate the middle index
  const mid = Math.floor((low + high) / 2);
  // If the middle element is the value, return its index
  if (arr[mid] === val) return mid;
  // Recursive step: Search in the left or right half based on comparison
  if (arr[mid] > val) return binarySearch(arr, val, low, mid - 1);
  return binarySearch(arr, val, mid + 1, high);
}

module.exports = {
product,
longest,
everyOther,
isPalindrome,
findIndex,
revString,
gatherStrings,
binarySearch
};
