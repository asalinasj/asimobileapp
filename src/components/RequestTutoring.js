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
              <Text style={styles.header}>- Request Tutoring -</Text>  
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