function rand(max) {
  return Math.floor(Math.random() * max) + 1;
}

function roll() {
  let num = 38;  // 第一區的最大數字
  let arr = [];
  
  // 產生 6 個唯一的隨機數字
  while (arr.length < 6) {
    let random = rand(num);
    if (!arr.includes(random)) {
      arr.push(random);  // 如果數字不在陣列中，則加入
    }
  }

  // 將數字按升序排序
  arr.sort(function(a, b) { return a - b; });

  // 更新網頁顯示內容
  document.getElementById("S_lotto638").innerHTML = 
    '第一區:' + "&nbsp;" + arr.join(", ") + "&emsp;" + '第二區:' + "&nbsp;" + rand(8);
}
