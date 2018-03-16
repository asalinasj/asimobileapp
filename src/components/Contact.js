import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
} from 'react-native';
import {AppRegistry, Image} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Login extends React.Component {

    render() {
      return(
        
          <View style={styles.container}>
              <Text style={styles.header}>- Contact Us -</Text>
              
              <Text style={styles.header}>- 305-348-7936 -</Text>    
          </View>
        
      );
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2896d3'
    },
    text: {
        color: '#fff'
    }
});