function checkInput() {
	var userInput = document.getElementById("input").value;
	if (userInput == "fsteCTF{c4ptur3_th3_flag}") {
		document.getElementById("result").innerHTML = "Congrats here is your link joi us = https://t.me/+_8XRWbHOuEdjZGM0";
	} else {
		document.getElementById("result").innerHTML = "Wrong answer!";
	}
}

// read the code 