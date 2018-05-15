import React, {Component} from 'react';
import {StyleSheet, View,  TextInput, TouchableOpacity, Text, KeyboardAvoidingView} from 'react-native';

export default class LoginForm extends Component{
    render() {
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
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>LOGIN</Text>
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