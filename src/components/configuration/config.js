import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View } from 'react-native';
import Expo from 'expo';
import styles from '../../../src/styles';

export default class Config extends Component {
  static navigationOptions  ={
    title: 'Config',
  };

  render(){
    const {navigate} = this.props.navigation;

    return(
      <View style = {styles.container}>
        <Text
         onPress = {()=> navigate('Home')}>Navigate to Home 
        </Text>
      </View>
    )
  }
}
