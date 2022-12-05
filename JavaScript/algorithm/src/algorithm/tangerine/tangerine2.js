const solution = (k, tangerine) => {
    let map = new Map();
    console.log('map : ' , map); // 맵 생성

    let count = 0;
    const number = tangerine.length - k;

    console.log('tangerine.length  : ', tangerine.length )
    console.log('k : ', k)
    console.log('number : ', number)

    console.log('---------------------------------------')

    tangerine.forEach((item) => {
        console.log('item : ', item)
        console.log('map.has(item : ',map.has(item))
        if (!map.has(item)) {
            map.set(item, 1)
            console.log('map ::: ', map)
        }
        else {
            map.set(item, map.get(item) + 1);
            console.log('map !!! ', map)
        }
    })

    console.log('------------------------------------')

    const array = Array.from(map);
    console.log('array : ', array)
    array.sort((a, b) => a[1] - b[1]);
    console.log('sort : ', array)

    console.log('------------------------------------')

    let newArr = array.filter((item) => {
        console.log('item[0] : ', item[0])
        console.log('item[1] : ', item[1])
        while (item[1] && count !== number) {
            item[1] -= 1;
            count += 1;
        }
        if(item[1] !== 0) return item
    })
    console.log('newArr : ', newArr)

    return newArr.length;
}

const k = 6
const tangerine = [1,3,2,5,4,5,2,3]

solution(k, tangerine)