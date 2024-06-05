const options = ["rock", "paper", "scissor"]
let comwin = 0
let plawin = 0

function Player() {
	
	while (true) {
		let ch = prompt("Rock Paper Scissor : ")
		ch = ch.toLowerCase()
		if (options.includes(ch))
			return ch
	}
}

function Computer() {
	return options[Math.floor(Math.random() * 3)]
}

function Play(Com, Pla) {
	if (Com === Pla)
		alert("It is a Tie.")
	else if (Com === "rock" && Pla === "paper") {
		alert("Paper beats Stone! you Won")
		plawin++
	} else if (Com === "paper" && Pla === "scissor") {
		alert("Scissor beats Paper! you Won")
		plawin++
	} else if (Com === "scissor" && Pla === "rock") {
		alert("Rock beats Scissor! you Won")
		plawin++
	} else {
		alert("Oops!! you Lost 😭")
		comwin++
	}
}

while (comwin < 5 && plawin < 5) {
	Play(Computer(), Player())
}
if (comwin === 5)
	alert("AI Won 5 matches. You Lost")
else
	alert("Congratulations you won 5 matches")