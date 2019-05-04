var addBtn = $('.submit-btn');
var cardContainer = $('.card-container');
// this line creates a toDos variable
// if there is anything in localStorage with the key of "to-dos",
  // it will use that, parsed OUT of JSON (so take off the surrounding quotes)
// if localStorage "to-dos" is null/empty, we start with an empty array
var toDos = JSON.parse(localStorage.getItem('to-dos')) || []

// this is a completely new function
// it gets called on page load (see line 21)
// it goes through the array in localStorage and appends each to-do
  // to the container
function appendAllToDos() {
  toDos.forEach(function(toDo) {
    cardContainer.append(`
      <p>${toDo}</p>
    `);
  })
}

appendAllToDos();

addBtn.on("click", appendToDo);

function appendToDo() {
  var toDo = $('.to-do').val();

  cardContainer.append(`
    <p>${toDo}</p>
  `);

  // since setStorage has several steps, I refactored this into it's own function.
  // it takes one argument, the toDo string that the user typed in
  setStorage(toDo);

  $('.to-do').val("");
}

function setStorage(toDo) {
  // add the latest toDo to the toDos array
  toDos.push(toDo);
  // stringify the toDos array so it's in JSON and can be stored
  var toDoString = JSON.stringify(toDos)
  // set the stringified, updated array back to localStorage
  localStorage.setItem('to-dos', toDoString);
}
