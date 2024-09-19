function solution(skill, skill_trees) {
  let count = 0;

  const treeList = [...skill_trees];
  const returnArr = [];
  treeList.forEach((tree) => {
    const treeArr = tree.split("");

    const arr = [];
    treeArr.forEach((char) => {
      let str = "";
      for (let j = 0; j < skill.length; j++) {
        if (char === skill[j]) {
          str += char;
        }
      }

      arr.push(str);
    });

    let str2 = "";
    arr.forEach((char) => (str2 += char));
    returnArr.push(str2);
  });

  for (let i = 0; i < returnArr.length; i++) {
    let valid = true;
    const newSkill = returnArr[i];
    for (let j = 0; j < newSkill.length; j++) {
      const a = newSkill[j];
      const b = skill[j];
      if (a !== b) {
        valid = false;
        break;
      }
    }
    if (valid) count++;
  }

  return count;
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]));
// 2

// https://school.programmers.co.kr/learn/courses/30/lessons/49993?language=javascript#fnref1
