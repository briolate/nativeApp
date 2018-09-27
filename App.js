import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  TouchableHighlight,
  Text,
  TextInput,
  View,
  Button,
  Alert,
  CameraRoll,
  Image,
  ScrollView,
  Dimensions,
  PermissionsAndroid,
  Platform,
  Animated
} from 'react-native';

// const { width, height } = Dimensions.get('window');

export default class App extends Component {
  animatedValue = new Animated.Value(0);
  animate = () => {
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 2500
    }).start();
  };

  render() {
    const margin = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 200]
    });

    const backgroundColor = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['red', 'blue']
    });

    const rotation = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });

    return (
      <View style={styles.container}>
        <Text>Animation Demo</Text>
        <Button onPress={this.animate} title="Animate" />
        <Animated.View
          style={{
            height: 150,
            width: 150,
            backgroundColor,
            marginTop: margin,
            marginLeft: margin,
            transform: [
              {
                rotate: rotation
              }
            ]
          }}
        />
        <Animated.Text style={{ fontSize: margin }}>Font</Animated.Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30
  }
});

// Fetch API example:
//
//   state = {
//     people: [],
//     refreshing: false,
//     page: 1
//   };

//   componentDidMount() {
//     this.fetchData();
//   }

//   fetchData = async () => {
//     this.setState({ refreshing: true });
//     try {
//       const data = await fetch(
//         `https://swapi.co/api/people?page=${this.state.page}`
//       );
//       const json = await data.json();
//       this.setState({
//         people: json.results,
//         page: this.state.page + 1,
//         refreshing: false
//       });
//     } catch (err) {
//       console.log('error fetching data: ', err);
//     }
//   };

//   renderItem = ({ item }) => {
//     return (
//       <View
//         style={{ padding: 15, borderBottomColor: '#ddd', borderBottomWidth: 1 }}
//       >
//         <Text style={{ fontSize: 20 }}>{item.name}</Text>
//         <Text style={{ color: 'rgba(0, 0, 0, .5)' }}>
//           Gender: {item.gender}
//         </Text>
//       </View>
//     );
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>People:</Text>
//         <FlatList
//           onRefresh={this.fetchData}
//           refreshing={this.state.refreshing}
//           data={this.state.people}
//           keyExtractor={item => item.name}
//           renderItem={this.renderItem}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingVertical: 30,
//     paddingHorizontal: 14
//   },
//   text: {
//     fontSize: 22
//   }
// });

// Username and password input example:
//
// state = {
//     input: '',
//     password: '',
//     formData: ''
//   };

//   onChangeText = (key, val) => {
//     this.setState({
//       [key]: val
//     });
//   };

//   submit = () => {
//     const userData = {
//       username: this.state.username,
//       password: this.state.password,
//       signedIn: true
//     };
//     this.setState({
//       formData: JSON.stringify(userData)
//     });
//   };
//
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Demo</Text>
//         <TextInput
//           placeholder="Username"
//           autoCapitalize="none"
//           autoCorrect={false}
//           onChangeText={val => this.onChangeText('username', val)}
//           style={styles.input}
//         />
//         <TextInput
//           placeholder="Password"
//           autoCapitalize="none"
//           autoCorrect={false}
//           onChangeText={val => this.onChangeText('password', val)}
//           style={styles.input}
//           secureTextEntry={true}
//         />
//         <Button onPress={this.submit} title="Submit" />
//         <Text>{this.state.formData}</Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingVertical: 30,
//     paddingHorizontal: 14
//   },
//   input: {
//     height: 50,
//     borderWidth: 1,
//     borderColor: '#666',
//     margin: 10,
//     padding: 8
//   }
// });

// Get photos:
//
// state = {
//   photos: []
// };

// checkPlatform = async () => {
//   if (Platform.OS === 'ios') {
//     this.getPhotos();
//   }
//   if (Platform.OS === 'android') {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
//         {
//           title: 'Hello',
//           message: 'This process requires us to access your photos'
//         }
//       );
//       if (granted === 'PermissionsAndroid.RESULTS.GRANTED') {
//         this.getPhotos();
//       } else {
//         console.log('Cammera access denied');
//       }
//     } catch (err) {
//       console.log('error: ', err);
//     }
//   }
// };

// getPhotos = async () => {
//   try {
//     const data = await CameraRoll.getPhotos({ first: 10, assetType: 'All' });
//     console.log('data: ', data);
//     this.setState({
//       photos: data.edges
//     });
//   } catch (err) {
//     'error ', err;
//   }
// };

// render() {
//   return (
//     <View style={styles.container}>
//       <Text>Camera Roll Demo</Text>
//       <Button onPress={this.checkPlatform} title="Get Photos" />
//       <ScrollView>
//         <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
//           {this.state.photos.map((image, index) => (
//             <Image
//               source={{ url: image.node.image.uri }}
//               style={{ width: width / 2, height: height / 4 }}
//             />
//           ))}
//         </View>
//       </ScrollView>
//     </View>
//   );
// }
// }

// const styles = StyleSheet.create({
// container: {
//   flex: 1,
//   paddingVertical: 30
// }
// });
