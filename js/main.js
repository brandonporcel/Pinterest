let angleDown = document.getElementById('angle-down');
let dropdownUl = document.getElementById('dropdown__ul');
angleDown.addEventListener('click', () => {
	dropdownUl.classList.toggle('dropdown__ul-active');
});

let dropdownLiTrigger = document.getElementById('dropdown__li-trigger');
let dropdownLi = document.getElementById('dropdown__li-no-active');
dropdownLiTrigger.addEventListener('click', () => {
	dropdownLi.classList.toggle('active');
	dropdownLiTrigger.classList.toggle('no-active');
});
dropdownLi.addEventListener('click', () => {
	dropdownLi.classList.toggle('active');
	dropdownLiTrigger.classList.toggle('no-active');
});

let bodyy = document.getElementById('body');
let darkMode = document.getElementById('dark-mode-trigger');
darkMode.addEventListener('click', () => {
	bodyy.classList.toggle('dark-modee');
	// Guardamos el modo en localstorage.
	if (document.body.classList.contains('dark-modee')) {
		localStorage.setItem('dark-mode', 'true');
	} else {
		localStorage.setItem('dark-mode', 'false');
	}
});
// Obtenemos el modo actual.
if (localStorage.getItem('dark-mode') === 'true') {
	bodyy.classList.add('dark-modee');
} else {
	bodyy.classList.remove('dark-modee');
}
const masonryLayout = (containerElem, itemsElems, columns) => {
	containerElem.classList.add('masonry-layout', `columns-${columns}`);
	let columnsElements = [];

	for (let i = 1; i <= columns; i++) {
		let column = document.createElement('div');
		column.classList.add('masonry-column', `column-${i}`);
		containerElem.appendChild(column);
		columnsElements.push(column);
	}

	for (let m = 0; m < Math.ceil(itemsElems.length / columns); m++) {
		for (let n = 0; n < columns; n++) {
			let item = itemsElems[m * columns + n];
			columnsElements[n].appendChild(item);
			item.classList.add('masonry-item');
		}
	}
};

masonryLayout(
	document.getElementById('gallery'),
	document.querySelectorAll('.gallery-item'),
	4
);
