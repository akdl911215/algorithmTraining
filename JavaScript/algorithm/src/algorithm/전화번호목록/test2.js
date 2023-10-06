const map = new Map();

map.set("1234", 1);
map.set("abcd", 2);

console.log(map.entries());

console.log('map.get("123") : ', map.get("123"));
console.log('map.get("12345") : ', map.get("12345"));
console.log('map.get("abc") : ', map.get("abc"));
console.log('map.get("abcde") : ', map.get("abcde"));
