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