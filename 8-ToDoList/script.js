const toDoItems = document.getElementsByClassName('to-do-items')[0];
const input = document.getElementById('input');

input.addEventListener('keydown', (event) =>{
  if (event.key === 'Enter')
    addItem();
});

const addItem = () => {
  let divParent = document.createElement('div');
  let divChild = document.createElement('div');
  let checkIcon = document.createElement('i');
  let trashIcon = document.createElement('i');

  divParent.className = 'item';
  divParent.innerHTML = '<div>' + input.value + '</div>';

  checkIcon.className = 'fa-solid fa-square-check';
  checkIcon.style.color = 'lightgray';
  checkIcon.style.margin = '0 10px 0 0';
  checkIcon.addEventListener('click', () => {
    checkIcon.style.color = 'limegreen';
  });
  divChild.appendChild(checkIcon);

  trashIcon.className = 'fa-solid fa-trash';
  trashIcon.style.color = 'darkgray';
  trashIcon.addEventListener('click', () => {
    divParent.remove();
  });

  divChild.appendChild(trashIcon);

  divParent.appendChild(divChild);

  toDoItems.appendChild(divParent);

  input.value = '';
}