import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect, useContext } from 'react';
import { SafeAreaView, View, StyleSheet, ActivityIndicator } from 'react-native';
import { Text, Image } from 'react-native-elements';
import { DatabaseContext } from '../DatabaseContext';
import moment from 'moment';
import MMKVStorage from 'react-native-mmkv-storage';

export default function Splashscreen() {
  const databaseContext = useContext(DatabaseContext);
  const navigation = useNavigation();

  useEffect(() => {
    // Transition time
    let transitionTime = 3000;
    setTimeout(() => {
      navigation.navigate('MenuScreen');
    }, transitionTime);
    // databaseContext.retrieve().then(
    //   // If the database exists then we go to the MenuScreen
    //   () => {
    //     console.log(databaseContext);

    //     if (databaseContext.user) {
    //       setTimeout(() => {
    //         navigation.navigate('MenuScreen');
    //       }, transitionTime);
    //     } else {
    //       // TODO setup
    //       // Go to SetupScreen screen
    //       setTimeout(() => {
    //         navigation.navigate('SetupScreen');
    //       }, transitionTime);
    //     }
    //   },
    //   () => {
    //     // Go to error screen
    //     setTimeout(() => {
    //       navigation.navigate('SetupScreen');
    //     }, transitionTime);
    //   },
    // );
  }, []);
  return (
    <SafeAreaView style={stylesheet.outer}>
      {/* <Image source={require('./images/logo.jpg')} style={stylesheet.image} />
       */}
      <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
        <Text h1>DBMA</Text>
        <Text h4>Disability Benefits Mobile Application</Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size={'large'} color={'black'} />
        <Text>Loading ...</Text>
      </View>
    </SafeAreaView>
  );
}
const stylesheet = StyleSheet.create({
  outer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 400,
    height: 400,
  },
});
