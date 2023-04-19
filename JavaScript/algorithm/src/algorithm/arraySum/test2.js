const LENGTH = 10;

// for (let i = 0; i < 10; ++i) {
//     if (i === 5) break;
//     console.log(`i = ${i}`)
// }

// for (let i = 0; i < 10; ++i) {
//     if (i === 5) continue;
//     console.log(`i = ${i}`)
// }

// for (let i = 0; i < LENGTH; ++i) {
//     for (let j = 0; j < LENGTH; ++j) {
//         if (j === 5) break;
//         console.log(`${i} + ${j} = ${i + j}`)
//     }
// }

for (let i = 0; i < LENGTH; ++i) {
    for (let j = 0; j < LENGTH; ++j) {
        if (j === 5) continue;

        console.log(`${i} + ${j} = ${i + j}`)
    }
}