const axios = require('axios');
const { readFile } = require('fs/promises');
const moment = require('moment');

// 自己寫date

// (async () => {
//   try {
//     let standardDate = new Date();
//     let year = standardDate.getFullYear().toString();
//     let month = standardDate.getMonth() + 1;
//     if (month < 10) {
//       month = '0' + month;
//     }
//     let date = standardDate.getDate().toString();
//     let searchDate = `${year}${month}${date}`;
//     let stockNum = await readFile('./stock.txt', 'utf-8');
//     let source = await axios.get('https://www.twse.com.tw/exchangeReport/STOCK_DAY', {
//       params: {
//         response: 'json',
//         date: searchDate,
//         stockNo: stockNum,
//       },
//     });
//     console.log(source.data);
//   } catch (err) {
//     console.error(err);
//   }
// })();

// 使用moment

(async () => {
  try {
    // 根據變數去抓取資料
    // 從 stock.txt 中讀出檔案代碼
    let stockNo = await readFile('stock.txt', 'utf-8');
    let queryDate = moment().format('YYYYMMDD'); // 自動用今天的日期
    // let queryDate = 'now'; // 可以用now抓當天日期

    let response = await axios.get('https://www.twse.com.tw/exchangeReport/STOCK_DAY', {
      // 這裡可以放一些設定
      // params: 放 query string 的參數
      params: {
        response: 'json',
        date: queryDate,
        stockNo,
      },
    });

    console.log(response.data);
  } catch (e) {
    console.error(e);
  }
})();
