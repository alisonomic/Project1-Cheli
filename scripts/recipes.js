$(document).ready(function () {
    // queryURL is the url we'll use to query the API
          var queryURL = `https://api.spoonacular.com/recipes/random?number=10&apiKey=c70f9ed188cf4e0ea65870aad10a9703&includeNutrition=true`;
          $.get(queryURL, function (response) {
          console.log(response);
          })
    })
      function getRecipeData() {
        var recipe = $("#recipe-search").val();
        //the queryURL is used to search the API randomly for a manually selected cuisine type
        var queryURL = `https://api.spoonacular.com/recipes/random?number=10&tags=${recipe}&apiKey=c70f9ed188cf4e0ea65870aad10a9703`;
        $.get(queryURL, function (response) {
          localStorage.setItem("Recipes:", JSON.stringify(recipe));
          //find the name of each of the 10 recipes
          var recipeName = response.recipes[0].title;
          var recipeName1 = response.recipes[1].title;
          var recipeName2 = response.recipes[2].title;
          var recipeName3 = response.recipes[3].title;
          var recipeName4 = response.recipes[4].title;
          var recipeName5 = response.recipes[5].title;
          var recipeName6 = response.recipes[6].title;
          var recipeName7 = response.recipes[7].title;
          var recipeName8 = response.recipes[8].title;
          var recipeName9 = response.recipes[9].title;
          //find the image source for each of the 10 recipes
          var recipeImage = response.recipes[0].image;
          var recipeImage1 = response.recipes[1].image;
          var recipeImage2 = response.recipes[2].image;
          var recipeImage3 = response.recipes[3].image;
          var recipeImage4 = response.recipes[4].image;
          var recipeImage5 = response.recipes[5].image;
          var recipeImage6 = response.recipes[6].image;
          var recipeImage7 = response.recipes[7].image;
          var recipeImage8 = response.recipes[8].image;
          var recipeImage9 = response.recipes[9].image;
          //find the source link for each of the 10 recipes
          var recipeSource = response.recipes[0].sourceUrl;
          var recipeSource1 = response.recipes[1].sourceUrl;
          var recipeSource2 = response.recipes[2].sourceUrl;
          var recipeSource3 = response.recipes[3].sourceUrl;
          var recipeSource4 = response.recipes[4].sourceUrl;
          var recipeSource5 = response.recipes[5].sourceUrl;
          var recipeSource6 = response.recipes[6].sourceUrl;
          var recipeSource7 = response.recipes[7].sourceUrl;
          var recipeSource8 = response.recipes[8].sourceUrl;
          var recipeSource9 = response.recipes[9].sourceUrl;
          //add a title for each of the 10 recipes
          var recipeHead = $("<h3>").text(recipeName);
          var recipeHead1 = $("<h3>").text(recipeName1);
          var recipeHead2 = $("<h3>").text(recipeName2);
          var recipeHead3 = $("<h3>").text(recipeName3);
          var recipeHead4 = $("<h3>").text(recipeName4);
          var recipeHead5 = $("<h3>").text(recipeName5);
          var recipeHead6 = $("<h3>").text(recipeName6);
          var recipeHead7 = $("<h3>").text(recipeName7);
          var recipeHead8 = $("<h3>").text(recipeName8);
          var recipeHead9 = $("<h3>").text(recipeName9);
          //add images for each of the 10 recipes
          var recipeIMG = $('<img />').attr({
            'src': recipeImage,
            'alt': 'Image Not Available',
            'width': 250
        });
        var recipeIMG = $('<img />').attr({
            'src': recipeImage,
            'alt': 'Image Not Available',
            'width': 250
        });
        var recipeIMG1 = $('<img />').attr({
            'src': recipeImage1,
            'alt': 'Image Not Available',
            'width': 250
        });
        var recipeIMG2 = $('<img />').attr({
            'src': recipeImage2,
            'alt': 'Image Not Available',
            'width': 250
        });
        var recipeIMG3 = $('<img />').attr({
            'src': recipeImage3,
            'alt': 'Image Not Available',
            'width': 250
        });
        var recipeIMG4 = $('<img />').attr({
            'src': recipeImage4,
            'alt': 'Image Not Available',
            'width': 250
        });
        var recipeIMG5 = $('<img />').attr({
            'src': recipeImage5,
            'alt': 'Image Not Available',
            'width': 250
        });
        var recipeIMG6 = $('<img />').attr({
            'src': recipeImage6,
            'alt': 'Image Not Available',
            'width': 250
        });
        var recipeIMG7 = $('<img />').attr({
            'src': recipeImage7,
            'alt': 'Image Not Available',
            'width': 250
        });
        var recipeIMG8 = $('<img />').attr({
            'src': recipeImage8,
            'alt': 'Image Not Available',
            'width': 250
        });
        var recipeIMG9 = $('<img />').attr({
            'src': recipeImage9,
            'alt': 'Image Not Available',
            'width': 250
        });
        //add each element to the HTML file
          $("#output").html(recipeHead);
          $("#output").append(recipeIMG);
          $("#sourceLink").html(recipeSource)
          $("#output1").html(recipeHead1);
          $("#output1").append(recipeIMG1);
          $("#sourceLink").html(recipeSource1)
          $("#output2").html(recipeHead2);
          $("#output2").append(recipeIMG2);
          $("#sourceLink").html(recipeSource2)
          $("#output3").html(recipeHead3);
          $("#output3").append(recipeIMG3);
          $("#sourceLink").html(recipeSource3)
          $("#output4").html(recipeHead4);
          $("#output4").append(recipeIMG4);
          $("#sourceLink").html(recipeSource4)
          $("#output5").html(recipeHead5);
          $("#output5").append(recipeIMG5);
          $("#sourceLink").html(recipeSource5)
          $("#output6").html(recipeHead6);
          $("#output6").append(recipeIMG6);
          $("#sourceLink").html(recipeSource6)
          $("#output7").html(recipeHead7);
          $("#output7").append(recipeIMG7);
          $("#sourceLink").html(recipeSource7)
          $("#output8").html(recipeHead8);
          $("#output8").append(recipeIMG8);
          $("#sourceLink").html(recipeSource8)
          $("#output9").html(recipeHead9);
          $("#output9").append(recipeIMG9);
          $("#sourceLink").html(recipeSource9)
        });
        console.log(queryURL);
      }
    //on click event for the search button
    $("#searchBTN").on("click", function (event) {
      event.preventDefault();
      getRecipeData();
    })