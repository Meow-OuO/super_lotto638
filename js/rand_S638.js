function rand(max) {
  return Math.floor(Math.random() * max)+1;
}

function roll() {
	let num = 38;
	let arr = [];
	let random = rand(num);

	for (i = 1; i <= 6; i++) {
		arr.push(random);
		while (arr.includes(random)) {
			random = rand(num);
		}	
	}		
document.getElementById("S_lotto638").innerHTML='第一區:'+"&nbsp;"+arr.sort(function(a, b){return a-b})+"&emsp;"+'第二區:'+"&nbsp;"+rand(8)
}
