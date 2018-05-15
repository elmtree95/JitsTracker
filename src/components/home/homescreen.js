import React, {Component} from 'react';
import {AppRegistry, StyleSheet,Image, Text, View } from 'react-native';
import Expo from 'expo';
import styles from '../../../src/styles';


export default class HomeScreen extends React.Component{
    static navigationOptions  ={
      title: 'Home',
    };
  
    render(){
      const {navigate} = this.props.navigation;
  
      return(
            <View style = {styles.container}>
            <Text
             onPress = {()=> navigate('Config')}>Navigate to Config 
            </Text>
          </View>
      )
    }
  }
  