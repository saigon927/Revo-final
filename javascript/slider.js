// Your-favorite

new Swiper(".your-favorite__slider", {
	navigation: {
		nextEl: ".your-favorite__swiper-button-next",
		prevEl: ".your-favorite__swiper-button-prev"
	},
	grid: {
		rows: 1
	},
	mousewheel: {
		sensitivity: 1,
		eventsTarget: ".your-favorite__slider"
	},
	breakpoints: {
		1065: {
			grid: {
				rows: 2
			},
			slidesPerView: 2,
		},
		767: {
			grid: {
				rows: 2
			},
			slidesPerView: 1.5
		}
	},
	slidesPerView: 1,
	slidesPerGroup: 1,
	spaceBetween: 30,
});

// Personalized-coffee

new Swiper(".personalized-coffee__slider", {
	navigation: {
		nextEl: ".personalized-coffee__swiper-button-next",
		prevEl: ".personalized-coffee__swiper-button-prev"
	},
	mousewheel: {
		sensitivity: 1,
		eventsTarget: ".personalized-coffee__slider"
	},
	breakpoints: {
		1065: {
			slidesPerView: 3,
		},
		915: {
			slidesPerView: 2.5
		},
		767: {
			slidesPerView: 2
		}
	},
	slidesPerView: 1,
	slidesPerGroup: 1,
	spaceBetween: 30,
});








