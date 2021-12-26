//for迴圈寫法

function sum(n) {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += i;
    }
    return result;
}

// console.log(sum(1));
// console.log(sum(2));
// console.log(sum(5));
// console.log(sum(10));

// 遞迴寫法

// function sum(n) {
//     if (n < 1)
//         return 0;
//     return n + sum(n - 1);
// }

// console.log('sum(1) :>> ', sum(1));
// console.log('sum(2) :>> ', sum(2));
// console.log('sum(5) :>> ', sum(5));
// console.log('sum(10) :>> ', sum(10));

//reducer寫法

// const sum = (n) => {
//     arr = [];
//     const reducer = (previousValue, currentValue) => previousValue + currentValue;
//     for (i = 1; i <= n; i++) {
//         arr.push(i);
//     }
//     let result = arr.reduce(reducer, 0);
//     return result;
// };

// console.log(sum(1));
// console.log(sum(2));
// console.log(sum(5));
// console.log(sum(10));

//梯形寫法

// function sum(n) {
//     let result = (1 + n) * n / 2
//     return result
// }

// console.log(sum(1));
// console.log(sum(2));
// console.log(sum(5));
// console.log(sum(10));