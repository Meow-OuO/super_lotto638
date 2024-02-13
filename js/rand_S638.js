function rand(max) {
  return Math.floor(Math.random() * max)+1;
}

function roll() {
let arr = [];
let random = rand(38);

for (i = 1; i <= 6; i++) {
                arr.push(random);
                while (arr.includes(random)) {
                    random = rand(38);
                }	
            }
			
document.getElementById("S_lotto638").innerHTML='第一區:'+arr.sort(function(a, b){return a-b})+'第二區:'+rand(8)
}
