import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, ActivityIndicator} from 'react-native';
import {Text, Image} from 'react-native-elements';

export default function Splashscreen() {
  const navigation = useNavigation();

  useEffect(() => {
    // Todo do some loading
    // todo remove timeout when above done
    setTimeout(() => {
      navigation.navigate('Profile');
    }, 5000);
  });
  return (
    <SafeAreaView style={stylesheet.outer}>
      <Image source={require('./images/logo.jpg')} style={stylesheet.image} />
      <ActivityIndicator size={'large'} color={'red'} />
      <Text>Loading ...</Text>
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
