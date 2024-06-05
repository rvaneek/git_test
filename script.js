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

frizzbuzz(20)