// Advantages blocks

let target1 = document.querySelector(".advantages__blocks-wrap");

const obserber1 = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		const blocks = entry.target;
		if (entry.isIntersecting) {
			blocks.classList.add('visible');
		}
	});
})

obserber1.observe(target1);

// Giftset blocks

let target2 = document.querySelector(".giftset__tabs");

const obserber2 = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('visible');
		}
	});
})

obserber2.observe(target2);