function frizzbuzz(num) {
	for (i = 1; i < num; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			console.log("frizzbuzz ");
		} else if (i % 3 === 0) {
			console.log("frizz ");
		} else if (i % 5 === 0) {
			console.log("buzz ");
		} else {
			console.log(i + " ");
		}
	}
}

let n = parseInt(prompt("Please enter a number you'd like to fizzbuzz upto : "));
frizzbuzz(n)