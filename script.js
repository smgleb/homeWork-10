// 1я часть-------------

let cat = document.querySelectorAll('.card-action a');

function ShowCat() {
	let img = document.querySelector('#current-cat');
	let title = document.querySelector('#current-title');
	let content = document.querySelector('#current-content');
	// меняем картинку
	img.src = `images/${this.textContent}.jpg`;
	// Первая заглавная в заголовке чтоб как в примере
	let titleUp = this.textContent[0].toUpperCase() + this.textContent.slice(1);
	// меняем заголовок
	title.innerHTML = titleUp;
	// Меняем описание
	if (this.innerHTML === 'cat1') {
		content.innerHTML = '<p>Барсик Первый</p>';
	} else if (this.innerHTML === 'cat2') {
		content.innerHTML = '<p>Барсик Второй</p>';
	} else if (this.innerHTML === 'cat3') {
		content.innerHTML = '<p>Барсик Третий</p>';
	}
}

for (let i = 0; i < cat.length; i++) {
	cat[i].onclick = ShowCat;
}

// 2я часть-------------

let newCat = document.querySelector('.waves-effect.waves-light.btn');
newCat.onclick = addNewCat;

function addNewCat() {
	let name = ["Allen", "Bob", "Carlton",
		"David", "Ernie", "Foster",
		"George", "Howard", "Ian",
		"Jeffery", "Kenneth", "Lawrence",
		"Michael", "Nathen", "Orson",
		"Peter", "Quinten", "Reginald",
		"Stephen", "Thomas", "Morris",
		"Victor", "Walter", "Xavier",
		"Charles", "Anthony", "Gordon",
		"Percy", "Conrad", "Quincey",
		"Armand", "Jamal", "Andrew",
		"Matthew", "Mark", "Gerald"];
	let randomName = name[Math.floor(Math.random() * name.length)];

	let country = ['Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bangladesh', 'Barbados', 'Bahamas', 'Bahrain', 'Belarus', 'Belgium', 'Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Vietnam', 'Venezuela', 'Wallis and Futuna', 'Western Sahara', 'Yemen', 'Zambia', 'Zimbabwe'];
	let randomCountry = country[Math.floor(Math.random() * country.length)];

	let dateRandom = function (n, m) {
		return Math.floor(Math.random() * (m - n + 1)) + n;
	};

	// добавляем строчку таблицы
	let tbody = document.querySelector('#cat-info');
	tbody.insertAdjacentHTML(
		'beforeend',
		`<tr>
		<td>${randomName}</td>
		<td>${randomCountry}</td>
		<td>${dateRandom(2013, 2021)}</td>
		</tr>`
	);
};



// 3я часть-------------

let dark = document.querySelector('#change-switcher');
dark.onclick = darkOrLigth;

// Решение без classList
let num = 3;
function darkOrLigth() {
	let row = document.querySelector('.row');
	let moon = document.querySelectorAll('img')[0];
	let click = num++;

	if (click % 2 !== 0) {
		moon.src = './images/moon.svg';
		moon.style.background = '#fff';
		row.style.cssText = `background-color: #000;
		color: #fff;`;
	} else {
		moon.src = './images/sun.svg';
		moon.style.background = '';
		row.style.cssText = ``;
	}
}

// Решение c classList
// function darkOrLigth() {
// 	let row = document.querySelector('.row');

// 	row.classList.toggle('active');

// 	let moon = document.querySelectorAll('img')[0];
// 	if (row.classList.contains('active')) {
// 		moon.src = './images/moon.svg';
// 		moon.style.background = '#fff';
// 	} else {
// 		moon.src = './images/sun.svg';
// 	}
// }

