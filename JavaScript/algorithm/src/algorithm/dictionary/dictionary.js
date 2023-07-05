const findSameName = (nameList) => {
  const namesCountObject = {};
  nameList.forEach((name) => {
    if (name in namesCountObject) namesCountObject[name] += 1;
    else namesCountObject[name] = 1;
  });

  const nameSet = new Set();
  for (const [key, value] of Object.entries(namesCountObject)) {
    if (value >= 2) nameSet.add(key);
  }

  return nameSet;
};

console.log(findSameName(["Tom", "Jerry", "Mike", "Tom"]));
console.log(findSameName(["Tom", "Jerry", "Mike", "Tom", "Mike"]));
