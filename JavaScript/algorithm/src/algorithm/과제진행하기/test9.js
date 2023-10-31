const arr = [
  {
    id: "c68bd941-1695-4b92-8e2a-f02178aa5093",
    name: "김치",
    category: "한식",
  },
  {
    id: "0d1ba4d8-fd88-489b-ba61-d096e6b7a05c",
    name: "김치",
    category: "한식",
  },
  {
    id: "41ea08c5-4fbe-4301-8da3-746f7ed5eb18",
    name: "김치",
    category: "한식",
  },
  {
    id: "cfb4bf31-4695-4276-b772-5254a347270f",
    name: "김치",
    category: "한식",
  },
  {
    id: "eb4b9889-f5bd-4ac6-a1bc-ce5b9b9f7fa7",
    name: "마라",
    category: "중식",
  },
  {
    id: "",
    name: "모라",
    category: "양식",
  },
  {
    id: "",
    name: "하하",
    category: "양식",
  },
];

const categoryObj = {};
const nameObj = {};
arr.forEach((val) => {
  console.log(val);
  categoryObj[val.category] = (categoryObj[val.category] || 0) + 1;
  nameObj[val.name] = (nameObj[val.name] || 0) + 1;
});

const sortableCategory = [];
for (const category in categoryObj) {
  sortableCategory.push([category, categoryObj[category]]);
}
sortableCategory.sort((a, b) => b[1] - a[1]);
console.log(sortableCategory[0]);

const sortableName = [];
for (const name in nameObj) {
  sortableName.push([name, nameObj[name]]);
}
sortableName.sort((a, b) => b[1] - a[1]);
console.log(sortableName[0]);

// console.log(categoryObj);
// console.log(nameObj);
