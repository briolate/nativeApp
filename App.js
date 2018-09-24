import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  state = {
    greeting: 'Welcome to MyProject!'
  };

  updateGreeting = () => {
    this.setState({
      greeting: 'New greeting'
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{this.state.greeting}</Text>
        <Text onPress={this.updateGreeting}>Change Greeting</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});
