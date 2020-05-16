
var addBtn = document.querySelector("#add-btn");
var itemListEl = document.querySelector("#item-list");
var nameEl = document.querySelector("#name");
var modalEl = document.querySelector("#modal-container");
var modalNameEl = document.querySelector("#modal-name");
var descriptionEl = document.querySelector("#description");
var closeEl = document.querySelector(".close");
var saveBtn = document.querySelector("#save"); 

var item = [{ name: "Bob" }];
var currentId = 0;

function addPersonToList(event) {
  event.preventDefault();
  var name = nameEl.value;
  var li = document.createElement("li");
  li.id = item.length;
  li.innerHTML = name + " <button>complete</button><button>delete</button><button>cheli search</button>";
  item.push({ name: name });
  itemListEl.append(li);
}

function close() {
  modalEl.style.display = "none";
}

function handleClick(event) {
  if (event.target.matches("button")) {
    event.preventDefault();
    modalEl.style.display = "block";
    currentId = parseInt(event.target.parentElement.id);
    var name = item[currentId].name;
    var description = item[currentId].description;
    modalNameEl.textContent = name;
    if(description) {
      descriptionEl.value = description;
    } else {
      descriptionEl.value = "";
    }
  }
}

closeEl.addEventListener("click", close);
saveBtn.addEventListener("click", function(event) {
  event.preventDefault();
  item[currentId].description = descriptionEl.value;
  close();
});

addBtn.addEventListener("click", addPersonToList);
itemListEl.addEventListener("click", handleClick);
document.addEventListener("click", function(event) {
  if (event.target === modalEl) {
    close();
  }
});