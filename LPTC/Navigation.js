import React from 'react';
// React navigation
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// Screens
import Splashscreen from './screens/Splashscreen';
import Profile from './screens/Profile'
let Navigation = () => {
  // Navigators
  let stack = createStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Splashscreen" options={{headerShown:false}} component={Splashscreen} />
        <stack.Screen name="Profile" options={{headerShown:false}} component={Profile} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
