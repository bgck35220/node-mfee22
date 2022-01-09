// Promise 物件代表一個即將完成、或失敗的非同步操作，以及它所產生的值。


// 錯誤寫法(5~16)：await裡面不會出現.then
// const { readFile } = require("fs/promises");

// async function main() {
//     let result = await readFile("test.txt", "utf-8")
//         .then((result) => {
//             console.log(`這是內建的 promise 版本 ${result}`);
//         })
//         .catch((err) => {
//             console.error(err);
//         });
// }
// main();

// (正確)立即函式 (IIFE)寫法：
const { readFile } = require("fs/promises");

(async () => {
    try {
        let result = await readFile("test.txt", "utf-8")
        console.log(`這是內建的 promise 版本 ${result}`);
    } catch (err) {
        console.error(err);
    }
});