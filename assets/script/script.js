//REPO FOR COCKTAIL API
// var nameInputEl = document.querySelector("#drink-name");
// var searchByIngredient = document.querySelector("#search-by-ingredient")
// var searchNameEl = document.querySelector("#search-name");
// var searchIngredient = document.querySelector("#search-ingredient");
// var searchGoogle = document.querySelector("#search-google");


// //Search for cocktail by name
// var getCocktailByName = function (cocktailId) {
// 	fetch(`https://the-cocktail-db.p.rapidapi.com/lookup.php?i=${cocktailId}`, {
// 		"method": "GET",
// 		"headers": {
// 			"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
// 			"x-rapidapi-key": "f8e52ccf7dmsh34c5720505ad6eap1411ebjsn682a4dddad4b"
// 		}
// 	})
// 		.then(response => {
// 			if (response.ok) {
// 				response.json().then(function (data) {
// 					console.log("Calling fron ID!!", data)

// 				})
// 			}
// 		})
// 		.catch(err => {
// 			console.error(err);
// 		});

// };

// // //Search for cocktail by name
// var getCocktailByIngredient = function (ingredId) {
// 	fetch(`https://the-cocktail-db.p.rapidapi.com/lookup.php?i=${ingredId}`, {
// 		"method": "GET",
// 		"headers": {
// 			"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
// 			"x-rapidapi-key": "f8e52ccf7dmsh34c5720505ad6eap1411ebjsn682a4dddad4b"
// 		}
// 	})
// 		.then(response => {
// 			if (response.ok) {
// 				response.json().then(function (data) {
// 					console.log("Calling fron ID 2!!", data)

// 				})
// 			}
// 		})
// 		.catch(err => {
// 			console.error(err);
// 		});

// };


// var getIngredientId = function (ingredientName) {
// 	fetch(`https://the-cocktail-db.p.rapidapi.com/search.php?i=${ingredientName}`, {
// 		"method": "GET",
// 		"headers": {
// 			"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
// 			"x-rapidapi-key": "f8e52ccf7dmsh34c5720505ad6eap1411ebjsn682a4dddad4b"
// 		}
// 	})
// 		.then(response => {
// 			if (response.ok) {
// 				response.json().then(function (data) {
// 					console.log("id Fetch: ", data)
// 					var ingredId = data.ingredients[0].idIngredient
// 					getCocktailByIngredient(ingredId)

// 				})
// 			}
// 			console.log("Getting id")
// 		})
// 		.catch(err => {
// 			console.error(err);
// 		});
// }

// var searchByNameHandler = function (event) {
// 	event.preventDefault();
// 	var drinkName = nameInputEl.value;
// 	console.log("Drink: ", drinkName);
// 	//getCocktailByName(drinkName);
// 	getIngredientId(drinkName);
// };

// var searchIngredientHandler = function (event) {
// 	event.preventDefault();
// 	var ingredientName = searchByIngredient.value;
// 	console.log("Ingredient: ", ingredientName);
// 	getIngredientId(ingredientName);

// };
var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#username");
var repoContainerEl = document.querySelector("#repos-container");
var repoSearchTerm = document.querySelector("#repo-search-term");
var drinkData = null
var drinkNameEl = document.querySelector("#drink-name");
var drinkImageEl = document.querySelector("#image");
var glassTypeEl = document.querySelector("#glass-type");
var ingredientEl = document.querySelector("#ingredients");
var instructionsEl = document.querySelector("#insturctions");


var getRandomDrink = function () {
	// repoContainerEl.textContent = "";
	fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php").then(function (response) {
		response.json().then(function (data) {
			displayDrink(data);
			console.log(`apiData`, data.drinks[0])
			drinkData = data.drinks[0]

			var allIngredients = findDuplicates("strIngredient")
			allIngredients.forEach(element => {
				console.log('element :>> ', element);
				var node = document.createElement("li")
				// Create a <li> node
				node.textContent = drinkData[element]                                                     // Append the text to <li>
				ingredientEl.appendChild(node);     // Append <li> to <ul> with id="myList"
			});
			drinkNameEl.textContent = drinkData.strDrink
			drinkImageEl.src = drinkData.strDrinkThumb
			glassTypeEl.textContent = drinkData.strGlass

			instructionsEl.textContent = drinkData.strInstructions
			console.log('drinkNameEl :>> ', drinkNameEl);


			console.log("show all ingredients", allIngredients)
		})
	});
};

var clearFunction = function (el) {

}

var formSubmitHandler = function (event) {
	event.preventDefault();
	// get value from input element
	var drinkName = nameInputEl.value.trim();

	if (drinkName) {
		getRandomDrink(drinkName);
		nameInputEl.value = "";
	} else {
		alert("Please enter a Drink")
	}
	console.log(event);
};

var displayDrink = function (repos, searchTerm) {
	console.log(repos);
	console.log(searchTerm);
	// clear old content

	repoSearchTerm.textContent = searchTerm;
};

var findDuplicates = function (stringYouWantToFind) {
	var keysOfObject = Object.keys(drinkData)
	// console.log("Keys", keysOfObject)
	return keysOfObject.filter((element) => {
		// console.log("for loop item", element)
		if (element.includes(stringYouWantToFind) && drinkData[element] != null) {
			// console.log('element :>> ', element);
			// console.log('drinkData[element] :>> ', drinkData[element]);
			return element;
		}
	})


}

userFormEl.addEventListener("submit", formSubmitHandler);

// searchNameEl.addEventListener("click", searchByNameHandler);


// searchIngredient.addEventListener("click", searchIngredientHandler);









////REPO FOR SECOND API (CURRENTLY NOT WORKING) FINDING OTHER ALTERNATIVES
//var getUserRepos2 = function() {
//	fetch("https://walmart.p.rapidapi.com/v2/auto-complete?term=macbook%20air", {
//		"method": "GET",
//		"headers": {
//			"x-rapidapi-host": "walmart.p.rapidapi.com",
//			"x-rapidapi-key": "2df09f326cmshd68e7beb8a0e5d9p15b205jsnb6b44eb3a127"
//		}
//	})
//	.then(response => {
//		return response.json()
//	})
//	.catch(err => {
//		console.error(err);
//	});
//};
//getUserRepos2()