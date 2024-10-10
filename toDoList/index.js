const toDoList = document.querySelector('#to-do-list');
const items = toDoList.children;

function updateToDo(event) {
  event.target.classList.toggle('done');
}

for (let item of items) {
  item.addEventListener('click', updateToDo);
}

// 테스트 코드
items[2].removeEventListener('click', updateToDo);
