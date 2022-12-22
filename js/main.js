/* a href='#' 클릭 무시 */
$('a[href="#"]').click(function (event) {
	event.preventDefault();
});

// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	slidesPerView: 2.5,
	spaceBetween: 10,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	breakpoints: {
		1024: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
	},
});
