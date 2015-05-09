var React = require("react-native");
var api = require("../utils/api");
var Profile = require('./Profile');
var Repositories = require('./Repositories');

var {
	Text,
	View,
	Image,
	TouchableHighlight,
	StyleSheet
} = React;

var styles = StyleSheet.create({
	container: {
		marginTop: 65,
		flex:1
	}, 
	image: {
		height:350,
	},
	buttonText: {
		fontSize: 24,
		color: "white",
		alignSelf: "center"
	}
});

class Dashboard extends React.Component {

  makeBackground(btn){
  	var obj = {
  		flexDirection: "row",
  		alignSelf: 'stretch',
  		justifyContent: 'center',
  		flex:1
  	}

  	if(btn == 0) {
  		obj.backgroundColor = "tomato"
  	} else if(btn === 1){
  		obj.backgroundColor = "blue"
  	} else {
  		obj.backgroundColor = "green"
  	}

  	return obj;
  }

  goToProfile(){
  	console.log("goToProfile");
  	this.props.navigator.push({ //change the routes
  	 	component: Profile, 
  	 	passProps: {userInfo: this.props.userInfo}
  	 });
  }

  goToRepos(){
  	console.log("goToRepos");
  	api.getRepos(this.props.userInfo.login)
      .then((jsonRes) => {
        this.props.navigator.push({
          component: Repositories,
          title: "Repositories Page",
          passProps: {
            repos: jsonRes,
            userInfo: this.props.userInfo
          }
        });
      })
  }

  goToNotes(){
  	console.log("goToNotes");
  }

	render() {
		return (
			<View style={styles.container}>
			  <Image source={{uri:this.props.userInfo.avatar_url}} style={styles.image} />
			  <TouchableHighlight
			    style={this.makeBackground(0)}
			    onPress={this.goToProfile.bind(this)}
			    underlayColor="#D88D7F">
			    <Text style={styles.buttonText}>view Profile</Text>
			  </TouchableHighlight>
			  
			  <TouchableHighlight
			    style={this.makeBackground(1)}
			    onPress={this.goToRepos.bind(this)}
			    underlayColor="#D88D7F">
			    <Text style={styles.buttonText}>Go to Repos</Text>
			  </TouchableHighlight>

			  <TouchableHighlight
			    style={this.makeBackground(2)} 
			    onPress={this.goToNotes.bind(this)}
			    underlayColor="#D88D7F">
			    <Text style={styles.buttonText}>Go to Notes</Text>
			  </TouchableHighlight>



			</View>
			)
	}
}


module.exports =  Dashboard;
