var api = {

  getBio(username){

  	console.log("before fetch username: ", username);

  	username = username.toLowerCase().trim();
  	 var url = `https://api.github.com/users/${username}`;
  	
  	 console.log("before fetch username: ", username);
  	 console.log("before fetch url: ", url);
  	 return fetch(url).then((res) => res.json());
  },

  getRepos(username){
  	var username = username.toLowerCase().trim();
  	var url = `https://api.github.com/users/${username}/repos`;
  	return fetch(url).then((res) => res.json());
  },

}

module.exports = api;