//迴圈
function sum(n) {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += i;
    }
    return result;
}
console.log(sum(1));
console.log(sum(2));
console.log(sum(5));
console.log(sum(10));

// 遞迴
function sum(n) {
    if (n < 1)
        return 0;
    return n + sum(n - 1);
}

console.log('sum(1) :>> ', sum(1));
console.log('sum(2) :>> ', sum(2));
console.log('sum(5) :>> ', sum(5));
console.log('sum(10) :>> ', sum(10));