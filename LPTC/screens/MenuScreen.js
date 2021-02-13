import React, {useContext} from 'react';
import {DatabaseContext} from '../DatabaseContext';
import {
  SafeAreaView,
  TouchableHighlight,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Text, Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

export default function MenuScreen() {
  const databaseContext = useContext(DatabaseContext);
  const navigation = useNavigation();
  //   navigation.navigate('SubCategoryScreen');
  return (
    <SafeAreaView style={{margin: 15}}>
      <Text h1>Main Menu</Text>
      <Text>Select a category below to get started ... </Text>
      <Text h2>Catagories</Text>
      <View style={{justifyContent: 'center'}}>
        <FlatList
          data={databaseContext.database.categories}
          renderItem={({item}) => {
            // console.log(item);
            return (
              <Button
                title={item.text}
                onPress={() => {
                  navigation.navigate('SubCategoryScreen',{id:item.id});
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
