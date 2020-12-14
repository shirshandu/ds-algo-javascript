// Solution 1
// function reverse(str) {
//   return str.split("").reverse().join("");
// }

// Solution 2
function reverse(str) {
  let reversed = "";
  for (let character of str) {
    reversed = character + reversed;
  }
  return reversed;
}

// Solution 3
// function reverse(str) {
//   return str.split("").reduce((reversed, character) => {
//     return character + reversed;
//   }, "");
// }

module.exports = reverse;
