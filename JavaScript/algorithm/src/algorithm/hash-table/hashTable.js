const hashTableByObject = {};
hashTableByObject["key"] = 100;
hashTableByObject["key2"] = "hello";
hashTableByObject[1234] = 1234;

const obj = { B: 32 };
hashTableByObject[obj] = 22;
console.log(hashTableByObject[obj]);

console.log(hashTableByObject["key"]);
console.log(hashTableByObject["key"]);
console.log(hashTableByObject[1234]);

delete hashTableByObject["key"];
console.log(hashTableByObject);
