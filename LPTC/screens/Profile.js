import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {Avatar, ListItem} from 'react-native-elements';
import {DatabaseContext} from '../Database';

function Profile(props) {
  return (
    <ListItem>
      <Avatar title={props.name} />
      <ListItem.Content></ListItem.Content>
    </ListItem>
  );
}

export default function ProfileScreen() {
  const data = useContext(DatabaseContext);

  return (
    <View>
      <Avatar
        size={'xlarge'}
        source={{
          uri: 'https://randomuser.me/api/portraits/women/8.jpg',
        }}
      />
      <Profile name={'a'} />
    </View>
  );
}
