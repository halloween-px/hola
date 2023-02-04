window.Vegas = {
	init: function () {
		this.scroll();
		// this.offcanvas();
		// this.hideAndShow();
		this.getEl();
		this.stickyHeader();
	},

	getEl: function (element) {
		let arr = [];
		let elements = document.querySelectorAll(element);
		for (let item of elements) {
			if (elements.length > 1) {
				arr.push(item);
			} else {
				return item
			}
		}
		if (arr.length) {
			return arr;
		}
	},

	scroll: function () {
		viewSection();
		getViewSection();

		function viewSection() {
			let lines = Vegas.getEl('.section-lines-apps');
			let apps = Vegas.getEl('.vg-apps');
			let phoneImg;
			if (apps) {
				phoneImg = apps.querySelector('.image-phone');
			}
			let viewSectionActiveSetted = false;
			let viewSectionActiveTyped = false;

			document.addEventListener('scroll', () => {
				if (!apps) return;
				if (apps.getBoundingClientRect().y <= 300 && -apps.getBoundingClientRect().y <= apps.clientHeight) {
					phoneImg.classList.add('active');
					lines.classList.add('active');
					if (!viewSectionActiveSetted) Vegas.typed();
					viewSectionActiveSetted = true;
					viewSectionActiveTyped = false;
				} else {
					phoneImg.classList.remove('active');
					viewSectionActiveSetted = false;
					if (!viewSectionActiveTyped) {
						Vegas.typed(true);
						viewSectionActiveTyped = true;
					}
				}
			});
		}

		function getViewSection() {
			const section = {
				infoblock: document.querySelector('.vg-gta-infoblock'),
				teams: document.querySelector('.vg-teams'),
			};
			let visibleSection = true;
			for (let item of Object.keys(section)) {
				let el = section[item];
				let view;
				if (el !== null) {
					view = el.getAttribute('data-view');
					window.addEventListener('scroll', () => {
						let coord = el.getBoundingClientRect().y;
						if (coord < view && visibleSection) {
							if (item === 'infoblock') {
								Vegas.counter();
							}
							visibleSection = false;
						}
					});
				}
			}
		}
	},

	typed: function (elem) {
		const element = document.querySelector('.vg-apps .image-phone .body-area .title-area');
		if (element) {
			const option = {
			strings: ['', 'You can learn <span>anything</span>'],
			typeSpeed: 30,
			showCursor: false,
		};
		if (elem) option.strings = ['', ''];
		new Typed(element, option);
		}
	},

	//offcanvas
	offcanvas: function () {
		return
		let myOffcanvas = this.getEl('#sidebar');
		let hamburger = this.getEl('.hamburger-area');

		myOffcanvas.addEventListener('show.bs.offcanvas', function () {
			hamburger.classList.add('active');
		});
		myOffcanvas.addEventListener('hidden.bs.offcanvas', function () {
			hamburger.classList.remove('active');
		})
	},

	counter: () => {
		document.querySelectorAll('.vg-gta-infoblock--item .count-area')
			.forEach((el) => {
				let max = el.getAttribute('data-value');
				let count = 0;
				let step = 1;

				if (max > 200) step = 8;
				let interval = setInterval(() => {
					let val = count < max ? count += step : max;
					el.innerHTML = val;
					if (val === max) {
						clearInterval(interval);
					}
				}, 10);

			});
	},

	hideAndShow: function () {
		let elements = [
			{
				teams: this.getEl('.vg-teams-item .icon-area'),
			},
			{
				registration: this.getEl('.registration .ghost'),
			},
		];

		function keysObjs() {
			let arr = elements;
			let keys = [];
			for (let item of arr) {
				for (let i of Object.keys(item)) {
					keys.push(i);
				}
			}
			return keys;
		}

		function addClassAndRemoveClass(arr, key) {
			for (let i = 0; i < arr.length; i++) {
				let element = arr[i][key[i]];
				if (element) {
					if (element.length > 1) {
						for (let item of element) {
							item.addEventListener('click', (e) => {
								let el = e.target.closest('[data-active]');
								el.classList.toggle('active');
							})
						}
					} else {
						element.addEventListener('click', (e) => {
							let el = e.target.closest('[data-active]');
							el.classList.toggle('active');
						})
					}
				}
			}
		}

		addClassAndRemoveClass(elements, keysObjs());
	},

	stickyHeader: function () {
		let sticky = this.getEl('.header .header-wrapper');
		let checkPoint = sticky ? sticky.getAttribute('data-scroll') : '';
 
		window.addEventListener('scroll', () => {
			let position = window.pageYOffset;
			if (position > checkPoint) {
				sticky.classList.add('fixed');
			} else {
				sticky.classList.add('scroll');
				if (position <= 0) {
					sticky.classList.remove('scroll');
				}
				sticky.classList.remove('fixed');
			}
		})
	}
};

document.addEventListener('DOMContentLoaded', () => {
	Vegas.init();
});