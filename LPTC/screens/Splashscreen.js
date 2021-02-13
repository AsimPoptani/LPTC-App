import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect, useContext } from 'react';
import { SafeAreaView, StyleSheet, ActivityIndicator } from 'react-native';
import { Text, Image } from 'react-native-elements';
import { DatabaseContext } from '../Database'
import moment from 'moment'
import MMKVStorage from "react-native-mmkv-storage";


export default function Splashscreen() {
  const databaseContext = useContext(DatabaseContext)
  const navigation = useNavigation();

  useEffect(() => {
    // Transition time
    let transitionTime = 5000;
    // Time now
    let timeNow = moment.now()


    // get user and database
    // databaseContext.retrieve().then(
    //   () => {
    //     alert("We got data back")
    //   },
    //   (error) => {

    //   }
    // )
    // if we have an error then we assume that there is no data
    // databaseContext.setUser({ "name": "Asim" });
    // alert("added")
    // databaseContext.save().then(
    //   () => {
    //     alert("saved")
    //   },
    //   (error) => {
    //     alert("Error " + error)
    //   }
    // )
    databaseContext.retrieve().then(
      () => {
        alert("success")
        alert(databaseContext.user.name)
      },
      () => {
        alert("error")
      }
    )
    setTimeout(() => {
      navigation.navigate('Profile');
    }, 5000);
  }, []);
  return (
    <SafeAreaView style={stylesheet.outer}>
      {/* <Image source={require('./images/logo.jpg')} style={stylesheet.image} />
       */}
      <Text h1>LPTC</Text>
      <ActivityIndicator size={'large'} color={'black'} />
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
