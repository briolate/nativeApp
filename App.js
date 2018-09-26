import React, { Component } from 'react';
import { StyleSheet, TouchableHighlight, Text, View } from 'react-native';

// import Icon from 'react-native-vector-icons/MaterialIcons';

export default class App extends Component {
  render() {
    const people = [
      { name: 'Evan', age: '30' },
      { name: 'Alyssa', age: '28' },
      { name: 'Russ', age: '31' }
    ];

    return (
      <View style={styles.container}>
        {people.map((person, index) => (
          <Text key={index} style={styles.text}>
            {person.name} is {person.age}
          </Text>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    fontSize: 22
  }
});

{
  /* <TouchableHighlight
  onPress={this.onPress}
  style={styles.button}
  underlayColor="rgba(50, 183, 255, .8)"
>
  <View style={styles.textContatiner}>
    <Icon name="home" size={30} color="white" />
    <Text style={styles.text}>Home</Text>
  </View>
</TouchableHighlight>; */
}
// button: {
//   margin: 10,
//   backgroundColor: 'rgba(50, 183, 255, 1)',
//   borderRadius: 30,
//   padding: 17
// },
// textContatiner: {
//   flexDirection: 'row',
//   justifyContent: 'center',
//   alignItems: 'center'
// },
// text: {
//   marginLeft: 9,
//   color: 'white',
//   fontSize: 20
// }
