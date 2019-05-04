var addBtn = $('.submit-btn');
var cardContainer = $('.card-container');

addBtn.on("click", appendToDo);

function appendToDo() {
  var toDo = $('.to-do').val();

  cardContainer.append(`
    <p>${toDo}</p>
  `);

  $('.to-do').val("");
}
