const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', function() {
	let chapter = input.value;
	console.log(chapter.length)
	if (chapter.length == 0) {
		input.focus();
		input.placeholder = "Required"
	}
	else {
		input.value = '';
		input.placeholder = "Alma 5";
		const listItem = document.createElement('li');
		const listText = document.createElement('span');
		const listBtn = document.createElement('button');
	
		listItem.appendChild(listText);
		listText.textContent = chapter;
		listItem.appendChild(listBtn);
		listBtn.textContent = '❌';
		list.appendChild(listItem);
	
		listBtn.onclick = function (e) {
			list.removeChild(listItem);
			input.focus();

		}
	}
	input.focus();
})
																								