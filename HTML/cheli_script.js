
var addBtn = document.querySelector("#add-btn");
var itemsListEl = document.querySelector("#items-list");
var itemEl = document.querySelector("#item");
var modalEl = document.querySelector("#modal-container");
var modalItemEl = document.querySelector("#modal-item");
var descriptionEl = document.querySelector("#description");
var closeEl = document.querySelector(".close");
var saveBtn = document.querySelector("#save");

var items = [{ item: "flowers" }];
 var currentId = 0;
 
function addItemsToList(event) {
  event.preventDefault();
  var item = itemEl.item;
  var li = document.createElement("li");
  li.id = items.length;
  li.innerHTML = item + " <button>Finished</button>" + "<button>Remove</button>" + "<button>Cheli Search</button>";
  items.push({ item: item });
  itemsListEl.append(li);
}

function close() {
  modalEl.style.display = "none";
}
 
function handleClick(event) {
  if (event.target.matches("button")) {
    event.preventDefault();
    modalEl.style.display = "block";
    currentId = parseInt(event.target.parentElement.id);
    var item = items[currentId].item;
    var description = items[currentId].description;
    modalItemEl.textContent = item;
    if(description) {
      descriptionEl.value = description;
    } else {
      descriptionEl.value = "";
    }
  }
}

closeEl.addEventListener("click", close);
saveBtn.addEventListener("click", function(){
  event.preventDefault();
  items[currentId].description = descriptionEl.value;
  close();
}); 

addBtn.addEventListener("click", addItemsToList);
itemsListEl.addEventListener("click", handleClick);
document.addEventListener("click", function(event) {
 if (event.target === modalEl) {
    close();
  } 
});