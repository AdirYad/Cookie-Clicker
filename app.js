function displayContent() {
	image.classList.remove('bounce');

	setTimeout(() => {
		image.classList.add('bounce');
	}, 1);

	strong.textContent = counter;

	if (counter === 0) {
		image.src = "images/Cookie.png";
	} else if (counter >= 20 && counter < 25) {
		surprise.classList.remove('hidden');
	} else if (counter === 25) {
		surprise.classList.add('hidden')
	} else if (counter >= 30 && counter < 100) {
		image.src = "images/Cookie2.png";
	} else if (counter >= 100) {
		image.src = "images/Cookie3.png";
	}
}

function addOneToTheCounter() {
	counter++;
	localStorage.setItem('counter', counter);

	displayContent();
}

function resetCounter() {
	counter = 0;
	localStorage.setItem('counter', counter);
	
	displayContent();
}

if(localStorage.getItem('counter') === null) {
	localStorage.setItem('counter', 0);
}

let counter = parseInt(localStorage.getItem('counter'));

const image = document.querySelector('#grid > main > div > img');

const strong = document.querySelector('#grid > main > div > p > strong');

const surprise = document.querySelector('#grid > main > div > p#surprise.hidden');

const resetBtn = document.querySelector('#grid > main > div > div > button');

displayContent();

image.onclick = addOneToTheCounter;
resetBtn.onclick = resetCounter;