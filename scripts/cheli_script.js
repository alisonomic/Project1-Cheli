
var addBtn = document.querySelector("#add-btn");
var itemsListEl = document.querySelector("#items-list");
var itemsEl = document.querySelector("#item");

var listed = [{ items: "Buy Cheli FLowers ;" }];
var currentId = 0;

function addItemsToList(event) {
  event.preventDefault();
  var items = itemsEl.value;
  var li = document.createElement("li");
  li.id = listed.length;
  li.innerHTML = items + " <button>Finished</button>" + "button>Remove</button>", "button>Cheli Search</button>";
  listed.push({ items: item });
  itemsListEl.append(li);
}
