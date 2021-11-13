const tabs = document.querySelectorAll(".giftset__tabs-link");

for (let tab of tabs) {
	tab.addEventListener("click", tabsOnClick);
}

function tabsOnClick() {
	const tabsBodies = document.querySelectorAll(".giftset__tabs-body");

	for (let tabBody of tabsBodies) {
		tabBody.classList.remove("active");
	}

	for (let tab of tabs) {
		tab.classList.remove("active");
	}

	if (this.dataset.num) {
		this.classList.toggle("active");
		const num = this.dataset.num;
		for (let tabBody of tabsBodies) {
			if (tabBody.dataset.num) {
				if (tabBody.dataset.num == num) {
					tabBody.classList.toggle("active");
				}
			} else {
				return;
			}
		}
	}
}

 