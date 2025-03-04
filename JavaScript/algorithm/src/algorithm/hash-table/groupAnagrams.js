function groupAnagrams(words) {
  // Step 1: Create an empty hash table
  // 단계 1: 빈 해시 테이블 생성
  const anagramGroups = {};

  // Step 2: Loop through each word
  // 단계 2: 각 단어를 반복
  for (const word of words) {
    // Step 3: Sort the letters of the word to create a key
    // 단계 3: 단어의 글자를 정렬하여 키 생성
    const a = word.split("")
    const b = a.sort()
    const sortedWord = b.join("");

    // Step 4: Check if the key exists in the hash table
    // 단계 4: 키가 해시 테이블에 존재하는지 확인
    if (anagramGroups[sortedWord]) {
      // If yes, add the word to the existing group
      // 존재하면, 해당 그룹에 단어 추가
      anagramGroups[sortedWord].push(word);
    } else {
      // If no, create a new group with the word
      // 존재하지 않으면, 단어로 새로운 그룹 생성
      anagramGroups[sortedWord] = [word];
    }
  }

  // Step 5: Return the grouped anagrams
  // 단계 5: 그룹화된 애너그램 반환
  return Object.values(anagramGroups);
}

// Example usage
// 예시 사용
const words = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result = groupAnagrams(words);
console.log(result);