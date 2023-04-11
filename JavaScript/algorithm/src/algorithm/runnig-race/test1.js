const obj = {
    a: 1,
    b: 2,
    c: 3
}

console.log(obj)

const tmp = obj.b;
obj.b = obj.a;
obj.a = tmp;

console.log(obj)

const arr = ['a', 'b'];
console.log(arr[1])