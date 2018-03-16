import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AppRegistry, Image} from 'react-native';
import Hello from './Hello';
import Login from './src/components/Login';
import Profile from './src/components/Profile';
import About from './src/components/About';
import RequestTutoring from './src/components/RequestTutoring';
import Contact from './src/components/Contact';
import {StackNavigator} from 'react-navigation';


const Application = StackNavigator({
  Home: {screen: Login},
  Profile: {screen: Profile},
  About: {screen: About},
  RequestTutoring: {screen: RequestTutoring},
  Contact: {screen: Contact},
  }, {
    navigationOptions: {
      header: false,
    }
});



export default class App extends React.Component {
  render() {
    return(
      <Application/>
    );
  }
}






