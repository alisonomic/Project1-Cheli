
var addBtn = document.querySelector("#add-btn");
<<<<<<< HEAD
var itemsListEl = document.querySelector("#items-list");
var itemsEl = document.querySelector("#item");

var listed = [{ items: "Buy Cheli FLowers ;" }];
=======
var itemListEl = document.querySelector("#item-list");
var nameEl = document.querySelector("#name");
var modalEl = document.querySelector("#modal-container");
var modalNameEl = document.querySelector("#modal-name");
var descriptionEl = document.querySelector("#description");
var closeEl = document.querySelector(".close");
var saveBtn = document.querySelector("#save");

var item = [{ name: "Bob" }];
>>>>>>> 483d1d37658a9aa7025090723402cf4d89225cc8
var currentId = 0;

function addItemsToList(event) {
  event.preventDefault();
<<<<<<< HEAD
  var items = itemsEl.value;
  var li = document.createElement("li");
  li.id = listed.length;
  li.innerHTML = items + " <button>Finished</button>" + "button>Remove</button>", "button>Cheli Search</button>";
  listed.push({ items: item });
  itemsListEl.append(li);
}
=======
  var items = nameEl.value;
  console.log(items);
  var li = document.createElement("li");
  li.id = item.length;
  li.innerHTML = items + " <button id=complete>complete</button><button id=delete>delete</button><button id=search>cheli search</button>";
  item.push({ name: items });
  itemListEl.append(li);
  nameEl.value = "";
  $(document).on("click", "#complete", function(){
    document.getElementById("complete").disabled = true;
  })
  $(document).on("click", "#delete", function(){
    $("this").remove();
  })
}

function close() {
  modalEl.style.display = "none";
}

function handleClick(event) {
  if (event.target.matches("button")) {
    event.preventDefault();/* 
    modalEl.style.display = "block";
    currentId = parseInt(event.target.parentElement.id); */
    var name = item[currentId].name;
    var description = item[currentId].description;
   /* modalNameEl.textContent = name;
    if(description) {
      descriptionEl.value = description;
    } else {
      descriptionEl.value = "";
    }*/
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
document.addEventListener("click", function(event) {
  if (event.target === modalEl) {
    close();
  }
});


$(document).ready(function () {
  // queryURL is the url we'll use to query the API
    $(function() {
      var params = {
          // Request parameters
          "q": "value",
          "count": "10",
          "offset": "0",
          "mkt": "en-us",
          "localCategories": "EatDrink",
      };
      $(document).on("click", "#search", function(){
      $.ajax({
          url: "https://api.cognitive.microsoft.com/bing/v7.0/search?" + $.param(params),
          beforeSend: function(xhrObj){
              // Request headers
              xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","369434a9b765464da90e4eae76487a17");
          },
          method: "GET",
      })
      .then(function(response){
        console.log(response)
        var results = response.webPages.value;
        for (i = 0; i < results.length; i++){
          var resultDiv = $("<div>");
          var resultName = $("<h3>" + response.webPages.value[i].name + "</h3>");
          var resultUrl = response.webPages.value[i].url;
          var link = $("<a href='" + resultUrl + "'>" + resultUrl + "</a>");
          resultDiv.append(resultName);
          resultDiv.append(link);
          $("body").append(resultDiv);
        }
      })
  });
})
  })
>>>>>>> 483d1d37658a9aa7025090723402cf4d89225cc8
