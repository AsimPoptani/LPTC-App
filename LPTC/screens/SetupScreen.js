import React, { useContext } from 'react';
import { DatabaseContext } from '../Data';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Bootstrap from '../Bootstrap';
import {useData} from '../Data'
export default function SetupScreen() {
  const [dataState, dataActions] = useData();
  return (
    <View>
      {/* Temp */}
      <Button
        // disabled={false}
        title={'Set me up'}
        onPress={() => {
          dataActions.setDatabase(Bootstrap());
          dataActions.setUser({ name: "asim" })
          dataActions.save();
          alert('Saved');
        }}></Button>
      <Text></Text>
    </View>
  );
}
