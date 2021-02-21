import React, { useContext } from 'react';
// import { DatabaseContext } from '../Data';
import { useData } from '../Data'
import {
  SafeAreaView,
  TouchableHighlight,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Text, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export default function MenuScreen() {
  const navigation = useNavigation();
  const [dataState, dataActions] = useData();
  return (
    <SafeAreaView style={{ margin: 15 }}>
      <Text h1>Welcome back {dataState.user.name}</Text>
      <Text h1>Main Menu</Text>
      <Text>Select a category below to get started ... </Text>
      <Text h2>Catagories</Text>
      <View style={{ justifyContent: 'center' }}>
        <FlatList
          data={dataState.database.categories}
          renderItem={({ item }) => {

            return (
              <Button
                title={item.text}
                onPress={() => {
                  navigation.navigate('SubCategoryScreen', { id: item.id });
                }}
              />
            );
          }}
          keyExtractor={(item) => {
            return item.id;
          }}
        />


      </View>
    </SafeAreaView>
  );
}
