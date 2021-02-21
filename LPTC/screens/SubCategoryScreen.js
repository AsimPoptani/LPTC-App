import React, { useContext, useState, useEffect } from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import { Text } from 'react-native-elements';
import Button from '../components/Button'
import { useData } from '../Data';
import { findCategoryById, findAllSubCategoriesByCategoryId } from '../Logic';
import Header from '../components/projectDependant/Header'
export default function SubCategoryScreen({ route, navigation }) {
  const [dataState, dataActions] = useData();
  const [SubCategories, setSubCategories] = useState()
  const [category, setCategory] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const categoryId = route.params.id;
    setCategory(findCategoryById(dataState.database, categoryId));
    setSubCategories(findAllSubCategoriesByCategoryId(
      dataState.database,
      categoryId,
    ));

    setLoading(false)

  }, [route.params.id, dataState.database, setCategory, setSubCategories, setLoading])

  if (loading) {
    return (
      <SafeAreaView style={{ margin: 15 }}>
        <Text>Loading</Text>
      </SafeAreaView>
    )
  } else {
    navigation.setOptions({ title: category.text })
    return (
      <SafeAreaView >
        <Header goBack />
        <View style={{ margin: 15 }}>
          <Text h2>{category.text}</Text>
          <Text>Take the quiz to get more accurate idea of what benefits you are entitled too...</Text>
          <Button title={"Take the quiz"} />
          <Text h3>Bank of knowledge</Text>
          <Text>Or Have a look at some of the categories under {category.text}, click one to find out more.</Text>
          <FlatList data={SubCategories} keyExtractor={(item) => { return item.id }} renderItem={({ item }) => <Button onPress={() => {
            navigation.navigate("MoreInfoScreen", { id: item.id })
          }} title={item.text}></Button>} /></View>
      </SafeAreaView>
    );
  }
}
