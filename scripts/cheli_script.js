
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

function addItemsToList(event) {
  event.preventDefault();
  var items = nameEl.value;
  console.log(items);
  var li = document.createElement("li");
  li.id = item.length;
  li.innerHTML = items + " <button>complete</button><button>delete</button><button id=search>cheli search</button>";
  item.push({ name: items });
  itemListEl.append(li);
  nameEl.value = "";
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
          "q": "salt",
          "count": "10",
          "offset": "0",
          "mkt": "en-us",
          "safesearch": "Moderate",
      };
    
      $.ajax({
          url: "https://api.cognitive.microsoft.com/bing/v7.0/search?" + $.param(params),
          beforeSend: function(xhrObj){
              // Request headers
              xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","369434a9b765464da90e4eae76487a17");
          },
          method: "GET",
      })
      .then(function(response){
        for (var i = 0; i < response.length; i++){
          var resultDiv = $("<div>");
          var resultImage = $("<img>");
          var resultUrl = response.entities.value[i].webSearchUrl;
          var IMG = response.entities.value[i].image;
          var link = $("<a href='" + resultUrl + "'>" + resultUrl + "</a>");
          resultImage.attr("src", IMG);
          resultDiv.append(resultImage);
          resultDiv.append(link);
        }
        console.log(response)
      })
  });
  })