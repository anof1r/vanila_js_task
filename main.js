/* eslint-disable no-unused-vars */
let rightSideItems = [];
let allItems = [{
	id: '0',
	img: 'tv.png',
	title: 'TV',
	selected: false
},
{
	id: '1',
	img: 'vacuum.png',
	title: 'Vacuum cleaner',
	selected: false
},
{
	id: '2',
	img: 'monitor.png',
	title: 'Display',
	selected: false
},
{
	id: '3',
	img: 'lamp.png',
	title: 'Lamp',
	selected: false
},
{
	id: '4',
	img: 'mic.png',
	title: 'Microphone',
	selected: false
},
{
	id: '5',
	img: 'cpu.png',
	title: 'CPU',
	selected: false
},
{
	id: '6',
	img: 'mouse.png',
	title: 'Mouse',
	selected: false
},
{
	id: '7',
	img: 'headset.png',
	title: 'Headset',
	selected: false
}];

function createListOfItems() {
	const itemsContainer = document.getElementById('itemsContainer');
	const ul = document.createElement('ul');
	ul.setAttribute('class', 'ul-style');
	ul.setAttribute('id', 'itemsList');

	for (let i = 0; i <= allItems.length - 1; i++) {
		const li = document.createElement('li');
		li.innerHTML = allItems[i].title;
		li.setAttribute('class', 'li');
		li.setAttribute('style', 'background: url(' + allItems[i].img + ') no-repeat left center;');
		li.setAttribute('id', i);
		ul.appendChild(li);
	}
	itemsContainer.appendChild(ul);
}

function createListOfSelectedItems() {
	const selectedItemsContainer = document.getElementById('selectedItemsContainer');
	const ul = document.createElement('ul');
	ul.setAttribute('class', 'ul-style');
	ul.setAttribute('id', 'selectedItems');

	for (let i = 0; i <= rightSideItems.length - 1; i++) {
		const li = document.createElement('li');
		li.innerHTML = rightSideItems[i].title;
		li.setAttribute('style', 'background: url(' + rightSideItems[i].img + ') no-repeat left center;');
		li.setAttribute('id', i);
		ul.appendChild(li);
	}
	selectedItemsContainer.appendChild(ul);
}

function addSelectedItem() {
	const selectedItems = allItems.filter((item) => item.selected);
	const selectedLis = selectedItems.map((item) => {
		const li = document.getElementById(item.id);
		li.classList.remove('active');
		return li;
	});
	const ul = document.getElementById('selectedItems');
	selectedLis.forEach((item) => {
		ul.appendChild(item.cloneNode(true));
		item.remove();
	});
	allItems = allItems.filter((item) => !item.selected);
	selectedItems.forEach((item) => item.selected = false);
	rightSideItems = rightSideItems.concat(selectedItems);
}

function removeSelectedItem() {
	const selectedItems = rightSideItems.filter((item) => item.selected);
	const selectedLis = selectedItems.map((item) => {
		const li = document.getElementById(item.id);
		li.classList.remove('active');
		return li;
	});
	const ul = document.getElementById('itemsList');
	selectedLis.forEach((item) => {
		ul.appendChild(item.cloneNode(true));
		item.remove();
	});
	rightSideItems = rightSideItems.filter((item) => !item.selected);
	selectedItems.forEach((item) => item.selected = false);
	allItems = allItems.concat(selectedItems);
}

function addAllItems() {
	let allLis = allItems.map((item) => document.getElementById(item.id));
	const ul = document.getElementById('selectedItems');
	allLis = allItems.map((item) => {
		const li = document.getElementById(item.id);
		li.classList.remove('active');
		return li;
	});
	allLis.forEach((item) => {
		ul.appendChild(item.cloneNode(true));
		item.remove();
	});
	rightSideItems = rightSideItems.concat(allItems);
	allItems = [];
}

function selectedItemsRollBack() {
	let allLis = rightSideItems.map((item) => document.getElementById(item.id));
	const ul = document.getElementById('itemsList');
	allLis = rightSideItems.map((item) => {
		const li = document.getElementById(item.id);
		li.classList.remove('active');
		return li;
	});
	allLis.forEach((item) => {
		ul.appendChild(item.cloneNode(true));
		item.remove();
	});
	allItems = allItems.concat(rightSideItems);
	rightSideItems = [];
}

function moveItemDown() {
	const selectedItem = allItems.find((item) => item.selected);
	let position = 0;
	position = allItems.indexOf(selectedItem);
	if (position < allItems.length - 1) {
		swapIndexesDown(allItems, position);
		let allLis = allItems.map((item) => document.getElementById(item.id));
		const ul = document.getElementById('itemsList');
		allLis.forEach((item) => {
			ul.appendChild(item.cloneNode(true));
			item.remove();
		});
	}
	else {
		console.log('end of an allItemsay');
	}
	console.log(allItems);
}

function moveItemUp() {
	const selectedItem = allItems.find((item) => item.selected);
	let position = 0;
	position = allItems.indexOf(selectedItem);

	if (position < allItems.length - 2) {
		swapIndexesUp(allItems, position);
		let allLis = allItems.map((item) => document.getElementById(item.id));
		const ul = document.getElementById('itemsList');
		allLis.forEach((item) => {
			ul.appendChild(item.cloneNode(true));
			item.remove();
		});
	}
}

function swapIndexesUp(allItems, position) {
	let temp = allItems[position];
	allItems[position] = allItems[position - 1];
	allItems[position - 1] = temp;

	//AllItems[position].id = (position--).toString()
	//AllItems[position--].id = (position++).toString()
	return allItems;
}

function swapIndexesDown(allItems, position) {
	let temp = allItems[position];
	allItems[position] = allItems[position + 1];
	allItems[position + 1] = temp;

	//AllItems[position].id = (position++).toString()
	//AllItems[position++].id = (position-1).toString()
	return allItems;
}

function searchItems(str) {
	const foundItem = allItems.find((item) => str.toString() === item.title.toLowerCase());
	let allLis = allItems.map((item) => document.getElementById(item.id));
	const ul = document.getElementById('itemsList');
	const foundLi = allLis.find((item) => foundItem.id === item.id);
	const searcResult = allLis.filter((item) => {
		if (item != foundLi) {
			item.setAttribute('style', 'display:none');
		}
	});
	console.log(searcResult);
	searcResult.forEach((item) => {
		ul.removeChild(item.cloneNode(true));
		item.remove();
	});
}

function applyDefaultSettings() {
	const ul = document.getElementById('itemsList');
	ul.remove();
	createListOfItems();
}

function itemClickHandler(event) {
	if (event.target.classList.contains('li')) {
		event.target.classList.toggle('active');
		let found = allItems.find((item) => Number(item.id) === Number(event.target.id));
		if (!found) {
			found = rightSideItems.find((item) => Number(item.id) === Number(event.target.id));
		}
		found.selected = !found.selected;
	}
}
