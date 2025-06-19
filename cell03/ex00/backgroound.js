function getRandomColor() {
	const letters = "0123456789ABCDEF";
	let color = "#";
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function changeBackground() {
	document.body.style.backgroundColor = getRandomColor();
}

document.addEventListener("DOMContentLoaded", () => {
	const button = document.getElementById("changeBtn");
	button.addEventListener("click", changeBackground);
});
