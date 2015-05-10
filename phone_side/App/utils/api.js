var api = {

	// var AVOS = require("avoscloud-sdk").AV;
	// AVOS.initialize("hz4r30mqwf6nc02jjaaqxkzchjdvv51u1pvicu5nv0toutxi", "0j0ht5vkqxdtmfw815kqzlnxlmjuefhw9qoewa8sdg4dtrov");

// test AVOS
// var TestObject = AVOS.Object.extend("TestObject");
// var testObject = new TestObject();
// testObject.save({foo: "bar"}, {
//   success: function(object) {
//   console.log("LeanCloud works!");
//   }
// });

	getNotes(username){
		username = username.toLowerCase().trim();
		
		console.log("getNotes: ", username);
		return false
	},

	addNote(username, note) {
		username = username.toLowerCase().trim();
		console.log("add Note: ", username , " : ", note);

		return false;
	},

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