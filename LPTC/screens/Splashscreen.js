import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect, useContext } from 'react';
import { SafeAreaView, View, StyleSheet, ActivityIndicator } from 'react-native';
import { Text, Image } from 'react-native-elements';
// import {DatabaseContext} from '../DatabaseContext';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useData } from '../Data'


export default function Splashscreen() {
  // let databaseContext = useContext(DatabaseContext);
  const navigation = useNavigation();
  const [dataState, dataActions] = useData();
  const [loading, setLoading] = useState();

  let transitionTime = 1000;
  useEffect(() => {

    (async () => {
      setLoading(true)
      await dataActions.retrieve()
      setLoading(false)

    })();
  }, [dataActions, setLoading])

  useEffect(() => {
    if (loading == false) {
      if (dataState.user !== {} && dataState.database !== {}) {
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
  }, [loading, dataState.user, dataState.database])

  // console.log(dataState.loading)
  // useEffect(() => {
  // Transition time
  // setTimeout(() => {
  //   navigation.navigate('MenuScreen');
  // }, transitionTime);

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
