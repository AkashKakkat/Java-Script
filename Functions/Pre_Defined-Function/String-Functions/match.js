const str = 'The quick brown fox jumps over the lazy dog.';
const result = str.match(/the/gi); // 'gi' means global and case-insensitive
console.log(result); // Output: ['The', 'the']
