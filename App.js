import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  TouchableHighlight,
  Text,
  View
} from 'react-native';

// import Icon from 'react-native-vector-icons/MaterialIcons';

export default class App extends Component {
  state = {
    people: [],
    refreshing: false,
    page: 1
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ refreshing: true });
    try {
      const data = await fetch(
        `https://swapi.co/api/people?page=${this.state.page}`
      );
      const json = await data.json();
      this.setState({
        people: json.results,
        page: this.state.page + 1,
        refreshing: false
      });
    } catch (err) {
      console.log('error fetching data: ', err);
    }
  };

  renderItem = ({ item }) => {
    return (
      <View
        style={{ padding: 15, borderBottomColor: '#ddd', borderBottomWidth: 1 }}
      >
        <Text style={{ fontSize: 20 }}>{item.name}</Text>
        <Text style={{ color: 'rgba(0, 0, 0, .5)' }}>
          Gender: {item.gender}
        </Text>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>People:</Text>
        <FlatList
          onRefresh={this.fetchData}
          refreshing={this.state.refreshing}
          data={this.state.people}
          keyExtractor={item => item.name}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 30,
    paddingHorizontal: 14
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
