const axios = require("axios"); 
// async 函數處理多個異步函數
axios.defaults.baseURL =
  "https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=20211201&stockNo=2330&_=1641716312720";
async function queryData() {
  // # 2.1 添加await之後 當前的await 返回結果之後才會執行後面的代碼
  let info = await axios.get("async1");
  // #2.2 讓異步代碼看起來、表現起來更像同步代碼
  let ret = await axios.get("async2?info=" + info.data);
  return ret.data;
}
queryData().then(function (data) {
  console.log(data.data);
});