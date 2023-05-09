const arr = [[1], [2,3], [4,5,6]]

let obj = {}
for (let i = 0; i < arr.length; ++i) {

    obj = {
        [i]: arr[i]
    }
}

console.log(obj)
