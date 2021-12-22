var getUserRepos = function() {
    fetch("https://the-cocktail-db.p.rapidapi.com/filter.php", {
    	"method": "GET",
    	"headers": {
    		"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
    		"x-rapidapi-key": "608b51bce9mshd87f2e41a8ba626p150610jsnb1b58387566f"
    	}
    })
    .then(response => {
    	console.log(response);
    })
    .catch(err => {
    	console.error(err);
    });
};