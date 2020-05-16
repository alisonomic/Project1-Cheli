
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
  li.innerHTML = items + " <button onclick='strikeThrough()' class='complete'>complete</button><button onclick='removeItem()' class='delete'>delete</button><button  id='search'>cheli search</button>";
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

$(document).ready(function () {
  // queryURL is the url we'll use to query the API
    $(function() {
      var params = {
          // Request parameters
          "q": "ice cream near me",
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
          $("form").append(resultDiv);
        }
      })
  });
})
  })