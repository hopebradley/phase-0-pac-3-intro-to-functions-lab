
function shout(string) {
	return string.toUpperCase();
}

function whisper(string) {
	return string.toLowerCase();
}

function logWhisper(string) {
	console.log(string.toLowerCase());
}

function logShout(string) {
	console.log(string.toUpperCase());
}

function sayHiToGrandma(string) {
	if (string === "I love you, Grandma.") { return "I love you, too."; }
	else { 
		const ans = string === string.toLowerCase() ? "I can't hear you!" : "YES INDEED!";
		return ans;
	}
}
