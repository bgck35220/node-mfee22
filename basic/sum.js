
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

//壓力測試
console.time('recursive');
for (let i = 0; i < 10000; i++)
    // sum(100000); // maximum call stack size exceeded
    // sum(50000); // maximum call stack size exceeded
    // sum(10000); // 1.198 秒
    sum(100); // 62.087 毫秒
console.timeEnd('recursive');

console.time('for')
for (let i = 0; i < 10000; i++)
    // sum_for(100000); // 1.194 秒
    // sum_for(50000); // 510.471 毫秒
    // sum_for(10000); // 112.668 毫秒
    sum_for(100); // 4.485 毫秒
console.timeEnd('for')

console.time('trapezoid')
for (let i = 0; i < 10000; i++)
    // sum_trapezoid(100000); // 2.305 毫秒
    // sum_trapezoid(50000); // 1.04 毫秒
    // sum_trapezoid(10000); // 0.691 毫秒
    sum_trapezoid(100); // 1.155 毫秒
console.timeEnd('trapezoid')