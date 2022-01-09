// Promise 物件代表一個即將完成、或失敗的非同步操作，以及它所產生的值。
const { readFile } = require("fs");

let readfilePromise = new Promise((resolve, reject) => {
  readFile("text.txt", "utf-8", (err, data) => {
    if (err) {
      reject(err);
      return;
    } resolve(data);
    // insert to mysql
  });
})


readfilePromise
  .then((result) => {
    console.log(result)
  })
  .catch((err) => {
    console.log(err)
  })