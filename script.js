let b = document.querySelector('.add');
let inp = document.querySelector('input');

b.addEventListener('click', addTask);

function addTask(){
	let newElem = document.createElement('p');
	newElem.innerText = inp.value;
	newElem.addEventListener('click', crossLine);
	inp.value = '';

	let checkbox = document.createElement('input');
	checkbox.type = "checkbox";
	
	let container = document.createElement('div');
	container.style.display = "flex";
	container.style.alignItems = "center";
	container.appendChild(newElem);
	container.appendChild(checkbox);

	document.body.appendChild(container);
}
function crossLine(){
	if(this.style.textDecoration == "line-through"){
		this.style.textDecoration = "";
	}
	else if(this.style.textDecoration == ""){
		this.style.textDecoration = "line-through";
	}
	
}

