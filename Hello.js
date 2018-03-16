import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
export default class Hello extends React.Component{
    render(){
        return(
            <View>
                <Text style = {styles.hello}>Hello from Hello.jsx</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    hello: {
        color: '#00FF00'
    }
})