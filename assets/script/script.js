//REPO FOR COCKTAIL API

//Search for cocktail by name
var getCocktailByName = function () {
	fetch("https://the-cocktail-db.p.rapidapi.com/lookup.php?i=11007", {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
			"x-rapidapi-key": "f8e52ccf7dmsh34c5720505ad6eap1411ebjsn682a4dddad4b"
		}
	})
	.then(response => {
		if (response.ok) {
			response.json().then(function(data) {
				console.log(data)
			})
		}
	})
	.catch(err => {
		console.error(err);
	});
	
	};
	
	getCocktailByName()











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