// +++++++* side bar js code *+++++++++++++
document.querySelector(".sidebar").style.display = "none"
document.querySelector(".hamburger").addEventListener("click", () => {
	document.querySelector(".sidebar").style.display = "inline"

	document.querySelector(".hamburger").style.display = "none"
})

document.querySelector(".cross").addEventListener("click", () => {
	document.querySelector(".hamburger").style.display = "inline"

	document.querySelector(".sidebar").style.display = "none"
})
// +++++++* end side bar js code *+++++++++++++

