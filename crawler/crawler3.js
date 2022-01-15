// 用 async/await 寫法練習 axios.get 去證交所取得資料
// 讀取 stock.txt 檔案，取得 stockNo

const axios = require('axios');
const { readFile } = require('fs/promises');

// 20220115 將變數獨立出來
(async () => {
  try {
    // 根據變數去抓取資料
    // let stockNo = 2230;
    let queryDate = '20220115';
    // let response = await axios.get(
    //   `https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=${queryDate}&stockNo=${stockNo}`
    // );

    // 讀取 stockNo.txt 取得 stockNo
    let result = await readFile('stock.txt', 'utf-8');

    // 較好維護、好看
    let response = await axios.get('https://www.twse.com.tw/exchangeReport/STOCK_DAY', {
      // 這裏可以放一些設定
      // params: 放 query string 的參數
      params: {
        response: 'json',
        date: queryDate,
        stockNo: result,
      },
    });
    console.log(response.data);
  } catch (err) {
    console.error(err);
  }
})();
