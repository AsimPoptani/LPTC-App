import React, { useContext } from 'react';
// import { DatabaseContext } from '../Data';
import { useData } from '../Data'
import Logo from '../components/Logo'
import Button from '../components/Button'
import {
  SafeAreaView,
  TouchableHighlight,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Text } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements'
import Header from '../components/projectDependant/Header'

export default function MenuScreen() {
  const navigation = useNavigation();
  const [dataState, dataActions] = useData();
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header   />

      <View style={{ margin: 15 }}>


        <Text h2 >{capitalizeFirstLetter(dataState.user.name)} Welcome Back.</Text>
        {/* <Text h2>Main Menu</Text>
        <Text>Select a category below to get started ... </Text>
        <Text h3>Catagories</Text> */}
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
      </View>
    </SafeAreaView>
  );
}
