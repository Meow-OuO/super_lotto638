function rand(max) {
  return Math.floor(Math.random() * max) + 1;
}

function roll() {
  let num = 38;
  let arr = [];
  
  // 產生 6 個唯一的隨機數字
  while (arr.length < 6) {
    let random = rand(num);
    if (!arr.includes(random)) {
      arr.push(random);
    }
  }

  arr.sort(function(a, b) { return a - b; });

  document.getElementById("S_lotto638").innerHTML = 
    '第一區:' + "&nbsp;" + arr.join(", ") + "&emsp;" + '第二區:' + "&nbsp;" + rand(8);
}
