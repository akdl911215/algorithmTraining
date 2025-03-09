function compressString(s) {
  let compressed = "";
  let count = 1;

  for (let i = 0; i < s.length; ++i) {
    if (s[i] === s[i + 1]) {
      count++;
    } else {
      compressed += s[i] + (count > 1 ? count : '');
      count = 1;
    }
  }

  return compressed;
}

// const input = "aabbccc";
const input = "aabbaccdddc";
const result = compressString(input);
console.log(result); // Output: "a2b2c3"
