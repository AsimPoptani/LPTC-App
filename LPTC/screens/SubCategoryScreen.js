import React, {useContext} from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from 'react-native-elements';
import {DatabaseContext} from '../DatabaseContext';
import {findCategoryById, findAllSubCategoriesByCategory} from '../Logic';
export default function SubCategoryScreen({route, navigation}) {
  const categoryId = route.params.id;
  const databaseContext = useContext(DatabaseContext);
  const category = findCategoryById(databaseContext.database, categoryId);
  const SubCategories = findAllSubCategoriesByCategory(
    databaseContext.database,
    categoryId,
  );
  return (
    <SafeAreaView style={{margin: 15}}>
      <Text h2>{id}</Text>
    </SafeAreaView>
  );
}
