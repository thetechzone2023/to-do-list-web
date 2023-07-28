function showInputBar() {
  const inputBar = document.querySelector('.input-bar');
  inputBar.style.display = 'flex';
}

function addItem() {
  const headingInput = document.getElementById('headingInput').value;
  if (headingInput) {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');

    const heading = document.createElement('h2');
    heading.textContent = headingInput;
    itemDiv.appendChild(heading);

    const plusButton = document.createElement('div');
    plusButton.classList.add('plus-btn');
    plusButton.innerHTML = '&#43;';
    plusButton.onclick = function () {
      showSubheadingInput(itemDiv);
    };
    itemDiv.appendChild(plusButton);

    document.getElementById('output').appendChild(itemDiv);
    document.getElementById('headingInput').value = '';
  }
}

function showSubheadingInput(parentDiv) {
  const subheadingInput = document.createElement('input');
  subheadingInput.type = 'text';
  subheadingInput.placeholder = 'Add Item';
  
  const addButton = document.createElement('button');
  addButton.textContent = 'Add Item';
  addButton.onclick = function () {
    addSubheading(parentDiv, subheadingInput.value);
    subheadingInput.value = '';
  };

  const subheadingDiv = document.createElement('div');
  subheadingDiv.classList.add('subheading-input');
  subheadingDiv.appendChild(subheadingInput);
  subheadingDiv.appendChild(addButton);

  parentDiv.appendChild(subheadingDiv);
}

function addSubheading(parentDiv, subheadingText) {
  if (subheadingText) {
    const subheading = document.createElement('p');
    subheading.textContent = subheadingText;

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.classList.add('complete-btn');
    completeButton.onclick = function () {
      toggleComplete(subheading);
    };

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    deleteButton.onclick = function () {
      deleteSubheading(subheading);
    };

    const buttonDiv = document.createElement('div');
    buttonDiv.classList.add('button-container');
    buttonDiv.appendChild(completeButton);
    buttonDiv.appendChild(deleteButton);

    const subheadingDiv = document.createElement('div');
    subheadingDiv.classList.add('subheading-item');
    subheadingDiv.appendChild(subheading);
    subheadingDiv.appendChild(buttonDiv);

    parentDiv.appendChild(subheadingDiv);
  }
}

function toggleComplete(subheading) {
  subheading.classList.toggle('completed');
}

function deleteSubheading(subheading) {
  const parentDiv = subheading.parentElement.parentElement;
  subheading.parentElement.remove();
  // Remove the parentDiv if it becomes empty (no subheadings left)
  if (parentDiv.querySelectorAll('.subheading-item').length === 0) {
    parentDiv.remove();
  }
}

function hideInputBar() {
  const inputBar = document.querySelector('.input-bar');
  inputBar.style.display = 'none';
}
