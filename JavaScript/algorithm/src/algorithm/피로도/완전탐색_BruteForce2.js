function getPermutations(arr, n) {
  const results = [];
  if (n === 1) return arr.map((value) => [value]);

  arr.forEach((fixed, index, origin) => {
    console.log("fixed : ", fixed);
    console.log("index : ", index);
    console.log("origin : ", origin);
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    console.log("rest : ", rest);
    const permutations = getPermutations(rest, n - 1);
    console.log("permutations : ", permutations);
    const attached = permutations.map((permutation) => [fixed, ...permutation]);
    console.log("attached : ", attached);

    results.push(...attached);
    console.log("results : ", results);
    console.log("--------------------------------------------");
  });

  return results;
}

const numbers = [1, 2, 3];
console.log(getPermutations(numbers, 3));
