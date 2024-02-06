let swiper = new Swiper(".mySwiper", {
	spaceBetween: 10,
	// effect: "fade",
	// effect: "creative",
	loop: true,
	freeMode: true,
    watchSlidesProgress: true,

	autoplay: {
	delay: 2500,
	disableOnInteraction: false,
},

	navigation: {
	nextEl: ".swiper-button-next",
	prevEl: ".swiper-button-prev",
	},
	pagination: {
	el: ".swiper-pagination",
	clickable: true,
	},
});


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

