const today = new Date();

const year = today.getFullYear();  // 年
const month = today.getMonth() + 1; // 月（0が1月なので+1する）
const date = today.getDate();      // 日付


console.log(year + '年' + month + '月' + date + '日');