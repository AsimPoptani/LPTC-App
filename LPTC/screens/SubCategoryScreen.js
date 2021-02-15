import React, { useContext } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { DatabaseContext } from '../DatabaseContext';
import { findCategoryById, findAllSubCategoriesByCategory } from '../Logic';
export default function SubCategoryScreen({ route, navigation }) {
  const categoryId = route.params.id;
  const databaseContext = useContext(DatabaseContext);
  const category = findCategoryById(databaseContext.database, categoryId);
  const SubCategories = findAllSubCategoriesByCategory(
    databaseContext.database,
    categoryId,
  );
  navigation.setOptions({ title: category.text })
  return (
    <SafeAreaView style={{ margin: 15 }}>
      <Text h2>{category.text}</Text>
      <Text>Take the quiz to get more accurate idea of what benefits you are entitled too...</Text>
      <Button title={"Take the quiz"} />
      <Text h3>Bank of knowledge</Text>
      <Text>Or Have a look at some of the categories under {category.text}, click one to find out more.</Text>
      <FlatList data={SubCategories} renderItem={({ item }) => <Button title={item.text}></Button>} />
    </SafeAreaView>
  );
}
