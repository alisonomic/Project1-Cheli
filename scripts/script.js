$(document).ready(function () {
// queryURL is the url we'll use to query the API
      var queryURL = 'https://api.spoonacular.com/recipes/search?apiKey=c70f9ed188cf4e0ea65870aad10a9703&includeNutrition=true';
      $.get(queryURL, function (response) {
      console.log(response);
      modal1();
      })
})
// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
function modal1() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}