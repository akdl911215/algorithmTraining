const getDivisors = (num) => {
    const divisors = [];

    console.log("Math.sqrt(num) : ", Math.sqrt(num))
    console.log("---------------------------------")
    for (let i = 1; i <= Math.sqrt(num); ++i) {
        if (num % i === 0) {
            divisors.push(i);
            console.log(i)
            if (num / i !== i) {
                console.log(num / i)
                divisors.push(num / i)
            };
        }
    }
    console.log("---------------------------------")
    // divisors.sor((a,b) => a - b);
    return divisors
}
console.log(getDivisors(100))