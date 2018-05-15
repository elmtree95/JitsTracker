import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Expo from 'expo';
import {createStackNavigator,} from 'react-navigation';

import Login from './src/components/Login/Login';
import Config from './src/components/configuration/config';
import HomeScreen from './src/components/home/homescreen';
import styles from './src/styles';
import FBSDK , {LoginManager} from 'react-native-fbsdk';

const JitsTracker= createStackNavigator({
    Home: {screen: HomeScreen},
    Login: {screen: Login} ,
    Config: {screen: Config}},
    {navigationOptions: {headerStyle: {marginTop: Expo.Constants.statusBarHeight }}    
  });



export default class App extends React.Component {

    _fbAuth(){
      LoginManager.logInWithReadPermissions(['public_profile']).then(function(result){
          if(result.isCancelled){
            console.log('login was cancelled')           
          } else {
            console.log('login was successful '+ result.grantedPermissionRequest.toString());
          }
      }, function(error){
        console.log('an error occurred' + error);
      })
      }
  

  render() {
    return (

       <View style = {styles.container}> 
          {/* <Login navigation={this.props.navigation} /> */}
       <JitsTracker />

     </View>
    );
  }
}


