var React = require('react-native');

var {
  View,
  WebView,
  StyleSheet
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6EF',
    flexDirection: 'column',
  },
});

class Web extends React.Component{
  onNavigationStateChange(navState) {
    console.log("onNavigationStateChange...: ",navState);
    console.info("put the svg icon n");
    // this.setState({
    //   backButtonEnabled: navState.canGoBack,
    //   forwardButtonEnabled: navState.canGoForward,
    //   url: navState.url,
    //   status: navState.title,
    //   loading: navState.loading,
    // });
  }

  render() {
    return (
      <View style={styles.container}>
        <WebView
         onNavigationStateChange={this.onNavigationStateChange}
         url={this.props.url}/>
      </View>
    );
  }
};

Web.propTypes = {
 url: React.PropTypes.string.isRequired
};

module.exports = Web;