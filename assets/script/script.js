//REPO FOR COCKTAIL API
var getUserRepos = function() {
    fetch("https://the-cocktail-db.p.rapidapi.com/filter.php?i=", {
    	"method": "GET",
    	"headers": {
    		"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
    		"x-rapidapi-key": "608b51bce9mshd87f2e41a8ba626p150610jsnb1b58387566f"
    	}
    })
    .then(response => {
    	return response.json()
    })

	.then(response =>{
		console.log(response);
	})
    .catch(err => {
    	console.error(err);
    });
};
getUserRepos()

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