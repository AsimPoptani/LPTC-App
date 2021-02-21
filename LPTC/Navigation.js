import React from 'react';
// React navigation
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Screens
import Splashscreen from './screens/Splashscreen';
import Profile from './screens/Profile';
import SubCategoryScreen from './screens/SubCategoryScreen';
import MenuScreen from './screens/MenuScreen';
import SettingScreen from './screens/SettingScreen';
import SetupScreen from './screens/SetupScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MoreInfoScreen from './screens/MoreInfoScreen'

let Navigation = () => {
  // Navigators
  let stack = createStackNavigator();
  // animation
  const config = {
    animation: 'spring',
    config: {
      stiffness: 100,
      damping: 10,
      mass: 1,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
  return (
    <NavigationContainer initialRouteName="Splashscreen">
      <stack.Navigator
        screenOptions={{
          transitionSpec: {
            open: config,
            close: config,
          },
        }}>
        <stack.Screen
          name="Splashscreen"
          options={{ headerShown: false }}
          component={Splashscreen}
        />
        {/* <stack.Screen name="Profile" options={{ headerShown: false }} component={Profile} /> */}
        <stack.Screen
          name="MenuScreen"
          options={{ headerShown: false }}
          component={MenuScreen}
        />
        <stack.Screen
          name="SetupScreen"
          options={{ headerShown: false }}
          component={SetupScreen}
        />
        <stack.Screen
          name="SubCategoryScreen"
          options={{ headerShown: true }}
          component={SubCategoryScreen}
        />
        <stack.Screen
        name="MoreInfoScreen"
        options={{ headerShown: true }}
          component={MoreInfoScreen}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
