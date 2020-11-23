/*
  Add the required JavaScript to handle form submit and add a new todo item to 
  the page (in the div.todo-list element).  You will need to use a counter to 
  uniquely identify each todo item and use only DOM API functions to interact
  with the document (i.e. create each todo item), DO NOT use innerHTML for this
  exercise.
*/

// required vars
var todos = document.querySelector('.todo-list');
var todoCount = 0;
let dn = '\u21e9'; // Unicode value of down arrow
let up = '\u21e7'; // Unicode value of up arrow

// todo form submit handler, adds a new todo item to the 'list'
document.querySelector('.todo-frm').addEventListener('submit', function (evt) {
	
	var div,
		checkbox,
		label,
		labelText,
		todoText,
		span;

	todoText = evt.target.elements['todo-item'].value;

	// adding a todo regardless, so might as well increment now...
	todoCount += 1;
	
	if (todoText === '') {
		todoText = 'Todo ' + (todoCount);
	}

	// create required elements
	div = document.createElement('div');
	checkbox = document.createElement('input');
	label = document.createElement('label');
	labelText = document.createTextNode(todoText);
	spandn = document.createElement('span');
	spandnText = document.createTextNode(dn);
	spanUp = document.createElement('span');
	spanUpText = document.createTextNode(up);
	


	// set appropriate attributes
	checkbox.setAttribute('type', 'checkbox');
	checkbox.setAttribute('id', 'todo-' + todoCount);
	label.setAttribute('for', 'todo-' + todoCount);
	label.setAttribute('contenteditable', '');
	spandn.setAttribute('class', 'arrow dn');
	spanUp.setAttribute('class', 'arrow up');

	// build document fragment
	label.appendChild(labelText);
	div.appendChild(checkbox);
	div.appendChild(label);
	div.appendChild(spandn);
	spandn.appendChild(spandnText);
	div.appendChild(spanUp);
	spanUp.appendChild(spanUpText);

	// add the document fragment to the document for rendering
	todos.appendChild(div);

	// clear the form
	evt.target.reset();

	evt.preventDefault();
});

document.querySelector('.todo-list').addEventListener('click', function(evt){
	// check for click on an arrow
	let targetTodo = evt.target.parentNode;
	let todoList = targetTodo.parentNode;
	let siblingTodo;
	

	if (evt.target.classList.contains('arrow')) {
		// identify the type of arrow
		if (evt.target.classList.contains('dn')) {
			siblingTodo = targetTodo.nextElementSibling;
			// insert the sibling before the target
			todoList.insertBefore(siblingTodo, targetTodo);
		} else if (evt.target.classList.contains('up')) {
			siblingTodo = targetTodo.previousElementSibling;
			todoList.insertBefore(targetTodo, siblingTodo);
		}
	}
})
