import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  TextInput,
  KeyboardAvoidingView, 
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import {AppRegistry, Image} from 'react-native';
import { StackNavigator } from 'react-navigation';


export default class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }
  componentDidMount(){
    this._loadInitialState().done();
  }

  _loadInitialState = async () => {
    var value = await AsyncStorage.getItem('user');
    if(value !== null){
      this.props.navigation.navigate('Profile');
    }
  }
  render() {
    return(
      <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
          <View style={styles.container}>
              <Text style={styles.header}>- ASI Login -</Text>

              <TextInput
                style={styles.textInput} placeholder="Username"
                onChangeText={(username) => this.setState({username})}
                underlineColorAndroid='transparent'
              />

              <TextInput
                style={styles.textInput} placeholder="Password"
                onChangeText={(password) => this.setState({password})}
                underlineColorAndroid='transparent'
              />

              <TouchableOpacity
                style={styles.btn}
                onPress={this.login}>
                <Text>Log in</Text>
              </TouchableOpacity>
          

          </View>
      </KeyboardAvoidingView>
    );
  }
  
  login = () => {
    
    //alert(this.state.username);
    //alert("hi")
    if((this.state.username === "student" && this.state.password === "123")){
      this.props.navigation.navigate('Profile');
    }
    alert("Welcome");
    /*fetch('http://192.168.56.1:19000/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      })
    })
    if((this.username === "student" && this.password === "123")){
      this.props.navigation.navigate('Profile');
    }
    /* .then((response) => response.json())
    .then((res) => {
      if(res.success === true){
        AsyncStorage.setItem('user', res.user);
        this.props.navigation.navigate('Profile');
      }
      if((username === "student" && password === "123")){
        this.props.navigation.navigate('Profile');
      }
      else{
        alert(res.message);
      }
    })
    .done(); */
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2896d3',
    paddingLeft: 40,
    paddingRight: 40,
  },
  header: {
    fontSize: 24,
    marginBottom: 60,
    color: '#fff',
    fontWeight: 'bold',
  },
  textInput: {
    alignSelf: 'stretch',
    padding: 16,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  btn: {
    alignSelf: 'stretch',
    backgroundColor: '#01c853',
    padding: 20,
    alignItems: 'center',
  }
});
