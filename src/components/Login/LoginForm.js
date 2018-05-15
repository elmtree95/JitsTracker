import React, {Component} from 'react';
import {StyleSheet, View,  TextInput, TouchableOpacity, Text, KeyboardAvoidingView} from 'react-native';
import Config from '../configuration/config';
import {createStackNavigator,} from 'react-navigation';

const App = createStackNavigator({Config: {screen: Config,}});

export default class LoginForm extends Component{

    onPress = () =>{
        console.log('puff1')
      

    }  
    render() {
        const {navigate } = this.props.navigation;
        return(
            <KeyboardAvoidingView style={styles.container}>
                <TextInput
                placeholder="username or email"
                placeholderTextColor= 'rgba(255,255,255,0.7)'
                returnKeyType="next" 
               // onSubmitEditing={() => this.passwordInput.focus()}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                    style={styles.input} 
                />
                <TextInput
                 placeholder="password" 
                 placeholderTextColor= 'rgba(255,255,255,0.7)'
                 secureTextEntry
                 style= {styles.input}
                />
                <TouchableOpacity  onPress={this.onPress} style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                 {/*   onPress={this.onPress} */}
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
     padding: 20
    },

    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 10,
        color: '#FFF',
        paddingHorizontal: 10
    },
    buttonContainer:{
        backgroundColor: '#2980b9',
        paddingVertical: 15
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF'
    }
});