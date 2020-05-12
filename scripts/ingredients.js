$(document).ready(function () {
    // queryURL is the url we'll use to query the API
          var queryURL = `https://api.spoonacular.com/recipes/random?number=10&apiKey=c70f9ed188cf4e0ea65870aad10a9703&includeNutrition=true`;
          $.get(queryURL, function (response) {
          console.log(response);
          })
    })
    //on click event for the search button
    $("#searchBTN").on("click", function (event) {
        event.preventDefault();
        getRecipeData();
      })