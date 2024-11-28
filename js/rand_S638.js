function rand(max) {
  return Math.floor(Math.random() * max) + 1;
}

function roll() {
  let num = 38;
  let arr = [];
  
  while (arr.length < 6) {
    let random = rand(num);
    if (!arr.includes(random)) {
      arr.push(random);
    }
  }

  document.getElementById("S_lotto638").innerHTML = '第一區:' + "&nbsp;" + arr.sort(function(a, b){ return a - b; }) + "&emsp;" + '第二區:' + "&nbsp;" + rand(8);
}
