function Palindrome(str) {
  return str === str.split("").reverse().join("");
}

function PalindromicSubstring(str) {
  const palindromes = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      const substr = str.slice(i, j);
      if (Palindrome(substr)) {
        palindromes.push(substr);
      }
    }
  }
  return palindromes;
}

console.log(PalindromicSubstring("kjkjjkjk"));
