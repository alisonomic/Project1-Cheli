
var addBtn = document.querySelector("#add-btn");
var itemListEl = document.querySelector("#item-list");
var nameEl = document.querySelector("#name");
var modalEl = document.querySelector("#modal-container");
var modalNameEl = document.querySelector("#modal-name");
var descriptionEl = document.querySelector("#description");
var closeEl = document.querySelector(".close");
var saveBtn = document.querySelector("#save"); 
var completeBtn = document.querySelector(".complete")

var item = [{ name: "Bob" }];
var currentId = 0; 
// var completedText = style="text-decoration:line-through;"

function addItemsToList(event) {
  event.preventDefault();
  var items = nameEl.value;
  console.log(items);
  var li = document.createElement("li");
  li.id = item.length;
  li.innerHTML = items + " <button onclick='strikeThrough()' class='complete'>complete</button><button onclick='removeItem()' class='delete'>delete</button><button  class='search'>cheli search</button>";
  item.push({ name: items });
  itemListEl.append(li);
  nameEl.value = "";
}

function strikeThrough() {
  let el = document.getElementsByTagName("li");
  el[3].style.textDecoration = "line-through";
  // completeBtn.addEventListener("click", strikeIt());
}

function removeItem() {
  let el = document.getElementsByTagName("li");
  el[1].style.display = "none";
  // completeBtn.addEventListener("click", strikeIt());
}

function close() {
  modalEl.style.display = "none";
}

function handleClick(event) {
  if (event.target.matches("button")) {
    event.preventDefault(); 
    var name = item[currentId].name;
    var description = item[currentId].description;
  }
}

closeEl.addEventListener("click", close);
saveBtn.addEventListener("click", function(event) {
  event.preventDefault();
  item[currentId].description = descriptionEl.value;
  close();
});

addBtn.addEventListener("click", addItemsToList);
itemListEl.addEventListener("click", handleClick);
