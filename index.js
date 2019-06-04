var addBtn = $('.submit-btn');
var cardContainer = $('.card-container');
var toDos = JSON.parse(localStorage.getItem('to-dos')) || [];

function appendAllToDos() {
  toDos.forEach(function(toDo) {
    cardContainer.append(`
      <div>
        <p class="to-do">${toDo}</p>
        <button class="complete">mark complete</button>
      </div>
    `);
  });
}

appendAllToDos();

addBtn.on("click", appendToDo);


function appendToDo() {
  var toDo = $('.to-do').val();
  cardContainer.append(`
    <div>
      <p class="to-do">${toDo}</p>
      <button class="complete">mark complete</button>
    </div>
  `);
  setStorage(toDo);
  $('.to-do').val("");
}

function setStorage(toDo) {
  toDos.push(toDo);
  var toDoString = JSON.stringify(toDos)
  localStorage.setItem('to-dos', toDoString);
}

// event listener for completing/removing a todo
// it cannot be placed directly on the complete button as it doesn't exist on the original DOM
cardContainer.on("click", ".complete", completeToDo);

// complete to do function takes the event object since we need to know which todo to delete
function completeToDo(event) {
  // this line gets the content of the todo from the P tag above the complete button
  var toDotoDelete = event.target.parentNode.children[0].textContent;
  // this line finds the location of that string in the array
  var indexToDelete = toDos.indexOf(toDotoDelete);

  // this line removes that element from the array
  toDos.splice(indexToDelete, 1);
  // this stringifies the array
  var toDoString = JSON.stringify(toDos);
  // reset the local storage with one less element
  localStorage.setItem('to-dos', toDoString);

  // remove the element from the DOM so user can't see!
  event.target.parentNode.remove();
}
