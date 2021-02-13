import React, {useContext} from 'react';
import {DatabaseContext} from '../DatabaseContext';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import Bootstrap from '../Bootstrap';
export default function SetupScreen() {
  const databaseContext = useContext(DatabaseContext);

  return (
    <View>
      {/* Temp */}
      {/* <Button
        // disabled={false}
        title={'Set me up'}
        onPress={() => {
          databaseContext.setDatabase(Bootstrap());
          databaseContext.save();
          alert('Saved');
        }}></Button> */}
      <Text></Text>
    </View>
  );
}
