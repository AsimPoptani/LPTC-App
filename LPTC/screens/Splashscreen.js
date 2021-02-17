import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect, useContext } from 'react';
import { SafeAreaView, View, StyleSheet, ActivityIndicator } from 'react-native';
import { Text, Image } from 'react-native-elements';
import { DatabaseContext } from '../DatabaseContext';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Splashscreen() {
  const databaseContext = useContext(DatabaseContext);
  const navigation = useNavigation();

  useEffect(() => {
    // Transition time
    let transitionTime = 3000;
    setTimeout(() => {
      navigation.navigate('MenuScreen');
    }, transitionTime);

    databaseContext.retrieve().then(
      () => {
        // If there is a user go to the main screen otherwise go to setup
        if (databaseContext.user) {
          setTimeout(() => {
            navigation.navigate('MenuScreen');
          }, transitionTime);
        }
        else {
          setTimeout(() => {
            navigation.navigate('SetupScreen');
          }, transitionTime);
        }
      }
    ).catch((e) => {
      // todo go to error page
      alert("There has been an error in splashscreen", e)
    })

  }, []);
  return (
    <SafeAreaView style={stylesheet.outer}>
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
