function buildPrefixTable(pattern) {
  const prefixTable = [0]; // The first value is always 0
  let prefixLength = 0; // Length of the current prefix

  for (let i = 1; i < pattern.length; i++) {
    // If characters match, increment prefixLength
    if (pattern[i] === pattern[prefixLength]) {
      prefixLength++;
      prefixTable[i] = prefixLength;
    } else {
      // If no match, reset prefixLength
      if (prefixLength !== 0) {
        prefixLength = prefixTable[prefixLength - 1];
        i--; // Re-check the current character
      } else {
        prefixTable[i] = 0;
      }
    }
  }

  return prefixTable;
}

function kmpSearch(text, pattern) {
  const prefixTable = buildPrefixTable(pattern);
  const matches = []; // To store starting indices of matches

  let textIndex = 0; // Index for text
  let patternIndex = 0; // Index for pattern

  while (textIndex < text.length) {
    // If characters match, move both pointers forward
    if (text[textIndex] === pattern[patternIndex]) {
      textIndex++;
      patternIndex++;

      // If the entire pattern is matched, store the starting index
      if (patternIndex === pattern.length) {
        matches.push(textIndex - patternIndex);
        patternIndex = prefixTable[patternIndex - 1]; // Reset patternIndex
      }
    } else {
      // If no match, use the prefix table to skip ahead
      if (patternIndex > 0) {
        patternIndex = prefixTable[patternIndex - 1];
      } else {
        textIndex++;
      }
    }
  }

  return matches;
}

// Example usage
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const result = kmpSearch(text, pattern);

console.log(result); // Output: [10] (pattern starts at index 10)