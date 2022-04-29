function isPalindrome(word) {
  // Write your algorithm here
  let reversed = word.split('').reverse().join('')
  if(reversed === word) return true;

  return false
  // let len = word.length;
  // let start = word.substring(0, Math.floor(len/2));
  // let end = word.substring(len - Math.floor(len/2))
  // // console.log(start, end);
  // let flip = end.split('').reverse().join('');
  // return (start === flip)
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
