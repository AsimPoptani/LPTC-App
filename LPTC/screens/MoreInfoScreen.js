import React, { useState, useEffect } from 'react'
import { SafeAreaView, View } from 'react-native'
import { Text } from 'react-native-elements'
import { FlatList } from 'react-native-gesture-handler'
import bootstrap from '../Bootstrap'

import Header from '../components/projectDependant/Header'
import { useData } from '../Data'
import { findAllRecommendationsBySubCategoryId, findAllBenefitsBySubCategoryId } from '../Logic'
export default function MoreInfoScreen({ route, navigation }) {
    const [dataState, dataActions] = useData();
    const [loading, setLoading] = useState(true)
    const [benefits, setBenefits] = useState();
    const [recommendations, setRecommendations] = useState();
    useEffect(() => {
        setLoading(true)
        const subCategoryId = route.params.id

        setBenefits(findAllBenefitsBySubCategoryId(dataState.database, subCategoryId))
        setRecommendations(findAllRecommendationsBySubCategoryId(dataState.database, subCategoryId))
        setLoading(false)

    }, [dataState.database, route.params.id])

    if (loading) {
        return (
            <SafeAreaView><Text>Loading ...</Text></SafeAreaView>
        )
    } else {
        return (
            <SafeAreaView>
                <Header goBack />
                <View style={{margin:15}}>
                    <Text h3 >Recommendations</Text>
                    <FlatList data={recommendations} keyExtractor={(item) => { return item.id }} renderItem={({ item }) => <Text>{item.text}</Text>} />
                    <Text h3 >Benefits</Text>
                    <FlatList data={benefits} keyExtractor={(item) => { return item.id }} renderItem={({ item }) => <Text>{item.text}</Text>} />
                </View>
            </SafeAreaView>
        )
    }
}
