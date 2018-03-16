import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity,
} from 'react-native';
import {AppRegistry, Image} from 'react-native';
import { StackNavigator } from 'react-navigation';


export default class Login extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            
            <View style={styles.container}>
                <Text style={styles.header}>- Welcome to Portal Dashboard -</Text>

                <TouchableOpacity
                    style={styles.btn}
                    onPress={this.about}>
                    <Text>About</Text>
                </TouchableOpacity>   

                <TouchableOpacity
                    style={styles.btn}
                    onPress={this.requestTutoring}>
                    <Text>Request Tutoring</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btn}
                    onPress={this.contact}>
                    <Text>Contact</Text>
                </TouchableOpacity>      

            </View>
            

      
        );
    }
    about = () => {
        this.props.navigation.navigate('About');
    }
    requestTutoring = () => {
        this.props.navigation.navigate('RequestTutoring');
    }
    contact = () => {
        this.props.navigation.navigate('Contact');
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
    },
    btn: {
        alignSelf: 'center',
        backgroundColor: '#01c853',
        padding: 20,
        alignItems: 'center',
      }
});
